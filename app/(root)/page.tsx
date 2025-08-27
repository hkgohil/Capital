import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
const Home = () => {
    const loggedIn = {$id: 'mock-id', firstName: 'Harsh', lastName: 'Gohil', email: 'hkgohil86@gmail.com', userId: 'mock-user-id', dwollaCustomerUrl: 'mock-url', dwollaCustomerId: 'mock-dwolla-id', address1: 'Mock Address', city: 'Mock City', state: 'Mock State', postalCode: '12345', dateOfBirth: '1990-01-01', ssn: '123-45-6789'}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type="greeting" 
                title="welcome"
                user={loggedIn.firstName || 'Guest'}
                subtext="Manage your finances with ease"/>
            </header>
            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
            recent transactions
        </div>
        <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:1500},{currentBalance:2000}]}/>
    </section>
  )
}

export default Home