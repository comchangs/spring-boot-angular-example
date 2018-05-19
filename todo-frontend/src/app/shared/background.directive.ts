import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[todoBackground]'
})
export class BackgroundDirective implements OnInit {

  @Input('todoBackground') backgrountColor = 'tellow';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    console.log(this.el.nativeElement);
    (<HTMLElement> this.el.nativeElement).style.backgroundColor = this.backgrountColor;
  }

}
