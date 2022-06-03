const express = require('express')

const app = express()

const mongoose = require('mongoose')

//chama app p usar recurso do express

require('dotenv').config()

//urlencoded permite vc receber informações, 
//retorna middleware que dá parse o corpo e verifica requisição feita baseada em conteúdo

app.use(
    express.urlencoded({
        extended: true,
    })
)

//json se prepara p ler dados via post e usa json pra representar os dados

app.use(express.json())

const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.co3sx.mongodb.net/?retryWrites=true&w=majority`)
    
    //faz o console log e mostra sucesso
    .then(()=> {
        console.log('Conectado ao MongoDB')
    })
    
    //mostra o erro
    .catch((err)=>console.log(err))

//configurando models (schema)
const produtoSchema = new mongoose.Schema({
    //por ser um schema, tenhi q falar o tipo de info de img
    img: String,
    nomeItem: String,
    tamanhoItem: String,
    precoItem: Number,
    estoque: Number,
    quantidade: Number,
})

//nome da collection e o modelo p produtos
const Produto = mongoose.model('produtos', produtoSchema)

novoProduto = new Produto({
    img: '.img/product.png',
    nomeItem: 'camiseta',
    tamanhoItem: 'M',
    precoItem: 39.90,
    estoque: 5,
    quantidade: 0,
}).save()
//.save() pra slvar e aparecer no mongoose


//outra rota pode tb receberesse obj
//ou vc desenvolve app front q vai acessar essa rota e receber esse obj com uma série d propriedades q faz seu
//pode ter uam rota post q recebe o obj, a get fornece
//criou o obj de carrinho q tem lá nome do prod, tamanho, estoque, pode passar ele pro node com uma rota post
//pode usar o res.json que retorna objeto json quando acessa a rota 


app.get('/', (req,res) =>{
    //get quando escreve endereço direto na barra
    res.json({msg:'SERVIDOR ATIVO'})
})

app.listen(process.env.PORT, console.log('serviço ativo - http://localhost:3000'))


