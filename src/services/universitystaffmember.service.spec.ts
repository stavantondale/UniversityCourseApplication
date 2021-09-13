import { TestBed } from '@angular/core/testing';

import { UniversitystaffmemberService } from './universitystaffmember.service';

describe('UniversitystaffmemberService', () => {
  let service: UniversitystaffmemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversitystaffmemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
