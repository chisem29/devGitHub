import {
  FC
} from "react"

import styles from "./Form.module.sass"

const Form : FC = () => {
  return (
    <>
      <div
        className={`container-fluid p-5 ${styles.container}`}>
        <div 
          className={`row d-flex justify-content-center ${styles.row}`}>
          <div 
            className="
              col-xs-12 
              col-sm-6">
            <h5 
              className={styles.titleOf}>
              Sign up for Newsletter !
            </h5>
          </div>
          <div 
            className="
              col-xs-12 
              col-sm-6">
            <form 
              className={`form ${styles.form}`}>
                <div className="input-group mb-3">
                  <input 
                    required
                    minLength={8}
                    maxLength={32}
                    type="email" 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    className="form-control" 
                    placeholder="Enter your email" 
                    aria-label="" 
                    aria-describedby="basic-addon1"
                  />
                  <div className="input-group-prepend">
                    <button type="submit">Submit</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form