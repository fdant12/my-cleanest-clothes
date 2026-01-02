import {Component, Input} from '@angular/core';
import {MatCard, MatCardContent, MatCardImage} from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardImage
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() data! : { image: string, title: string, text: string, link: string }
}
