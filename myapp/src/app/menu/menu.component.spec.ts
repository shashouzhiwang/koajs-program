import {async, ComponentFixture, inject, TestBed} from "@angular/core/testing";
import { ViewChild, ViewChildren, QueryList } from "@angular/core";
import { MenuComponent } from "./menu.component";
import { GoodsService } from "../common.server";
import { Http, ConnectionBackend, RequestOptions, BaseRequestOptions } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import {Observable} from "rxjs/Observable";
import { TestDirective } from "./test.directive";
import { TestPipe } from "./test.pipe";

describe("MenuComponent", () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let goodsService: GoodsService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        MenuComponent,
        TestPipe,
        TestDirective ],
      providers: [
        GoodsService,
        Http,
        ViewChildren,
        {provide: ConnectionBackend, useClass: MockBackend},
        {provide: RequestOptions, useClass: BaseRequestOptions},
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    goodsService = fixture.debugElement.injector.get(GoodsService);
    spyOn(goodsService, "getGoodsList").and.returnValue(Observable.of({}));
    // component.processed = 1;
    // component.choice  = QueryList["44"];
    fixture.detectChanges();
  }));

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
  it("getGoodsList方法被调用后", () => {
    expect(component.test).toBeTruthy({});
  });
});


