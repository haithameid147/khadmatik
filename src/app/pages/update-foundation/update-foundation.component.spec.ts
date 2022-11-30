import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoundationComponent } from './update-foundation.component';

describe('UpdateFoundationComponent', () => {
  let component: UpdateFoundationComponent;
  let fixture: ComponentFixture<UpdateFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFoundationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
