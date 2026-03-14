import { db } from "../config/db.js";

export const createNote = async(req,res)=>{

 const {title,content} = req.body;

 const result = await db.query(
 "INSERT INTO notes(title,content,user_id) VALUES($1,$2,$3) RETURNING *",
 [title,content,req.user.id]
 );

 res.status(201).json(result.rows[0]);
};

export const getNotes = async(req,res)=>{

 const result = await db.query(
 "SELECT * FROM notes WHERE user_id=$1",
 [req.user.id]
 );

 res.json(result.rows);
};

export const updateNote = async(req,res)=>{

 const {title,content} = req.body;

 const result = await db.query(
 "UPDATE notes SET title=$1,content=$2 WHERE id=$3 RETURNING *",
 [title,content,req.params.id]
 );

 res.json(result.rows[0]);
};

export const deleteNote = async(req,res)=>{

 await db.query(
 "DELETE FROM notes WHERE id=$1",
 [req.params.id]
 );

 res.json({message:"Deleted"});
};