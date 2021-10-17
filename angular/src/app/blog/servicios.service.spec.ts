import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService } from '../common-services';
import { Blog, BlogViewModelService } from './servicios.service';


export class DAOServiceMock<T, K> {
  constructor(private listado: Array<T>) { }
  query(): Observable<Array<T>> {
    return of(this.listado);
  }
  get(id: number): Observable<T> {
    return of(this.listado[id]);
  }
  add(item: T): Observable<T> {
    this.listado.push(item)
    return of(item);
  }
  change(id: number, item: T): Observable<T> {
    this.listado[id] = item;
    return of(item);
  }
  remove(id: number): Observable<T> {
    let item = this.listado[id];
    this.listado.slice(id, 1)
    return of(item);
  }
}

class BlogDAOService extends DAOServiceMock<Blog, number> {
  constructor() {
    super([
      {


        "id": 1,
        "autor": "Marline",
        "megusta": 2,
        "texto": "Marline",
        "fecha": "1973-07-09",
        "fotourl": "https://randomuser.me/api/portraits/women/1.jpg",
        "titulo": "werbgwerb"

      },
      {
        "id": 2,
        "autor": "Marline",
        "megusta": 2,
        "texto": "Marline",
        "fecha": "1973-07-09",
        "fotourl": "https://randomuser.me/api/portraits/women/1.jpg",
        "titulo": "werbgwerb"

      },
      {
        "id": 1,
        "autor": "Marline",
        "megusta": 2,
        "texto": "Marline",
        "fecha": "1973-07-09",
        "fotourl": "https://randomuser.me/api/portraits/women/1.jpg",
        "titulo": "werbgwerb"

      },
    ])
  }
}
fdescribe('BlogViewModelService', () => {
  let service: BlogViewModelService;
  let dao: BlogDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [NotificationService, LoggerService,
        { provide: BlogDAOService, useClass: BlogDAOService }
      ],
    });
    service = TestBed.inject(BlogViewModelService);
    dao = TestBed.inject(BlogDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('DAOServiceMock Query', (done: DoneFn) => {
    dao.query().subscribe(
      data => {
        expect(data.length).toBe(4);
        done();
      },
      () => fail()
    );
  });

  it('list', fakeAsync(() => {
    service.list()
    tick()
    expect(service.Listado.length).toBe(0)
    expect(service.Modo).toBe('list')
  }))
});
