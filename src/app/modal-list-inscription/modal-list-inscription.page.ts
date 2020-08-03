import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilProviderService } from '../services/util-provider.service';
import { ModalActivityAddPage } from '../modal-activity-add/modal-activity-add.page';


@Component({
  selector: 'app-modal-list-inscription',
  templateUrl: './modal-list-inscription.page.html',
  styleUrls: ['./modal-list-inscription.page.scss'],
})
export class ModalListInscriptionPage implements OnInit {
  dataJson : any = [];
  listCheck: any = [];
  public disabled = true;

  constructor(
    private modalController: ModalController,
    private services: UtilProviderService,
  ) { }

  ngOnInit() {
    this.services.getDataListGroupInscription().subscribe(data =>{
      var vm = this;
      vm.dataJson = data;
    });
  }
  closeModel(){
    this.modalController.dismiss();
  }
  async selectGroup(){
    this.closeModel();
    const myModal = await  this.modalController.create({
      component: ModalActivityAddPage,
      cssClass: 'modal_activity_add',
      backdropDismiss:false
    });
    return await myModal.present();
  }
  activateButton(value){
    if(value){
      this.addCheck();
    }else{
      this.removeCheck();
    }
    if(this.listCheck.length > 0){
      this.disabled = false;
    }else{
      this.disabled = true;
    }
  }
  addCheck(){
    this.listCheck.push(true);
  }
  removeCheck(){
    const index = this.listCheck.indexOf(true);
    if (index > -1) {
      this.listCheck.splice(index, 1);
    }
  }
}
