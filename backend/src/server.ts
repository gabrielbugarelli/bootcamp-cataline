import express, { response } from 'express';

const app = express()

app.get('/users', (req, response)=>{
    return response.json(
        [
            'usuário 1',
            'usuário 2',
            'usuário 3',
            'usuário 4',
            'usuário 5'
        ]
    )
})

app.post('/users', (req, response)=>{
    return response.json({message: 'Criando usuário'})
})
app.put('/users', (req, response)=>{
    return response.json({message: 'Atualizando usuário'})
})
app.delete('/users', (req, response)=>{
    return response.json({message: 'Deletando usuário'})
})

app.listen('3333', ()=>{
    console.log('SUBIU GARAI!!!(☞ﾟヮﾟ)☞')
})