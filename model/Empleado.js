class Empleado{
    // atributos
    
    // constructor
    constructor(cc,nombresyApellidos,direccion,email,telefono,sueldoBase,tipoEmpleado,tipoBonificacion){
        this.cc =cc;
        this.nombresyApellidos=nombresyApellidos;
        this.direccion=direccion;
        this.email=email;
        this.telefono=telefono;
        this.sueldoBase=parseInt(sueldoBase);  
        this.tipoEmpleado=tipoEmpleado;
        this.tipoBonificacion=tipoBonificacion;
        this.saldoTotal = this.hallarSueldo(); 
    }

    hallarSueldo() {
        let adicion = 0;
        switch(this.tipoBonificacion) {
            case 'A': adicion = 1000; break;
            case 'B': adicion = 2000; break;
            case 'C': adicion = 3000; break;
			case 'D': adicion = 4000; break;
            default: adicion = 0;
        }
         return parseInt(this.sueldoBase) + adicion;
    }
}