import axios from 'axios';
import { API_BASE_URL } from '../config/env';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
}

/**
 * Authentication service
 * Handles all authentication-related API calls
 */
export const authService = {
  /**
   * Authenticates user with username and password
   */
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(
      `${API_BASE_URL}/api/auth/login`,
      credentials
    );
    return response.data;
  },

  // Add other auth methods here as needed
  // register: async (userData: RegisterData): Promise<RegisterResponse> => { ... },
  // refreshToken: async (refreshToken: string): Promise<TokenResponse> => { ... },
};
