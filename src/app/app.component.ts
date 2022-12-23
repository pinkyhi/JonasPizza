import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isBuyFlow = false;

  title = 'JonasPizza';
  buyClick($event : any) : void {
    this.isBuyFlow = true;
  }
}

