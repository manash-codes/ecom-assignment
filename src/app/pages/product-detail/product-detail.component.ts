import { Component } from '@angular/core';
import { BreadCrumbsComponent } from "../../components/shared/bread-crumbs/bread-crumbs.component";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [BreadCrumbsComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

}
