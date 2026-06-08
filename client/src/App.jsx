import {useEffect,useState} from 'react';
import axios from 'axios';

export default function App(){
 const [leads,setLeads]=useState([]);
 const [form,setForm]=useState({name:'',email:''});

 const load=()=>axios.get('http://localhost:5000/api/leads').then(r=>setLeads(r.data));
 useEffect(()=>{load()},[]);

 const add=async()=>{
   await axios.post('http://localhost:5000/api/leads',form);
   setForm({name:'',email:''});
   load();
 };

 return <div style={{padding:20}}>
 <h2>Lead CRM</h2>
 <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
 <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
 <button onClick={add}>Add Lead</button>
 <ul>{leads.map(l=><li key={l._id}>{l.name} - {l.email}</li>)}</ul>
 </div>
}