export const AUTH_CONFIG = {
  clientId: 'YPU4UA0VAFUsnPiUXiJufs6ZwOHuXvqJ',
  domain: 'my-project-auth.auth0.com',
  callbackUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/callback' : 'http://vuely.theironnetwork.org/callback',
  apiUrl: 'API_IDENTIFIER'
}