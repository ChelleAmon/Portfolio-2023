import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  pdfSrc = '../../../../../assets/files/Gichelle_Amon.pdf'
  constructor(public modalRef: MdbModalRef<ModalComponent>){}
}
