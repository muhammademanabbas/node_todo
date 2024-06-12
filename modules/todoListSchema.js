const mongoose  = require('mongoose') ;

const TodoSchema  =  new mongoose.Schema({
    title:{
        type:String, 
        required:true
    } ,  
    description : {
        type:String,  
        required:true,
    }
});  

const TodoListModule  =  mongoose.model('TodoList', TodoSchema);
module.exports=TodoListModule;