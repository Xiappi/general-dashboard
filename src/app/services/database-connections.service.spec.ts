import { TestBed } from '@angular/core/testing';

import { DatabaseConnectionsService } from './database-connections.service';

describe('DatabaseConnectionsService', () => {
  let service: DatabaseConnectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseConnectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
