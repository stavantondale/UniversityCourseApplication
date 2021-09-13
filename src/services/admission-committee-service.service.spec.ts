import { TestBed } from '@angular/core/testing';

import { AdmissionCommitteeServiceService } from './admission-committee-service.service';

describe('AdmissionCommitteeServiceService', () => {
  let service: AdmissionCommitteeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmissionCommitteeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
