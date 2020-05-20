import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasichiglighter]'
})
export class BasichiglighterDirective {

  constructor(private ElemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mousein(eventData: Event) {
    this.renderer.setStyle(this.ElemRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseleave') mouseout(eventData: Event) {
    this.renderer.setStyle(this.ElemRef.nativeElement, 'background-color', 'transparent')
  }
}