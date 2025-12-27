import { create } from "zustand";
import api from "../api/axios.js";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await api.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      const message = error?.response?.data?.message || "Signup failed. Please try again.";
      toast.error(message);
      throw new Error(message); // IMPORTANT
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await api.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      const message = error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(message);
      throw new Error(message); // IMPORTANT
    } finally {
      set({ isLoggingIn: false });
    }
  },

   logout: async () => {
    try {
      const res = await api.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfull");
    } catch (error) {
      const message = error?.response?.data?.message || "Logout failed. Already Logedout.";
      toast.error(message);
      throw new Error(message); // IMPORTANT
    } finally {
      set({ isSigningUp: false });
    }
  },
}));
