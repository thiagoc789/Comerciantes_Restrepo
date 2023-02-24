import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { businesses } from '../imagenes';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  center: google.maps.LatLngLiteral  = { lat: 0, lng: 0 };
  marcadores: any;
  markerOptions: google.maps.MarkerOptions = {};

  constructor() {}

  ngOnInit() {
    this.getPosition(); 
    this.marcadores = businesses;
    this.markerOptions = {
      position: {
        lat: -72.0000000,
        lng: 4.0000000
      },
      title: 'Mi marcador',
      icon: {
        url: this.marcadores[0].url
      }
    };
    
  }  

  async getPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log(coordinates)
    this.center = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,  
      
    }  
  }
  



  




}


