import express from 'express'; const r=express.Router(); r.get('/',(a,b)=>b.json([])); export default r;
