const express=require('express');
const hbs=require('hbs');
var app=express();

const port =process.env.PORT||3000;//heroku
app.set('view engine','hbs');

app.get('/',(req,res)=>{
  res.render(__dirname+'/public',{
    pageTitle:'index',
    //currentYear:new date().getfullyear()
  });
});

app.listen(port,()=>{
  console.log(`Port is up on ${port}`);
});
