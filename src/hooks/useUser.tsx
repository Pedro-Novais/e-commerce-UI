import { useUser } from "../context/UserContext";

export const useUserHook = () => {
  const { user, userLogged, isLoading, error } = useUser();

  return { user, userLogged, isLoading, error };
};
