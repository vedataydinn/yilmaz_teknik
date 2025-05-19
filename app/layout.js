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
  description: "Elazığ'da profesyonel beyaz eşya ve klima tamiri, montaj, bakım ve onarım hizmetleri. Hızlı servis, uygun fiyat, garantili hizmet. Yılmaz Teknik ile tamirci, beyaz eşya, klima, montaj, tamir, bakım, onarım ve her şey var!",
  keywords: "yılmaz teknik, tamirci, beyaz eşya tamiri, klima bakımı, montaj, tamir, bakım, onarım, Elazığ teknik servis, buzdolabı tamiri, çamaşır makinesi tamiri, elektrikli süpürge tamiri, klima tamiri, teknik servis Elazığ, ev aletleri tamiri, yetkili servis, garantili tamir, uygun fiyatlı tamir, yılmaz teknik servis, hızlı tamir, beyaz eşya montajı, beyaz eşya servisi, klima servisi, Elazığ tamirci, Elazığ beyaz eşya, Elazığ klima",
  openGraph: {
    title: "Yılmaz Teknik | Beyaz Eşya & Klima Teknik Servisi",
    description: "Elazığ'da profesyonel beyaz eşya ve klima tamiri, montaj, bakım ve onarım hizmetleri. Hızlı servis, uygun fiyat, garantili hizmet.",
    url: "https://yilmazteknik.com.tr/",
    type: "website",
    locale: "tr_TR",
    site_name: "Yılmaz Teknik",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Yılmaz Teknik Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@yilmazteknik",
    title: "Yılmaz Teknik | Beyaz Eşya & Klima Teknik Servisi",
    description: "Elazığ'da profesyonel beyaz eşya ve klima tamiri, montaj, bakım ve onarım hizmetleri.",
    image: "/logo.svg"
  },
  verification: {
    google: "GOOGLE_VERIFICATION_CODE_BURAYA"
  }
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
