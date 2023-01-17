import { Component, OnInit } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  modalRef?: MdbModalRef<ModalComponent>

  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  openModal(){
    this.modalRef = this.modalService.open(ModalComponent)
  }
}
