import { Component, OnInit } from '@angular/core';
import { UtilProviderService } from '../services/util-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cultural-workshop',
  templateUrl: './cultural-workshop.page.html',
  styleUrls: ['./cultural-workshop.page.scss'],
})
export class CulturalWorkshopPage implements OnInit {
  dataJson : any = [];
  constructor(
    private dataCulturaWorkshop: UtilProviderService,
    private router: Router
  ) { }
  ngOnInit() {
    this.dataCulturaWorkshop.getDataCulturalWorkshop().subscribe(data =>{
      var vm = this;
      vm.dataJson = data;
    });
  }
  goToPageDetail(id){
    this.router.navigate(['/detail-cultural-workshop',id]);
  }

}
