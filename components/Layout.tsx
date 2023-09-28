import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="pt-[var(--navigation-height)]">{children}</main>
      <Footer />
    </>
  );
}
