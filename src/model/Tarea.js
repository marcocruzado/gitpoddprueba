const{Schema,model}= require('mongoose');

const TareaSchema= new Schema({
    tarea: {
        type: String,
        require:true
    },
    descripcion:String
})

module.exports =  model('Tarea',TareaSchema)
