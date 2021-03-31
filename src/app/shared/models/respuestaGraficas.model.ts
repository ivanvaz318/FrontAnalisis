export class respuestaGraficas{
    constructor(
        public respuestaGraficas:RespuestaGra
    ){}
}
 export  class RespuestaGra{
    constructor(
        public score_tag:Score_tag,
        public agreement:Agreement,
        public subjectivity:Subjectivity,
        public confidence:number, 
        public irony:Irony
    ){}
}
export  class Score_tag{
    constructor(
       public positivo?:number, 
       public neutro?: number, 
       public negativo?:number, 
       public none?: number

    ){}
}
export  class Agreement{
    constructor(
        public AGREEMENT:number,
        public DISAGREEMENT:number
    ){}
}
export  class Subjectivity{
    constructor(
        public OBJECTIVE:number,
        public SUBJECTIVE:number
    ){}
}
export  class Irony{
    constructor(
        public NONIRONIC:number,
        public IRONIC:number,
    ){}
}
