import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {

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
  // scrollToElement($element): void {
  //   console.log($element);
  //   $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  // }

}
