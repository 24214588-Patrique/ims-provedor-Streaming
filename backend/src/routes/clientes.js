import express from 'express'; const r=express.Router(); r.get('/',(a,b)=>b.json([])); r.post('/',(a,b)=>b.json({ok:true})); export default r;
