const express= require('express');
const app= express();

const Tarea = require('./model/Tarea');

//configuracion
app.set('views', __dirname +'/views');
app.set('view engine' , 'ejs');


//middelwear
app.use(express.json());
app.use(express.urlencoded({extended:false}))



//rutas

app.get('/',async(req,res)=>{
    const tarea = await Tarea.find();
    console.log(tarea);
    res.render('index',{tarea});
})


app.post('/crear', async(req,res)=>{
    const nuevaTarea= new Tarea({
        tarea:req.body.tarea,
        descripcion:req.body.descripcion
        })
        await nuevaTarea.save();
        res.redirect('/');
})

//archivos esaticos
app.use(express.static(__dirname +'/public'));


module.exports = app;



