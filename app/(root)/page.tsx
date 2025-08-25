import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = {firstName: "Harsh"}
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
            <h1 className="text-red-500">Hello Tailwind</h1>
        </div>
    </section>
  )
}

export default Home