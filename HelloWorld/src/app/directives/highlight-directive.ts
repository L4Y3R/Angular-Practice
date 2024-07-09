import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[app-highlight]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = 'crimson';
  }
}
