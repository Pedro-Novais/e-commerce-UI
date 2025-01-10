import { useUser } from "../context/UserContext";

export const useUserHook = () => {
  const { user, userLogged, isLoading, error, fetchUserLogging } = useUser();

  return { user, userLogged, isLoading, error, fetchUserLogging };
};
