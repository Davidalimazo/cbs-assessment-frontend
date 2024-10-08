import "./styles/globals.scss";
import { Inter } from "next/font/google";
import { Viewport, Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s CBS",
  },
  description:
    "Cross Border Supermarkets is expanding their business to Nigeria, to serve the African market with some significant local African partners",
  keywords: [
    "Cross",
    "Border",
    "Supermarkets",
    "expanding",
    "business",
    "Nigeria",
  ],
  authors: [{ name: "Alimazoya David" }],
  openGraph: {
    title: {
      default: "CBS",
      template: "%s CBS",
    },
    description:
      "Cross Border Supermarkets is expanding their business to Nigeria, to serve the African market with some significant local African partners",
    // @ts-ignore
    local: "en_US",
    siteName: "Cross Border Supermarkets",
  },
  twitter: {
    title: {
      default: "Cross Border Supermarkets",
      template: "%s | CBS",
    },
    description:
      "Cross Border Supermarkets is expanding their business to Nigeria, to serve the African market with some significant local African partners",
    site: "CBS",
    // @ts-ignore
    cardType: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-dmSans`}>
        <ReactQueryProvider>
          <ToastContainer bodyClassName="toast-body" />
          <Providers>{children}</Providers>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
