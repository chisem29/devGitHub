import { FC } from "react"
import styles from "./Table.module.sass"

/* интерфейс таблицы (ячейки/столбцы с данными из data) */
interface tableBody {
  data : Array<{
    name : string,
    prOne : number,
    prTwo : number,
    k : number,
    limits : Array<number>,
    all : string
  }>  
}

const Table : FC<tableBody> = ({ data }) => {
  
  return (
    <div
      className={styles.tableItem}>
      <table 
        width={600}
        className={`
          table 
          caption-top 
          table-striped 
          table-hover
          ${styles.target}
        `}>
        <caption
          className={styles.captionRow}>
          <h4>Binance</h4>
        </caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Pr...</th>
            <th scope="col">Pr...</th>
            <th scope="col">K...</th>
            <th scope="col">Limits</th>
            <th scope="col">All</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(({
              name, 
              prOne, 
              prTwo, 
              k, 
              limits, 
              all
            }) => 
            <tr>
              <th scope="row">{name}</th>
              <td>{prOne}</td>
              <td>{prTwo}</td>
              <td>{k < 0 ? "-" : "+" + k}%</td>
              <td>{limits.at(0) + "-" + limits.at(-1)}</td>
              <td>{all}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table