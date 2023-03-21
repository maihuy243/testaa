import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputKana]',
})
export class InputKanaDirective {
  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const pattern = new RegExp('[a-zA-Z]');
    let current: string = this.el.nativeElement.value;
    let next: string = current.concat(event.key);
    if (next && !String(next).match(pattern)) {
      event.preventDefault();
    }
  }
}
