import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipModalComponent } from './tip-modal/tip-modal.component';
import { IconComponent } from './icon/icon.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonRepoService } from "./common-repo.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports: [
    TipModalComponent,
    IconComponent
  ],
  providers: [
    CommonRepoService
  ],
  declarations: [TipModalComponent, IconComponent]
})
export class CommonRepoModule { }
