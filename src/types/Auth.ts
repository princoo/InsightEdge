export interface RegisterPayload {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type LoginPayload = Omit<RegisterPayload, "fullName" | "confirmPassword">;