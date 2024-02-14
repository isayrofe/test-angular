import { TestBed } from '@angular/core/testing';

import { HttpinventarioInterceptor } from './httpinventario.interceptor';

describe('HttpinventarioInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpinventarioInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpinventarioInterceptor = TestBed.inject(HttpinventarioInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
