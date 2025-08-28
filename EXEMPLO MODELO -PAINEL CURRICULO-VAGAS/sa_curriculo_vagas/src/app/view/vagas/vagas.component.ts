import { Component, OnInit } from '@angular/core';
 
interface Vaga {
  titulo: string;
  departamento: string;
  local: string;
  tipo: string;
  dataPublicacao: Date;
}
 
@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.scss']
})
export class VagasComponent implements OnInit {
  vagas: Vaga[] = [];
  currentYear: number = new Date().getFullYear();
 
  ngOnInit(): void {
    this.vagas = [
      {
        titulo: 'Analista de Marketing Digital Pleno',
        departamento: 'Marketing',
        local: 'Remoto',
        tipo: 'CLT',
        dataPublicacao: new Date(2025, 0, 3)
      },
      {
        titulo: 'Desenvolvedor Frontend Jr.',
        departamento: 'Tecnologia',
        local: 'Remoto',
        tipo: 'CLT',
        dataPublicacao: new Date(2025, 1, 5)
      },
      {
        titulo: 'Estagiário de RH',
        departamento: 'Recursos Humanos',
        local: 'Híbrido',
        tipo: 'Estágio',
        dataPublicacao: new Date(2025, 2, 8)
      },
      {
        titulo: 'Gerente de Vendas',
        departamento: 'Comercial',
        local: 'Presencial',
        tipo: 'CLT',
        dataPublicacao: new Date(2025, 3, 12)
      },
      {
        titulo: 'Designer Gráfico',
        departamento: 'Design',
        local: 'Remoto',
        tipo: 'PJ',
        dataPublicacao: new Date(2025, 4, 20)
      },
      {
        titulo: 'Analista de Suporte Técnico',
        departamento: 'Tecnologia',
        local: 'Híbrido',
        tipo: 'CLT',
        dataPublicacao: new Date(2025, 5, 12)
      }
    ];
  }
 
  candidatar(vaga: Vaga): void {
    alert(`Você se candidatou para a vaga: ${vaga.titulo}`);
  }
}