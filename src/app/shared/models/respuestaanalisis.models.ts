export class RespuestaAnalisis{
    constructor(
        public respuestaAnalisis:Respuestaanalisis[]
    ){}
}
 export  class Respuestaanalisis{
    constructor(
        public idcomentario:number,
        public comentario:string,
        public score_tag:string,
        public agreement:string,
        public subjectivity:string,
        public confidence:string,
        public irony:string

    ){}
}