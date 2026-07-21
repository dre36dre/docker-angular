import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatCardModule,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
 nome: string = "";



  contador = 0;

  cidade="São Paulo";
  somar() { this.contador++; }
  diminuir() { this.contador--; }
  zerar() { this.contador = 0; }
  dobrar() { this.contador *= 2; }

somarCinco(){
 this.contador+=5;
}


atualizaMensagem(){
  this.mensagem=
  'Hello ${this.nome}
  Age: ${this.idade}
  City: ${this.cidade}';
}


mensagem: string = 'Eu sou desenvolvedor senior!';

  idade: number = 47;
  imagem: string = 'images.png';
  off: boolean = false;
  cor: string = 'green';


}
