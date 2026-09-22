import express from 'express';
import chefsRoutes from "../routes/chefsRoutes.js"; 

const app = express();
// Define a porta do servidor (usa uma variável de ambiente ou a porta 3000 como padrão)
const PORT = process.env.PORT || 3000;

// Middleware para fazer o Express entender requisições que enviam dados em formato JSON
app.use(express.json());

// Injeta as rotas de animais no servidor
app.use(chefsRoutes);

// Inicializa o servidor HTTP na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});         