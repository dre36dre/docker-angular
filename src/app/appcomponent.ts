import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  title = signal('hello');

  mensagem: string = 'Eu sou desenvolvedor senior!';
  nome: string = 'Anderson Freires';
  idade: number = 47;
  imagem: string = 'images.png';
  off: boolean = false;
  cor: string = 'green';
}
