import { useQuery } from "@tanstack/react-query";
import type { User } from "@shared/schema";

export function useAuth() {
  const { data: user, isLoading, error } = useQuery<User>({
    queryKey: ["/api/auth/user"],
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });

  // If there's a 401 error, user is not authenticated (not loading)
  const is401Error = error?.message?.includes("401");

  return {
    user,
    isLoading: isLoading && !is401Error,
    isAuthenticated: !!user && !error,
  };
}
