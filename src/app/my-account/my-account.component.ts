import { Component } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.css'
})
export class MyAccountComponent {

  starRatings: number[] = [1, 1, 1, 1, 0.5]; // 1 for full star, 0.5 for half star

}
