import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = null;
  tarefas = [
    'Programar gerenciador de tarefas'
  ];

  adicionar() {
    this.tarefas.push(this.titulo);
    this.titulo = null;
  }
}
