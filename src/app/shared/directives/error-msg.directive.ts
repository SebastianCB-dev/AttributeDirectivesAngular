import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective {

  public htmlElement: ElementRef<HTMLElement>;

  @Input() set color(color: string) {
    this.htmlElement.nativeElement.style.color = color;
  };

  @Input() msg: string = '';
  @Input() addClass: boolean = false;

  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnInit() {    
    this.setColor();
    if(this.msg) {
      this.setMessage();
    }
  }

  setColor(): void {    
    if(this.addClass)
      this.htmlElement.nativeElement.classList.add('font-large');
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this.msg;
  }
}
