import { Component } from '@angular/core';
import { BreadCrumbsComponent } from "../../components/shared/bread-crumbs/bread-crumbs.component";
import { ButtonComponent } from '../../components/shared/button/button.component';
import { ImageComponent } from '../../components/shared/image/image.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [BreadCrumbsComponent, ButtonComponent, ImageComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

}
