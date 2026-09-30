const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/planos', require('./routes/planos'));
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/equipamentos', require('./routes/equipamentos'));
app.use('/api/grupos', require('./routes/grupos'));
app.use('/api/mensagens', require('./routes/mensagens'));
app.use('/api/faturamento', require('./routes/faturamento'));
app.use('/api/envios', require('./routes/envios'));

app.listen(3001, () => console.log("Backend rodando na porta 3001"));

app.get('/api/aparencia', async (req,res)=>{
  const data = await db.query('SELECT * FROM aparencia') 
  res.json(data)
})
app.post('/api/aparencia', async (req,res)=>{
  // salva req.body {nome, sub, img}
  await db.query('INSERT INTO aparencia...', req.body)
  res.json({ok:true})
})