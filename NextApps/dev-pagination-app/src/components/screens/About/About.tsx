import { FC } from "react"
import styles from "./About.module.sass"
import { useRouter } from "next/router"
import userBody from "@/shared/interfaces/user"

const About : FC<{user : userBody}> = ({ user }) => {

  return (
    <>
      <div
        className="">
        <form
          action="/api/auth"
          className="flex flex-col items-center gap-y-4"
          method="post">
          <legend>
            <h1
              className="
                text-xl
                uppercase
              "> 
              Log <span className="text-red-900">In</span>
            </h1>
          </legend>
          <br />
          {
            [
              { name : "name", },
              { name : "password", }
            ].map(({ name }) => 
              <fieldset
                className="flex gap-x-3 items-center">
                <label
                  className="uppercase tracking-wider"
                  id={`fda${name}`}>
                  {name}
                </label>
                <input 
                  className="
                    text-slate-950 outline-0 h-[30px] bg-slate-100
                  "
                  id={`fda${name}`}
                  name={name}
                  type={name == "name" ? "text" : "password"}
                  required
                />
              </fieldset>
            )
          }
          <br />
          <button 
            className={`
              ${styles.button}
              uppercase 
              text-sm 
              font-sans 
              font-medium
              bg-red-900
              text-gray-300
              basis-[35px] 
              min-w-[140px] 
              cursor-pointer
              tracking-[0.25rem]
            `}
            type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  )
}

export default About