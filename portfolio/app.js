import express from 'express'
import {join} from 'path'
import web from './routes/web.js'

const app= express()
const port = 3000

app.set('view engine','ejs')
app.use('/',web)
app.use(express.static('public'))

app.listen(port,(req,res)=>{
    console.log('port run on http://localhost:3000')
})