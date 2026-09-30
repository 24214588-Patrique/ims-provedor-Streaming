const Database = require('better-sqlite3');
const db = new Database('infinity.db');

db.exec(`
CREATE TABLE IF NOT EXISTS planos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, preco TEXT, telas INTEGER);
CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, whatsapp TEXT, plano_id INTEGER, vencimento TEXT, grupo TEXT, cidade TEXT);
CREATE TABLE IF NOT EXISTS equipamentos (id INTEGER PRIMARY KEY AUTOINCREMENT, cliente_id INTEGER, mac TEXT, modelo TEXT);
CREATE TABLE IF NOT EXISTS grupos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, descricao TEXT);
CREATE TABLE IF NOT EXISTS mensagens (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT, grupo_alvo TEXT, timer TEXT, texto TEXT, titulo TEXT, status TEXT);
CREATE TABLE IF NOT EXISTS envios (id INTEGER PRIMARY KEY AUTOINCREMENT, cliente_id INTEGER, mensagem TEXT, tipo TEXT, data TEXT DEFAULT CURRENT_TIMESTAMP);
`);

module.exports = db;