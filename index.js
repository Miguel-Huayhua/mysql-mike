const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')
const fs = require('fs')
const pat = require('path')


//routers
const routeget = require('./routes/gets')

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))




app.use('/users', routeget)




app.set('port', process.env.PORT || 5000)






app.listen(app.get('port'), () => {
    console.log(`Escuchando puerto ${app.get('port')}`)
})


