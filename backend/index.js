//importar modulos o librerias
const {mongoose} = require('./db');
const cors = require('cors') //middleware para cors
const  express =require('express');//modulo para crear servidor

var app=express();

//middlewares

app.use(cors({origin:"http://localhost:4200"}))
app.use(express.json())

//rutas
const libroRoutes =require('./routes/libro.routes')
app.use("/api/libro",libroRoutes)

const transaccionRoutes =require('./routes/transaccion.routes')
app.use("/api/transaccion",transaccionRoutes)

const personaRoutes =require('./routes/persona.routes')
app.use("/api/persona",personaRoutes)

const pasajeRoutes =require('./routes/pasaje.routes')
app.use("/api/pasaje",pasajeRoutes)

//configuracion
//app.set("port",process.env.PORT||3000)
app.set("port",3000)

//INICIAR SERVIDOR

app.listen(app.get("port"),()=>{console.log("se inicio el servidor")})