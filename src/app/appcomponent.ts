import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  contador = 0;

  somar() { this.contador++; }
  diminuir() { this.contador--; }
  zerar() { this.contador = 0; }
  dobrar() { this.contador *= 2; }


mensagem: string = 'Eu sou desenvolvedor senior!';
  nome: string = 'Anderson Freires';
  idade: number = 47;
  imagem: string = 'images.png';
  off: boolean = false;
  cor: string = 'green';





clicou(){
  alert("Oi");
}
}
