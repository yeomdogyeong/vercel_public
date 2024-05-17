import type { Metadata } from "next";
import "./globals.css";
import RecoilRootWrapper from "@/components/recoil/RecoilWrapper";
import Providers from "@/components/react-query/Providers";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const excluededLoginPath = ['/signin']
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const router = useRouter();
  // useEffect(() => {
  //   // 로그인이 안됬을 때 & !로그인을 안해도 접속할 수 있는 페이지
  //   if(!isSignedIn && !excluededLoginPath.includes(router.pathname)) {
  //     const {myInfo} = axios.post()

  //   }

  // },[])

  return (
    <html>
      <body className="">
        <div className="flex flex-col items-center bg-[#403e3e]">
          <div className="block max-w-[390px] min-h-screen w-full h-full bg-white">
            <Providers>
              <RecoilRootWrapper>
                <main className="flex flex-col justify-center items-center">
                  {children}
                </main>
              </RecoilRootWrapper>
            </Providers>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
