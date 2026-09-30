const db = require('../database');

function enviarProblemaTransmissao(grupoAlvo, textoProblema) {
  const clientes = db.prepare("SELECT * FROM clientes WHERE grupo = ? OR ? = 'Todos'").all(grupoAlvo, grupoAlvo);
  console.log(`[TRANSMISSÃO] Enviando alerta para ${clientes.length} clientes do grupo ${grupoAlvo}`);
  for (const cli of clientes) {
    const msg = textoProblema.replace('{NOME}', cli.nome);
    db.prepare("INSERT INTO envios (cliente_id, mensagem, tipo) VALUES (?,?,?)").run(cli.id, msg, 'transmissao');
  }
}
module.exports = { enviarProblemaTransmissao };