import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetradiusPage } from './setradius.page';

describe('SetradiusPage', () => {
  let component: SetradiusPage;
  let fixture: ComponentFixture<SetradiusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetradiusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetradiusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
