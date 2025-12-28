import { Routes } from '@angular/router';
import {ListeCard} from '../cards/liste-card';
import {Home} from '../home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'list-card',
    component: ListeCard
  },
];
