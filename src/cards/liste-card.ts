import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage, MatCardTitle, MatCardSubtitle} from '@angular/material/card';

@Component({
  selector: 'app-liste-card',
  imports: [
    MatInput,
    MatButton,
    MatCardHeader,
    MatCardContent,
    MatCardImage,
    MatCard,
    MatCardActions,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './liste-card.html',
  styleUrl: './liste-card.scss',
})
export class ListeCard {

}
