import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

import UserService from "../service/_UserService";
import { UserContextType, LoginUserType } from "../types/UserTypes";
const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
    children: ReactNode;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<string | undefined>(undefined)
    const [userLogged, setUserLogged] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const userService = new UserService()

    const fetchGetUserLogged = async () => {
        setIsLoading(true)
        try {
            const result = await userService.userLogged()
            if (!result.success) {
                setUserLogged(false)
            }
            else {
                setUserLogged(true)
            }
        } catch (error) {
            setError("Erro ao carregar informações do usuário")
        } finally {
            setIsLoading(false)
        }
    }

    const fetchUserLogging = async (data: LoginUserType) => {
        setIsLoading(true)
        try {
            const result = await userService.loginUser(data)
            if (!result.success) {
                setError(result.msg)
                setUserLogged(false)
            }
            else {
                setUserLogged(true)
            }
        } catch (error) {
            setError("Erro ao realizar o login do usuário")
        }
    }

    useEffect(() => {
        fetchGetUserLogged()
    }, [])

    return (
        <UserContext.Provider
            value={{
                user,
                userLogged,
                isLoading,
                error,
                fetchUserLogging
            }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useShop deve ser usado dentro de um ShopProvider");
    }
    return context;
}