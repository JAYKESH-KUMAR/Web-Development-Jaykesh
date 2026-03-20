//const http = require('node:http');
//const hostname='127.0.0.1';
//const port=3000;

 //const server = http.createServer((req,res) =>{
  //  res.statusCode = 200;
   // res.setHeader('Content-type', 'text/plain');
    //res.end('Hello World23\n');
  //  res.end('<h1>Hey</h1>');

// });
// //server.listen(port,hostname, () =>{
  //  console.log(`Server running at http://${hostname}:${port}/`);
 //})

 const express= require('express')
 const app = express()
 const port= 3000
 //app.use(express.static('public'))
 // app.get or app.post or app.put or app.delete(path, hander)

 app.get('/', (req,res)=>{
   res.send('Hello World!')
 })

 app.get('/ about', (req,res)=>{
   res.send('About us')
 })

 app.get('/contact', (req,res)=>{
   res.send('contact me!')
 })
 app.get('/blog', (req,res)=>{
   res.send('Hello blog!')
 })

 app.get('/blog/:slug',(req,res)=>{
   // logic to fetch {slug} from the db
   console.log(req.params) // will output{slug:'intro-to-padosi'}

   console.log(req.query)  // will output{mode:'dark',region: 'in'}
   res.send('Hello ${req.params.slug}')
 })

 //app.get('/blog/intro-to-python',(req,res)=>{
   // logic to fetch intro to js from the db
   //res.send('Hello intro-to-python!')
// })

 

 

 app.listen(port, () =>{
   console.log(`Example app listening on port ${port}`)
 })