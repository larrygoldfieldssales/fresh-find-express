
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { STORAGE_KEYS, getFromStorage, setToStorage, removeFromStorage } from '@/lib/localStorage';
import { toast } from '@/hooks/use-toast';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  resetPassword: (email: string) => Promise<boolean>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<boolean>;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = getFromStorage<User | null>('current_user', null);
    setUser(savedUser);
    setIsLoaded(true);
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (isLoaded) {
      if (user) {
        setToStorage('current_user', user);
      } else {
        removeFromStorage('current_user');
      }
    }
  }, [user, isLoaded]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real implementation, this would call an API
    // const response = await fetch('/api/auth/login', { ... });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Get registered users from localStorage
    const users = getFromStorage<User[]>('registered_users', []);
    const foundUser = users.find(u => u.email === email);
    
    // Get stored passwords (in real app, this would be hashed and verified server-side)
    const passwords = getFromStorage<Record<string, string>>('user_passwords', {});
    
    if (foundUser && passwords[foundUser.id] === password) {
      setUser(foundUser);
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });
      return true;
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password.",
        variant: "destructive",
      });
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    // In a real implementation, this would call an API
    // const response = await fetch('/api/auth/register', { ... });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user already exists
    const users = getFromStorage<User[]>('registered_users', []);
    if (users.some(u => u.email === userData.email)) {
      toast({
        title: "Registration failed",
        description: "An account with this email already exists.",
        variant: "destructive",
      });
      return false;
    }
    
    // Create new user
    const newUser: User = {
      id: `user_${Date.now()}`,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      createdAt: new Date().toISOString(),
    };
    
    // Save user to registered users
    const updatedUsers = [...users, newUser];
    setToStorage('registered_users', updatedUsers);
    
    // Save password (in real app, this would be hashed server-side)
    const passwords = getFromStorage<Record<string, string>>('user_passwords', {});
    passwords[newUser.id] = userData.password;
    setToStorage('user_passwords', passwords);
    
    setUser(newUser);
    toast({
      title: "Account created!",
      description: "Your account has been created successfully.",
    });
    return true;
  };

  const logout = () => {
    setUser(null);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    
    // In a real implementation, this would call an API
    // const response = await fetch('/api/auth/profile', { ... });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const updatedUser = { ...user, ...userData };
    
    // Update in registered users
    const users = getFromStorage<User[]>('registered_users', []);
    const updatedUsers = users.map(u => u.id === user.id ? updatedUser : u);
    setToStorage('registered_users', updatedUsers);
    
    setUser(updatedUser);
    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    });
    return true;
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    // In a real implementation, this would send a reset email
    // const response = await fetch('/api/auth/reset-password', { ... });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const users = getFromStorage<User[]>('registered_users', []);
    const foundUser = users.find(u => u.email === email);
    
    if (foundUser) {
      // In a real app, this would send an email with a reset link
      toast({
        title: "Reset email sent",
        description: "Check your email for password reset instructions.",
      });
      return true;
    } else {
      toast({
        title: "Email not found",
        description: "No account found with this email address.",
        variant: "destructive",
      });
      return false;
    }
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    if (!user) return false;
    
    // In a real implementation, this would call an API
    // const response = await fetch('/api/auth/change-password', { ... });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Verify current password
    const passwords = getFromStorage<Record<string, string>>('user_passwords', {});
    if (passwords[user.id] !== currentPassword) {
      toast({
        title: "Password change failed",
        description: "Current password is incorrect.",
        variant: "destructive",
      });
      return false;
    }
    
    // Update password
    passwords[user.id] = newPassword;
    setToStorage('user_passwords', passwords);
    
    toast({
      title: "Password changed",
      description: "Your password has been updated successfully.",
    });
    return true;
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    resetPassword,
    changePassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
