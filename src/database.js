const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://marco:marco@cluster0-wwcr6.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("la base de datos ya se conecto a MongoDB Atlas"),
)
.catch((e)=>console.log(e)
)