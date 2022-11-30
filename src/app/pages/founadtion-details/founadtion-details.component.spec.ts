import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounadtionDetailsComponent } from './founadtion-details.component';

describe('FounadtionDetailsComponent', () => {
  let component: FounadtionDetailsComponent;
  let fixture: ComponentFixture<FounadtionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FounadtionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FounadtionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
