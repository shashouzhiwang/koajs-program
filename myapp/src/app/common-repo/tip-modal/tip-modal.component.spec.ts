import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipModalComponent } from './tip-modal.component';

describe('TipModalComponent', () => {
  let component: TipModalComponent;
  let fixture: ComponentFixture<TipModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
