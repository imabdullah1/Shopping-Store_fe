export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};

interface Environment {
  production: boolean;
  apiUrl: string;
  STRIPE_PK: string;
}
