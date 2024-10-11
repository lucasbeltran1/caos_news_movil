import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
  };

  items = [
    { title: 'Item 1', description: 'Descripción del item 1', image: 'assets/img/carrusel1.jpg' },
    { title: 'Item 2', description: 'Descripción del item 2', image: 'assets/img/carrusel2.jpg' },
    { title: 'Item 3', description: 'Descripción del item 3', image: 'assets/img/carrusel3.jpg' },
  ];

  cards = [
    {
      image: 'assets/img/carrusel1.jpg',
      title: 'Card Title 1',
      subtitle: 'Card Subtitle 1',
      content: "Here's a small text description for the card content.",
    },
    {
      image: 'assets/img/carrusel2.jpg',
      title: 'Card Title 2',
      subtitle: 'Card Subtitle 2',
      content: "Here's a small text description for the card content.",
    },
    {
      image: 'assets/img/carrusel3.jpg',
      title: 'Card Title 3',
      subtitle: 'Card Subtitle 3',
      content: "Here's a small text description for the card content.",
    },
    {
      image: 'assets/img/foto1.jpg',
      title: 'Card Title 4',
      subtitle: 'Card Subtitle 4',
      content: "Here's a small text description for the card content.",
    },
  ];

  constructor() {}
}
