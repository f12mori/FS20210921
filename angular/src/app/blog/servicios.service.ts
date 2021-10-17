import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoggerService } from 'src/lib/my-core';
import { RESTDAOService } from '../base-code/RESTDAOService';
import { ModoCRUD } from '../base-code/tipos';
import { NavigationService, NotificationService } from '../common-services';
import { AuthService, AUTH_REQUIRED } from '../security';

export class Blog {
  id: number = 0;
  texto: string | null = null;
  autor: string | null = null;
  fecha: string | null = null;
  megusta: number | null = null;
  fotourl: string | null = null;
  titulo: string | null = null;
}

@Injectable({
  providedIn: 'root',
})
export class BlogDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'blog', {
      context: new HttpContext().set(AUTH_REQUIRED, true),
    });
  }

  page(page: number, items: number = 5): Observable<{ page: number, pages: number, items: number, list: Array<any> }> {
    return new Observable(subscriber => {
      this.http.get<{ pages: number, items: number }>(`${this.baseUrl}?_page=count&items=${items}`, this.option)
        .subscribe(
          data => {
            if (page >= data.pages) page = data.pages > 0 ? data.pages - 1 : 0;
            this.http.get<Array<any>>(`${this.baseUrl}?_page=${page}&items=${items}&_sort=nombre`, this.option)
              .subscribe(
                lst => subscriber.next({ page, pages: data.pages, items: data.items, list: lst }),
                err => subscriber.error(err)
              )
          },
          err => subscriber.error(err)
        )
    })
  }

}
@Injectable({
  providedIn: 'root',
})
export class BlogViewModelService {
  protected listURL = '/blog';
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  constructor(
    protected notify: NotificationService,
    protected out: LoggerService,
    private navigation: NavigationService,
    protected dao: BlogDAOService,
    protected router: Router,
    public auth: AuthService,
  ) {}

  public get Modo(): ModoCRUD {
    return this.modo;
  }
  public get Listado(): Array<any> {
    return this.listado;
  }
  public get Elemento(): any {
    return this.elemento;
  }

  public list(): void {
    this.dao.query().subscribe(
      (data) => {
        this.listado = data;
        this.modo = 'list';
      },
      (err) => this.notify.add(err.message)
    );
  }
  public add(): void {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any): void {
    this.dao.get(key).subscribe(
      (data) => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
      },
      (err) => this.notify.add(err.message)
    );
  }
  public view(key: any): void {
    this.dao.get(key).subscribe(
      (data) => {
        this.elemento = data;
        this.modo = 'view';
      },
      (err) => this.notify.add(err.message)
    );
  }
  public delete(key: any): void {
    if (!window.confirm('¿Seguro?')) {
      return;
    }
    this.dao.remove(key).subscribe(
      (data) => this.list(),
      (err) => this.notify.add(err.message)
    );
  }

  clear() {
    this.elemento = {};
    this.idOriginal = null;
    this.listado = [];
  }

  public cancel(): void {
    this.elemento = {};
    this.idOriginal = null;
    // this.router.navigateByUrl(this.listURL);
    this.navigation.back();
  }

  public send(): void {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          (data) => this.cancel(),
          (err) => this.notify.add(err.message)
        );
        break;
      case 'edit':
        this.dao.change(this.idOriginal, this.elemento).subscribe(
          (data) => this.cancel(),
          (err) => this.notify.add(err.message)
        );
        break;
      case 'view':
        break;
    }
  }
  page = 0;
  totalPages = 0;
  totalItems = 0;
  itemsPerPage = 5;
  load(page: number = -1) {
    if(page < 0) page = this.page
    this.dao.page(page, this.itemsPerPage).subscribe(
      rslt => {
        this.page = rslt.page;
        this.totalPages = rslt.pages;
        this.totalItems = rslt.items;
        this.listado = rslt.list;
        this.modo = 'list';
      },
      err => this.notify.add(err.message)
    )
  }

}
