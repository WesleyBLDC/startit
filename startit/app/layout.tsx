import "../styles/globals.css";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-hero bg-left bg-right bg-cover">
        <Header />
        {children}
      </body>
    </html>
  );
}
