import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: 'item-detail.page.html',
  styleUrls: ['item-detail.page.scss'],
})
export class ItemDetailPage {
  itemTitle: string = '';  // Inicializa con un valor por defecto

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.itemTitle = params['title'];  // Captura el parámetro 'title'
    });
  }
}
