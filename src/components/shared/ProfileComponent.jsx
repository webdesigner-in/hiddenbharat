import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, User, LogOut } from "lucide-react";
import { useAuth } from "@/store/auth.store";

/* ---------- Helper ---------- */
const getInitials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function ProfileComponent() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={ref}>
      {/* Avatar Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex h-10 w-10 items-center justify-center
          rounded-full border
          bg-background/70
          backdrop-blur-md
          transition
          active:scale-95
        "
      >
        {user.prefs?.avatar ? (
          <img
            src={user.prefs.avatar}
            alt={user.name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <span className="text-sm font-semibold">
            {getInitials(user.name)}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute z-50
            left-1/2 -translate-x-1/2
            md:left-auto md:right-0 md:translate-x-0
            mt-3
            w-[calc(100vw-2rem)] max-w-sm md:w-64
            overflow-hidden
            rounded-2xl
            border border-white/20
            bg-white/80 dark:bg-black/60
            backdrop-blur-lg
            shadow-2xl
            animate-in fade-in zoom-in-95
          "
        >
          {/* User Info */}
          <div className="px-5 py-4">
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>

          <div className="h-px bg-black/10 dark:bg-white/10" />

          {/* Links */}
          <ul className="py-2 text-sm">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/profile"
                className="flex items-center gap-3 px-5 py-3 hover:bg-black/5 dark:hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <User size={18} />
                Manage Profile
              </Link>
            </li>

            <li>
              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="
                  flex w-full items-center gap-3
                  px-5 py-3
                  text-red-500
                  hover:bg-red-500/10
                "
              >
                <LogOut size={18} />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
