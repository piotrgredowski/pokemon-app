import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('APIService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ApiService],
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call proper url for getPage', () => {
    service.getPage(1).subscribe(pageData => {
      expect(pageData).toBeTruthy();
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0');

    req.flush('response');
  });

  it('should call proper url for getPokemonWithId', () => {
    const id = '1';

    service.getPokemonWithId(id).subscribe(pageData => {
      expect(pageData).toBeTruthy();
    });

    const req = httpMock.expectOne(`https://pokeapi.co/api/v2/pokemon/${id}`);

    req.flush('response');
  });
});
