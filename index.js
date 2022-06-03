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

const Produto = require('./model/Products')
const Usuario = require('./model/User')
const Pedido = require('./model/Order')


mongoose//bota o nome do bando antes da ? no link do mongo ....net/loja?retry
    .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.co3sx.mongodb.net/?retryWrites=true&w=majority`)
    
    //faz o console log e mostra sucesso
    .then(()=> {
        console.log('Conectado ao MongoDB')
    })
    
    //mostra o erro
    .catch((err)=>console.log(err))

//configurando models (schema)

//função async vai esperar o resultado, a gente define onde ela espera o resultado do processamento


app.post('/produto/incluir', async (req,res) =>{
    //incluindo um registro/doc
    //trycatch
    //simplifica e faz td de uma vez ao invés de fazer cada um
    const {img, nomeItem, tamanhoItem, precoItem, estoque, quantidade} = req.body
  
    try {
        const novoProduto = {
            img: img,
            nomeItem: nomeItem,
            tamanhoItem: tamanhoItem,
            precoItem: precoItem,
            estoque: estoque,
            quantidade: quantidade
        }
    
        await Produto.create(novoProduto)
        //create faz o mesmo que save
        res.status(201).json(novoProduto)

    } catch (error) {
        res.status(500).json({msg: 'Falha na inclusão:'+err})
        return
    }


})



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


