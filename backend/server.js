import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

const USER = 'admin'
const PASS = process.env.ADMIN_PASS || 'EuAmo@MegaTv2026!'

console.log('🔐 Senha configurada:', PASS)

app.post('/api/login', (req,res)=>{
  const {user, pass} = req.body
  console.log(`Tentativa: ${user} / ${pass}`)
  
  if(user === USER && pass === PASS){
    return res.json({token: 'infinity-token-' + Date.now()})
  }
  return res.status(401).json({erro: `Senha incorreta. Use: ${USER} / EuAmo@MegaTv2026!`})
})

app.get('/api/:aba', (req,res)=>{
  res.json([])
})

app.post('/api/:aba', (req,res)=>{
  res.json({ok:true})
})

app.listen(3001, '0.0.0.0', ()=> {
  console.log('✅ Backend RODANDO em http://192.168.18.99:3001')
  console.log('✅ Login: admin / EuAmo@MegaTv2026!')
})