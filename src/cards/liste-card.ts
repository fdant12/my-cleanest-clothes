import {Component, OnInit} from '@angular/core';
import { MatInput } from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {Card} from "../card/card";

interface HousingCard {
  image: string;
  title: string;
  text: string;
  link: string;
}

@Component({
  selector: 'app-liste-card',
  imports: [
    MatInput,
    MatButton,
    FormsModule,
    Card
  ],
  templateUrl: './liste-card.html',
  styleUrl: './liste-card.scss',
})

export class ListeCard implements OnInit {
  inputValue = ''
  filteredHousing: HousingCard[] = []
  housingCards: HousingCard[] = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      title: 'Acme Fresh Start Housing',
      text: 'Chicago, IL',
      link: '/housing/acme-fresh-start'
    },
    {
      image: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1',
      title: 'A113 Transitional Housing',
      text: 'Santa Monica, CA',
      link: '/housing/a113-transitional'
    },
    {
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      title: 'Warm Beds Housing Support',
      text: 'Juneau, AK',
      link: '/housing/warm-beds'
    },
    {
      image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c',
      title: 'Homesteady Housing',
      text: 'Chicago, IL',
      link: '/housing/homesteady'
    },
    {
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6',
      title: 'Happy Homes Group',
      text: 'Gary, IN',
      link: '/housing/happy-homes'
    },
    {
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156',
      title: 'Hopeful Apartment Group',
      text: 'Oakland, CA',
      link: '/housing/hopeful-apartment'
    },
    {
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
      title: 'Seriously Safe Towns',
      text: 'Oakland, CA',
      link: '/housing/seriously-safe-towns'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=800&q=80',
      title: 'Hopeful Housing Solutions',
      text: 'Oakland, CA',
      link: '/housing/hopeful-housing'
    },
    {
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858',
      title: 'Seriously Safe Towns',
      text: 'Oakland, CA',
      link: '/housing/seriously-safe-towns-2'
    },
    {
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde',
      title: 'Capital Safe Towns',
      text: 'Portland, OR',
      link: '/housing/capital-safe-towns'
    }
  ]

  ngOnInit(): void {
    this.filteredHousing = [...this.housingCards];
  }

  getInputValue (value:  string) {
    if (!value) {
      this.filteredHousing = [...this.housingCards]
    } else {
      this.filteredHousing = this.housingCards
          .filter(card => card.title.toLowerCase().includes(value.toLowerCase()))
    }
  }
}
