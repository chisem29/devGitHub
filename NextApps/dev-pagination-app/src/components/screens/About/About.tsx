import { FC, useEffect } from "react"
import styles from "./About.module.sass"

import services from "@/services/index.service"
import userBody from "@/shared/interfaces/user"
import { useMutation } from "react-query"
import { useRouter } from "next/router"

const About : FC<{user : userBody}> = ({ user }) => {

  const { data:userTarget, mutate, isLoading } = useMutation({
    mutationKey : ["auth", "login"],
    mutationFn : async () => await services.getUser(user),
  })

  useEffect(() => {
    mutate()
  }, [user])

  return (
    <>
      <div>
        { 
          (!userTarget?.name) ?
            <form
              className="flex flex-col items-center gap-y-4"
              method="GET">
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
                    className="flex gap-x-3 items-center max-sm:flex-col">
                    <label
                      className="uppercase tracking-wider"
                      id={`fda${name}`}>
                      {name}
                    </label>
                    <input 
                      className="
                        text-slate-950 outline-0 h-[30px] bg-slate-100 sm:basis-[200px] w-[90%]
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
                disabled={isLoading}
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
            </form> : 
            <div>
              <h5>
                You have logged 
                <span
                  className="text-green-950 font-bold">
                  {" " + userTarget.name}
                </span>
              </h5>
            </div>
        }
      </div>
    </>
  )
}

export default About