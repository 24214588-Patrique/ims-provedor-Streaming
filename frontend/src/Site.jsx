export default function Site() {
  return (
    <div style={{background:'#08080a', color:'#fff', fontFamily:'Inter,sans-serif'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800;900&family=Syne:wght@800&display=swap');
        *{margin:0;padding:0;box-sizing:border-box}
        .nav{position:fixed; top:0; width:100%; z-index:50; display:flex; justify-content:space-between; align-items:center; padding:16px 5%; background:rgba(8,8,10,0.92); backdrop-filter:blur(20px); border-bottom:1px solid #1a1a1e}
        .hero{padding:120px 5% 50px; display:grid; grid-template-columns:1.1fr 0.9fr; gap:24px; align-items:center}
        .hero h1{font-family:'Syne'; font-size:58px; line-height:0.9; letter-spacing:-2px}
        .hero h1 span{color:#f5c518}
        .mosaic{display:grid; grid-template-columns:repeat(3,1fr); gap:8px; border-radius:20px; overflow:hidden}
        .mosaic img{width:100%; height:165px; object-fit:cover; border-radius:12px}
        .faixa{background:#f5c518; color:#000; padding:12px 5%; font-weight:900; font-size:11px; letter-spacing:2px; text-align:center}
        .sec{padding:50px 5%}
        .grid{display:grid; grid-template-columns:repeat(6,1fr); gap:12px; margin-top:18px}
        .card{border-radius:16px; overflow:hidden; height:270px; position:relative; background:#111; border:1px solid #222; transition:0.2s}
        .card:hover{transform:translateY(-6px); border-color:#f5c518}
        .card img{width:100%; height:100%; object-fit:cover}
        .card .info{position:absolute; bottom:0; left:0; right:0; padding:12px; background:linear-gradient(transparent, rgba(0,0,0,0.95))}
        .card .info b{font-size:12px}
        .card .info p{font-size:10px; color:#f5c518; font-weight:800; margin-top:2px}
        .planos{display:grid; grid-template-columns:repeat(3,1fr); gap:18px; margin-top:20px}
        .pl{background:#121216; border:1px solid #222; border-radius:24px; padding:26px}
        .pl.pop{background:#18150a; border-color:#f5c518; transform:translateY(-6px)}
        @media(max-width:900px){.hero{grid-template-columns:1fr} .hero h1{font-size:36px} .grid{grid-template-columns:repeat(3,1fr)} .planos{grid-template-columns:1fr} .mosaic img{height:110px}}
      `}</style>

      <nav className="nav">
        <b>INFINITY <span style={{color:'#f5c518'}}>MAXX TV</span></b>
        <a href="https://wa.me/5518997190692" target="_blank" style={{background:'#f5c518', color:'#000', padding:'10px 22px', borderRadius:100, fontWeight:900, fontSize:13, textDecoration:'none'}}>SUPORTE</a>
      </nav>

      <section className="hero">
        <div>
          <div style={{color:'#f5c518', fontSize:12, fontWeight:800, letterSpacing:3}}>• MAIS DE 100 MIL TÍTULOS EM 4K</div>
          <h1>Seu cinema<br/><span>sem fim,</span><br/>na sua casa.</h1>
          <p style={{color:'#888', marginTop:14, fontSize:15, lineHeight:1.5}}>Filmes lançamentos, séries completas, futebol ao vivo, canais abertos e fechados. Tudo em um único app.</p>
          <div style={{display:'flex', gap:10, marginTop:22}}>
            <a href="https://wa.me/5518997190692" target="_blank" style={{background:'#f5c518', color:'#000', padding:'16px 28px', borderRadius:100, fontWeight:800, textDecoration:'none'}}>Testar por 7 dias</a>
          </div>
        </div>

      
        <div className="mosaic">
          <img src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" alt="Duna" />
          <img src="https://image.tmdb.org/t/p/w500/gKkl1xYhR2yAR1uKxQp6Q6Lh.jpg" alt="Divertidamente" style={{content:'url(https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg)'}} />
          <img src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="Oppenheimer" />
          <img src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" alt="Inception" />
          <img src="https://image.tmdb.org/t/p/w500/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg" alt="Joker" />
          <img src="https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" alt="Dune" />
        </div>
      </section>

      <div className="faixa">🔥 LANÇAMENTOS 2024 • 2025 • DUBLADO E LEGENDADO • SEM TRAVAR • 4K ULTRA HD</div>

      <section className="sec">
        <h2 style={{fontSize:20, fontWeight:900}}>O que você vai assistir hoje?</h2>
        <div className="grid">
          <div className="card">
            <img src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="Ação" />
            <div className="info"><b>Ação e Aventura</b><p>• TOP 10 HOJE</p></div>
          </div>
          <div className="card">
            <img src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" alt="Series" />
            <div className="info"><b>Séries para Maratonar</b><p>• COMPLETAS</p></div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=400" alt="Futebol" />
            <div className="info"><b>Futebol Ao Vivo</b><p>• PREMIERE • ESPN</p></div>
          </div>
          <div className="card">
            <img src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" alt="Filmes" />
            <div className="info"><b>Filmes Premiados</b><p>• OSCAR 2024</p></div>
          </div>
          <div className="card">
            <img src="https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" alt="Kids" />
            <div className="info"><b>Kids e Família</b><p>• DESENHOS 4K</p></div>
          </div>
          <div className="card">
  <img src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&q=80" alt="Canais 24h" />
  <div className="info"><b>Canais 24 Horas</b><p>• AO VIVO • 100+ CANAIS</p></div>
          </div>
        </div>
      </section>

      <section className="sec" style={{background:'#0e0e10', borderTop:'1px solid #1a1a1e'}}>
        <h2 style={{fontSize:20, fontWeight:900}}>Planos sem fidelidade</h2>
        <div className="planos">
          <div className="pl"><h3>Start</h3><div style={{fontSize:32, fontWeight:900, marginTop:8}}>R$ 14,90</div><p style={{color:'#666', fontSize:12}}>Filmes e séries • 1 tela • 4K</p><a href="https://wa.me/5518997190692" target="_blank" style={{display:'block', marginTop:16, background:'#222', color:'#fff', textAlign:'center', padding:12, borderRadius:100, textDecoration:'none', fontWeight:800}}>Assinar</a></div>
          <div className="pl pop"><div style={{background:'#f5c518', color:'#000', fontSize:10, fontWeight:900, padding:'4px 10px', borderRadius:100, display:'inline-block'}}>MAIS VENDIDO</div><h3>Completo</h3><div style={{fontSize:32, fontWeight:900, marginTop:8}}>R$ 29,70</div><p style={{color:'#666', fontSize:12}}>Tudo incluso • 3 telas • Ao vivo + filmes</p><a href="https://wa.me/5518997190692" target="_blank" style={{display:'block', marginTop:16, background:'#f5c518', color:'#000', textAlign:'center', padding:12, borderRadius:100, textDecoration:'none', fontWeight:800}}>Assinar</a></div>
          <div className="pl"><h3>Live</h3><div style={{fontSize:32, fontWeight:900, marginTop:8}}>R$ 24,90</div><p style={{color:'#666', fontSize:12}}>Canais ao vivo • 2 telas • Esportes</p><a href="https://wa.me/5518997190692" target="_blank" style={{display:'block', marginTop:16, background:'#222', color:'#fff', textAlign:'center', padding:12, borderRadius:100, textDecoration:'none', fontWeight:800}}>Assinar</a></div>
        </div>
      </section>

      <footer style={{borderTop:'1px solid #222'}}>
        <img src="/banner.jpeg" alt="banner" style={{width:'100%', display:'block', maxHeight:360, objectFit:'cover'}} onError={(e)=>e.target.src='https://image.tmdb.org/t/p/original/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg'} />
        <div style={{padding:'16px 5%', display:'flex', justifyContent:'space-between', color:'#555', fontSize:11, background:'#000'}}>
          <span style={{color:'#fff'}}><b>INFINITY MAXX TV © 2026</b></span>
          <span>(18) 99719-0692</span>
        </div>
      </footer>
    </div>
  )
}