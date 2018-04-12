//npm install express --save
//npm install body-parser --save
//npm install nodemon --save-dev   ********* en el script "start: "nodemon index.js"
//npm install mongoose --save
//npm install mongoose-pagination --save
//npm install bcrypt-nodejs --save *** para encriptar claves.
//npm install connect-multiparty --save ***para manipular ficheros y guardar en el server.
//npm install jwt-simple --save ** token
//npm install moment --save
//npm uninstall package --save /* desinstalar una dependecia del proyecto */
/**
 * Crear base de datos
 * 
 * use nombre_db
 * 
 * COLECCION
 * //crear y insertar coleccion
 * db.nombre_coleccion.save({name: 'alvaro', description: 'desarrollador'})
 * //ver coleccion
 * db.nombre_cloeccion.find(); 
 * //para ver todas las base de datos que tenemos
 * show dbs
 */
// 'use strict';

// const mongoose = require('mongoose');
// const app = require('./app');

// const port = process.env.port || 3000;

// mongoose.connect('mongodb://localhost:27017/laboratoriadb', (error, response) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log("Conexion a base de datos exitosa");
//     app.listen(port, () => {
//       console.log(`el backend se conecto con el puerto ${port}`);
//     });
//   }
// });

'use strict';

const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
    if (err) {
        console.log(`Error a la Conexion de la base de datos: ${err}`)
    }
    console.log('Conexion a la base de datos establecida')

    app.listen(config.port, () => {
        console.log(`api rst corriendo en http://localhost:${config.port}`);
    })
})