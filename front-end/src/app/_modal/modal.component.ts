import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

import { ModalService } from './modal.service';

@Component({ 
    selector: 'update-modal',
    templateUrl: 'modal.component.html', 
    styleUrls: ['modal.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private element: any;

    constructor(private modalService: ModalService, private el: ElementRef) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            return;
        }
        document.body.appendChild(this.element);
        this.element.addEventListener('click', el => {
            if (el.target.className === 'update-modal') {
                this.close();
            }
        });
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('update-modal-open');
    }

    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('update-modal-open');
    }

    cancel(): void {
        this.close();
    }
}