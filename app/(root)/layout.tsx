// app/(root)/layout.tsx
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {$id: 'mock-id', firstName: 'Harsh', lastName: 'hk', email: 'harsh@example.com', userId: 'mock-user-id', dwollaCustomerUrl: 'mock-url', dwollaCustomerId: 'mock-dwolla-id', address1: 'Mock Address', city: 'Mock City', state: 'Mock State', postalCode: '12345', dateOfBirth: '1990-01-01', ssn: '123-45-6789'}
  return (
    // <div className="flex h-screen">
    //   <div className="sidebar">
    //     SIDEBAR
    //   </div>
    //   <div className="flex-1">
    //     {children}
    //   </div>
    // </div>
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className='flex size-full flex-col'>
        <div className='root-layout'>
          <Image src='/icons/logo.svg' alt='logo' width={30} height={30} />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
      
    </main>
  );
}