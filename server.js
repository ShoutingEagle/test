const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({
    origin: 'http://127.0.0.1:5500',  // Replace with the allowed origin
  }));


app.get('/',(req,res) => {
    res.json({'message':'Hello from backend'});
})

app.listen(8080,() => {
    console.log('server is running');
})