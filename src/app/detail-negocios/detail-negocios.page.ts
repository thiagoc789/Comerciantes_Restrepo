import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { businesses } from '../imagenes';

@Component({
  selector: 'app-detail-negocios',
  templateUrl: './detail-negocios.page.html',
  styleUrls: ['./detail-negocios.page.scss'],
})
export class DetailNegociosPage implements OnInit {


  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  marcadores: any;
  markerOptions: google.maps.MarkerOptions = {};
  markerOptions2: google.maps.MarkerOptions = {};
  imagen: any;
  lat: any;
  long: any;


  mapOptions: google.maps.MapOptions = {

    styles: [
      {
        
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#d9e8f1",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },

    ],
  };



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    const imagenId  = this.route.snapshot.paramMap.get('id');
    this.imagen = businesses.find(imagen => imagen.id === parseInt(imagenId!));

    this.marcadores = businesses;
    this.markerOptions = {
      position: {
        lat: this.imagen.lat,
        lng: this.imagen.lng
      },
      
      optimized: true,
      icon: {
        scaledSize: new google.maps.Size(50,50),
        url: this.imagen.icon,
      },
      
    };

    this.markerOptions2 = {
      
            icon: {
        scaledSize: new google.maps.Size(50, 50),
        url: this.imagen.icon,
      },
      

    };

    this.getPosition();
    this.getPosition2();
  }
  

  async getPosition() {
  
    const coordinates = {
      lat: this.imagen.lat,
      lng: this.imagen.lng
    }
    this.center = {
      lat: coordinates.lat,
      lng: coordinates.lng,

    }
  }

  async getPosition2() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log(coordinates)
    this.markerOptions2 = {

      position:
      {
        lat: coordinates.coords.latitude,
        lng: coordinates.coords.longitude,

      },
      title:"Tú",
      label:"Tú",

      icon: {
        scaledSize: new google.maps.Size(50, 50),
        url: 'https://firebasestorage.googleapis.com/v0/b/comerciantes-restrepo.appspot.com/o/Iconos%2F727634.png?alt=media&token=ab05cbcb-5779-4537-91d1-d48f24553746',
      },

    }
  }

}
