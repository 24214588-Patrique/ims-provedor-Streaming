import express from 'express';
import { sendMessage, enviarMensagem } from '../whatsapp.js';
const router = express.Router();
const fn = typeof enviarMensagem !== 'undefined' ? enviarMensagem : sendMessage;
router.post('/enviar', async (req,res)=>{
  try{ const {numero,mensagem}=req.body; const r=await fn(numero,mensagem); res.json({sucesso:true,r}); }
  catch(e){ res.status(500).json({erro:e.message}); }
});
router.get('/', (req,res)=> res.json([]));
export default router;
