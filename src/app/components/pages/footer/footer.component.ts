import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(element: any) {
    console.log(element);
    switch (element) {
      case 'somos':
        element = document.querySelector('#somos');
        break;
      case 'slider':
        element = document.querySelector('#slider');
        break;
      case 'clientes':
        element = document.querySelector('#clientes');
        break;
      case 'categorias':
        element = document.querySelector('#categorias');
        break;
      case 'contacto':
        element = document.querySelector('#contacto');
        break;
      default:
        break;
    }

    setTimeout(() => element.scrollIntoView({behavior: 'smooth'}), 100);
    // element.scrollIntoView({ behavior: 'smooth' });
    // element = null;
  }
}
