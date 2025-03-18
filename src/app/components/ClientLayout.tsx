'use client';

// import { usePathname } from 'next/navigation';
import Footer from './Footer';
import Header from './Header';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const isAboutPage = pathname === '/pages/about/';

  return (
    <div className='h-screen flex flex-col overflow-y-auto snap-y snap-mandatory'>
      <Header />
      <main className='flex-1 flex flex-col'>{children}</main>
      <Footer />
    </div> //{!isAboutPage && <Footer />}
  );
}
