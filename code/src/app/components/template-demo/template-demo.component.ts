import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.scss']
})
export class TemplateDemoComponent {
  @Input() topTemplate: TemplateRef<unknown> | null = null;
  @Input() bottomTemplate: TemplateRef<unknown> | null = null;
  @Input() stringList: string[] | undefined;
}
