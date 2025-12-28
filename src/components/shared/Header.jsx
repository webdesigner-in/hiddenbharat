"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navlinks } from "@/data";

function Header() {
  const [open, setOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white md:bg-white/20 md:backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-8xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="HiddenBharat logo"
            className="h-9 w-9 object-contain"
          />
          <span className="sr-only">HiddenBharat</span>
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

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <Button size="icon" variant="ghost">
              <User2 className="h-5 w-5" />
            </Button>
          ) : (
            <Button variant="outline">
              Sign In <LogIn size={14}  />
            </Button>
          )}
        </div>

        {/* Mobile Toggle */}
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute inset-x-0 top-16 border-b bg-white backdrop-blur-3xl shadow-lg">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm font-medium">
            {navlinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block text-muted-foreground transition hover:text-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <div className="pt-4 border-t">
              {isLoggedIn ? (
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <User2 className="h-4 w-4" />
                  Account
                </Button>
              ) : (
                <Button className="w-full bg-orange-600">
                  Sign In <LogIn size={14}  />
                </Button>
              )}
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
