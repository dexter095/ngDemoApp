import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onClick(event: Event){
    this.renderer.addClass(this.elmRef.nativeElement, 'open')
  }

}
