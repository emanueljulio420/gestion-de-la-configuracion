const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')
const eschema= mongoose.Schema


/// Esquema de base de datos 

const eschemaoperacion= new eschema({
    operacion: {type: String, requiere: true},
    resultdo:{type:String, requiere: true},
    fecha:{type: String, requiere:true },

});


/// Modelo de base de datos con operacion y esquema de la base de datos 'eschemaoperacion'
const ModeloOperacion = mongoose.model('operaciones', eschemaoperacion)

module.exports= router


/// Ejemplo para validar que el servidor este corriendo
router.get('/ejemplo', (req, res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})

/// Peticion post para registrar una nueva operacion
router.post('/registrar', (req, res )=>{

    const {operacion,resultdo,fecha} = req.body;

    const nuevaoperacion=ModeloUsuario({
        operacion: operacion,
        resultado: resultdo,
        fecha: fecha

    })
    nuevaoperacion.save(function(err){
        if (!err){
            res.send('Operacion registrada correctamente')

        }else{
            res.send(err)
        }
    })

} )



router.get('/operaciones_registradas', async (req, res) => {
    try {
      const users = await ModeloOperacion.find();
      res.status(200).send(users);
    } catch (error) {
      console.error('Error al obtener las operaciones:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

