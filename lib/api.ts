import axios from "axios";

const API_BASE_URL = "/api";

export const api = {
  // Auth
  register: async (data: { name: string; email: string; password: string }) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data; // axios automatically parses the JSON
  },

  // Claims
  submitClaim: async (userId: string, claim: string) => {
    const response = await axios.post(
      `${API_BASE_URL}/claims`,
      { userId, claim },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  },

  // Users
  getUsers: async () => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  },

  getUser: async (id: string) => {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  },
};
