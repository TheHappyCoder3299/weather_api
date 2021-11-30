//We make sure that we are not in a production environment
if(process.env.NODE_ENV !== `production`){
    //This loads everything in our dotenv file and populates our process.env.ACCUWEATHER_API_KEY
    require(`dotenv`).config();
}


const ACCUWEATHER_API_KEY=process.env.ACCUWEATHER_API_KEY;
const GOOGLE_API_KEY=process.env.GOOGLE_API_KEY;
const express=require(`express`);

const app=express();

app.use(express.json());
app.use(express.static(`public`));


//Our API has only a single endpoint

app.post('/weather',(req,res)=>{

});

app.listen(3000,()=>{
    //This callback runs when the server has started
    console.log('Server started');
})

