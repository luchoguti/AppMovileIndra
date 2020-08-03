import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalListInscriptionPage } from './modal-list-inscription.page';

describe('ModalListInscriptionPage', () => {
  let component: ModalListInscriptionPage;
  let fixture: ComponentFixture<ModalListInscriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalListInscriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalListInscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
