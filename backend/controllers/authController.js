import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../config/db.js";

export const register = async(req,res)=>{

 const {email,password} = req.body;

 const hashed = await bcrypt.hash(password,10);

 const result = await db.query(
 "INSERT INTO users(email,password) VALUES($1,$2) RETURNING *",
 [email,hashed]
 );

 res.status(201).json(result.rows[0]);
};

export const login = async(req,res)=>{

 const {email,password} = req.body;

 const result = await db.query(
 "SELECT * FROM users WHERE email=$1",
 [email]
 );

 const user = result.rows[0];

 if(!user){
  return res.status(404).json({message:"User not found"});
 }

 const valid = await bcrypt.compare(password,user.password);

 if(!valid){
  return res.status(401).json({message:"Invalid credentials"});
 }

 const token = jwt.sign(
  {id:user.id,role:user.role},
  process.env.JWT_SECRET,
  {expiresIn:"1d"}
 );

 res.json({token});
};