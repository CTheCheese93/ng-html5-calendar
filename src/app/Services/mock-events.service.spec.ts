import { TestBed } from '@angular/core/testing';

import { MockEventsService } from './mock-events.service';

describe('MockEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockEventsService = TestBed.get(MockEventsService);
    expect(service).toBeTruthy();
  });
});
