const express=require('express');
const hbs=require('hbs');
var app=express();
const coinInfo= require('./APIcall');

const port =process.env.PORT||3000;//heroku
app.set('view engine','hbs');
app.get('/',(req,res)=>{
  res.render(__dirname+'/public',{
    pageTitle:'index',
    coinBTC:JSON.stringify(coinInfo.coinBTC),
    coinETC:JSON.stringify(coinInfo.coinETC),
    coinNEO:JSON.stringify(coinInfo.coinNEO)
  });
});

app.listen(port,()=>{
  console.log(`Port is up on ${port}`);
});
