import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandignPageComponent } from './landign-page.component';

describe('LandignPageComponent', () => {
  let component: LandignPageComponent;
  let fixture: ComponentFixture<LandignPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandignPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
