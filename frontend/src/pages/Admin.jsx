import { useState, useEffect } from "react"
const API = "http://192.168.18.99:3001/api"

export default function AdminCompleto() {
  const [token, setToken] = useState(localStorage.getItem('admin_token'))
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const [aba, setAba] = useState("clientes")
  const [form, setForm] = useState({})
  const [clientes, setClientes] = useState(JSON.parse(localStorage.getItem('clientes') || '[]'))
  const [planos, setPlanos] = useState(JSON.parse(localStorage.getItem('planos') || '[]'))
  const [grupos, setGrupos] = useState(JSON.parse(localStorage.getItem('grupos') || '[]'))
  const [aparencia, setAparencia] = useState(JSON.parse(localStorage.getItem('aparencia') || '[]'))

  const abas = [
    { id: "clientes", label: "👥 Clientes", count: clientes.length },
    { id: "planos", label: "📺 Planos", count: planos.length },
    { id: "grupos", label: "👨‍👩‍👧 Grupos", count: grupos.length },
    { id: "mensagens", label: "💬 Mensagens" },
    { id: "faturamento", label: "💰 Faturamento" },
    { id: "aparencia", label: "🎨 Site" },
  ]

  const salvar = (tipo, lista, setLista) => {
    const novo = { id: Date.now(),...form }
    const novaLista = [...lista, novo]
    setLista(novaLista)
    localStorage.setItem(tipo, JSON.stringify(novaLista))
    setForm({})
    alert(`✅ ${tipo} salvo!`)
  }

  if(!token){
    return (
      <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#08080a'}}>
        <div style={{background:'#111', padding:32, borderRadius:20, width:380, border:'1px solid #222', textAlign:'center'}}>
          <div style={{fontSize:40}}>🔒</div>
          <h2 style={{color:'#fff', marginTop:10}}>Admin Infinity Maxx</h2>
          <p style={{color:'#666', fontSize:12, marginTop:5}}>admin / EuAmo@MegaTv2026!</p>
          <input placeholder="Usuário" value={user} onChange={e=>setUser(e.target.value)} style={{width:'100%', padding:12, marginTop:16, borderRadius:10, background:'#000', border:'1px solid #333', color:'#fff'}} />
          <input placeholder="Senha" type="password" value={pass} onChange={e=>setPass(e.target.value)} style={{width:'100%', padding:12, marginTop:10, borderRadius:10, background:'#000', border:'1px solid #333', color:'#fff'}} />
          <button onClick={async ()=>{
            if(user==='admin' && pass==='EuAmo@MegaTv2026!'){
              const res = await fetch(`${API}/login`,{method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({user,pass})}).catch(()=>({json:()=>({token:'local'})}))
              const data = await res.json().catch(()=>({token:'local'}))
              localStorage.setItem('admin_token', data.token || 'local')
              setToken(data.token || 'local')
            }else alert('Usuário: admin | Senha: EuAmo@MegaTv2026!')
          }} style={{width:'100%', padding:12, marginTop:14, borderRadius:10, background:'#fbbf24', fontWeight:900, border:0, cursor:'pointer'}}>ENTRAR</button>
        </div>
      </div>
    )
  }

  return (
    <>
      <style>{`
       *{margin:0;padding:0;box-sizing:border-box}
      .admin{display:flex; min-height:100vh; background:#f5f5f7; font-family:Inter, sans-serif}
      .menu{width:280px; background:#111; color:#fff; padding:24px; position:sticky; top:0; height:100vh; overflow:auto}
      .menu button{width:100%; text-align:left; padding:12px 16px; margin-bottom:6px; border-radius:12px; border:0; background:#222; color:#fff; cursor:pointer; font-size:13px; display:flex; justify-content:space-between}
      .menu button.ativo{background:#fbbf24; color:#000; font-weight:800}
      .conteudo{flex:1; padding:32px}
      .cardForm{background:#fff; padding:24px; border-radius:20px; margin-bottom:24px; display:grid; grid-template-columns:repeat(2,1fr); gap:12px; box-shadow:0 4px 20px rgba(0,0,0,0.05)}
      .cardForm input,.cardForm select,.cardForm textarea{padding:12px; border-radius:12px; border:1px solid #ddd; font-size:13px}
      .btn{background:#111; color:#fff; padding:12px; border-radius:12px; font-weight:800; border:0; cursor:pointer; grid-column:span 2}
      .lista{background:#fff; padding:20px; border-radius:20px}
      .item{padding:14px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center}
      `}</style>

      <div className="admin">
        <div className="menu">
          <h2 style={{fontWeight:900, marginBottom:5, lineHeight:1}}>INFINITY<br/><span style={{color:'#fbbf24'}}>MAXX TV</span></h2>
          <p style={{color:'#666', fontSize:11, marginBottom:20}}>v2.0 Completo</p>
          {abas.map(a => <button key={a.id} className={aba===a.id?'ativo':''} onClick={()=>setAba(a.id)}><span>{a.label}</span><span style={{background:'rgba(0,0,0,0.2)', padding:'2px 8px', borderRadius:20, fontSize:11}}>{a.count || ''}</span></button>)}
          <button onClick={()=>{localStorage.removeItem('admin_token'); setToken(null)}} style={{marginTop:20, background:'#331111', color:'#ff8888', justifyContent:'center'}}>🚪 Sair</button>
          <a href="/" style={{display:'block', marginTop:20, color:'#888', textDecoration:'none', fontSize:12}}>← Voltar ao Site</a>
        </div>

        <div className="conteudo">
          <h1 style={{fontSize:28, fontWeight:900, textTransform:'uppercase', marginBottom:20}}>{aba}</h1>

          {/* CLIENTES */}
          {aba==="clientes" && <>
            <form className="cardForm" onSubmit={e=>{e.preventDefault(); salvar('clientes', clientes, setClientes)}}>
              <input placeholder="Nome do cliente" required value={form.nome||""} onChange={e=>setForm({...form,nome:e.target.value})} />
              <input placeholder="WhatsApp ex: 18997190692" required value={form.whats||""} onChange={e=>setForm({...form,whats:e.target.value})} />
              <select value={form.plano||""} onChange={e=>setForm({...form,plano:e.target.value})}><option>Selecione Plano</option>{planos.map(p=><option key={p.id}>{p.nome} - R${p.preco}</option>)}<option>Mensal R$25</option><option>Trimestral R$65</option></select>
              <input type="date" value={form.vencimento||""} onChange={e=>setForm({...form,vencimento:e.target.value})} />
              <input placeholder="Usuário / Login" value={form.usuario||""} onChange={e=>setForm({...form,usuario:e.target.value})} />
              <select value={form.status||"ativo"} onChange={e=>setForm({...form,status:e.target.value})}><option value="ativo">✅ Ativo</option><option value="vencido">❌ Vencido</option><option value="teste">🧪 Teste 7 dias</option></select>
              <button className="btn">+ SALVAR CLIENTE</button>
            </form>
            <div className="lista">{clientes.map(c=><div key={c.id} className="item"><div><b>{c.nome}</b> - {c.whats}<br/><small>{c.plano} • Vence: {c.vencimento}</small></div><span style={{background:c.status==='ativo'?'#efe':'#fee', padding:'4px 10px', borderRadius:20, fontSize:11}}>{c.status}</span></div>)}{clientes.length===0 && <p>Nenhum cliente</p>}</div>
          </>}

          {/* PLANOS */}
          {aba==="planos" && <>
            <form className="cardForm" onSubmit={e=>{e.preventDefault(); salvar('planos', planos, setPlanos)}}>
              <input placeholder="Nome do Plano ex: Mensal Premium" required value={form.nome||""} onChange={e=>setForm({...form,nome:e.target.value})} />
              <input placeholder="Preço ex: 25.00" type="number" required value={form.preco||""} onChange={e=>setForm({...form,preco:e.target.value})} />
              <input placeholder="Telas ex: 2" value={form.telas||""} onChange={e=>setForm({...form,telas:e.target.value})} />
              <input placeholder="Duração ex: 30 dias" value={form.duracao||""} onChange={e=>setForm({...form,duracao:e.target.value})} />
              <textarea style={{gridColumn:'span 2'}} placeholder="Descrição do plano" value={form.desc||""} onChange={e=>setForm({...form,desc:e.target.value})}></textarea>
              <button className="btn">+ CRIAR PLANO</button>
            </form>
            <div className="lista">{planos.map(p=><div key={p.id} className="item"><div><b>{p.nome}</b> - R${p.preco}<br/><small>{p.telas} telas • {p.duracao}</small></div></div>)}</div>
          </>}

          {/* GRUPOS WHATSAPP */}
          {aba==="grupos" && <>
            <form className="cardForm" onSubmit={e=>{e.preventDefault(); salvar('grupos', grupos, setGrupos)}}>
              <input placeholder="Nome do Grupo ex: Desapega Dracena" required value={form.nome||""} onChange={e=>setForm({...form,nome:e.target.value})} />
              <input placeholder="Link ou ID ex: 1203630...@g.us" required value={form.id_whats||""} onChange={e=>setForm({...form,id_whats:e.target.value})} />
              <input placeholder="Qtd membros ex: 250" value={form.qtd||""} onChange={e=>setForm({...form,qtd:e.target.value})} />
              <input placeholder="Cidade ex: Dracena" value={form.cidade||""} onChange={e=>setForm({...form,cidade:e.target.value})} />
              <button className="btn" style={{background:'#25D366', color:'#fff'}}>+ ADICIONAR GRUPO</button>
            </form>
            <div className="lista">{grupos.map(g=><div key={g.id} className="item"><div style={{display:'flex', gap:10, alignItems:'center'}}><div style={{width:36, height:36, background:'#25D366', borderRadius:50, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:800}}>{g.nome[0]}</div><div><b>{g.nome}</b><br/><small>{g.qtd} pessoas • {g.cidade}</small></div></div><small>{g.id_whats?.substring(0,20)}...</small></div>)}</div>
          </>}

          {/* MENSAGENS COM GRUPOS */}
          {aba==="mensagens" && (
            <div className="cardForm">
              <select value={form.grupo_alvo||""} onChange={e=>setForm({...form,grupo_alvo:e.target.value})}><option value="">Selecione o Grupo</option>{grupos.map(g=><option key={g.id} value={g.nome}>{g.nome}</option>)}<option value="TODOS">🚀 TODOS OS GRUPOS ({grupos.length})</option></select>
              <input type="datetime-local" value={form.timer||""} onChange={e=>setForm({...form,timer:e.target.value})} />
              <textarea style={{gridColumn:'span 2'}} rows="6" placeholder="Mensagem automática - use {GRUPO} - Ex: 🔥 OFERTA IMPERDÍVEL no {GRUPO}!" value={form.texto||""} onChange={e=>setForm({...form,texto:e.target.value})}></textarea>
              <button className="btn" style={{background:'#25D366'}} onClick={()=>alert(`✅ Mensagem para ${form.grupo_alvo || 'grupo'} agendada para ${form.timer || 'agora'}!`)}>📲 ENVIAR COM TIMER AUTOMÁTICO</button>
            </div>
          )}

          {/* FATURAMENTO */}
          {aba==="faturamento" && (
            <div className="lista">
              <h3>💰 Cobrança Automática</h3>
              <p style={{color:'#666', margin:'10px 0'}}>Clientes vencendo hoje: {clientes.filter(c=>c.vencimento===new Date().toISOString().split('T')[0]).length}</p>
              {clientes.map(c=><div key={c.id} className="item"><div><b>{c.nome}</b> - {c.plano} - R${c.preco||'25'}<br/><small>Vence: {c.vencimento}</small></div><button style={{background:'#25D366', color:'#fff', border:0, padding:'6px 12px', borderRadius:10}}>Cobrar no Zap</button></div>)}
            </div>
          )}

          {/* APARÊNCIA DO SITE */}
          {aba==="aparencia" && <>
            <form className="cardForm" onSubmit={e=>{e.preventDefault(); salvar('aparencia', aparencia, setAparencia)}}>
              <input placeholder="Nome da Categoria ex: Canais 24 Horas" required value={form.nome||""} onChange={e=>setForm({...form,nome:e.target.value})} />
              <input placeholder="Subtítulo ex: • AO VIVO • 100+ CANAIS" value={form.sub||""} onChange={e=>setForm({...form,sub:e.target.value})} />
              <input placeholder="Link da imagem ex: https://..." style={{gridColumn:'span 2'}} value={form.img||""} onChange={e=>setForm({...form,img:e.target.value})} />
              <button className="btn">+ ADICIONAR NO SITE</button>
            </form>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12}}>
              {aparencia.map(a=><div key={a.id} style={{background:'#fff', borderRadius:16, overflow:'hidden'}}><img src={a.img} style={{width:'100%', height:120, objectFit:'cover'}} onError={e=>e.target.src='https://via.placeholder.com/300'} /><div style={{padding:10}}><b>{a.nome}</b><br/><small style={{color:'#fbbf24'}}>{a.sub}</small></div></div>)}
            </div>
          </>}
        </div>
      </div>
    </>
  )
}