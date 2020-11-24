import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoredisablePage } from './storedisable.page';

describe('StoredisablePage', () => {
  let component: StoredisablePage;
  let fixture: ComponentFixture<StoredisablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredisablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoredisablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
