
import { 
  FC, 
} from "react"

import styles from "./Contact.module.sass"


const Contact : FC = () => {

  return (
    <div
      className={`${styles.contactPage} mt-4`}>
      <div 
        className={`container-fluid py-4 mb-2 ${styles.container}`}>
        <div className="row">
          <div className="col-12">
            <div
              className={styles.titleOf}>
              <h5>contact us</h5>
              <small>add some description</small>
            </div>
          </div>
          <div className="col-12">
            <form
              action="/"
              className={`form ${styles.formOf} mt-4`}>
              <div 
                className={`container-fluid ${styles.container}`}>
                <div 
                  className={`row ${styles.row}`}>
                  <div 
                    className={`col-sm-12 col-md-7 col-lg-8 ${styles.col}`}>
                    <div 
                      className={`container-fluid d-flex flex-column ${styles.container}`}>
                      <div 
                        className={`row ${styles.row}`}>
                        <div 
                          className={`col ${styles.col}`}>
                          <h6
                            className={styles.legendOf}>
                            Please fill this form to contact with us.
                          </h6>
                        </div>
                      </div>
                      <div 
                        className={`row ${styles.row}`}>
                        <fieldset
                          className={`${styles.fieldsetOf}`}>
                          <div 
                            className={`container ${styles.container}`}>
                            <div 
                              className={`row d-flex ${styles.row}`}>
                              <div 
                                className={`col-md-6 col-sm-12 ${styles.col}`}>
                                <input
                                  required 
                                  placeholder="name"
                                  type="text"
                                  className="form-control" />
                              </div>
                              <div 
                                className={`col-md-6 col-sm-12 ${styles.col}`}>
                                <input
                                  required 
                                  placeholder="telephone"
                                  type="text"
                                  className="form-control" />
                              </div>
                              <div 
                                className={`col-md-6 col-sm-12 ${styles.col}`}>
                                <input
                                  required 
                                  placeholder="email"
                                  type="email"
                                  className="form-control" />
                              </div>
                              <div 
                                className={`col-md-6 col-sm-12 ${styles.col}`}>
                                <input
                                  required 
                                  placeholder="subject"
                                  type="text"
                                  className="form-control" />
                              </div>
                              <div className={`col-12 ${styles.col}`}>
                                <textarea 
                                  placeholder="message.."
                                  className="form-control"/>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div 
                        className={`row d-flex ${styles.row}`}>
                        <div 
                          className={`col-sm-12 col-md-6 ${styles.col}`}>
                          <button
                            type="submit">
                            submit
                          </button>
                        </div>
                        <div 
                          className={`col-sm-12 col-md-6 ${styles.col}`}>
                          <button
                            type="reset">
                            clear
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div 
                    className={`col-sm-12 col-md-5 col-lg-4 ${styles.col}`}>
                    <h6
                      className={styles.legendOf}>
                      Contact Info
                    </h6>
                    <ul
                      className={`d-flex flex-column ${styles.listInfo}`}>
                      {
                        [
                          { src : "https://img.icons8.com/ios-filled/1x/home.png", inner : ["Visit us", "Parma Via Modena,BO, Italy"]},
                          { src : "https://img.icons8.com/ios-filled/1x/media-message.png", inner : ["Mail us", <a href="">info@example.com</a>]},
                          { src : "https://img.icons8.com/ios-filled/1x/phone.png", inner : ["Call us", "+18044261149"]},
                          { src : "https://img.icons8.com/glyph-neue/1x/fax.png", inner : ["Fax", "+1804426349"]}
                        ].map(({
                          src,
                          inner
                        }) => 
                          <li>
                            <div
                              className={`d-flex flex-wrap`}>
                              <div
                                className={styles.imgLi}>
                                <img 
                                  src={src}/>
                              </div>  
                              <div
                                className={`d-flex flex-column ${styles.descriptionLi}`}>
                                <h6>{inner[0]}</h6>
                                <small>{inner[1]}</small>
                              </div>
                            </div>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1141689.0906594223!2d-122.60586018906176!3d37.77831155169971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2z0KHQsNC9LdCk0YDQsNC90YbQuNGB0LrQviwg0JrQsNC70LjRhNC-0YDQvdC40Y8sINCh0KjQkA!5e0!3m2!1sru!2sru!4v1681413511037!5m2!1sru!2sru" 
        width="600" 
        height="450" 
        allowFullScreen={false}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" />
    </div>
  )
}

export default Contact