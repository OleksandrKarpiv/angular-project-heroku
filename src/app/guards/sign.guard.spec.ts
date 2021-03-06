import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { SignGuard } from './sign.guard';

describe('SignGuard', () => {
  let guard: SignGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
    ]
    });
    guard = TestBed.inject(SignGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
