const request = require('request');

var coinInfoNEO=()=>{
  return new Promise((resolve,reject)=>{
    request({
      url:`http://coincap.io/page/NEO`,
      json:true
    },(error,response,body)=>{
      resolve({
        coinName: body.alt_name,
        coinPrice:body.price,
        cap24hrChange:body.cap24hrChange
      });
    });
  });
}
coinInfoNEO().then((coinNEO_Details) => {
    var coinNEO=coinNEO_Details;
    console.log(coinNEO);
    module.exports.coinNEO=coinNEO;
  }, (errorMessage) => {
    console.log(errorMessage);
});

var coinInfoBTC = ()=> {
  return new Promise((resolve, reject) => {
    request({
      url: `http://coincap.io/page/BTC`,
      json: true
    }, (error, response, body) => {
      resolve({
        coinName: body.alt_name,
        coinPrice:body.price,
        cap24hrChange:body.cap24hrChange
      });
    });
  });
}
coinInfoBTC().then((coinBTC_Details) => {
    var coinBTC=coinBTC_Details;
    console.log(coinBTC);
    module.exports.coinBTC=coinBTC;
  }, (errorMessage) => {
    console.log(errorMessage);
  });

var coinInfoETC = ()=> {
    return new Promise((resolve, reject) => {
      request({
        url: `http://coincap.io/page/ETC`,
        json: true
    },(error, response, body) => {
      resolve({
        coinName: body.alt_name,
        coinPrice:body.price,
        cap24hrChange:body.cap24hrChange
      });
    });
  });
}
coinInfoETC().then((coinETC_Details) => {
    var coinETC=coinETC_Details;
    console.log(coinETC);
    module.exports.coinETC=coinETC;
    }, (errorMessage) => {
    console.log(errorMessage);
  });
