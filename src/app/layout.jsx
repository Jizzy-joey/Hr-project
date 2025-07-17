import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./component/navigation/Nav";
import Footer from "./component/Footer";
import { SideProvider } from "./providers";

const robo = Roboto({
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900"
  ],
  subsets: ["latin"]
});



export const metadata = {
  title: "HR Platform",
  description: "A Platform for managing HR tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={robo.className}
      >
        <Nav />
      
        <div className="min-h-screen">
        <SideProvider>
          {children}
        </SideProvider>
        </div>


        <Footer />
      </body>
    </html>
  );
}
