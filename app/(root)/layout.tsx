import { APP_NAME } from "@/constants";
import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import { Metadata } from "next"
export const metadata:Metadata={
      title:`Home|${APP_NAME}`,
      description:'Home page',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="wrapper flex-1">{children}</main>
      <Footer />
    </div>
  )
}
