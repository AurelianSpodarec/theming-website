import type { Metadata } from "next";
import "./../styles/styles.css";

export const metadata: Metadata = {
  title: "Theming Website",
  description: "",
};

function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout