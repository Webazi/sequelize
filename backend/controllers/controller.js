import models from '../models/models.js'

export const getChat = async(req,res) =>{
    try {
       const data =  await models.findAll();
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
       models.create({
            chat:name,
            from:from
        });
        res.status(201).json({msg:"pesan terkirim"})
        
    } catch (error) {
        res.status(404).json
        console.log(error)
    }

}