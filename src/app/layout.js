import {Poppins } from "next/font/google";
import "./globals.css";


// const poppins = Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-poppins',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// });


export const metadata = {
  title: "resume Alireza Khoondabi",
  description: "website Alireza khoondabi resume",
  keywords:["علیرضا","علیرضا خوندابی","رزومه علیرضا خوندابی","رزومه","alireza khoondabi","Alireza khoondabi","alireza khoondabi"]
};

export default function RootLayout({ children }) {
  // ${poppins.variable}
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
