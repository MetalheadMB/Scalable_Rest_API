import {useState} from "react";
import axios from "axios";

export default function App(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [title,setTitle]=useState("");

const login = async()=>{
 const res = await axios.post(
 "http://localhost:5000/api/v1/auth/login",
 {email,password}
 );
 localStorage.setItem("token",res.data.token);
};

const createNote = async()=>{

 const token = localStorage.getItem("token");

 await axios.post(
 "http://localhost:5000/api/v1/notes",
 {title,content:"example"},
 {headers:{Authorization:`Bearer ${token}`}}
 );
};

return(
<div>

<h2>Login</h2>

<input placeholder="email"
onChange={e=>setEmail(e.target.value)}/>

<input placeholder="password"
onChange={e=>setPassword(e.target.value)}/>

<button onClick={login}>Login</button>

<h2>Create Note</h2>

<input placeholder="title"
onChange={e=>setTitle(e.target.value)}/>

<button onClick={createNote}>Create</button>

</div>
);
}