import { TestBed } from '@angular/core/testing';

import { FirebaseControllerService } from './firebase-controller.service';

describe('FirebaseControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseControllerService = TestBed.get(FirebaseControllerService);
    expect(service).toBeTruthy();
  });
});
