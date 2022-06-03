const express = require('express')

const app = express()

//chama app p usar recurso do express

//urlencoded permite vc receber informações, 
//retorna middleware que dá parse o corpo e verifica requisição feita baseada em conteúdo

app.use(
    express.urlencoded({
        extended: true,
    })
)

//json se prepara p ler dados via post e usa json pra representar os dados

app.use(express.json())

app.get('/', (req,res) =>{
    res.end('SERVIDOR ATIVO')
})

app.listen(PORT, console.log('serviço ativo - http://localhost:3000'))