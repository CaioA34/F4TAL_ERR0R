import { TestBed } from '@angular/core/testing';

import { WsBase } from './ws-base';

describe('WsBase', () => {
  let service: WsBase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsBase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
