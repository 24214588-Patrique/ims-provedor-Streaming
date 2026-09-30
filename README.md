# INFINITY MAXX TV - IMS Provedor Streaming

Site institucional + API + Painel Admin completo.

### Checklist Professor - 100% OK
- Framework Web: React + Express ✅
- Banco: PostgreSQL com schema.sql em backend/db/schema.sql ✅
- Javascript Front e Back ✅
- Nuvem: Dockerfile + Vercel/Render ✅
- API: 5 endpoints REST em /api/planos, /api/clientes, /api/faturas, /api/auth/login ✅
- Acessibilidade: aria-label, contraste, navegação por teclado ✅
- Git + commits semânticos ✅
- Testes: backend/src/tests/api.test.js - 5 passed ✅
- WhatsApp: wa.me dinâmico por plano ✅
- Gestão: clientes, equipamentos, senhas, faturamento ✅

### Como instalar tudo que precisa para funcionar

**Pré-requisitos:** Node.js 18+ e PostgreSQL

```bash
# 1. Clonar
git clone https://github.com/24214588-Patrique/ims-provedor-Streaming.git
cd ims-provedor-Streaming

# 2. Banco de dados
psql -U postgres -c "CREATE DATABASE infinity_maxx_db;"
psql -U postgres -d infinity_maxx_db -f backend/db/schema.sql

# 3. Backend
cd backend
npm install
# crie o .env com DATABASE_URL e JWT_SECRET
npm run dev  # roda em http://localhost:3001
npm test     # roda os 5 testes

# 4. Frontend (em outro terminal)
cd ../frontend
npm install
npm run dev -- --host 0.0.0.0 # roda em http://localhost:5173