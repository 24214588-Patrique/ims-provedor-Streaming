const db = require('../database');

// Função que troca {NOME} {PLANO} {VALOR}
function montarMensagem(texto, cliente) {
  return texto
    .replace('{NOME}', cliente.nome)
    .replace('{PLANO}', cliente.plano_nome || 'seu plano')
    .replace('{VALOR}', cliente.plano_preco || '0,00')
    .replace('{VENCIMENTO}', cliente.vencimento || 'hoje');
}

async function rodarCobranca() {
  const clientes = db.prepare(`
    SELECT c.*, p.nome as plano_nome, p.preco as plano_preco 
    FROM clientes c LEFT JOIN planos p ON c.plano_id = p.id 
    WHERE c.vencimento = ?
  `).all(new Date().getDate().toString());

  const modelo = db.prepare("SELECT * FROM mensagens WHERE tipo='cobranca' ORDER BY id DESC LIMIT 1").get();

  if (!modelo) return console.log("Nenhum modelo de cobrança cadastrado");
  
  console.log(`[COBRANÇA] Encontrados ${clientes.length} clientes para cobrar hoje`);

  for (const cli of clientes) {
    const msgFinal = montarMensagem(modelo.texto, cli);
    console.log(`→ Enviando para ${cli.nome} (${cli.whatsapp}): ${msgFinal}`);
    // Aqui salvaria na tabela envios para histórico
    db.prepare("INSERT INTO envios (cliente_id, mensagem, tipo) VALUES (?,?,?)").run(cli.id, msgFinal, 'cobranca');
  }
}

rodarCobranca();
module.exports = { rodarCobranca, montarMensagem };