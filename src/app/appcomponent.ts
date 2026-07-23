import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  mostrar = true;
  nome = "";
  idade = 47;
  cidade = "São Paulo";
  contador = 0;
  mensagem = "Eu sou desenvolvedor senior!";
  imagem = "images.png";
  off = false;
  cor = "green";

  somar() { this.contador++; }
  diminuir() { this.contador--; }
  zerar() { this.contador = 0; }
  dobrar() { this.contador *= 2; }
  somarCinco() { this.contador += 5; }

  atualizaMensagem() {
    this.mensagem = `Hello ${this.nome}
Age: ${this.idade}
City: ${this.cidade}`;
  }
}
