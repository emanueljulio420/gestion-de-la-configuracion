const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')
const eschema= mongoose.Schema



/// Esquema de base de datos 

const eschemaoperacion= new eschema({
    operacion: { type: String, required: true },
    resultado: { type: String, required: true },
    fecha: { type: String, required: true }

});

/* const operacionSchema = new mongoose.Schema({
    operacion: { type: String, required: true },
    resultado: { type: String, required: true },
    fecha: { type: String, required: true }
  }); */

/// Modelo de base de datos con operacion y esquema de la base de datos 'eschemaoperacion'
const Modelo_Operacion = mongoose.model('operaciones', eschemaoperacion)




module.exports= router


/// Ejemplo para validar que el servidor este corriendo
router.get('/ejemplo', (req, res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})

/// Peticion post para registrar una nueva operacion
router.post('/registrar', (req, res )=>{

    const {operacion,resultado,fecha} = req.body;

    const nuevaoperacion=Modelo_Operacion({
        operacion: operacion,
        resultado: resultado,
        fecha: fecha

    })
     /* nuevaoperacion.save(function(err){
        if (!err){
            res.send('Operacion registrada correctamente')

        }else{
            res.send(err)
            alert("Hola")
        }
    }) */
    nuevaoperacion.save()
    .then(result => {
      console.log('Operación guardada:', result);
    })
    .catch(error => {
      console.error('Error al guardar la operación:', error);
    });

} )


router.get('/operaciones_registradas', async (req, res) => {
    try {
      const users = await Modelo_Operacion.find();
      res.status(200).send(users);
    } catch (error) {
      console.error('Error al obtener las operaciones:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

