import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 4000,
    }
  };

  public images2 = [
    {
      src: 'https://totalreporter.com/wp-content/uploads/2022/02/Imagenes-del-dia-de-la-mujer-2022.jpg',
      title: "Día de la mujer",
      descripcion: "Evento del día de la mujer en Restrepo Valle",
      fecha: "8 de marzo de 2023",

    },
    {
      src: 'https://www.conmishijos.com/uploads/diamadre-p.jpg',
      title: "Dia de la madre",
      descripcion: "Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee Día de la madreeeeee  ",
      fecha: "10 de mayo de 2023",
    },
    {
      src: 'https://www.portafolio.co/files/article_multimedia/uploads/2022/02/07/620152a783a12.jpeg',
      title: "Concierto Kche ",
      descripcion: "Se presentaran varios artistas y de yo me llamo",
      fecha: "11 Julio de 2023",
    }
  ];


  images = [
    {
      src: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
      alt: 'Negocio 1',
    },
    {
      src: 'https://via.placeholder.com/300x200',
      alt: 'Negocio 2',
    },
    {
      src: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
      alt: 'Negocio 3',
    },
    {
      src: 'https://via.placeholder.com/300x200',
      alt: 'Negocio 4',
    },
    {
      src: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg',
      alt: 'Negocio 5',
    },
  ];

  imagesCard = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  constructor() { }

  ngOnInit() {

  }

}
