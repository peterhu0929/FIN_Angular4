import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Directive({ selector: '[toolbarButton]' })
export class ToolbarButtonDirective implements OnInit {

  @Input() public toolbarButton: string;

  constructor(
    private el: ElementRef,
    private _render: Renderer
  ) {
    this._render.setElementStyle(el.nativeElement, 'transition-duration', '.18s');
    this._render.setElementStyle(el.nativeElement, 'ttransition-property', 'opacity');
    this._render.setElementStyle(el.nativeElement, 'transition-timing-function', 'cubic-bezier(.25, .8, .25, 1)');
    this._render.setElementStyle(el.nativeElement, 'transition', 'all 300ms ease-in-out 0ms');
  }
  
  public ngOnInit() {
    this.highlight('0.65');
  }

  @HostListener('mouseenter') private onMouseEnter() {
    this.highlight(this.toolbarButton || '1');
  }

  @HostListener('mouseleave') private onMouseLeave() {
    this.highlight('0.65');
  }

  private highlight(opacity: string) {
    this.el.nativeElement.style.opacity = opacity;
  }
}
