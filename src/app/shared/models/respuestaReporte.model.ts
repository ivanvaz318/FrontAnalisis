export class Reporte {
    constructor(
        public IdReporteGenerado: number,
        public NombreReporte: string,
        public FechaAnalisis: Date,
        public IdComentario: number,
        public Comentario: string,
        public IdAnalisis: number,
        public Score_tag: string,
        public Agreement: string,
        public Subjectivity: string,
        public Confidence: string,
        public Irony: string,
        public IdUsuario: number,
        public Nombre: string,
        public ApellidoPaterno: string,
        public ApellidoMaterno: string,
        public Email: string
    ){
        
    }
}

export class Reportes{
    constructor(
        public respuestaReporte: Reporte[]
    ) {

    }
}