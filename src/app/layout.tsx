import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SALON_DATA } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuesencia-hair.vercel.app"),
  title: `${SALON_DATA.name} | ${SALON_DATA.subtitle} — Camila Bessing`,
  description: `${SALON_DATA.name} — ${SALON_DATA.secondaryTagline} Balayage Haute Couture, corte escultural visagista, spa capilar y manicura rusa en Katueté, Paraguay.`,
  keywords: [
    "salón de belleza Katueté",
    "Tu Esencia",
    "Tu Esencia Hair",
    "Camila Bessing",
    "balayage Katueté",
    "mechas rubias Paraguay",
    "visagismo capilar",
    "spa capilar",
    "manicura rusa Katueté"
  ],
  authors: [{ name: "Camila Bessing" }],
  openGraph: {
    title: `${SALON_DATA.name} | ${SALON_DATA.subtitle}`,
    description: SALON_DATA.secondaryTagline,
    url: "https://tuesencia-hair.vercel.app",
    siteName: SALON_DATA.name,
    images: [
      {
        url: "/tuesencia-logo.jpg",
        width: 800,
        height: 800,
        alt: `${SALON_DATA.name} — ${SALON_DATA.subtitle}`
      }
    ],
    locale: "es_PY",
    type: "website"
  },
  icons: {
    icon: "/tuesencia-logo.jpg",
    apple: "/tuesencia-logo.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${plusJakarta.variable} antialiased selection:bg-[#dfc18c] selection:text-[#0a0908]`}
    >
      <body className="min-h-screen bg-[#0a0908] text-[#f8f6f0] font-[family-name:var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}
