import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderaddproductPage } from './orderaddproduct.page';

describe('OrderaddproductPage', () => {
  let component: OrderaddproductPage;
  let fixture: ComponentFixture<OrderaddproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderaddproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderaddproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
