import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  const style = { minHeight: "800px" };
  return (
    <div>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
