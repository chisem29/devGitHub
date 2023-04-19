import {
  FC, useEffect, useRef, useState, 
} from "react"

import styles from "./Accordion.module.sass"

const Accordion : FC = () => {

  return (
    <>
      <div 
        className={styles.accordionInfo}
        id="accordion">
        {
          [
            [
              "Assumenda Est Cliche Voluptate", 
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            [
              "Itaque Earum Rerum",
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            [
              "Assumenda Est Cliche Voluptate",
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ],
            [
              "Itaque Earum Rerum",
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]
          ].map(([titleOf, contentOf], index) => 
            <div className={`card ${styles.card}`}>
              <div className={`card-header ${styles.cardHeader}`} id={`heading${index+1}`}>
                <h5 className="mb-0">
                  <button 
                    className="btn btn-link" 
                    data-toggle="collapse"
                    data-target={`#collapse${index+1}`} 
                    aria-controls={`collapse${index+1}`}
                    aria-expanded={true}>
                    <img 
                      src={
                        "https://img.icons8.com/ios-filled/1x/plus-math.png" 
                      }/>
                    {titleOf}
                  </button>
                </h5>
              </div>
              <div  
                id={`collapse${index+1}`} 
                className={`collapse ${!index ? "show" : "hidden"}`} 
                aria-labelledby={`heading${index+1}`} 
                data-parent="#accordion">
                <div className="card-body">
                  {contentOf}
                </div>
              </div>
            </div>
          )               
        }
      </div>
    </>
  )
}

export default Accordion