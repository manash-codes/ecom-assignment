import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input() path!: string;
  @Input() alt?: string;
  @Input() class?: string;
}
