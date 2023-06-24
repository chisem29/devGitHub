import { 
  useEffect, 
  useState 
} from 'react'

import sneaker from '../shared/interfaces/sneaker'

const useSetSneakers = ( data : Promise<Array<sneaker>> ) => {

  const [ dataList, setList ] = useState<Array<sneaker>>([])
  
  useEffect(() => {
    data.then((data) => {
      setList(data)
    })
  })

  return dataList
}

export default useSetSneakers