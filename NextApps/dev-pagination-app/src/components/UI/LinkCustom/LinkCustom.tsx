import { FC } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Inconsolata } from "next/font/google"

import linkCustomBody from "@/shared/interfaces/linkCustom"

const LinkFont = Inconsolata({ subsets : [] })

const LinkCustom : FC<linkCustomBody> = ({ innerText, navActiveOn }) => {

  const pathname = usePathname()

  return (
    <Link 
      className={
        (!navActiveOn) ?
        `
          capitalize 
          text-base 
          hover:text-[#ad3434]
          ${LinkFont.className}
          ${(innerText != "home" ? innerText.replaceAll(" ", "") : "") === (pathname.replaceAll("/", "")) ? "text-[#478ac9]" : ""}
        ` : 
        `
          hover:text-[#cfcfcf]
          text-[#fff]
          capitalize 
          text-base
        `
      }
      children={innerText}
      replace
      href={( innerText != "home" ? innerText.replaceAll(" ", "") : "/" )} 
    />
  )
}

export default LinkCustom