const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())


app.get('/',(req,res) => {
    res.json({'message':'Hello from backend'});
})

app.listen(8080,() => {
    console.log('server is running');
})