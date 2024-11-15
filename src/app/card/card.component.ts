import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() dataEntrante: any;
  public image!: string;

  constructor() {}

  ngOnInit(): void {
    this.image = 'https://picsum.photos/536/354';
  }
}
