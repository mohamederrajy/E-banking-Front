import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlafondConfigComponent } from './plafond-config.component';

describe('PlafondConfigComponent', () => {
  let component: PlafondConfigComponent;
  let fixture: ComponentFixture<PlafondConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlafondConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlafondConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
