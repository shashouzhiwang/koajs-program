import { Component, OnInit, ViewChildren, QueryList, ElementRef } from "@angular/core";
import { GoodsService } from "../common.server";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { AlertModule } from 'ngx-bootstrap/alert';
// import { TipModalComponent } from "../common-repo/tip-modal/tip-modal.component";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  @ViewChildren("choice", {read: ElementRef}) choice: QueryList<any>;
  excelTipModel: BsModalRef;
  processed: any= false;
  test: object;
  constructor(
    private modalService: BsModalService,
    private gooodSer: GoodsService
  ) {
    this.gooodSer.getGoodsList({searchText: "lang=en"})
      .subscribe(res => {
        // alert(JSON.stringify(res));
        this.test = res;
      });

    this.gooodSer.findOrganizationTree().subscribe(
      (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event['loaded'] / event['total']);
          console.log(`File is ${percentDone}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          console.log('File is completely uploaded!', event);
        }
      },
      ()=>{})
  }

  public showTip() {
    // this.excelTipModel = this.modalService.show(TipModalComponent);
    // this.excelTipModel.content.tipText = '正在导入，请稍等。。。';
  }


}
