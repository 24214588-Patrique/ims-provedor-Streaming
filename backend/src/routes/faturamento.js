const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
  const envios = db.prepare("SELECT e.*, c.nome as cliente_nome FROM envios e LEFT JOIN clientes c ON e.cliente_id = c.id ORDER BY e.id DESC LIMIT 50").all();
  const clientesHoje = db.prepare("SELECT COUNT(*) as total FROM clientes WHERE vencimento = ?").get(new Date().getDate().toString());
  res.json({ total_hoje: clientesHoje.total, historico: envios });
});

router.post('/rodar', (req, res) => {
  const { rodarCobranca } = require('../jobs/cobranca');
  rodarCobranca();
  res.json({ ok: true, msg: "Cobrança rodada, veja no console e na tabela envios" });
});

module.exports = router;