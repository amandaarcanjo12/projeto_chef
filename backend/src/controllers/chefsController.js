import {chefsService} from "../services/chefsService.js"

export const chefsController = {
    // Busca todos os chefs
    async getAll(req, res) {
        try {
            // Chama o serviço para buscar os chefs
            const chef = await chefsService.getAllChef();
            // Retorna a lista de chefs com status 200 (OK) por padrão
            res.json(chef);
        } catch (error) {
            // Se der erro, retorna status 404 (Não Encontrado) ou 500 com a mensagem de erro
            res.status(404).json({ erro: error.message });
        }

    },

    async get(req, res){
        try{
            const chef = await chefsService.getChef(req.params.id);
            res.json(chef);

        }catch(error){
            res.status(404).json({ erro: error.message });
        }
    },

    // Atualiza um chef existente
    async update(req, res) {
        try {
            // Pega o ID da URL (req.params.id) e os dados novos do corpo (req.body)
            const chefAtualizado = await chefsService.updateChef(req.params.id, req.body)
            // Retorna o chef atualizado
            res.json(chefAtualizado)

        } catch (error) {
            // Se a mensagem de erro for "Chef não encontrado" envia 404, senão envia 400
            const status = error.message === "Chef não encontrado" ? 404 : 400
            res.status(status).json({ erro: error.message });
        }
    },

    async patch(req, res){
        try{
            const chefAlterado = await chefsService.patchChef(req.params.id, req.body);
            res.json(chefAlterado);
        }catch(error){
            const status = error.message === "Chef não encontrado" ? 404 : 400
            res.status(status).json({ erro: error.message });
        }
    },

    async delete(req, res){
        try{
            const chefRemovido = await chefsService.deleteChef(req.params.id);
            res.json({
                mensagem: `Chef removido com sucesso: {$chefRemovido.nome}`
            })

        }catch(error){
            const status = error.message === "Chef não encontrado" ? 404 : 400
            res.status(status).json({ erro: error.message });
        }
    }

};

