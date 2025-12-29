import axios from 'axios';
import { API_BASE_URL } from '../config/env';

export interface TestResponse {
  status: string;
  message: string;
}

/**
 * Protected routes service
 * Handles API calls that require authentication
 */
export const protectedService = {
  /**
   * Test endpoint to verify JWT authentication
   */
  test: async (): Promise<TestResponse> => {
    const token = localStorage.getItem('token');
    
    const response = await axios.get<TestResponse>(
      `${API_BASE_URL}/api/protected/test`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  },
};
