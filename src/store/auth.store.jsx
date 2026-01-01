import { createContext, useContext, useEffect, useState } from "react";
import { ID } from "appwrite";
import { account } from "@/lib/appwrite";

/* ---------------- Context ---------------- */

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* Load session on app start */
  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  /* ---------- Signup (default role = user) ---------- */
  async function signup(email, password, name) {
    await account.create(ID.unique(), email, password, name);

    // Login
    await account.createEmailPasswordSession(email, password);

    // Set default role
    await account.updatePrefs({
      role: "user",
    });

    const currentUser = await account.get();
    setUser(currentUser);
  }

  /* ---------- Login ---------- */
  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    const currentUser = await account.get();
    setUser(currentUser);
  }

  /* ---------- Google OAuth ---------- */
  function loginWithGoogle() {
    account.createOAuth2Session(
      "google",
      `${window.location.origin}/dashboard`,
      `${window.location.origin}/login`
    );
   
  }

  /* ---------- Logout ---------- */
  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  /* ---------- Role ---------- */
  const role = user?.prefs?.role || "user";

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loading,
        signup,
        login,
        loginWithGoogle,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* ---------------- Hook ---------------- */

export function useAuth() {
  return useContext(AuthContext);
}
