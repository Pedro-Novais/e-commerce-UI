export type UserContextType = {
    user: string | undefined,
    userLogged: boolean;
    isLoading: boolean;
    error: string | null;
}