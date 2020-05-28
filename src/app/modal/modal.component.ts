import {
  Component,
  ViewEncapsulation,
  ElementRef,
  OnInit,
  OnDestroy, ViewChild, ViewContainerRef,
} from '@angular/core';

import { ModalService } from './modal.service';
import {UserPanelComponent} from "../user-panel/user-panel.component";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ModalComponent implements OnInit, OnDestroy {
  constructor(private modalService: ModalService, private el: ElementRef) {
    this.modalService.modal = this.el;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.modalService.remove();
    this.el.nativeElement.remove();
  }

  open() {
    return this.modalService.open(UserPanelComponent);
  }

  close() {
    this.modalService.close();
  }
}
