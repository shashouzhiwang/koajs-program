import { Directive, ElementRef, Input, OnChanges, DoCheck, QueryList, AfterViewInit, ChangeDetectorRef, Renderer2  } from "@angular/core";
import { Component, DebugElement } from "@angular/core";
import { TestDirective } from "./test.directive";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

@Component({
  template: `<p appTest [choice]="choice" [processed]="processed">
    menu works!
  </p>
  <div #choice  >我是测试</div>
  <div class="demo" data-flex="dir:right">
    <div>2</div>
    <div>3</div>
  </div>
  `
})
class TestComponent { }

describe("TestDirective", () => {

  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement;  // the three elements w/ the directive
  let bareH2: DebugElement; // the <h2> w/o the directive

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ TestDirective, TestComponent ]
    })
      .createComponent(TestComponent);
    fixture.detectChanges();
    des = fixture.debugElement.query(By.directive(TestDirective));
  });
  it("should have one AppTest element", () => {
    // const directive = new TestDirective(ElementRef, ChangeDetectorRef, Renderer2);
    // expect(directive).toBeTruthy();
    const bgColor = des.nativeElement.style.backgroundColor;
    expect(bgColor).toBe("red");
  });
});
