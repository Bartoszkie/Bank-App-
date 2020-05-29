import {ComponentFactoryResolver, ElementRef, Injectable, Injector, NgZone, Type} from '@angular/core';
import {ModalComponent} from "./modal.component";

@Injectable({ providedIn: 'root' })
export class ModalService {
    private _modalRef: ElementRef;
    private _instance;
    private _escapeListener: boolean;

    constructor(private resolver : ComponentFactoryResolver,
                private injector: Injector, private zone: NgZone) {
    }

    set modal(modal: ElementRef) {
      this._modalRef = modal;
    }
 
    open(type: Type<any>, escapeListener?: boolean) {
      const component = this.createComponent(type);
      this._instance = this.createComponent(ModalComponent);
      document.body.appendChild(this._instance);
      document.querySelector('.jw-modal-body').prepend(component)
      escapeListener && this.escapeListener();
      return component;
    }

    remove() {
      
    }

    close() {
      document.querySelector('app-modal').remove();
      this._escapeListener && document.removeEventListener('keyup', this.escapeDetect)
    }

    private escapeListener() {
      document.addEventListener('keyup', this.escapeDetect);
      this._escapeListener = true;
    }

    private escapeDetect($event) {
      if ($event.key === "Escape") {
        this.close();
      }
    }

    private createComponent(type: Type<any>) {
      const factory = this.resolver.resolveComponentFactory(type);
      const componentRef = factory.create(this.injector);
      componentRef.hostView.detectChanges();
      const { nativeElement } = componentRef.location;
      return nativeElement;
    }
}
