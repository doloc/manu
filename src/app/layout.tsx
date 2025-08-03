import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer";
import LoadingScreen from "./components/loading-screen";

const beaufortforLOL = localFont({
  src: [
    {
      path: "../../public/fonts/BeaufortforLOL-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/BeaufortforLOL-HeavyItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-beaufortforlol",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Lục địa Manu',
  description: 'Game Lục địa Manu - Zalo là một trong các game nhập vai miễn phí với lối chơi hấp dẫn được nhiều người ưu chuộng bậc nhất hiện nay. Người chơi sẽ hóa thân thành những chiến binh đến từ các lục địa khác nhau, tham gia vào các trận chiến đấu để bảo vệ lục địa của mình. Game gọn nhẹ, trải nghiệm mượt mà, không nóng máy hao pin, đặc biệt game mang lại cảm giác chân thật và cảm xúc cao trào qua từng thước game. Game có nhiều sự kiện hấp dẫn và nhận quà miễn phí mỗi ngày',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
      images: [
          {
              url: `/images/banner-light.jpg`,
              width: 550,
              height: 310,
              alt: 'Lục địa Manu H5 - Zalo',
          },
      ],
      description:
          'Game Lục địa Manu - Zalo là một trong các game nhập vai miễn phí với lối chơi hấp dẫn được nhiều người ưu chuộng bậc nhất hiện nay. Người chơi sẽ hóa thân thành những chiến binh đến từ các lục địa khác nhau, tham gia vào các trận chiến đấu để bảo vệ lục địa của mình. Game gọn nhẹ, trải nghiệm mượt mà, không nóng máy hao pin, đặc biệt game mang lại cảm giác chân thật và cảm xúc cao trào qua từng thước game. Game có nhiều sự kiện hấp dẫn và nhận quà miễn phí mỗi ngày',
  },
  icons: {
    icon: '/images/logo-manu.png',
    shortcut: '/images/logo-manu.png',
    apple: '/images/logo-manu.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="mdl-js">
      <head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/images/logo-manu.png" />
        <link rel="preload" as="image" href="/images/banner-light.jpg" />
        <link rel="preload" as="image" href="/images/banner-dark.jpg" />
        <link rel="preload" as="image" href="/images/pc-hero-effect.png" />
        <link rel="preload" as="image" href="/images/mb-hero-effect.png" />
        {/* Preload videos */}
        <link rel="preload" as="video" href="/images/pc-hero-vid.webm" media="(min-width: 768px)" />
        <link rel="preload" as="video" href="/images/mb-hero-vid.webm" media="(max-width: 767px)" />

      </head>
      <body
        className={`${beaufortforLOL.variable} font-sans antialiased`}
        style={{ fontFamily: beaufortforLOL.style.fontFamily }}
      >
        <LoadingScreen />
        {children}
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '14px',
            },
            success: {
              style: {
                background: '#10B981',
              },
            },
            error: {
              style: {
                background: '#EF4444',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
