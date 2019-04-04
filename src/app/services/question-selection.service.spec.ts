import { TestBed } from '@angular/core/testing';

import { QuestionSelectionService } from './question-selection.service';

describe('QuestionSelectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionSelectionService = TestBed.get(QuestionSelectionService);
    expect(service).toBeTruthy();
  });
});
