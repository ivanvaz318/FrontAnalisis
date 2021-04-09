export class Usuario {
  constructor(
    public IdUsuario: number,
    public Nombre: string,
    public ApellidoPaterno: string,
    public ApellidoMaterno: string,
    public Email: string,
    public Contrasena: string,
    public Activo: string,
    public Token: string
  ) {}
}