import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalActivityAddPage } from './modal-activity-add.page';

describe('ModalActivityAddPage', () => {
  let component: ModalActivityAddPage;
  let fixture: ComponentFixture<ModalActivityAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalActivityAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalActivityAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
