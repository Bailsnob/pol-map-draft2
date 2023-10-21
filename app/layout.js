import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/layout/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PolMap",
  description: "learn more about electoral geography",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Navigation />
//         {children}
//       </body>
//     </html>
//   );
// }

//TODO: change title and description
//can return html because of babel
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="gridContainer">
          <div className="navigation"><Navigation /></div>
          <div className="pageContent">{children}</div>
        </div>
      </body>
    </html>
  );
}
