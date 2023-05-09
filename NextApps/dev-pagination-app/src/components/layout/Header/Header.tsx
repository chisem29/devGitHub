
import Link from "next/link"
import styles from "./Header.module.sass"
import { FC } from "react"

import { usePathname } from 'next/navigation';
import Image from "next/image";
import img from "../../../../public/favicon.ico"

const Header : FC = () => {

  const pathname = usePathname()

  return (
    <>
      <header
        className={`
          max-sm:bg-[#12131428] 
          max-sm:border-b-2 
          max-sm:border-neutral-950 
          max-sm:p-4 
          max-sm:fixed 
          max-sm:top-0 
          max-sm:left-0 
          w-full
          ${styles.container}
        `}>
        <nav
          className={`flex flex-row justify-around items-center flex-wrap ${styles.menu}`}>
          <div
            className={styles.logo}>
            <Link
              href="/" 
              replace
              className="
                no-underline 
                transition-all 
                text-2xl 
                uppercase
              ">
              logo
            </Link>
          </div>
          <div
            className={`${styles.navigation} flex flex-col gap-4 sm:flex-row`}>
            {
              [
                {
                  path : "about"
                },
                {
                  path : "feature"
                },
                {
                  path : "contacts"
                }
              ].map(({ path }) => 
                <Link
                  className={`
                    transition-all 
                    hover:underline 
                    hover:underline-offset-8 
                    hover:text-red-900
                    font-semibold 
                    uppercase 
                    text-sm
                    ${pathname.includes(path) ? ' text-red-900 underline underline-offset-8' : ''}
                  `}
                  href={`/${path}`}>
                  {path}
                </Link>
              )
            }
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header