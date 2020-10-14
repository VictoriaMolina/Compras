const { Negocios } = require('../models/negocios.models');

/**
 * Funcion que crea un negocio nuevo.
 * @param {*} req 
 * @param {*} res 
 */
async function nuevoNegocio(req, res){
    const body = req.body

    if(body.ciudad && body.tipo && body.nombre && body.imagen){
        try{
            const nuevoNegocio = await Negocios({
                ciudad: body.ciudad,
                tipo: body.tipo,
                nombre: body.nombre,
                imagen: body.imagen
            }).save();

            if(nuevoNegocio) {
                res.json({'data': nuevoNegocio});
            } else {
                res.status(500).send("ERROR GUARDANDO EL NEGOCIO.")
            }
        }catch(err){
            console.log(err);
            res.status(500).send("ERROR GUARDANDO EL NEGOCIO");
        }
    } else {
        res.status(402).send("PARAMETROS ERRONEOS.")
    }
};

/**
 * Función que muestra una lista de negocios.
 */
async function negociosCiudad(req, res){
    const body = req.body
    //console.log(body)
    
        try{
            const results = await Negocios.find({
                /*longitud: body.lon,
                latitud: body.lat,
                */
               //tipo: body.tipo? body.ciudad : ""
                ciudad: body.ciudad ? body.ciudad : ""
            });
                
            if(results){
                res.json({
                    'data': results
                });
            } else {
                res.json({
                    'data': {}
                });
            }
    
            
        }catch(err){
            console.log(err)
            res.json({
                'data': {}
            });
        }
};

async function negociosList(req, res){
    //const ciudad = req.query.ciudad;
    try{
        const results = await Negocios.find({
            //ciudad: ciudad
        })
        if(results){
            res.json({
                'data': results
            });
        } else {
            res.json({
                'data': {}
            });
        }

        
    }catch(err){
        res.json({
            'data': {}
        });
    }
};


/**
 * Función que actualiza la información de los negocios.
 */
async function negocioUpdate(req, res){
    const negocio = req.body.id;
    const tipo = req.body.tipo;
    const longitud = req.body.longitud;
    const latitud = req.body.latitud;
    const ciudad = req.body.ciudad;
    const nombre = req.body.nombre;
    const imagen = req.body.imagen;

    try{
        if(negocio){
            await Negocios.updateOne({
                _id: negocio
            }, {
                $set: {
                    tipo: tipo,
                    longitud: longitud,
                    latitud: latitud,
                    ciudad: ciudad,
                    nombre: nombre,
                    imagen: imagen
                }
            });

            res.status(200).send("Actualización exitosa.")
        } else {
            res.status(402).send("PARAMETROS ERRONEOS.")
        };
    }catch(err){
        console.log(err);
        res.status(500).send("ERROR");
    }
};

/**
 * Función que elimina un negocio de la lista.
 */
async function negocioDelete(req, res){
    const negocioId = req.body.id;

    if(negocioId){
        try{
            const results = await Negocios.deleteOne({
                _id: negocioId
            });

            if(results){
                res.json({'data': results});
            } else {
                res.status(500).send("ERROR ELIMINANDO.");
            }
        }catch(err){
            console.log(err);
            res.status(500).send("ERROR ELIMINANDO");
        }
    } else {
        res.status(402).send("PARAMETROS ERRONEOS");
    }
}
module.exports = {
    nuevoNegocio,
    negociosList,
    negocioUpdate,
    negocioDelete,
    negociosCiudad
};