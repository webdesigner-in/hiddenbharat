"use client";

"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import ProfileComponent from "./ProfileComponent";

import { useAuth } from "@/store/auth.store";
import { navlinks } from "@/data";

function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="HiddenBharat" className="h-9 w-9 object-contain" />
          <span className="text-sm font-semibold tracking-[0.24em] text-stone-900">
            HIDDENBHARAT
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
          ) : (
            <ProfileComponent />
          )}
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-muted/40 bg-background/90 px-4">
          <div className="flex flex-col gap-2 py-3 text-sm">
            {navlinks.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-muted/30 pt-3">
            {!user ? (
              <Link to="/login" onClick={() => setOpen(false)}>
                <Button className="w-full">Sign In</Button>
              </Link>
            ) : (
              <ProfileComponent />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
