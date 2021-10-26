import HeaderComponent from "../components/headerComponent/headerComponent";
import FooterComponent from "../components/footerComponent/footerComponent";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </ThemeProvider>
  );
}

export default MyApp;
