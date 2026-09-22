import {query} from "../config/db.js";

export const chefsRepository = {
    // Executa um comando SELECT para trazer todos os registros organizados por ID
    async findAll() {
        const res = await query("SELECT * FROM tb_usuario ORDER BY id_usuario;");
        return res.rows; // Retorna todas as linhas encontradas
    },

    // Executa um SELECT filtrando pelo ID único do chef
    async findById(id_usuario){
        const res = await query('SELECT * FROM tb_usuario WHERE id_usuario = $1;', [id_usuario]);
        return res.rows[0]; // Retorna o chef encontrado ou undefined se não achar
    },

    // Executa um UPDATE para atualizar os dados de um chef específico

    async update(id_usuario, chef){
    const { nome, nome_usuario, email, senha, imagem_usuario, tipo } = chef;
    const sql = `
        UPDATE tb_usuario 
        SET nome = $1, nome_usuario = $2, email = $3, senha = $4, imagem_usuario = $5, tipo = $6, updated_at = NOW() 
        WHERE id_usuario = $7 
        RETURNING *;
    `;
    const res = await query(sql, [nome, nome_usuario, email, senha, imagem_usuario, tipo, id_usuario]);
    return res.rows[0];
},
    async patch(id, chef){
    const {id_usuario, nome, nome_usuario, email, senha, imagem_usuario, tipo } = chef;
    
    const sql = `
        UPDATE tb_usuario
        SET 
            nome = COALESCE($1, nome),
            nome_usuario = COALESCE($2, nome_usuario),
            email = COALESCE($3, email),
            senha = COALESCE($4, senha),
            imagem_usuario = COALESCE($5, imagem_usuario),
            tipo = COALESCE($6, tipo),
            updated_at = NOW()
        WHERE id_usuario = $7 
        RETURNING *;
    `;

    const res = await query(sql, [
        nome || null, 
        nome_usuario || null, 
        email || null, 
        senha || null, 
        imagem_usuario || null, 
        tipo || null, 
        id_usuario 
    ]);
    
    return res.rows[0];
},

   async delete(id){
    const sql = 'DELETE FROM tb_usuario WHERE id_usuario = $1 RETURNING *;';
    const res = await query(sql, [id_usuario]);
    return res.rows[0];
},





};