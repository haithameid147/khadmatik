import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFoundationdialogComponent } from './show-foundationdialog.component';

describe('ShowFoundationdialogComponent', () => {
  let component: ShowFoundationdialogComponent;
  let fixture: ComponentFixture<ShowFoundationdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFoundationdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFoundationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
