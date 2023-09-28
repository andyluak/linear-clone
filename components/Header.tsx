import Link from "next/link";
import Container from "./Container";
import { Logo } from "./icons/logo";

const navItems = [
  { name: "Features", href: "/features" },
  { name: "Method", href: "/method" },
  { name: "Customers", href: "/customers" },
  { name: "Changelog", href: "/changelog" },
  { name: "Integration", href: "/integration" },
  { name: "Pricing", href: "/pricing" },
  { name: "Company", href: "/company" },
];

const Header = () => (
  <header>
    <Container className="flex h-[var(--navigation-height)] items-center">
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul className="flex">
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </Container>
  </header>
);

export default Header;
