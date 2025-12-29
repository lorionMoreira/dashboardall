/**
 * Environment configuration
 * Determines API base URL based on environment
 */

const ENV = import.meta.env.MODE || 'development';

const config = {
  development: {
    apiBaseUrl: 'http://localhost:8080'
  },
  production: {
    apiBaseUrl: 'https://raspberrypi.tail6b11e4.ts.net', // Replace with your production URL
  },
};

export const API_BASE_URL = config[ENV as keyof typeof config]?.apiBaseUrl || config.development.apiBaseUrl;

export const isDevelopment = ENV === 'development';
export const isProduction = ENV === 'production';
