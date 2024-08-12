import DashboardLayout from "@/components/layout/DashboardLayout";
import { LayoutProps } from "@/interfaces/layout_interface";
import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s | CBS",
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
      template: "%s | CBS",
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


const layout: React.FC<LayoutProps> = ({ children }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
