import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailCulturalWorkshopPage } from './detail-cultural-workshop.page';

describe('DetailCulturalWorkshopPage', () => {
  let component: DetailCulturalWorkshopPage;
  let fixture: ComponentFixture<DetailCulturalWorkshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCulturalWorkshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailCulturalWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
