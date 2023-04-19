import {
  FC, useEffect, useState
} from "react"

import styles from "./Carousel.module.sass"

const Carousel : FC = () => {

  const [
    targetIndexItem,
    setIndexItem
  ] = useState<number>(0)

  useEffect(() =>  {
    setInterval(() => {
      setIndexItem(
        (targIndex) => 
        (() => {
          return  Number(targIndex) == 4 ? 0 : Number(targIndex) + 1
        })()
      )
    }, 10000)
  }, [])

  return (
    <>
      <div
        className={styles.carousel}>
        <div
          className={`container-fluid ${styles.container}`}>
          <div
            className={`row ${styles.row}`}>
            <div
              className={`col-sm-12 col-md-4 ${styles.col}`}>
              <div
                className={styles.indicatorsContain}>
                <h5>
                  Some More Shoes
                </h5>
                <div>
                  {
                    [-1, 1]
                      .map(elem => 
                        <a
                          onClick={() => {
                            setIndexItem(
                              (targIndex) => 
                              (() => {
                                if (elem < 0) {
                                  return Number(targIndex) != 0 ? Number(targIndex) + elem : 4
                                }
                                return  Number(targIndex) == 4 ? 0 : Number(targIndex) + elem
                              })()
                            )
                          }}>
                          <img 
                            src="https://img.icons8.com/fluency-systems-filled/1x/chevron-left--v2.png"/>
                        </a>
                    )
                  }
                </div>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-8 ${styles.col}`}>
              <div
                className={styles.innerCarousel}>
                {
                  [
                    [
                      "https://avatars.mds.yandex.net/i?id=34bd1af898674f68dcac3a321867d41b-3840100-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=596ea2f8dc2431563fcd9b6a9fc924b56440d538-4766454-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=3c60b31e8787919c1a4596e6d36db321e66b405c-8000733-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=7947f8644f5c7fda9fded9c8b09107ab-4559743-images-thumbs&n=13"
                    ], 
                    [
                      "https://avatars.mds.yandex.net/i?id=98293508162200777217891fea214c8f9e43ae43-7564157-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=65adc0af1b43ce645f984ba1b2aad932-5897571-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=50d39c050df4442f521dbbf8f62efbb1fd5b9440-8348888-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=4d8041e3d790b9b9f8ebba61a55564123ad2e6cf-4440117-images-thumbs&n=13"
                    ], 
                    [
                      "https://avatars.mds.yandex.net/i?id=cf5b878e012774cdd7446acbaffb40981e09efe1-9072244-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=9f226d94109183fe8e75b5b6e782f320-5354373-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=4fe195ba78c3e827a759ff37426b2fd675cc9171-5174345-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=19eb038ba2eda0155a80c67406dbbff3-5231908-images-thumbs&n=13"
                    ], 
                    [
                      "https://avatars.mds.yandex.net/i?id=7f535016739a1b6a806c259f46af41f5-5233313-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=7b2d204d3b8cb07bb4d88394c7b31f3152dd6d30-7732367-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=54196396e6747f2eae824981d576734d4ed349f7-4220397-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=767d75c2a63d6e10cab3ee9b2391f6682766cbee-8196260-images-thumbs&n=13"
                    ], 
                    [
                      "https://avatars.mds.yandex.net/i?id=e7225dbdda71919454d31adcb594da37-4872430-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=b9388df287a3c8b3002596bc290ef5323b90c6df-8268761-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=f3f0f4e2243200cde23de888b172e76c43312539-9217411-images-thumbs&n=13",
                      "https://avatars.mds.yandex.net/i?id=7ea60ec400b78fe2b11e205fa4287b69c2f6ef63-8498221-images-thumbs&n=13"
                    ]
                  ].map((elem, index) =>
                  <div
                    className={`${styles.innerItem} ${index == targetIndexItem ? styles.activeItem : undefined}`}>
                    <div
                      className={`container-fluid ${styles.container}`}>
                      <div 
                        className={`row ${styles.row}`}>
                        <div 
                          className={`col-3 ${styles.col}`}>
                          <img
                            className="img-fluid" 
                            src={elem[0]}/>
                        </div>
                        <div 
                          className={`col-3 ${styles.col}`}>
                          <img
                            className="img-fluid" 
                            src={elem[1]}/>
                        </div>
                        <div 
                          className={`col-3 ${styles.col}`}>
                          <img
                            className="img-fluid" 
                            src={elem[2]}/>
                        </div>
                        <div className={`col-3 ${styles.col}`}>
                          <img
                            className="img-fluid"
                            src={elem[3]}/>
                        </div>
                      </div>
                    </div>
                  </div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel