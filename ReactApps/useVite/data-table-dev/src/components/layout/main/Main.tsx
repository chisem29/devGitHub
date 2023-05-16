import Table from '../../UI/table/Table'
import styles from './Main.module.sass'

import { FC } from 'react'
import binance from "../../../data/binance.json"

const Main : FC = () => {
  return (
    <>
      <div
        className={styles.main}>
        <div
          className={`
            container 
            ${styles.containerTables}
          `}>
          <div 
            className="row">
            {
              [
                binance,
                binance
              ].map(({ data }) => 
                <div 
                  className="col-sm-12 col-md-6">
                  <Table 
                    data={data}/>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
