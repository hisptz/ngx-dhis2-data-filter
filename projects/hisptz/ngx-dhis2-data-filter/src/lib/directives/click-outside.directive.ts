import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[hisptzClickOutside]'
})
export class ClickOutsideDirective {
  @Output() hisptzClickOutside: EventEmitter<any> = new EventEmitter();

  constructor(private _elementRef?: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick($event, targetElement) {
    const isClickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!isClickedInside) {
      this.hisptzClickOutside.emit($event);
    }
  }
}
