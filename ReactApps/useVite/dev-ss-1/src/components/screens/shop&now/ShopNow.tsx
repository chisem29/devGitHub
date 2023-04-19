
import { 
  FC, 
  ReactNode 
} from "react"

import styles from "./Shop&Now.module.sass"
import Carousel from "../../layout/main/UI/carousel/Carousel"
import Form from "../../layout/main/UI/form/Form"
import RangePrice from "./components/UI/RangePrice/RangePrice"

import refs from "../../../assets/Refs.json"
import { useNavigate } from "react-router-dom"
import Card from "../../layout/main/UI/card/Card"
import { sneakers } from "../../../data/sneakers.json"

interface bodyOf {
  children? : ReactNode
}

const ShopNow : FC<bodyOf> = () => {

  const navigate = useNavigate()

  return (
    <div 
      className={`container-fluid ${styles.container}`}>
      <div
        className="row">
        <div 
          className="col">
          <div 
            className={`container-fluid ${styles.mainShop}`}>
            <div 
              className="row">
              <div className={`col-sm-12 col-md-3 ${styles.col}`}>
                <div 
                  className="d-flex flex-column border px-3 py-4">
                  <div 
                    className={`d-flex flex-column gap-3 ${styles.searchPanel}`}>
                    <form 
                      className={`form ${styles.formSearch}`}>
                      <label 
                        id="searchFilter"
                        className="form-label">
                        <h6 
                          className={styles.h6}>
                          Search Here..
                        </h6>
                      </label>
                      <div className="input-group mb-3">
                        <input 
                          required
                          id="searchFilter"
                          type="search" 
                            className="form-control" 
                          placeholder="Product name.." 
                          aria-describedby="basic-addon1"
                        /> 
                        <div className="input-group-prepend">
                          <button 
                            className="px-3"
                            type="submit">
                            <img 
                              src={refs.search}/>
                          </button>
                        </div>
                      </div>
                    </form>
                    <p
                      className="border d-flex flex-column gap-2">
                      <RangePrice />
                    </p>
                  </div>
                  <div>
                    <form
                      className={`form ${styles.formOccasion}`}>
                      <legend>
                        <h6
                          className={styles.h6}>
                          Ocassion
                        </h6>
                      </legend>
                      <ul>
                        {[
                          "Casuals",
                          "Party",
                          "Wedding",
                          "Ethnic"
                        ].map((val) => 
                          <li>
                            <input 
                              id={val}
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label 
                              id={val} 
                              className={`form-check-label ${styles.smallText}`}>
                              {val}
                            </label>
                          </li>
                        )}
                      </ul>
                    </form>
                  </div>
                  <div>
                    <form
                      className={`form ${styles.formDiscount}`}>
                      <legend>
                        <h6
                          className={styles.h6}>
                          Discount
                        </h6>
                      </legend>
                      <ul>
                        {[
                          5, 10, 20, 30, 50, 60
                        ].map((val) => 
                          <li>
                            <input 
                              id={String(val)}
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label 
                              id={String(val)} 
                              className={`form-check-label ${styles.smallText}`}>
                              {val}% or More
                            </label>
                          </li>
                        )}
                      </ul>
                    </form>
                  </div>
                  <div
                    className={styles.customerBox}>
                    <h6
                      className={styles.h6}>
                      Customer review
                    </h6>
                    <ul>
                      {
                        [5.0, 4.0, 3.5, 3.0, 2.5]
                          .map((elem, index) => 
                            <li>
                              <a
                                href="">
                                <div>
                                  {
                                    ...[
                                      [
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>
                                      ],
                                      [
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/material-outlined/1x/christmas-star.png"/>,
                                      ],
                                      [
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/material-sharp/256/star-half-empty.png" />,
                                        <img src="https://img.icons8.com/material-outlined/1x/christmas-star.png" />
                                      ],
                                      [
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/material-outlined/1x/christmas-star.png" />,
                                        <img src="https://img.icons8.com/material-outlined/1x/christmas-star.png" />
                                      ],
                                      [   
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/ios-filled/1x/filled-star.png"/>,
                                        <img src="https://img.icons8.com/material-sharp/256/star-half-empty.png"/>,
                                        <img src="https://img.icons8.com/material-outlined/1x/christmas-star.png" />,
                                        <img src="https://img.icons8.com/material-outlined/1x/christmas-star.png" />
                                      ]
                                    ][index]
                                  }
                                </div>
                                {elem}
                              </a>
                            </li>
                          )  
                      }
                    </ul>
                  </div>
                  <div
                    className={styles.specialDealsBox}>
                    <h6 
                      className="h6">
                      Special Deals
                    </h6>
                    <ul>
                      {
                        sneakers?.slice()
                          .map(({ name, src, price }) =>
                          <li>
                            <div
                              className="border d-flex align-items-center justify-content-center">
                              <img 
                                src={src[0]}
                              />
                            </div>
                            <p
                              className="py-2">
                              <h6>{name}</h6>
                              <a
                                href={`shop&now/${name}`}
                                className={styles.smallText}>
                                ${price}.00
                              </a>
                            </p>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-9">
                <div 
                  className="d-flex flex-column border px-3 py-3">
                  <div
                    className={`${styles.boxStockResult}`}>
                    <div>
                      <img className="img-fluid" src="https://avatars.mds.yandex.net/i?id=cc674cb7bca994106403473ed5208e0175289335-6969813-images-thumbs&n=13"/>
                      <h3>40% off</h3>
                    </div>
                    <div>
                      <img className="img-fluid" src="https://avatars.mds.yandex.net/i?id=31b4803aa7bb5b7f42c7c19d45dfe51c-6356264-images-thumbs&n=13"/>
                      <h3>50% off</h3>
                    </div>
                  </div>
                  <br />
                  <div 
                    className={styles.boxProducts}>
                    {
                      sneakers?.map(({ 
                        name, 
                        price,
                        src 
                      }, index) =>
                        <Card 
                          index={index}
                          name={name}
                          src={src}
                          price={price} />
                      )
                    }
                  </div>
                  <br />
                  <div
                    className={`${styles.boxStockResult}`}>
                    <div>
                      <img className="img-fluid" src="https://avatars.mds.yandex.net/i?id=42a19655e926e10ce5ea9ac168b23ba887d2b1fc-4893378-images-thumbs&n=13"/>
                      <h3>21% off</h3>
                    </div>
                    <div>
                      <img className="img-fluid" src="https://avatars.mds.yandex.net/i?id=6a0811ebbcd266a578efffc5aa419d2cea96385d-8242815-images-thumbs&n=13"/>
                      <h3>31% off</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`row ${styles.row}`}>
        <div className="col-12">
          <Carousel />
        </div>
      </div>
      <div className={`row ${styles.row}`}>
        <div className="col-12">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ShopNow