///Layout page

///Libraries -->
import Header from '@/components/header/Header';
import Footer from "@/components/footer/Footer";
import { companyName, domainName } from '@/config/utils';
import type { Metadata } from 'next'
import styles from "./layout.module.scss"

///Commencing the code

///Declaring the metadata
export const metadata: Metadata = {
  metadataBase: new URL(domainName), 
  title: {
    default: `${companyName}`,
    template: `%s | ${companyName}`
  },
  icons: {
    icon: 'favicon.ico',
  },
  description: `Decentralized Education Empowered by Cartesi Roll Ups & Token Rewards.`,
  keywords: "token, cryptocurrency, web3, defi, digital, tokenomics, cartesi, roll ups, smart contract, solidity, course, dapp, blockchain, learn, education, rewards, programming, frontend, software"
}

/**
 * @title Layout Page
 * @returns The Layout Page
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={styles.html} style={{ scrollBehavior: 'smooth' }}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
