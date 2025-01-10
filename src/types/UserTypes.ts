export type UserContextType = {
    user: string | undefined,
    userLogged: boolean;
    isLoading: boolean;
    error: string | null;
    fetchUserLogging: (data: LoginUserType) => Promise<void>;
}

export type LoginUserType = {
    email: string;
    password: string;
}