import {
  FC
} from "react"

import styles from "./SocNets.module.sass"

const SocNets : FC = () => {
  return (
    <div
      className={styles.socialNets}>
      {
        [
          { src : ["https://img.icons8.com/material-sharp/256/facebook-f.png"], alt : "facebook" },
          { src : ["https://img.icons8.com/windows/1x/twitter.png"], alt : "twitter" },
          { src : ["https://img.icons8.com/sf-regular/1x/instagram-new.png"], alt : "instagram" },
          { src : ["https://img.icons8.com/windows/1x/linkedin-2.png"], alt : "in" }
        ].map(({src, alt}) => 
          <div>
            <div>
              <a
                href="/">
                <img 
                  alt={alt}
                  src={src[0]} />
              </a>
            </div>
            <div>
              <a
                href="/">
                <img 
                  alt={alt}
                  src={src[0]} />
              </a>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default SocNets