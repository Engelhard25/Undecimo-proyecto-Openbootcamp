class Estudiante {
    
    Nombre = "Engelhard"
    Asignaturas = ["Javascript","HTML","CSS"]
    
    obtenDatos() {
        return{Nombre: this.Nombre, Asignaturas: this.Asignaturas};
    }
};

const estudiante = new Estudiante();
console.log(estudiante.obtenDatos());