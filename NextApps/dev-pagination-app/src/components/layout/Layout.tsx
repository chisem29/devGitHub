import { FC, PropsWithChildren, } from "react"
import { Inter } from 'next/font/google'

import Header from "./Header/Header"
import Main from "./Main/Main"
import Footer from "./Footer/Footer"

import styles from "./Layout.module.sass"

const inter = Inter({ subsets: ['latin'] })

const Layout : FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={`flex min-h-screen justify-between flex-col items-center p-24 gap-y-8 ${inter.className}`}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}

export default Layout