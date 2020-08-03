import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {HTTP} from '@ionic-native/http/ngx';
import {Platform, LoadingController} from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilProviderService {
  constructor(
    private httpClient: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private loadingCtrl: LoadingController
    ) { }
  
  getDataCulturalWorkshop(){
    return this.httpClient.get<any>("assets/data/cultural_workshop.json").pipe(map(data => {
      return data.data;
    }));
  }
  getDataListGroupInscription(){
    return this.httpClient.get<any>("assets/data/list_group_inscription.json").pipe(map(data => {
      return data.data;
    }));
  }
  async getUrlPost(id,url){
    let loading = await this.loadingCtrl.create();
    await loading.present();
    const formData = new FormData();
    formData.append('id', id);
    return this.httpClient.post(url,formData).pipe(
      finalize (()=>loading.dismiss())
    ).subscribe(data =>{
      return data;
    }, err => {
      console.log("Js Call error:", err);
    });
  }
  
}
