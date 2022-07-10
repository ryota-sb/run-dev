import Header from "../components/header";
import Footer from "../components/footer";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
