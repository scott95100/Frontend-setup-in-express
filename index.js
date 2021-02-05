////environment variables////

//not useing for this project

////Imports//////
const express= require('express')
const ejsLayouts = require('express-ejs-layouts')

////App setup////
const app = express()
app.set('view engine', 'ejs')

////middleware////
app.use(ejsLayouts)

//this will access css js, anything in the public directory
// <link href='/css/styles.css' rel='text/stylesheet' />
app.use(express.static(__dirname + '/public/'));


////ROUTS////
app.get('/', (req, res)=> {
    res.render('index')
})


////CONTROLLERS////



////PORT/SERVER////
const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> {
    console.log(`Server running on PORT:${PORT}`)
})