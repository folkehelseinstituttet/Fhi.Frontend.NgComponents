import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhiTabBarComponent } from './fhi-tab-bar.component';

describe('FhiTabBarComponent', () => {
  let component: FhiTabBarComponent;
  let fixture: ComponentFixture<FhiTabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhiTabBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FhiTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
