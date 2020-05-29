import { Component, OnInit } from '@angular/core';
import {UserModalComponent} from "./user-modal.component";
import {ModalService} from "../modal/modal.service";
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  bodyText: string;
  constructor(private modalService: ModalService) {}


  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal() {
    this.modalService.open(UserModalComponent);
  }

  closeModal() {
    this.modalService.close();
  }
}
