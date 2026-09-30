const express = require('express');
const router = express.Router();
const db = require('../database');

// LISTAR
router.get('/', (req, res) => {
  const rows = db.prepare("SELECT * FROM mensagens ORDER BY id DESC").all();
  res.json(rows);
});

// CRIAR COM TIMER E GRUPO
router.post('/', (req, res) => {
  const { tipo, grupo_alvo, timer, texto, titulo } = req.body;
  
  // Timer: se tiver data futura, agenda. Se não, envia na hora
  const agendadoPara = timer ? new Date(timer) : new Date();
  
  const info = db.prepare(`
    INSERT INTO mensagens (tipo, grupo_alvo, timer, texto, titulo, status) 
    VALUES (?,?,?,?,?,?)
  `).run(tipo, grupo_alvo || 'Todos', agendadoPara.toISOString(), texto, titulo || tipo, 'agendada');

  // Se for do tipo transmissao, já dispara
  if (tipo === 'transmissao') {
    const { enviarProblemaTransmissao } = require('../jobs/transmissao');
    enviarProblemaTransmissao(grupo_alvo, texto);
  }

  res.json({ id: info.lastInsertRowid, mensagem: "Mensagem agendada com sucesso!" });
});

// DELETAR
router.delete('/:id', (req, res) => {
  db.prepare("DELETE FROM mensagens WHERE id = ?").run(req.params.id);
  res.json({ ok: true });
});

module.exports = router;