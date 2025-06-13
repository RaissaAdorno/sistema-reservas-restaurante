import { useState, useEffect } from 'react'
import './style.css'
import api from '../../services/api'

function Home() {
  // Estados de login
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [users, setUsers] = useState([])
  const [userLogado, setUserLogado] = useState(null)
  const [abaAtiva, setAbaAtiva] = useState('')

  // Estados para cadastro de reserva
  const [nomeCliente, setNomeCliente] = useState('')
  const [mesa, setMesa] = useState('')
  const [dataHora, setDataHora] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [mesasDisponiveis, setMesasDisponiveis] = useState([])

  // Estados para reservas pendentes e filtro/seleção
  const [reservasPendentes, setReservasPendentes] = useState([])
  const [filtroNome, setFiltroNome] = useState('')
  const [reservaSelecionada, setReservaSelecionada] = useState(null)

  // Estados para o Garçom
  const [reservasParaConfirmar, setReservasParaConfirmar] = useState([])
  const [reservaParaConfirmar, setReservaParaConfirmar] = useState('')
  const [mensagemGarcom, setMensagemGarcom] = useState('')

  // Estados para relatórios do gerente
  const [periodoInicio, setPeriodoInicio] = useState('')
  const [periodoFim, setPeriodoFim] = useState('')
  const [mesaRelatorio, setMesaRelatorio] = useState('')
  const [garcomRelatorio, setGarcomRelatorio] = useState('')
  const [relatorio, setRelatorio] = useState([])
  const [relatorioMensagem, setRelatorioMensagem] = useState('')

  // Buscar usuários (login)
  async function getUsers() {
    try {
      const response = await api.get('/teste')
      setUsers(response.data)
      //alert('Conexão bem-sucedida!')
    } catch (error) {
      alert('Erro ao buscar usuários')
    }
  }

  // Buscar mesas disponíveis para reserva em uma data específica
  async function getMesasDisponiveisPorData(data) {
    try {
      const response = await api.get('/mesas-disponiveis-por-data', {
        params: { data }
      })
      setMesasDisponiveis(response.data)
    } catch (error) {
      setMesasDisponiveis([])
    }
  }

  // Buscar reservas pendentes para exibir e cancelar
  async function getReservasPendentes() {
    try {
      const response = await api.get('/reservas-pendentes')
      setReservasPendentes(response.data)
    } catch (error) {
      setReservasPendentes([])
    }
  }

  // Buscar reservas pendentes para o Garçom confirmar
  async function getReservasParaConfirmar() {
    try {
      const response = await api.get('/reservas-pendentes')
      setReservasParaConfirmar(response.data)
    } catch (error) {
      setReservasParaConfirmar([])
    }
  }

  // ==================== FUNÇÕES DE RELATÓRIO DO GERENTE ====================

  async function buscarRelatorioPeriodo() {
    setRelatorio([]); setRelatorioMensagem('');
    if (!periodoInicio || !periodoFim) {
      setRelatorioMensagem('Preencha as datas.');
      return;
    }
    try {
      const res = await api.get('/relatorio/reservas-periodo', { params: { inicio: periodoInicio, fim: periodoFim } });
      if (res.data.length === 0) setRelatorioMensagem('Nenhuma reserva encontrada no período.');
      else setRelatorio(res.data);
    } catch {
      setRelatorioMensagem('Erro ao buscar relatório.');
    }
  }

  async function buscarRelatorioMesa() {
    setRelatorio([]); setRelatorioMensagem('');
    if (!mesaRelatorio) {
      setRelatorioMensagem('Informe o número da mesa.');
      return;
    }
    try {
      const res = await api.get(`/relatorio/reservas-mesa/${mesaRelatorio}`);
      if (res.data.length === 0) setRelatorioMensagem('Nenhuma reserva encontrada para esta mesa.');
      else setRelatorio(res.data);
    } catch {
      setRelatorioMensagem('Erro ao buscar relatório.');
    }
  }

  async function buscarRelatorioGarcom() {
    setRelatorio([]); setRelatorioMensagem('');
    if (!garcomRelatorio) {
      setRelatorioMensagem('Informe o nome do garçom.');
      return;
    }
    try {
      const res = await api.get(`/relatorio/confirmadas-garcom/${garcomRelatorio}`);
      if (res.data.length === 0) setRelatorioMensagem('Nenhuma mesa confirmada por este garçom.');
      else setRelatorio(res.data);
    } catch {
      setRelatorioMensagem('Erro ao buscar relatório.');
    }
  }

  // ==================== USE EFFECTS ====================

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    if (abaAtiva === 'reserva') {
      getReservasPendentes()
    }
  }, [abaAtiva])

  useEffect(() => {
    if (abaAtiva === 'garcom') {
      getReservasParaConfirmar()
    }
  }, [abaAtiva])

  useEffect(() => {
    if (abaAtiva === 'reserva' && dataHora) {
      getMesasDisponiveisPorData(dataHora)
    } else if (abaAtiva === 'reserva') {
      setMesasDisponiveis([])
    }
  }, [abaAtiva, dataHora])

  // ==================== FUNÇÕES DE AUTENTICAÇÃO, RESERVA  E LIMPAR CAMPOS(GERENTE)====================

  function handleLogin(e) {
    e.preventDefault()
    const userFound = users.find(
      user => user.login === login && user.senha === senha
    )
    if (userFound) {
      setUserLogado(userFound)
      if (userFound.usuario === 'Gerente') setAbaAtiva('gerente')
      else if (userFound.usuario === 'Garçom') setAbaAtiva('garcom')
      else setAbaAtiva('reserva')
    } else {
      alert('Login ou senha inválidos!')
    }
  }

  function handleLogout() {
    setUserLogado(null)
    setLogin('')
    setSenha('')
    setAbaAtiva('')
    setMensagem('')
    setMensagemGarcom('')
  }

  // Função para cadastrar reserva
  async function cadastrarReserva() {
    setMensagem('')
    if (!nomeCliente || !mesa || !dataHora || !quantidade) {
      setMensagem('Preencha todos os campos!')
      return
    }
    try {
      const dataHoraISO = new Date(dataHora).toISOString()
      const response = await api.post('/reservas', {
        nome_cliente: nomeCliente,
        id_mesa: mesa,
        quantidade_pessoas: quantidade,
        data_hora_reserva: dataHoraISO
      })
      setMensagem(response.data.mensagem || 'Reserva cadastrada com sucesso!')
      setNomeCliente('')
      setMesa('')
      setQuantidade('')
      setDataHora('')
      setMesasDisponiveis([])
      getReservasPendentes()
    } catch (error) {
      setMensagem(
        error.response?.data?.mensagem ||
        'Erro ao cadastrar reserva. Verifique os dados.'
      )
    }
  }

  // Função para cancelar reserva
  async function cancelarReserva(id_reservas) {
    try {
      const response = await api.delete(`/reservas/${id_reservas}`)
      setMensagem(response.data.mensagem || 'Reserva cancelada!')
      setReservaSelecionada(null)
      if (dataHora) getMesasDisponiveisPorData(dataHora)
      getReservasPendentes()
    } catch (error) {
      setMensagem(
        error.response?.data?.mensagem ||
        'Erro ao cancelar reserva.'
      )
    }
  }

  // Função para o garçom confirmar ocupação da reserva
  async function confirmarOcupacao() {
    setMensagemGarcom('')
    if (!reservaParaConfirmar) return
    try {
      // Envia o nome do garçom logado ao backend ao confirmar
      const response = await api.put(
        `/reservas/${reservaParaConfirmar}/confirmar`,
        { garcom: userLogado.login } // userLogado.login é o nome do garçom logado
      )
      setMensagemGarcom(response.data.mensagem || 'Reserva confirmada!')
      setReservaParaConfirmar('')
      getReservasParaConfirmar()
    } catch (error) {
      setMensagemGarcom(
        error.response?.data?.mensagem || 'Erro ao confirmar reserva.'
      )
    }
  }

  // Função para limpar filtros e relatório do gerente
  function limparCamposGerente() {
    setPeriodoInicio('');
    setPeriodoFim('');
    setMesaRelatorio('');
    setGarcomRelatorio('');
    setRelatorio([]);
    setRelatorioMensagem('');
  }
  // ==================== RENDERIZAÇÃO ====================

  function renderSistema() {
    if (!userLogado) return null

    const tipo = userLogado.usuario

    return (
      <div id="sistema">
        <nav id="menu">
          {(tipo === 'Atendente' || tipo === 'Gerente') && (
            <button
              id="btn-reserva"
              className={abaAtiva === 'reserva' ? 'active' : ''}
              onClick={() => setAbaAtiva('reserva')}
            >
              Atendente
            </button>
          )}
          {(tipo === 'Garçom' || tipo === 'Gerente') && (
            <button
              id="btn-garcom"
              className={abaAtiva === 'garcom' ? 'active' : ''}
              onClick={() => setAbaAtiva('garcom')}
            >
              Garçom
            </button>
          )}
          {tipo === 'Gerente' && (
            <button
              id="btn-gerente"
              className={abaAtiva === 'gerente' ? 'active' : ''}
              onClick={() => setAbaAtiva('gerente')}
            >
              Gerente
            </button>
          )}
          <button className="logout-btn" onClick={handleLogout}>Sair</button>
        </nav>

        <div className="container">
          {/* Atendente */}
          {abaAtiva === 'reserva' && (tipo === 'Atendente' || tipo === 'Gerente') && (
            <div className="section active" id="reserva">
              <h2>Cadastro de Reserva</h2>
              <input
                type="text"
                id="nomeCliente"
                placeholder="Nome do Cliente"
                value={nomeCliente}
                onChange={e => setNomeCliente(e.target.value)}
              />
              <input
                type="datetime-local"
                id="dataHora"
                value={dataHora}
                onChange={e => {
                  setDataHora(e.target.value)
                  setMesa('')
                }}
                style={{ marginTop: 8, marginBottom: 8 }}
              />
              <select
                id="mesa"
                value={mesa}
                onChange={e => setMesa(e.target.value)}
                disabled={!dataHora}
              >
                <option value="">Selecione a Mesa</option>
                {mesasDisponiveis.map(m => (
                  <option key={m.id_mesa} value={m.id_mesa}>
                    Mesa {m.numero_mesa}
                  </option>
                ))}
              </select>
              <input
                type="number"
                id="quantidade"
                placeholder="Quantidade de Pessoas"
                value={quantidade}
                onChange={e => setQuantidade(e.target.value)}
                min={1}
              />
              <button onClick={cadastrarReserva}>Cadastrar Reserva</button>
              {mensagem && <p>{mensagem}</p>}

              <h3>Reservas Pendentes</h3>
              <input
                type="text"
                placeholder="Pesquisar por nome do cliente"
                value={filtroNome}
                onChange={e => setFiltroNome(e.target.value)}
                style={{ marginBottom: 10, marginTop: 10 }}
              />
              <ul className="reserva-lista">
                {filtroNome.trim() !== '' ? (
                  reservasPendentes
                    .filter(reserva =>
                      reserva.nome_cliente.toLowerCase().startsWith(filtroNome.toLowerCase())
                    )
                    .map(reserva => (
                      <li
                        key={reserva.id_reservas}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          backgroundColor: reservaSelecionada === reserva.id_reservas ? '#e0f7fa' : 'transparent',
                          color: reservaSelecionada === reserva.id_reservas ? '#00796b' : 'inherit',
                          borderRadius: 4,
                          padding: 4,
                          marginBottom: 2
                        }}
                      >
                        <span>
                          Cliente: {reserva.nome_cliente} | Mesa: {reserva.id_mesa} | Data/Hora: {new Date(reserva.data_hora_reserva).toLocaleString()}
                        </span>
                        <input
                          type="checkbox"
                          checked={reservaSelecionada === reserva.id_reservas}
                          onChange={() =>
                            setReservaSelecionada(
                              reservaSelecionada === reserva.id_reservas ? null : reserva.id_reservas
                            )
                          }
                          style={{ marginLeft: 12 }}
                        />
                      </li>
                    ))
                ) : (
                  <p className="msg-pesquisa">Digite um nome para pesquisar reservas.</p>
                )}
              </ul>
              <button
                onClick={() => reservaSelecionada && cancelarReserva(reservaSelecionada)}
                disabled={!reservaSelecionada}
                style={{ marginTop: 10 }}
              >
                Cancelar Reserva Selecionada
              </button>
            </div>
          )}

          {/* Garçom */}
          {abaAtiva === 'garcom' && (tipo === 'Garçom' || tipo === 'Gerente') && (
            <div className="section active" id="garcom">
              <h2>Confirmar Ocupação</h2>
              {/* Mostra o nome do garçom logado para conferência */}
              <div style={{ marginBottom: 10 }}>
                <strong>Garçom:</strong> {userLogado.login}
              </div>
              <select
                id="reservaParaConfirmar"
                value={reservaParaConfirmar}
                onChange={e => setReservaParaConfirmar(e.target.value)}
              >
                <option value="">Selecione uma reserva</option>
                {reservasParaConfirmar.map(r => (
                  <option key={r.id_reservas} value={r.id_reservas}>
                    Cliente: {r.nome_cliente} | Mesa: {r.id_mesa} | Data/Hora: {new Date(r.data_hora_reserva).toLocaleString()}
                  </option>
                ))}
              </select>
              <button
                onClick={confirmarOcupacao}
                disabled={!reservaParaConfirmar}
              >
                Confirmar Ocupação
              </button>
              {mensagemGarcom && <p>{mensagemGarcom}</p>}
            </div>
          )}

          {/* Gerente */}
          {abaAtiva === 'gerente' && tipo === 'Gerente' && (
            <div className="section active" id="gerente">
              <h2>Relatórios</h2>

              {/* Relatório por período */}
              <div>
                <h3>Reservas em um Período</h3>
                <input
                  type="date"
                  value={periodoInicio}
                  onChange={e => setPeriodoInicio(e.target.value)}
                />
                <input
                  type="date"
                  value={periodoFim}
                  onChange={e => setPeriodoFim(e.target.value)}
                />
                <button onClick={buscarRelatorioPeriodo}>Buscar</button>
              </div>

              {/* Relatório por mesa */}
              <div>
                <h3>Reservas por Mesa</h3>
                <input
                  type="number"
                  placeholder="Número da Mesa"
                  value={mesaRelatorio}
                  onChange={e => setMesaRelatorio(e.target.value)}
                />
                <button onClick={buscarRelatorioMesa}>Buscar</button>
              </div>

              {/* Relatório por garçom */}
              <div>
                <h3>Mesas Confirmadas por Garçom</h3>
                <input
                  type="text"
                  placeholder="Nome do Garçom"
                  value={garcomRelatorio}
                  onChange={e => setGarcomRelatorio(e.target.value)}
                />
                <button onClick={buscarRelatorioGarcom}>Buscar</button>
              </div>

              {/* Botão flutuante para limpar todos os campos */}
              <button
                className="button-limpar-flutuante"
                onClick={limparCamposGerente}
                title="Limpar todos os campos"
              >
                Limpar
              </button>

              {/* Exibição dos resultados */}
              {relatorio.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>Cliente</th>
                      <th>Mesa</th>
                      <th>Data/Hora</th>
                      <th>Status</th>
                      <th>Garçom</th>
                    </tr>
                  </thead>
                  <tbody>
                    {relatorio.map((r, i) => (
                      <tr key={i}>
                        <td>{r.nome_cliente}</td>
                        <td>{r.id_mesa}</td>
                        <td>{new Date(r.data_hora_reserva).toLocaleString()}</td>
                        <td>{r.status}</td>
                        <td>{r.garcom || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                relatorioMensagem && <p>{relatorioMensagem}</p>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      <header>
        <h1>Sistema de Reserva de Mesas</h1>
      </header>

      {!userLogado && (
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-row">
              <input
                type="text"
                placeholder="Login"
                value={login}
                onChange={e => setLogin(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
              />
            </div>
            <button type="submit">Entrar</button>
          </form>
        </div>
      )}

      {renderSistema()}
    </>
  )
}

export default Home