import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhiMainMenuComponent } from './fhi-main-menu.component';

describe('FhiMainMenuComponent', () => {
  let component: FhiMainMenuComponent;
  let fixture: ComponentFixture<FhiMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhiMainMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FhiMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
