import { NgModule } from '@angular/core';
import { ToolbarButtonDirective } from './toolbar-button.directive';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';

@NgModule({
  declarations: [
    ToolbarButtonDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  exports: [
    ToolbarButtonDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
})
export class DirectiveModule { }
