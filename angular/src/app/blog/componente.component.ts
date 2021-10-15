import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BlogViewModelService } from './servicios.service';

@Component({
  selector: 'app-blog',
  templateUrl: './tmpl-anfitrion.component.html',
  //providers: [ BlogViewModelService ],
  styleUrls: ['./componente.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy {
  constructor(protected vm: BlogViewComponent) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    //this.vm.list();
    this.vm.load();
  }
  ngOnDestroy(): void {
    this.vm.clear()
  }
}
@Component({
  selector: 'app-botones',
  template: `
    <div class="btn-group" role="group">
      <button class="btn btn-info" *ngIf="hasView" (click)="view.emit(null)"><i class="fas fa-eye"></i></button>
      <button class="btn btn-success" *ngIf="hasEdit" (click)="edit.emit(null)"><i class="fas fa-pen"></i></button>
      <button class="btn btn-danger" *ngIf="hasDelete" (click)="delete.emit(null)"><i class="far fa-trash-alt"></i></button>
    </div>
  `
})
export class BotonesComponent implements OnInit, OnDestroy {
  @Output() view: EventEmitter<any> = new EventEmitter<any>();
  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  get hasView(): boolean { return this.view.observers.length > 0; }
  get hasEdit(): boolean { return this.edit.observers.length > 0; }
  get hasDelete(): boolean { return this.delete.observers.length > 0; }

  constructor(protected vm: BlogViewModelService) { }
  ngOnInit(): void { }
  ngOnDestroy(): void {  }
}

/*
@Component({
  selector: 'app-Blog-list',
  templateUrl: './tmpl-list.sin-rutas.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogListComponent implements OnInit, OnDestroy {
  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void {  }
}

@Component({
  selector: 'app-Blog-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogAddComponent implements OnInit {
  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void { }
}

@Component({
  selector: 'app-Blog-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogEditComponent implements OnInit, OnDestroy {
  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
}

@Component({
  selector: 'app-Blog-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogViewComponent implements OnInit, OnDestroy {
  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void { }
  ngOnDestroy(): void { }
}
*/
@Component({
  selector: 'app-Blog-list',
  templateUrl: './tmpl-list.con-rutas.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogListComponent implements OnInit {
  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    //this.vm.list();
    this.vm.load();
  }
}

@Component({
  selector: 'app-Blog-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogAddComponent implements OnInit {
  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    this.VM.add();
  }
}

@Component({
  selector: 'app-Blog-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: BlogViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = parseInt(params?.get('id') ?? '');
        if (id) {
          this.vm.edit(id);
        } else {
          this.router.navigate(['/404.html']);
        }
      });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

@Component({
  selector: 'app-blog-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: BlogViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = parseInt(params?.get('id') ?? '');
        if (id) {
          this.vm.view(id);
        } else {
          this.router.navigate(['/404.html']);
        }
      });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const Blog_COMPONENTES = [
  BlogComponent, BlogListComponent, BlogAddComponent,
  BlogEditComponent, BlogViewComponent, BotonesComponent,
];
