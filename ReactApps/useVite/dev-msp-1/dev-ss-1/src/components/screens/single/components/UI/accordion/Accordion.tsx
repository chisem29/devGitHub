import {
  FC, useState
} from "react"

import styles from "./Accordion.module.sass"

const Accordion : FC<{ name : string}> = ({ name }) => {

  const [
    targetIndex,
    setActiveNav
  ] = useState<number>(0)

  return (
    <>
      <div 
        id="accordionSingle"
        className={`accordion p-4 border ${styles.accordionSingle}`}>
        {
          [
            { 
              name : "description",
              content : 
                <>
                  <h5>Lorem ipsum dolor sit amet</h5  >
                  <p
                    className='mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.
                  </p>
                </> 
            },
            { 
              name : "reviews",
              content : 
                <div
                  className={`container-fluid d-flex flex-column ${styles.container}`}>
                  <div 
                    className={`row ${styles.row}`}>
                      <div 
                        className={`col-2 ${styles.col}`}>
                        <img
                          src="https://avatars.mds.yandex.net/i?id=97dd29a625f9c170dc1891d2b1928fe08de37065-8497057-images-thumbs&n=13"
                          className="img-fluid" />
                      </div>
                      <div 
                        className={`col-8 d-flex flex-column ${styles.col}`}>
                        <div 
                          className="d-flex flex-wrap justify-content-between">
                          <h5>
                            admin
                          </h5>
                          <a href="">
                            <img
                              className="img-fluid" 
                              src="https://img.icons8.com/ios-filled/1x/left2.png"/>reply
                          </a>
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.
                        </p>
                      </div>
                  </div>
                  <div 
                    className={`row ${styles.row}`}>
                    <div 
                      className="col">
                      <form
                        className="d-flex flex-column">
                        <legend>
                          add e review
                        </legend>
                        <div
                          className={`container-fluid ${styles.container}`}>
                          <div className={`row d-flex ${styles.row}`}>
                            <div className={`col-sm-12 col-md ${styles.col}`}>
                              <input type="text" className="form-control col-sm-12" />
                            </div>
                            <div className={`col-sm-12 col-md ${styles.col}`}>
                              <input type="text" className="form-control col-sm-12" />
                            </div>
                            <div 
                              className={`col-12 ${styles.col}`}>
                              <textarea 
                                className="form-control"/>
                            </div>
                          </div>
                        </div>
                        <button 
                          type="submit">
                          send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
            },
            { 
              name : "information",
              content :
                <>
                  <h5>{name}</h5  >
                  <p
                    className='mt-4'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.
                    <br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elPellentesque vehicula augue eget nisl ullamcorper, molestie blandit ipsum auctor. Mauris volutpat augue dolor.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut lab ore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. labore et dolore magna aliqua.
                  </p>
                </>  
            }
          ].map(({ name, content}, index) => 
            <div 
              className={`card ${styles.card}`}>
              <button
                onClick={() => {setActiveNav(Number(index === targetIndex ? undefined : index))}}
                className={index === targetIndex ? styles.activeNav : undefined}>
                {name}
              </button>
              <div
                className={`p-4 ${index === targetIndex ? styles.showContent : undefined} ${styles[`content${index+1}`]}`}>
                {content}
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Accordion