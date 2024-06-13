export const useAuth = () => {
  const setUser = (user: any) => {
    return localStorage.setItem("user", user);
  };

  const setToken = (token: string) => {
    return localStorage.setItem("token", token);
  };

  const getUser = () => {
    return localStorage.getItem("user");
  };

  const getToken = () => {
    return localStorage.getItem("user");
  };

  return {
    setUser,
    getUser,
    setToken,
    getToken,
    isAuthenticated: false,
  };
};
