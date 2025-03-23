const API_BASE_URL = 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  auth: {
    login: `${API_BASE_URL}/auth/login`,
    register: `${API_BASE_URL}/auth/register`
  },
  users: {
    profile: `${API_BASE_URL}/users/profile`,
    changePassword: `${API_BASE_URL}/users/change-password`
  }
}; 