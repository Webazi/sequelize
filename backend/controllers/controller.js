import {login, ChatModel} from '../models/models.js'
import bcrypt, { compare } from 'bcrypt';
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
    
    if(!user){
        res.status(404).json({msg:"user tidak di temukan",statCode:"404"})
    }
else if (user) {
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    res.status(200).json({msg:"password benar",statCode:"200"})
  } else {
    res.status(404).json({msg:"salah",statCode:"404"})
  }
}

else {
  // Tangani error jika user tidak ditemukan
  console.log("User not found");
  res.status(404).json({ error: "User not found" });
}

    } catch (error) {
        res.status(404).json
        console.log(error)
    
    }
}

export const Alelo = async (req,res)=>{
    const {user,password} = req.body
  
    try {
        const salt = 10
        const hashed =  await bcrypt.hash(password,salt);
        login.create({
            username:user,
            password:hashed
        });
        res.status(201).json({msg:"akun tersimpan",statCode:"201",hasil:`${hashed}`})
    } catch (error) {
        res.status(404).json
        console.log(error)
        
    }
}  