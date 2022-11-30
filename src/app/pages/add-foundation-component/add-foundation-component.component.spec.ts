import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoundationComponentComponent } from './add-foundation-component.component';

describe('AddFoundationComponentComponent', () => {
  let component: AddFoundationComponentComponent;
  let fixture: ComponentFixture<AddFoundationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoundationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoundationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
