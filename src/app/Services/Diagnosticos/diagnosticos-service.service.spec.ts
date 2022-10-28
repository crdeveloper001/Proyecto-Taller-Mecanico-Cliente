import { TestBed } from '@angular/core/testing';

import { DiagnosticosServiceService } from './diagnosticos-service.service';

describe('DiagnosticosServiceService', () => {
  let service: DiagnosticosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosticosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
