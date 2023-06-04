import { Component } from '@angular/core';

interface Car {
  make: string;
  model: string;
  year: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: Car[] = [
    { make: 'Tata', model: 'Tiago', year: 2021 },
    { make: 'Tata', model: 'Punch', year: 2020 },
    { make: 'Tata', model: 'Altroz', year: 2022 }
  ];

  showData: boolean = true;

  toggleData(): void {
    this.showData = !this.showData;
  }
}


