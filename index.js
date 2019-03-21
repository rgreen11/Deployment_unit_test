const express = require('express')
const app = express()

app.get('/ping', (req, res)=>{
    res.status(200);
    res.json({'pong': 'true'})
})

const port = 5000
app.listen(process.env.PORT || port, ()=>{
    console.log('lisenting on port 5000')
})