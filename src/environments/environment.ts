import { STRING_TYPE } from '@angular/compiler';

export const environment = {
  // production: false,
  // apiUrl: 'http://localhost:3000',

  STRIPE_PK: 'ak_87113201234755',
};

interface Environment {
  production: boolean;
  apiUrl: string;
  STRIPE_PK: string;
}
