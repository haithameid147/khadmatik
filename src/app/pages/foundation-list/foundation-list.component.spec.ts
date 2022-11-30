import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationListComponent } from './foundation-list.component';

describe('FoundationListComponent', () => {
  let component: FoundationListComponent;
  let fixture: ComponentFixture<FoundationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
