import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverCodeConfirmationComponent } from './recover-code-confirmation.component';

describe('RecoverCodeConfirmationComponent', () => {
  let component: RecoverCodeConfirmationComponent;
  let fixture: ComponentFixture<RecoverCodeConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverCodeConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverCodeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
