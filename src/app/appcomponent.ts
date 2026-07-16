import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, MatCardModule,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  contador = 0;
  nome="Anderson";
  cidade="São Paulo";
  somar() { this.contador++; }
  diminuir() { this.contador--; }
  zerar() { this.contador = 0; }
  dobrar() { this.contador *= 2; }

somarCinco(){
 this.contador+=5;
}


mensagem: string = 'Eu sou desenvolvedor senior!';

  idade: number = 47;
  imagem: string = 'images.png';
  off: boolean = false;
  cor: string = 'green';


}
