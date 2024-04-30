import mongoose from "mongoose"
const movieschema=new mongoose.Schema({
    title:{
        type:"string",
        required:true
},
    description:{
        type:"string",
        required:true    },
    genere:{
        type:"string",
        required:true
    },
    rating:{
        type:"string",
        required:true
    },
    moviephoto:{
        type:"string",
        required:true
    },
    herophoto:{
        type:"string",
        required:true
    },
    heroinephoto:{
        type:"string",
        required:true
    }
        
})
const Movie = mongoose.model('Movie', movieschema);

export default Movie;