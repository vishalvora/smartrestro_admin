import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomersdetialsPage } from './customersdetials.page';

describe('CustomersdetialsPage', () => {
  let component: CustomersdetialsPage;
  let fixture: ComponentFixture<CustomersdetialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersdetialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersdetialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
