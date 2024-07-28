// src/api/auth.ts
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

const testUser = {
  email: "test",
  password: "test",
  token: "fake-jwt-token",
};

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === testUser.email && credentials.password === testUser.password) {
        resolve({ token: testUser.token });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};
