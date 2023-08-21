import conexao, { consulta } from '../database/conexao.js';

class SelecaoRepository{
//CRUD
create(selecao){
    const sql = 'INSERT INTO selecoes SET ?;';
    // conexao.query(sql, selecao, (erro,resultado) => {
    //     if(erro){
    //         res.status(404).json({'erro': erro});
    //     }else{
    //         res.status(201).json(resultado);
    //     }
    // }); 
    return consulta(sql,selecao,'Não foi possível cadastrar.');


};

findAll(){    
    const sql = 'SELECT * FROM selecoes;';
    //-1
    // conexao.query(sql, (erro,resultado) => {
    //     if(erro){
    //         return erro;
    //     }else{
    //         return resultado;
    //     }
    //     console.log(erro,resultado);
    // });
    //-2
    //Utilizado pelo MYSQL nodejs 'Promise'
    // return new Promise((resolve,reject)=>{
    //     conexao.query(sql,(erro,resultado)=>{
    //         if(erro) return reject('Não foi possível localizar.');
    //         //Fazer o parse dos resultados
    //         const row = JSON.parse(JSON.stringify(resultado));
    //         return resolve(row);
    //     });
    // });
    return consulta(sql,'Não foi possível localizar.');

};

findById(id){
    const sql = 'SELECT * FROM selecoes WHERE id = ?;';
    //1-
    // conexao.query(sql, id, (erro,resultado) => {
    //     const linha = resultado[0];
    //     if(erro){
    //         res.status(404).json({'erro': erro});
    //     }else{
    //         res.status(200).json(linha);
    //     }
    // });
    
    //2-
    //Passando um parâmetro de id
    // return new Promise((resolve,reject)=>{
    //     conexao.query(sql,id,(erro,resultado)=>{
    //         if(erro) return reject('Não foi possível localizar.');
    //         //Fazer o parse dos resultados
    //         const row = JSON.parse(JSON.stringify(resultado));
    //         return resolve(row);
    //     });
    // });
    return consulta(sql,id,'Não foi possível localizar.');


};
update(selecao, id){
    const sql = 'UPDATE selecoes SET ? WHERE id=?;';
    //1-
    //                  prim ?  seg ?
    // conexao.query(sql, [selecao,id], (erro,resultado) => {
    //     if(erro){
    //         res.status(404).json({'erro': erro});
    //     }else{
    //         res.status(200).json(resultado);
    //     }
    // });

    //2-
    // return new Promise((resolve,reject)=>{
    //     conexao.query(sql,[selecao,id],(erro,resultado)=>{
    //         if(erro) return reject('Não foi possível atualizar.');
    //         //Fazer o parse dos resultados
    //         const row = JSON.parse(JSON.stringify(resultado));
    //         return resolve(row);
    //     });
    // });   
    return consulta(sql,[selecao,id],'Não foi possível atualizar.'); 

};

delete(id){
    //1-
    // const sql = 'DELETE FROM selecoes WHERE id = ?;';
    // conexao.query(sql, id, (erro,resultado) => {
    //     if(erro){
    //         res.status(404).json({'erro': erro});
    //     }else{
    //         res.status(200).json(resultado);
    //     }
    // }); 
    //2-
    // const sql = 'DELETE FROM selecoes WHERE id = ?;';
    // return new Promise((resolve,reject)=>{
    //     conexao.query(sql,id,(erro,resultado)=>{
    //         if(erro) return reject('Não foi possível apagar.');
    //         //Fazer o parse dos resultados
    //         const row = JSON.parse(JSON.stringify(resultado));
    //         return resolve(row);
    //     });
    // }); 
    const sql = 'DELETE FROM selecoes WHERE id = ?;';
    return consulta(sql,id,'Não foi possível apagar.');   
};
    

}

export default new SelecaoRepository();