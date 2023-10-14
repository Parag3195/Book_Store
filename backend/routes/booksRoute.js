import express  from "express";
import { Book } from "../models/bookModel.js";

const router= express.Router();

// Route to save new book

router.post('/',async (request,response)=>{
    try{
        if(
    
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear ||
            !request.body.img 
            ){
         return response.status(400).send({
            message:'Send all required fields: title, author, publishYear'
         });
            }
    
     // variable for new book
    
        const newBook = {
            title:request.body.title,
            author:request.body.author,
            publishYear:request.body.publishYear,
            img:request.body.img
        };
    
        const book = await Book.create(newBook);
    
        return response.status(201).send(book);
    
    }catch(err){
    console.log(err.message);
    response.status(500).send({message:err.message});
    }
    });
    
    // Route to GET all Books databse
    router.get('/', async (request,response)=>{
    try{
        const books= await Book.find({});
        return response.status(200).json({
            count:books.lenght,
            data:books
        });
        
    }catch(err){
        console.log(err.message);
        response.status(500).send({message:err.message});
    }
    });
    
    // Route to GET one Book by id databse
    router.get('/:id', async (request,response)=>{
    try{
        const {id} = request.params;
        const book = await Book.findById(id);
        return response.status(200).json(book);
        
    }catch(err){
        console.log(err.message);
        response.status(500).send({message:err.message});
    }
    });
    
    // Route for Update a Book
    
    router.put('/:id', async(request,response)=>{
        try{
            if(
    
                !request.body.title ||
                !request.body.author ||
                !request.body.publishYear ||
                !request.body.img 
                ){
             return response.status(400).send({
                message:'Send all required fields: title, author, publishYear'
             });
                }
     const {id} = request.params;
     const result = await Book.findByIdAndUpdate(id, request.body);
     
     if (!result){
        return response.status(404).json({message:'Book not found !'});
     }else{
        return response.status(200).send({message:'Book Updated Successfully.'})
     }
    
        }catch (err){
            console.log(err.message);
            response.status(500).send({message:err.message});
        }
    });
    
    
    // Route for Delete a Book
    router.delete('/:id', async(request,response)=>{
        try{
            const { id } = request.params;
     const result = await Book.findByIdAndDelete(id);
    
     if(!result){
        return response.status(404).json({message:'Book not found'});
     }else{
    
         return response.status(200).send({message:'Book deleted Successfully.'})
        }
    
        }catch(err){
            console.log(err.message);
            response.status(500).send({message:err.message}); 
        }
    });
    
   export default router; 