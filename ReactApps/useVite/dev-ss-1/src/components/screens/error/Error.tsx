
import { 
  FC, 
  ReactNode 
} from "react"

import styles from "./Error.module.sass"
import { useNavigate } from "react-router-dom"
import SocNets from "../../UI/socNets/SocNets"

interface bodyOf {
  children? : ReactNode
}

const Error : FC<bodyOf> = () => {

  const navigate = useNavigate()

  return (
    <>
      <div
        className={`d-flex align-items-center flex-column py-4 ${styles.container}`}>
        <h1>
          404
        </h1>
        <p>
          this link dead link
        </p>
        <form 
          className={`form ${styles.form}`}>
            <div className="input-group mb-3">
              <input 
                required
                type="search" 
                className="form-control" 
                placeholder="Search here" 
                aria-describedby="basic-addon1"
              />
              <div className="input-group-prepend">
                <button type="submit">
                  <img 
                    src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/1x/external-search-ui-essentials-kmg-design-glyph-kmg-design.png"/>
                </button>
              </div>
            </div>
        </form>
        <div>
          <SocNets />
          <br />
        </div>
        <button
          onClick={() => {navigate("/")}}>
          Back to Home
        </button>
      </div>
    </>
  )
}

export default Error