import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroServicioComponent } from './nuestro-servicio.component';

describe('NuestroServicioComponent', () => {
  let component: NuestroServicioComponent;
  let fixture: ComponentFixture<NuestroServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestroServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestroServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
