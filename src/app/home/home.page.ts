import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = ['Item 1', 'Item 2', 'Item 3'];

  constructor(private router: Router) {}

  navigateToDetail(item: string) {
    this.router.navigate(['/item-detail', item]);
  }
}
