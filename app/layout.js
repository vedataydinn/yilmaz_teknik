import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yılmaz Teknik | Beyaz Eşya & Klima Teknik Servisi",
  description: "Elazığ'da profesyonel beyaz eşya ve klima tamiri. Hızlı servis, uygun fiyat, garantili hizmet.",
  keywords: "tamirci, beyaz eşya tamiri, klima bakımı, Elazığ teknik servis, buzdolabı tamiri, çamaşır makinesi tamiri, elektrikli süpürge tamiri, klima tamiri, teknik servis Elazığ, ev aletleri tamiri, yetkili servis, garantili tamir, uygun fiyatlı tamir, yılmaz teknik servis, hızlı tamir",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
