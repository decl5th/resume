import "./globals.css";

export const metadata = {
  title: "이력서",
  description: "이민혁의 이력서",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
