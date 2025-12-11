import "@/styles/globals.css";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league-spartan",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={leagueSpartan.variable}>
      <Component {...pageProps} />
    </div>
  );
}
