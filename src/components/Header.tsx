import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Rubi Smile Dental Clinic" className="h-12 w-12 rounded-inner object-cover" />
          <div className="hidden sm:block">
            <span className="font-display text-lg font-bold text-foreground">Rubi Smile</span>
            <span className="block text-xs font-body text-muted-foreground">Dental Clinic</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-body text-sm font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute -bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+2348000000000"
            className="flex items-center gap-2 rounded-inner bg-primary px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground shadow-subtle transition-all duration-200 hover:-translate-y-px hover:shadow-hover-lift active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Book Now
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <nav className="container mx-auto flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-inner px-4 py-3 font-body text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+2348000000000"
              className="mt-2 flex items-center justify-center gap-2 rounded-inner bg-primary px-5 py-3 font-display text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
