
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here
app.use(bodyParser.urlencoded({ extended: false}));

/** 1) Meet the node console. */

//Use body-parser to Parse POST Requests - Exercise 12 on FreeCodeCamp
app.post('/name', (req, res) => { 
  let email = [req.body.first.toLowerCase() + '@' + req.body.website,
req.body.first.toLowerCase() + req.body.last.toLowerCase() + '@' + req.body.website,
req.body.last.toLowerCase() + '@' + req.body.website,
req.body.first.toLowerCase() +'.' +req.body.last.toLowerCase() + '@' + req.body.website,
req.body.last.toLowerCase() +'.' +req.body.first.toLowerCase() + '@' + req.body.website,
req.body.first[0].toLowerCase() +'.' +req.body.last.toLowerCase() + '@' + req.body.website,
req.body.first[0].toLowerCase() + req.body.last[0].toLowerCase() + '@' + req.body.website]
  res.json({email: email});
});

/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */
app.use(express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
//Exercise FreeCodeCamp... Implement a Root-Level Request Logger Middleware
app.use(function middleware(req, res, next) {
  // Do something
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  // Call the next function in line:
  next();
});


/** 8) Chaining middleware. A Time server */
app.get('/now', function(req,res, next){
  
  next();
}, function(req, res){
 var time = new Date().toString();
  console.log('time'+time);
  res.json({'time': time});
}
       );

/** 9)  Get input from client - Route parameters */
app.get("/echo/:word", function(req, res) {
  var word = req.params.word;
   res.json({'echo': word});
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */
app.get("/web/:word", function(req, res) {
  var word = req.params.word;
   res.json({'website': 'www.' + word.toLowerCase().replace(/\s+/g, '') + '.ch' });
});



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//create the  WEB web page... 
app.get("/web/", function(req, res) {
  res.sendFile(__dirname + "/views/web.html");
});
//Use body-parser to Parse POST Requests 
app.post('/web', (req, res) => { 
  let website = ['www.'+ req.body.company.toLowerCase().replace(/\s+/g, '') +'.ch', 
                 'www.'+ req.body.company.toLowerCase().replace(/\s+/g, '') + '.com', 
                 'www.'+ req.body.company.toLowerCase().replace(/\s+/g, '-') + '.ch', 
                 'www.'+ req.body.company.toLowerCase().replace(/\s+/g, '-') + '.com' ]
  res.json({website: website});
});

//serve json files
 //app.get("/json", function(req, res) {
   //     res.json({"message": "Hello json"});
 // });
app.get("/json", function(req, res) {
if (process.env.MESSAGE_STYLE === "uppercase") 
      res.json({"message": "HELLO JSON"});
  else 
      res.json({"message": "Hello json"});
})

//API URL SHORTNER
//create the  WEB web page... 
app.get("/api/shorturl/", function(req, res) {
  res.sendFile(__dirname + "/views/shorturl.html");
});
//Use body-parser to Parse POST Requests 
app.post('/url', (req, res) => { 
  let url = req.body.url
  let shorturl = req.body.url[10]
  res.json({original_url: url, short_url: shorturl});
});



//END OF API SHORTNER

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
