import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { UtilsService } from "../../../../cds/src/app/business/services/common/utils.service";
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";
import { UtilsServiceMock } from "../../../../cds/test-config/mocks-angular";
import { Config } from "../../../../cds/src/app/business/config/config";
import { Observable } from "rxjs/Observable";
import { HomeComponent } from "./home.component";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
