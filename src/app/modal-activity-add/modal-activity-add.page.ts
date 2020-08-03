import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-activity-add',
  templateUrl: './modal-activity-add.page.html',
  styleUrls: ['./modal-activity-add.page.scss'],
})
export class ModalActivityAddPage implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }
  goToCulturalWokrShop(){
    this.modalController.dismiss();
    this.router.navigate(['/cultural-workshop']);
  }
}
