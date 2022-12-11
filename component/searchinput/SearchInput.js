import { Input } from '@material-ui/core'
import { SearchRounded } from '@material-ui/icons'
import styles from "./searchinput.module.css"

const SearchInput = ({...rest}) => {
  return (
    <div className={styles.wrapper}>
        <SearchRounded color="inherit"/>
        <Input className={styles.input} {...rest}/>
    </div>
  )
}

export default SearchInput