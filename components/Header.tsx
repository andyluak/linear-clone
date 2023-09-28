import Link from "next/link";
import Container from "./Container";
import { Logo } from "./icons/logo";
import clsx from "clsx";

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
  <header className="border-white-a08 fixed left-0 top-0 w-full border-b">
    <Container className="flex h-[var(--navigation-height)] items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>

      <nav>
        <ul className={clsx("flex", "[&_a]:text-sm [&_li]:ml-6")}>
          {navItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className="ml-auto flex h-full items-center">
        <Link className="mr-6 text-sm" href="/login">
          Log in
        </Link>

        <Link href="/signup">Sign up</Link>
      </div>
    </Container>
  </header>
);

export default Header;
