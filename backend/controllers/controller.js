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
    {const { email, password } = req.body;

try {
    const user = await login.findOne({ where: { email } });
    
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
  console.log("User and password wrong");
  res.status(404).json({ error: "User not found" });
}

    } catch (error) {
        res.status(404).json
        console.log(error)
    
    }
}

export const Alelo = async (req,res)=>{
    const { email, username, password } = req.body;

    try {
        // Cek jika ada field yang kosong
        if (!email || !username || !password) {
            return res.status(400).json({ msg: "Semua field harus diisi", statCode: "400" });
        }
    
        // Cek apakah email sudah terdaftar
        const validation = await login.findOne({ where: { email } });
        if (!validation) {
            const saltRounds = 10;
            const hashed = await bcrypt.hash(password, saltRounds);
            await login.create({
                username: username,
                email: email,
                password: hashed
            });
            return res.status(201).json({ msg: "Akun tersimpan", statCode: "201", hasil: hashed });
        } else {
            return res.status(409).json({ msg: "Email sudah terdaftar", statCode: "409" });
        }
    
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server", error: error.message });
    }
    
}  