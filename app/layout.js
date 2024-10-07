import localFont from "next/font/local";
import "@/app/globals.css";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children} {/* Esto envuelve las páginas de tu app */}
        </body>
      </html>
    );
  }
  