import SocNets from '../../UI/socNets/SocNets'
import styles from './Footer.module.sass'
import { FC } from "react"

const Footer : FC = () => {

  return (
    <div 
      className={styles.footerApp}>
      <div
        className="container-fluid">
        <div
          className="
            row 
            d-flex 
            flex-row
            justify-content-around
            g-4
          ">
          <div 
            className="
              col-lg-3 
              col-md-6 
              col-sm-12
            ">
            <section
              className={styles.DownyShoes}
              id="DownyShoes">
              <div
                className={styles.titleGeneral}>
                <span>D</span>owny Shoes
              </div>
              <p
                className={styles.innerDS}>
                Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
              </p>
              <SocNets />
            </section>
          </div>
          <div 
            className="
              col-lg-3 
              col-md-6 
              col-sm-12
            ">
            <section
              className={styles.OurInformation}
              id="OurInformation">
              <div
                className={styles.titleSec}>
                <span>Our</span> Inforamtion
              </div>
              <p
                className={styles.infoNavs}>
                {
                  [
                    "Home",
                    "About",
                    "Services",
                    "Short Codes",
                    "Contacts"
                  ].map((name) => 
                    <a 
                      href={`/${name.toLowerCase().replaceAll(" ", "&").replace("home", "")}`}>
                      {name}
                    </a>
                  )     
                }
              </p>
            </section>
          </div>
          <div 
            className="
              col-lg-3 
              col-md-6 
              col-sm-12
            ">
            <section
              className={styles.StoreInformation}
              id="StoreInformation">
              <div
                className={styles.titleSec}>
                <span>Store</span> Inforamtion
              </div>
              <p
                className={styles.bodyStore}>
                <div
                  className="container">
                  <div 
                    className="row">
                    {
                      [
                        { 
                          src :"https://img.icons8.com/ios-glyphs/256/phone.png", 
                          inner : <>+1 234 567 8901</>, 
                          title : <>Phone Number</>
                        },
                        { 
                          src :"https://img.icons8.com/ios-glyphs/256/filled-message.png", 
                          inner : <>Email : <a href="#">mail@example.com</a></>, 
                          title : <>Email Address</>
                        },
                        { 
                          src : "https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/256/external-geolocation-digital-marketing-smashingstocks-glyph-smashing-stocks.png", 
                          inner : <>Broome St, NY 10002,California, USA.</>, 
                          title : <>Location</>
                        }
                      ].map(({src, title, inner}) =>
                        <div 
                          className="col-12">
                          <p
                            className={styles.actionStore}>
                            <img 
                              src={src} />
                            <div
                              className={styles.innerAction}>
                              <div> {title} </div>
                              <p> {inner} </p>
                            </div>
                          </p>
                        </div>
                      )
                    }
                  </div>
                </div>
              </p>
            </section>
          </div> 
          <div 
            className="
              col-lg-3 
              col-md-6 
              col-sm-12
            ">
            <section
              className={styles.FlickrPosts}
              id="FlickrPosts">
              <div
                className={styles.titleSec}>
                <span>Flick</span> Posts
              </div>
              <p>
                <div className="container">
                  <div 
                    style={{ gap : 8 }}
                    className="
                      row 
                    ">
                    {
                      [
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13",
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13",
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13",
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13",
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13",
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13",
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13",
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13",
                        "https://avatars.mds.yandex.net/i?id=ce034523a703a44b2d0377946c56f5db2d57f711-9053197-images-thumbs&n=13"
                      ].map((targImg) =>
                        <div 
                          className="col-3">
                          <img 
                            style={{ minHeight : 60, minWidth : 60 }}
                            className="img-fluid"
                            src={targImg}/>
                        </div> 
                      )
                    }
                  </div>
                </div>
              </p>
            </section>
          </div>
        </div>
        <div
          className="row">
          <div 
            className="col-12">
            <div
              className={`text-center ${styles.copyBottom}`}>
              <br></br>
              @ 2018 Downy Shoes. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer