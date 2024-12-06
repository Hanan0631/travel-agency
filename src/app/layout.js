import { yekan } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "آژانس مسافرتی | تورینو",
  description: "سایت خرید تورهای داخلی و خارجی",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning={true}>
      <body className={yekan.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
