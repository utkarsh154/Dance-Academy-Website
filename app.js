const express=require("express");
const path=require("path");  
const app= express();
const port =8800;

//for serving static files
//Express specific stuff
app.use('/static',express.static('static'));
app.use(express.urlencoded())
//pug specific stuffs
//making template engine as pug
app.set('view engine', 'pug');

//set the views directory
app.set('views',path.join(__dirname,'views'))

//ENDPOINTS
app.get('/',(req,res)=>{
    
    const params ={}
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    
    const params ={}
    res.status(200).render('contact.pug',params);
})

// START THE SERVER
app.listen(port,()=>{
    console.log("the Application running on port 6000")
})