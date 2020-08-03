import { Component, OnInit } from '@angular/core';
import { UtilProviderService } from '../services/util-provider.service';
import { ActivatedRoute } from "@angular/router";
import { ModalController, Platform, LoadingController } from '@ionic/angular';
import { ModalListInscriptionPage } from '../modal-list-inscription/modal-list-inscription.page';
import {HTTP} from '@ionic-native/http/ngx';
import {from} from 'rxjs';
import {finalize} from 'rxjs/operators';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-detail-cultural-workshop',
  templateUrl: './detail-cultural-workshop.page.html',
  styleUrls: ['./detail-cultural-workshop.page.scss'],
})
export class DetailCulturalWorkshopPage implements OnInit {
  dataJson : any = [];
  idActivity : string;
  map: null;
  lat: any;
  lng: any;
  titleMarket: string = '';

  constructor(
    private nativeHttp: HTTP,
    private route: ActivatedRoute,
    private modal: ModalController,
    private plt: Platform,
    private loadingCtrl: LoadingController
  ) {
    this.lat = 4.658383846282959;
    this.lng = -74.09394073486328;
   }

  ngOnInit() {
    this.idActivity = this.route.snapshot.paramMap.get("id");
    if(this.plt.is('cordova')){
      let url = "https://plac3-everis.herokuapp.com/RS_PLACT_RSMOVIL/actividades/getDetalleActividad";
      this.getUrlPostNative(this.idActivity,url);
    }
  }
  async getUrlPostNative(id,url){
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const formData = new FormData();
    formData.append('id', id);
    let native =  this.nativeHttp.post(url,{},{
      'Content-Type':'application/json'
    });
    from(native).pipe(
      finalize (()=>loading.dismiss())
    ).subscribe(data =>{
      let json = JSON.parse(data.data);
      this.dataJson = Array.of(json.datos);
      this.loadMap(json.datos);
    }, err => {
      console.log("Js Call error:", err);
    });
  }
  loadMap(obj) {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: parseInt(obj.latitud), lng: parseFloat(obj.longitud)};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      const marker = {
        position: {
          lat: parseInt(obj.latitud),
          lng: parseFloat(obj.longitud)
        },
        title: obj.titulo
      }
      this.addMarker(marker);
      mapEle.classList.add('show-map');
    });
  }
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }
  async selectGroup(){
    const myModal = await  this.modal.create({
      component: ModalListInscriptionPage,
      cssClass: 'modal_inscription'
    });
    return await myModal.present();
  }

}
