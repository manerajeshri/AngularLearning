import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef , private render : Renderer2) { 
    // <!-- Directives custom -->
    // <p appCustom> Normal Paragraph</p>

    el.nativeElement.style.backgroundColor = 'gray';
//  el.nativeElement.style.display = 'none';

//
render.setStyle(el.nativeElement, 'backgroundcolor', 'red')
  }
  

}
