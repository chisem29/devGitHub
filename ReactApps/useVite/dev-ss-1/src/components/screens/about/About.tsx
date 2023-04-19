
import { 
  FC, 
  ReactNode 
} from "react"

import styles from "./About.module.sass"
import Accordion from "./components/UI/Accordion/Accordion"

import Carousel from "../../layout/main/UI/carousel/Carousel"
import Form from "../../layout/main/UI/form/Form"
import { disableValidators } from "discord.js"

interface bodyOf {
  children? : ReactNode
}

const About : FC<bodyOf> = () => {

  return (
    <>
      <div className={`container-fluid ${styles.container}`}>
        <div 
          className={`row d-flex flex-column justify-content-center ${styles.generalAbout}`}>
          <div 
            className="col-12">
            <div className={styles.titleOf}>
              <h5>ABOUT US</h5>
              <small>Add Some Description</small>
            </div>
          </div>
          <div 
            className="col-12">
            <div
              className={`container ${styles.aboutBoxWelcome}`}>
              <div className={`row ${styles.row}`}>
                <div 
                  className={`col-md-6 col-sm-12 ${styles.col}`}>
                  <img 
                    className="img-fluid"
                    src="https://avatars.mds.yandex.net/i?id=cc674cb7bca994106403473ed5208e0175289335-6969813-images-thumbs&n=13"/>
                </div>
                <div 
                  className={`col-md-6 col-sm-12 ${styles.col}`}>
                  <div
                    className="d-flex flex-column">
                    <h5>
                      Welcome to our Downy Shoes
                    </h5>
                    <p>
                      Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis In semper lorem eget tortor pulvinar ultricies.
                      <br /><br />
                      Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices. Maecenas dictum arcu purus, sit amet volutpat purus viverra sit amet. Quisque lacinia quam sed tortor interdum, malesuada congue nunc ornare. Cum sociis . In semper lorem eget tortor pulvinar ultricies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
          className={`row ${styles.moreInfoAbout} `}>
            <div 
              className="col-md-6 col-sm-12">
              <div>
                <h5>who we are</h5>
                <Accordion />
              </div>
            </div>
            <div 
              className="col-md-6 col-sm-12">
              <div
                className={styles.proggresBarInfo}>
                <img src="https://avatars.mds.yandex.net/i?id=119fb4474a69b13c92d76560f8fc5c93cc7051ff-8750921-images-thumbs&n=13"/>
                <div>
                  <h5>
                    our skills
                  </h5>
                  <div
                    className={styles.listProgress}>
                    {
                      [
                        ["development", 95],
                        ["pricing", 85],
                        ["production", 90],
                        ["advertising", 86]
                      ].map(([name, progress]) => 
                        <div>
                          <div
                            className="d-flex justify-content-between">
                            <div>{name}</div>
                            <div>{progress}%</div>
                          </div>
                          <div className="progress">
                            <div className="progress-bar bg-dark" role="progressbar" style={{width: `${progress}%`}} ></div>
                          </div>
                        </div>
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div 
          className={`row ${styles.row}`}>
          <div className={`col-12 ${styles.col}`}>
            <Carousel />
          </div>
        </div>
        <div 
          className="row">
          <div 
            className="col-12">
            <Form />
          </div>
        </div>
      </div>
    </>
  )
}

export default About