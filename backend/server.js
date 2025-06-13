// ==================== IMPORTAÇÃO DE BIBLIOTECAS ====================

// Importa o Prisma Client para interagir com o banco de dados
import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()

// Importa o Express (para criar o servidor) e o CORS (para permitir requisições de outros domínios)
import express from 'express'
import cors from 'cors'

// Cria uma instância do Express
const app = express()

// Configura o Express para aceitar JSON no corpo das requisições
app.use(express.json())

// Habilita o CORS para permitir que o backend aceite requisições de outros domínios
app.use(cors())

// ==================== FUNÇÃO EXEMPLO: LISTAR USUÁRIOS ====================

// Função assíncrona que busca todos os usuários no banco e exibe no console
async function listarUsuarios() {
  const usuarios = await prisma.tab_usuarios.findMany()
  console.log(usuarios)
}

listarUsuarios()

// ==================== ROTAS DE USUÁRIOS ====================

/**
 * Rota para criar um novo usuário
 * Método: POST
 * URL: /teste
 * Corpo esperado: { usuario, login, senha }
 */
app.post('/teste', async (req, res) => {
    await prisma.tab_usuarios.create({
        data: {
            usuario: req.body.usuario,
            login: req.body.login,
            senha: req.body.senha
        }   
    })
    res.status(201).json({
        message: 'Usuário criado com sucesso!'
    })
})

/**
 * Rota para modificar um usuário existente
 * Método: PUT
 * URL: /teste/:id
 * Corpo esperado: { usuario, login, senha }
 */
app.put('/teste/:id', async (req, res) => {
    try {
        await prisma.tab_usuarios.update({
            where: {
                id_usuario: Number(req.params.id)
            },
            data: {
                usuario: req.body.usuario,
                login: req.body.login,
                senha: req.body.senha
            }
        })
        res.status(201).json({
            message: 'Usuário modificado com sucesso!'
        })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao modificar usuário', detalhes: error.message })
    }
})

/**
 * Rota para deletar um usuário
 * Método: DELETE
 * URL: /teste/:id
 */
app.delete('/teste/:id', async (req, res) => {
    try {
        await prisma.tab_usuarios.delete({
            where: {
                id_usuario: Number(req.params.id)
            },
        })
        res.status(201).json({
            message: 'Usuário deletado com sucesso!'
        })
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar usuário', detalhes: error.message })
    }
})

/**
 * Rota para listar todos os usuários
 * Método: GET
 * URL: /teste
 */
app.get('/teste', async (req, res) => {
    const users = await prisma.tab_usuarios.findMany()
    res.status(200).json(users)
})

// ==================== ROTAS DE MESAS E RESERVAS ====================

/**
 * Rota para buscar mesas disponíveis (status = 'Disponivel')
 * Método: GET
 * URL: /mesas-disponiveis
 */
app.get('/mesas-disponiveis', async (req, res) => {
    try {
        // Busca apenas mesas com status 'Disponivel'
        const mesas = await prisma.tab_mesas.findMany({
            where: { status: 'Disponivel' },
            select: { id_mesa: true, numero_mesa: true }
        });
        res.json(mesas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar mesas disponíveis', detalhes: error.message });
    }
});

/**
 * Rota para buscar mesas disponíveis por data específica (não depende do status da mesa)
 * Método: GET
 * URL: /mesas-disponiveis-por-data?data=YYYY-MM-DDTHH:MM
 */
app.get('/mesas-disponiveis-por-data', async (req, res) => {
    // Recebe a data pela query string (ex: ?data=2025-06-01T12:00)
    const { data } = req.query;
    if (!data) return res.status(400).json({ mensagem: 'Data não informada.' });

    // Extrai só a parte da data (YYYY-MM-DD)
    const dataDia = new Date(data).toISOString().slice(0, 10);

    try {
        // Busca mesas que têm reserva pendente ou confirmada para esse dia
        const mesasIndisponiveis = await prisma.tab_reservas.findMany({
            where: {
                status: { in: ['Pendente', 'Confirmado'] },
                AND: [
                    { data_hora_reserva: { gte: new Date(dataDia + 'T00:00:00.000Z') } },
                    { data_hora_reserva: { lt: new Date(dataDia + 'T23:59:59.999Z') } }
                ]
            },
            select: { id_mesa: true }
        });

        // Extrai os IDs das mesas indisponíveis
        const idsIndisponiveis = mesasIndisponiveis.map(r => r.id_mesa);

        // Busca todas as mesas que NÃO estão indisponíveis (não filtra mais por status)
        const mesasDisponiveis = await prisma.tab_mesas.findMany({
            where: {
                id_mesa: { notIn: idsIndisponiveis }
                // Não filtra mais por status, pois pode estar "Reservada" para outro dia
            },
            select: { id_mesa: true, numero_mesa: true }
        });

        // Retorna as mesas disponíveis para o dia informado
        res.json(mesasDisponiveis);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar mesas disponíveis por data.', detalhes: error.message });
    }
});

/**
 * Rota para criar uma reserva
 * Impede reservas duplicadas para a mesma mesa no mesmo dia
 * Método: POST
 * URL: /reservas
 */
app.post('/reservas', async (req, res) => {
    const { nome_cliente, id_mesa, quantidade_pessoas, data_hora_reserva } = req.body;
    try {
        // Extrai apenas a data (YYYY-MM-DD) da reserva solicitada
        const dataSolicitada = new Date(data_hora_reserva).toISOString().slice(0, 10);

        // Busca se já existe reserva Pendente ou Confirmada para a mesma mesa e MESMO DIA
        const reservaExistente = await prisma.tab_reservas.findFirst({
            where: {
                id_mesa: Number(id_mesa),
                status: { in: ['Pendente', 'Confirmado'] },
                AND: [
                    {
                        data_hora_reserva: {
                            gte: new Date(dataSolicitada + 'T00:00:00.000Z')
                        }
                    },
                    {
                        data_hora_reserva: {
                            lt: new Date(dataSolicitada + 'T23:59:59.999Z')
                        }
                    }
                ]
            }
        });
        if (reservaExistente) {
            // Retorna erro se já houver reserva para a mesma mesa no mesmo dia
            return res.status(400).json({ mensagem: 'Já existe uma reserva para essa mesa neste dia.' });
        }

        // Cria a reserva com status 'Pendente'
        const reserva = await prisma.tab_reservas.create({
            data: {
                nome_cliente,
                id_mesa: Number(id_mesa),
                quantidade_pessoas: Number(quantidade_pessoas),
                data_hora_reserva,
                status: 'Pendente'
            }
        });
        // Não atualiza o status da mesa, pois ela pode estar reservada para outro dia(impede erros de reserva unica)

        // Retorna mensagem de sucesso e dados da reserva criada
        res.json({ mensagem: 'Reserva criada com sucesso!', reserva });
    } catch (error) {
        // Em caso de erro, retorna mensagem de erro e detalhes
        res.status(500).json({ mensagem: 'Erro ao criar reserva.', detalhes: error.message });
    }
});

/**
 * Rota para cancelar uma reserva
 * Método: DELETE
 * URL: /reservas/:id
 */
app.delete('/reservas/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        // Busca a reserva
        const reserva = await prisma.tab_reservas.findUnique({ where: { id_reservas: id } });
        if (!reserva) {
            return res.status(404).json({ error: 'Reserva não encontrada' });
        }
        // Atualiza status da reserva para 'Cancelado'
        await prisma.tab_reservas.update({
            where: { id_reservas: id },
            data: { status: 'Cancelado' }
        });
        // Atualiza status da mesa para 'Disponivel'
        await prisma.tab_mesas.update({
            where: { id_mesa: reserva.id_mesa },
            data: { status: 'Disponivel' }
        });
        res.json({ message: 'Reserva cancelada e mesa liberada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cancelar reserva', detalhes: error.message });
    }
});

/**
 * Rota para confirmar ocupação da reserva e registrar o nome do garçom
 * Método: PUT
 * URL: /reservas/:id/confirmar
 */
app.put('/reservas/:id/confirmar', async (req, res) => {
    const id = Number(req.params.id);
    const { garcom } = req.body; // Recebe o nome do garçom no body
    console.log('Garçom recebido:', garcom); // <-- Adicione esta linha
    try {
        // Busca a reserva
        const reserva = await prisma.tab_reservas.findUnique({ where: { id_reservas: id } });
        if (!reserva) {
            // Retorna erro se a reserva não for encontrada
            return res.status(404).json({ mensagem: 'Reserva não encontrada.' });
        }
        if (reserva.status !== 'Pendente') {
            // Só pode confirmar reservas pendentes
            return res.status(400).json({ mensagem: 'A reserva não está pendente.' });
        }

        // Atualiza status da reserva para 'Confirmado' e salva o nome do garçom
        await prisma.tab_reservas.update({
            where: { id_reservas: id },
            data: { status: 'Confirmado', garcom }
        });

        // Libera a mesa para novas reservas futuras (status para 'Disponivel')
        await prisma.tab_mesas.update({
            where: { id_mesa: reserva.id_mesa },
            data: { status: 'Disponivel' }
        });

        res.json({ mensagem: 'Reserva confirmada com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: 'Erro ao confirmar reserva.', detalhes: error.message });
    }
});

/**
 * Rota para listar reservas pendentes, incluindo o número da mesa
 * Método: GET
 * URL: /reservas-pendentes
 */
app.get('/reservas-pendentes', async (req, res) => {
    try {
        // Busca todas as reservas com status 'Pendente'
        // Inclui o número da mesa associada a cada reserva (relacionamento com tab_mesas)
        const reservas = await prisma.tab_reservas.findMany({
            where: { status: 'Pendente' },
            include: {
                tab_mesas: { // Inclui o campo numero_mesa da tabela de mesas
                    select: { numero_mesa: true }
                }
            }
        });
        // Retorna a lista de reservas pendentes (com o número da mesa) em formato JSON
        res.json(reservas);
    } catch (error) {
        // Em caso de erro, retorna mensagem de erro e detalhes
        res.status(500).json({ error: 'Erro ao buscar reservas pendentes', detalhes: error.message });
    }
});

// ==================== ENDPOINTS DE RELATÓRIO ====================
// ==================== ROTAS DE RELATÓRIO ====================

/**
 * Rota para buscar reservas feitas em um período
 * Método: GET
 * URL: /relatorio/reservas-periodo?inicio=YYYY-MM-DD&fim=YYYY-MM-DD
 */
app.get('/relatorio/reservas-periodo', async (req, res) => {
    const { inicio, fim } = req.query;
    if (!inicio || !fim) {
        return res.status(400).json({ mensagem: 'Informe as datas de início e fim.' });
    }
    try {
        const reservas = await prisma.tab_reservas.findMany({
            where: {
                data_hora_reserva: {
                    gte: new Date(inicio + 'T00:00:00.000Z'),
                    lte: new Date(fim + 'T23:59:59.999Z')
                }
            },
            orderBy: { data_hora_reserva: 'asc' }
        });
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar relatório.', detalhes: error.message });
    }
});

/**
 * Rota para listar reservas confirmadas por um garçom
 * Método: GET
 * URL: /relatorio/confirmadas-garcom/:nome_garcom
 */
app.get('/relatorio/reservas-mesa/:id_mesa', async (req, res) => {
    const id_mesa = Number(req.params.id_mesa);
    if (!id_mesa) {
        return res.status(400).json({ mensagem: 'Informe o número da mesa.' });
    }
    try {
        const reservas = await prisma.tab_reservas.findMany({
            where: { id_mesa },
            orderBy: { data_hora_reserva: 'asc' }
        });
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar relatório.', detalhes: error.message });
    }
});

/**
 * Rota para listar reservas confirmadas por um garçom
 * Método: GET
 * URL: /relatorio/confirmadas-garcom/:nome_garcom
 */
app.get('/relatorio/confirmadas-garcom/:nome_garcom', async (req, res) => {
    const nome_garcom = req.params.nome_garcom;
    if (!nome_garcom) {
        return res.status(400).json({ mensagem: 'Informe o nome do garçom.' });
    }
    try {
        // Busca todas as reservas confirmadas
        const reservas = await prisma.tab_reservas.findMany({
            where: { status: 'Confirmado' },
            orderBy: { data_hora_reserva: 'asc' }
        });
        // Filtra no JS ignorando maiúsculas/minúsculas
        const resultado = reservas.filter(r =>
            r.garcom && r.garcom.toLowerCase() === nome_garcom.toLowerCase()
        );
        res.json(resultado);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao buscar relatório.', detalhes: error.message });
    }
});

// ==================== INICIALIZAÇÃO DO SERVIDOR ====================

// avisando o express para escutar na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
})
/* O que as rotas preicam ter?
1. Tipo de rota/ Método HTTP
2. URL (endereço)
*/

/*
    CRIAR API DE USERS
    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário
*/