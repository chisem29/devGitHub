import { FC } from "react"
import styles from "./Card.module.sass"

import { useNavigate } from "react-router-dom"
import refs from "../../../../../assets/Refs.json"

import sneaker from "../../../../../shared/interfaces/sneaker"

interface bodyOf extends sneaker {
  index : number
}

const Card : FC<bodyOf> = ({
  name, src, price, index
}) => {

  const navigate = useNavigate()

  return (
    <>
      <div 
        className={`border p-3 d-flex flex-column ${styles.card}`}>
        <div
          className="border-bottom d-flex flex-column">
          <div>
            <button
              onClick={() => {navigate(`/shop&now/${name}`)}}>
              quick new
            </button>
          </div>
          <button
            className={`align-self-end ${styles[index % 3 == 0 ? "red" : index % 2 == 0 ? "blue" : "yellow"]}`}>
            New
          </button>
          <img 
            className="img-fluid align-self-center"
            src={src[0]}
          />
          <h4
            className="align-self-center text-center">
            {name}
          </h4>
        </div>
        <div
          className="pt-3 d-flex justify-content-between align-items-center">
          <div
            className="d-flex flex-column"> 
            <div
              className="d-flex flex-row">
              <h6> 
                Rs. {0.6 * price}
              </h6>
              <s>{price}</s>
            </div>
            <div
              className="d-flex">
              {
                [1, 2, 3, 4, 5]
                  .map((elem) => 
                    <a
                      href="">
                      <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>
                    </a>
                  )
              }
            </div>
          </div>
          <button>
            <img 
              src={refs.cart}/>
          </button>
        </div>
      </div>
    </>
  )
}

export default Card