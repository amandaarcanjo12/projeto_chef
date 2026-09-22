import { chefsRepository } from "../repositories/chefsRepository.js";

export const chefsService = {
    // Apenas repassa a ordem para buscar todos os animais no repositório
    async getAllChef() {
        return await chefsRepository.findAll();
    },

    async getChef(id){
        const chefExistente = await chefsRepository.findById(id);
        if(!chefExistente){
            throw new Error('Chef não encontrado');
        }

        return chefExistente
    },

    // Regra de negócio para atualizar
    async updateChef(id, chefRequisicao){
        // Verifica primeiro se o animal realmente existe no banco de dados
        const chefExistente = await chefsRepository.findById(id);
        
        if(!chefExistente){
            throw new Error('Chef não encontrado');
        }
        return await chefsRepository.update(id, chefRequisicao);
    },

    async patchChef(id, chefRequisicao){
        const chefExistente = await chefsRepository.findById(id);
        
        if(!chefExistente){
            throw new Error('Chef não encontrado');
        }
        return await chefsRepository.patch(id,chefRequisicao);
    },

    async deleteChef (id){
        const chefExistente = await chefsRepository.findById(id);
        
        if(!chefExistente){
            throw new Error('Chef não encontrado');
        }
        return await chefsRepository.delete(id, chefRequisicao);
    }
};