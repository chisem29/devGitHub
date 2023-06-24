import { 
  FC, 
  useLayoutEffect, 
  useState 
} from "react"

import { useParams } from "react-router-dom"

import styles from "./Single.module.sass"

import dataMethods from "../../../services/sneakers.service"

import Card from "../../layout/main/UI/card/Card"
import Pils from "./components/UI/pils/Pils"
import Accordion from "./components/UI/accordion/Accordion"
import useWindowSize from "../../../hooks/useWindowSize"
import sneaker from "../../../shared/interfaces/sneaker"
import SocNets from "../../UI/socNets/SocNets"
import useSetSneakers from "../../../hooks/useSetSneakers"

const Single : FC = () => {

  const { id } = useParams()

  const sneakersList = useSetSneakers(dataMethods.getSneakers())

  const [
    { 
      src, 
      price, 
      name
    },
    setActiveSneaker
  ] = useState<sneaker>({ src : [], price : 0, name : ""})

  const [
    targetIndex,
    setIndex
  ] = useState<number>(0)

  useLayoutEffect(() => {
    dataMethods.getSneakerById(String(id))
      .then((e) => setActiveSneaker(e))
  })

  const [
    widthPage,
  ] = useWindowSize()

  return (
    <>
      <div
        className={`container-fluid ${styles.container} ${styles.singleGeneral}`}>
        <div 
          className={`row ${styles.row}`}>
          <div  
            className={styles.singleBox}>
            <div
              className={`d-flex ${styles.infoSneaker}`}>
              <div
                className={`d-flex flex-column align-sm-items-center ${styles.imageBox}`}>
                <div
                  className={`border p-4 ${styles.generalImg}`}>
                  <img 
                    src={String(src[targetIndex] ? src[targetIndex] : src[0])}/>
                </div>
                <div
                  className={`d-flex flex-wrap justify-content-center ${styles.otherImages}`}>
                  { 
                    [1, 2, 3]
                      .map((elem, index) =>
                        <div
                          onClick={() => {
                            setIndex(index)
                          }} 
                          className={`p-2 border ${index === targetIndex ? styles.activeImage : undefined}`}>
                          <img 
                            src={String(src[index] ? src[index] : src[0])}/>
                        </div>
                      )
                  }
                </div>
              </div>
              <div
                className={`d-flex flex-column ${styles.mainInfoSneaker}`}>
                <h3>{name}</h3>
                <div
                  className={`d-flex ${styles.rsSneaker}`}>
                  <h6> 
                    Rs. {0.6 * price}
                  </h6>
                  <s>{price}</s>
                </div>
                <div
                  className={`${styles.offSneaker}`}>
                  <span>60%off</span>
                </div>
                <div
                  className={`d-flex ${styles.starsAccess}`}>
                  {
                    [1, 2, 3, 4, 5]
                      .map(() => 
                        <a
                          href="">
                          <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>
                        </a>
                      )
                  }
                </div>
                <button>
                  add to cart
                </button>
                <div
                  className={`d-flex flex-wrap ${styles.shareSnekear}`}>
                  <span>share on :</span>
                  <SocNets />
                </div>
              </div>
            </div>
            <br/>
            <div 
              className={styles.infoOuter}>
              {
                widthPage > 992 ?
                <Pils name={name}/> :
                <Accordion name={name}/>
              }
            </div>
          </div>
        </div>
        <div
          className={`row ${styles.row}`}>
          <div 
            className={`col ${styles.col}`}>
            <div
              className={styles.sneakersBox}>
              <h4>FEATURED PRODUCTS</h4>
              <br />
              <div>
                {
                  sneakersList ? 
                  sneakersList.slice(0, 4)
                    .map(({
                      src,
                      price,
                      name
                    }, index) =>       
                      <Card 
                        src={src}
                        price={price}
                        name={name}
                        index={index}
                      />
                    ) : <h3> Loading... </h3>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Single