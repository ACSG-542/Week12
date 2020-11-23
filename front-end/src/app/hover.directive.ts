import { Directive,  ElementRef, HostListener, Input } from '@angular/core';


import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

	constructor(private el: ElementRef) {}

	@Input() defaultColor: string;

	@Input('appHover') highlightColor: string;

	@HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'lightgreen');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
