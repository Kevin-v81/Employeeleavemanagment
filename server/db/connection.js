const mongoose=require('mongoose');
const dotenv=require('dotenv');

//dotenv config
dotenv.config({path:'./config.env'});
//after dotenv configuration( forsecuring our password in DB)
const DB=process.env.DATABASE;

//mongoose connection(backend-db)
mongoose.connect( DB,
    {useNewUrlParser:true},
    {useCreateIndex:true},
    {useUnifiedTopology:true},
    {useFindAndModify:false},
    )
.then(()=>{console.log("connection successfull")})
.catch((err)=>{console.log(err)});
