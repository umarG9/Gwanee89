const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let users = {};

app.post('/api/login', (req,res)=>{
  const { phone } = req.body;
  if(!phone) return res.json({error:'Saka number'});
  if(!users[phone]) users[phone] = { phone, history: [] };
  res.json({ success:true, message: `Barka da zuwa Gwanee89 - ${phone}` });
});

app.post('/api/buy-data', (req,res)=>{
  const { phone, network, plan, amount } = req.body;
  res.json({ success:true, message: `${network} ${plan} - N${amount} An saya a Gwanee89!` });
});

app.post('/api/buy-airtime', (req,res)=>{
  const { phone, network, amount } = req.body;
  res.json({ success:true, message: `${network} N${amount} Airtime An saya!` });
});

app.get('/', (req,res)=> res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(process.env.PORT||10000, ()=>console.log('Gwanee89 Live'));
