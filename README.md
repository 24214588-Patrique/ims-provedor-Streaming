# INFINITY MAXX TV - Sistema de Gestão de Provedor de Streaming

Projeto acadêmico desenvolvido para disciplina de Desenvolvimento Web Full Stack.
Sistema completo de site institucional + painel administrativo com banco de dados e automação de mensagens.

**Aluno:** [Seu Nome]
**Telefone de Atendimento:** (18) 99719-0692
**Stack:** Node.js + Express + SQLite + React + Vite

---

## 1. OBJETIVO DO PROJETO

Criar um sistema para um provedor de IPTV / Streaming onde:
- O cliente acessa o site e escolhe um plano
- O administrador gerencia clientes, equipamentos, grupos e planos
- O sistema envia mensagens automáticas de cobrança e de problemas na transmissão

O sistema foi inspirado no layout da EiTV Play (eitvplay.com.br).

## 2. FUNCIONALIDADES

### Site (Frontend)
- Página inicial com design responsivo (inspirado em EiTV Play)
- Exibição dinâmica de planos vindos do banco de dados
- Botão "Assine Agora" integrado com WhatsApp (18) 99719-0692
- Seção multi-telas (Smart TV, Celular, TV Box)

### Painel Admin (`/admin`)
- **Clientes / Usuários:** Cadastro com nome, WhatsApp, plano, vencimento, grupo e cidade.
- **Planos:** CRUD completo de planos (nome, preço, quantidade de telas).
- **Equipamentos:** Cadastro de MAC e modelo vinculado ao cliente.
- **Grupos:** Criação de grupos para segmentação (ex: Premium, Atrasados, Todos).
- **Central de Mensagens:** 
    - Tipos: Cobrança, Problema na Transmissão, Aviso Geral, Promoção.
    - Campo de Grupo Alvo: permite escolher para quem enviar.
    - Campo Timer (datetime-local): agendamento da mensagem.
    - Variáveis dinâmicas: `{NOME}`, `{PLANO}`, `{VALOR}`, `{VENCIMENTO}`.
- **Faturamento Automático:**
    - O sistema identifica automaticamente todos os clientes com vencimento no dia atual.
    - Reconhece qual plano cada cliente possui e seu valor.
    - Substitui as variáveis na mensagem.
    - Salva histórico na tabela `envios`.

## 3. ESTRUTURA DO BANCO DE DADOS (SQLite - infinity.db)

```sql
planos (id, nome, preco, telas)
clientes (id, nome, whatsapp, plano_id, vencimento, grupo, cidade)
equipamentos (id, cliente_id, mac, modelo)
grupos (id, nome, descricao)
mensagens (id, tipo, grupo_alvo, timer, texto, titulo, status)
envios (id, cliente_id, mensagem, tipo, data)