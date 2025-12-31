"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

import { Button } from "@/components/ui/button";

import ProfileComponent from "./ProfileComponent";

import { useAuth } from "@/store/auth.store";
import { navlinks } from "@/data";

function Header() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="HiddenBharat"
            className="h-9 w-9 object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
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

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <Link to="/login">
              <Button variant="outline" className={"cursor-pointer"}>
                Sign In <LogIn size={14} />
              </Button>
            </Link>
          ) : (
            <ProfileComponent />
          )}
        </div>

        {/* Mobile Toggle */}
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm">
            {navlinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <div className="pt-4 border-t">
              {!user ? (
                <Link to="/login" onClick={() => setOpen(false)}>
                  <Button className="w-full">Sign In</Button>
                </Link>
              ) : (
                <ProfileComponent />
              )}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
