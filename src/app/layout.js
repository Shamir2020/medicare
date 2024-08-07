import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
        <Navbar/>
        <div className="MedicareContainer">
          {children} 
        </div>
        <Footer />
        
        <Toaster position="top-right"/>
        </body>
    </html>
  );
}
