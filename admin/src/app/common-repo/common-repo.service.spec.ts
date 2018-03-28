import { TestBed, inject } from '@angular/core/testing';

import { CommonRepoService } from './common-repo.service';

describe('CommonRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonRepoService]
    });
  });

  it('should be created', inject([CommonRepoService], (service: CommonRepoService) => {
    expect(service).toBeTruthy();
  }));
});
