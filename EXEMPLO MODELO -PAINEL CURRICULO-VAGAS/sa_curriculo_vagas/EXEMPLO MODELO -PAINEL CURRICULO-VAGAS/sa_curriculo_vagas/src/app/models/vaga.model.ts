export class Vaga {


  constructor(
    public id: number,
    public titulo: string,
    public departamento: string,
    public local: string,
    public tipo: number,
    public dataPublicacao: Date,
  ) {}

}