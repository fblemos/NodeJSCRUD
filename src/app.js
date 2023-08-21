/*import express from 'express';

const app = express();

//indicar para o express ler body com json
app.use(express.json());


//mock
const selecoes = [
    { id: 1, selecao: 'Brasil', grupo: 'G'}
    ,{ id: 2, selecao: 'Suíça', grupo: 'G'}
    ,{ id: 3, selecao: 'Camarões', grupo: 'G'}
    ,{ id: 4, selecao: 'Sérvia', grupo: 'G'}
    ,{ id: 5, selecao: 'Catar', grupo: 'A'}

]

//retornar o objeto por id
function buscarSelecaoPorID(id){
    return selecoes.filter(selecao => selecao.id == id);
}

// pegar posição ou index do elemento no array por id
function buscarIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id);
}

app.post('/selecoes',(req,res)=>{
    selecoes.push(req.body);
    res.status(201).send('Seleção cadastrada com sucesso!');
});


//criar a rota padrão ou raiz
app.get('/',(req, res) => {
    res.send('Olá mundo! <br> Primeira aula de nodejs.');
});


app.get('/selecoes', (req,res) => {
    res.status(200).send(selecoes);
});

app.get('/selecoes/:id', (req,res) =>{
    res.json(buscarSelecaoPorID(index));   
});

app.put('/selecoes/:id',(req,res) =>{
    let index = buscarIndexSelecao(req.params.id);
    selecoes[index].selecao = req.body.selecao;
    selecoes[index].grupo = req.body.grupo;
    res.json(selecoes);

});

app.delete('/selecoes/:id',(req,res) =>{
    let index = buscarIndexSelecao(req.params.id);
    selecoes.splice(index,1);
    res.send(`Seleção com id ${req.params.id} excluída com sucesso!`);

});

//Torna express visivel fora do arquivo app.js
export default app*/

import express from 'express';
import SelecaoController from './app/controllers/SelecaoController.js';

const app = express();

//indicar para o express ler body com json
app.use(express.json());

//CRUD
app.get('/selecoes', SelecaoController.index);
app.get('/selecoes/:id', SelecaoController.show);
app.post('/selecoes',SelecaoController.store);
app.put('/selecoes/:id',SelecaoController.update);
app.delete('/selecoes/:id',SelecaoController.delete);

//Torna express visivel fora do arquivo app.js
export default app
