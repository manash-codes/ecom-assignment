import { CommonModule } from '@angular/common';
import { Component, Input, input, TemplateRef } from '@angular/core';
import { ImageComponent } from "../image/image.component";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ImageComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() class?: string;
  @Input() image?: string;
  @Input() value!: string | TemplateRef<any>;
  @Input() onClick?: (() => {});
}
