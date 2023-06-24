
import { 
  FC, 
  PropsWithChildren, 
} from "react"

import styles from "./Home.module.sass"
import { useNavigate } from "react-router-dom"

import Carousel from "../../layout/main/UI/carousel/Carousel"
import Form from "../../layout/main/UI/form/Form"

const Home : FC<PropsWithChildren> = () => {

  const navigate = useNavigate()

  return (
    <>
      <div
        className={`container-fluid ${styles.container}`}>
        <div 
          className={`row ${styles.firstRow} ${styles.row}`}>
          <div 
            className={`col-sm-12 col-md-6 ${styles.col}`}>
            <section
              className={styles.firstSec}>
              <img 
                className="img-fluid"
                src="https://avatars.mds.yandex.net/i?id=8d02066611d5727f93059ec6070a2255fe66e85e-8492945-images-thumbs&n=13"
              />
            </section>
          </div>
          <div 
            className={`col-sm-12 col-md-6 ${styles.col}`}>
            <section
              className={styles.secondSec}>
              <div
                className={styles.oneSide}>
                <h5>Nike <span>DOWNSHIFTER</span></h5>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi tempora incidunt ut labore et dolore 
                </p>
                <button
                  onClick={() => { navigate("/shop&now") }}>
                  shop now
                </button>
              </div>
              <div
                className={styles.twoSide}>
                <img 
                  className="img-fluid"
                  src="https://avatars.mds.yandex.net/i?id=469493bce02e9d235bdb0c58089ee3bf29ad3694-7571104-images-thumbs&n=13"/>
                <h5>Air force</h5>
              </div>
            </section>
          </div>
        </div>

        <div 
          className={`row ${styles.row} ${styles.secondRow}`}>
          <div 
            className={`col-md-6 col-sm-12 ${styles.col}`}> 
            <div
              className={styles.oneSide}>
              <h5>sneakers</h5>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi tempora incidunt ut labore et dolore 
              </p>
              <button
                onClick={() => { navigate("/shop&now") }}>
                shop now
              </button>
            </div>
          </div>
          <div 
            className={`col-md-6 col-sm-12 ${styles.col}`}>
            <div
              className={styles.twoSide}>
              <img 
                className="img-fluid"
                src="https://avatars.mds.yandex.net/i?id=2c5ac25edf60410719fb4003d9ed08ae379301ce-5884402-images-thumbs&n=13"/>
              <h5>Air force</h5>
            </div>
          </div>
          <div 
            className={`col-md-6 col-sm-12 ${styles.col}`}>
            <div
              className={styles.twoSide}>
              <img 
                className="img-fluid"
                src="https://avatars.mds.yandex.net/i?id=31b4803aa7bb5b7f42c7c19d45dfe51c-6356264-images-thumbs&n=13"/>
              <h5>Air force</h5>
            </div>
          </div>
          <div 
            className={`col-md-6 col-sm-12 ${styles.col}`}>
            <div
              className={`${styles.oneSide} ${styles.darkSec}`}>
              <h5>sneakers</h5>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus reiciendis maiores alias consequatur.sed quia non numquam eius modi tempora incidunt ut labore et dolore 
              </p>
              <button
                onClick={() => { navigate("/shop&now") }}>
                shop now
              </button>
            </div>
          </div>
        </div>
        <div 
          className={`row`}>
          <div 
            className="col">
            <Carousel />
          </div>
        </div>
        { /* form */ }
        <div 
          className={`row ${styles.row}`}>
          <div 
            className="col">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home