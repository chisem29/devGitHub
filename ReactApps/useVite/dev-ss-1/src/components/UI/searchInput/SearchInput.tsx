import styles from './SearchInput.module.sass'

import { 
  FC,
} from "react"

const SearchInput : FC<{ searchOn : Boolean }> = ({ searchOn }) => { 
  
  return (
    <div
      id="searchInput"
      className={`${styles.searchInput} ${searchOn ? styles.On : styles.Off}`}>
      <form
        className="form"
        noValidate>
        <input 
          type="search"
          required
          placeholder='Click enter after typing...'/>
      </form>
    </div>
  )
  
}

export default SearchInput