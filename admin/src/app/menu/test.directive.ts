import {
  Directive, ElementRef, Input, OnChanges, DoCheck, QueryList, AfterViewInit, ChangeDetectorRef, Renderer2,
  ViewChild, HostBinding
} from "@angular/core";

@Directive({ selector: "[appTest]" })
export class TestDirective implements AfterViewInit, OnChanges {
  @Input("choice") choice: QueryList<any>;
  @Input("processed") processed: boolean;
  // choices: Array<{direction: string, offsetTop: number , offsetLeft: number}> = [];
  constructor(el: ElementRef,
              private cdr: ChangeDetectorRef,
              private render: Renderer2
  ) {
    el.nativeElement.style.backgroundColor = "red";
  }
  ngOnChanges() {
    // this.processed = changes.processed.currentValue;
    // console.log(changes);
    // this.cdr.detectChanges();
  }
  ngAfterViewInit() {
    // console.log(this.choice);
    this.render.addClass(this.choice, "active");
    this.render.listen(document, "click", (event) => {
      // alert();
    });
  }

  @HostBinding('class') get classes() {
    return 'ikjkskd';
  }

  // ngDoCheck() {
  //
  // }
}
