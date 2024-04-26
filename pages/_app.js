import './globals.css';
import { Poppins } from "next/font/google";


const poppins = Poppins({ 
    subsets: ["latin"],
    variable: "--my-font-family",   
    weight: ["400", "500", "600", "700", "800", "900"]  
   });
 
export default function MyApp({ Component, pageProps }) {
    return (
        // Apply the font variable globally
        <div className={poppins.className}> 
          <Component {...pageProps} />        
        </div>
      );
}       

