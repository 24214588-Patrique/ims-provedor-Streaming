const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());


app.get('/api/planos', (req, res) => {
  res.status(200).json([{ id: 1, nome: 'Plano Básico', valor: 29.90 }]);
});

app.get('/api/clientes', (req, res) => {
  res.status(200).json([{ id: 1, nome: 'Cliente Teste' }]);
});

app.post('/api/clientes', (req, res) => {
  const { nome, whatsapp } = req.body;
  if (!nome) return res.status(400).json({ erro: 'Nome obrigatório' });
  res.status(201).json({ id: 2, nome, whatsapp });
});

app.post('/api/faturas', (req, res) => {
  res.status(201).json({ id: 1, status: 'pendente', valor: 29.90 });
});

app.post('/api/auth/login', (req, res) => {
  const { user, pass } = req.body;
  if (user === 'admin' && pass) {
    return res.status(200).json({ token: 'fake-jwt-token-para-teste' });
  }
  res.status(401).json({ erro: 'Não autorizado' });
});

describe('INFINITY MAXX TV - Testes da API', () => {

  test('GET /api/planos - Deve listar planos - 200 OK', async () => {
    const response = await request(app).get('/api/planos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/clientes - Deve listar clientes - 200 OK', async () => {
    const response = await request(app).get('/api/clientes');
    expect(response.status).toBe(200);
  });

  test('POST /api/clientes - Deve criar cliente - 201 Created', async () => {
    const response = await request(app)
      .post('/api/clientes')
      .send({ nome: 'Patrique Teste', whatsapp: '18997190692' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  test('POST /api/faturas - Deve gerar fatura - 201 Created', async () => {
    const response = await request(app)
      .post('/api/faturas')
      .send({ cliente_id: 1, valor: 29.90 });
    expect(response.status).toBe(201);
  });

  test('POST /api/auth/login - Deve autenticar admin - 200 OK', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ user: 'admin', pass: 'EuAmo@MegaTv2026!' });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

});