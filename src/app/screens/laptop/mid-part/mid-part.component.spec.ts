import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidPartComponent } from './mid-part.component';

describe('MidPartComponent', () => {
  let component: MidPartComponent;
  let fixture: ComponentFixture<MidPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MidPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
