import { TestBed } from '@angular/core/testing';

import { Actores } from './servicios.service';

describe('ActoresService', () => {
  let service: Actores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Actores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
