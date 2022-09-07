import { TestBed, inject } from '@angular/core/testing';

import { AnotherLoggerService } from './another-logger.service';
import { LogLevel } from './log-level';

describe('AnotherLoggerService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnotherLoggerService, { provide: 'logLevel', useValue: LogLevel.INFO }]
    });
    
  });

  it('should be created', inject([AnotherLoggerService], (service: AnotherLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
