import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CulturalWorkshopPage } from './cultural-workshop.page';

describe('CulturalWorkshopPage', () => {
  let component: CulturalWorkshopPage;
  let fixture: ComponentFixture<CulturalWorkshopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulturalWorkshopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CulturalWorkshopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
