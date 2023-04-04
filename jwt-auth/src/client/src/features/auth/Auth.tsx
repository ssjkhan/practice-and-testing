import React, { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  access_token?: string;
  refresh_token?: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType>({});

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        access_token: "access",
        refresh_token: "refresh",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
