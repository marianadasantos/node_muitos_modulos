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

//pode usar o res.json que retorna objeto json quando acessa a rota
//outra rota pode tb receberesse obj
//ou vc desenvolve app front q vai acessar essa rota e receber esse obj com uma série d propriedades q faz seu 
app.get('/', (req,res) =>{
    res.json({msg:'SERVIDOR ATIVO'})
})

app.listen(PORT, console.log('serviço ativo - http://localhost:3000'))