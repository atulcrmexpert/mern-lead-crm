const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const Lead=require('./models/Lead');
const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/leadcrm');

app.get('/api/leads', async(req,res)=>res.json(await Lead.find()));
app.post('/api/leads', async(req,res)=>res.json(await Lead.create(req.body)));
app.delete('/api/leads/:id', async(req,res)=>{
 await Lead.findByIdAndDelete(req.params.id);
 res.json({success:true});
});

app.listen(5000,()=>console.log('Server running'));
