import {login, ChatModel} from '../models/models.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const getChat = async(req,res) =>{
    try {
       const data =  await ChatModel.findAll();
       res.json(data)
    } catch (error) {
        
    }

   
    
}

export const getChatById = (req,res) =>{

}

export const EditChat = (req,res) =>{

}

export const RemChat = (req,res) =>{

}

export const PostChat = (req,res) =>{
    const name = req.body.name
    const from = req.body.from
    try {
       ChatModel.create({
            chat:name,
            from:from
        });
        res.status(201).json({msg:"pesan terkirim",statCode:"201"})
        
    } catch (error) {
        res.status(404).json
        console.log(error)
    }

}

export const  Login = async (req,res)=>
    {const { username, password } = req.body;

try {
  const user = await login.findOne({ where: { username } });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }else{
    return res.status(201).json({ msg: 'User found' });
 }
        
    } catch (error) {
        res.status(404).json
        console.log(error)
    
    }
}

export const Alelo = async (req,res)=>{
    const {user,password} = req.body
    try {
        login.create({
            username:user,
            password:password
        });
        res.status(201).json({msg:"pesan terkirim",statCode:"201"})
    } catch (error) {
        res.status(404).json
        console.log(error)
        
    }
}  