import { TestBed } from '@angular/core/testing';

import { ProfilemanagementService } from './profilemanagement.service';

describe('ProfilemanagementService', () => {
  let service: ProfilemanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilemanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
