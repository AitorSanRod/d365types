const { exec } = require('child_process');

// Función para ejecutar un comando y manejar su salida
function ejecutarComando(comando, callback) {
  exec(comando, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error ejecutando el comando: ${comando}`);
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    callback();  // Llamamos al siguiente comando
  });
}

// Ejecutar los primeros comandos secuenciales
ejecutarComando('cd ../../', () => {
  ejecutarComando('git clone https://github.com/AitorSanRod/d365types', () => {
    
    // Comandos de eliminación se ejecutan solo después de clonar el repositorio
    ejecutarComando('del package.json', () => {
      ejecutarComando('del package-lock', () => {
        ejecutarComando('del node_modules', () => {
          console.log('Todos los comandos se han ejecutado correctamente.');
        });
      });
    });
  });
});
