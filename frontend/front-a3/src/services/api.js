import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api;
// esse codigo cria uma instância do axios com a URL base definida como 'http://localhost:3000'. Isso significa que todas as requisições feitas usando essa instância do axios serão direcionadas para esse endereço base. É uma prática comum para facilitar a configuração de APIs em aplicações JavaScript, especialmente quando se trabalha com servidores locais durante o desenvolvimento.