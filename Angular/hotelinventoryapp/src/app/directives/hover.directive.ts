import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, OnInit, Inject, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  @Input() appHover: string = 'red';

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.appHover = this.appHover;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appHover);
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.element.nativeElement.style.appHover = 'white';
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.element.nativeElement.style.appHover = this.appHover;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
  }


}