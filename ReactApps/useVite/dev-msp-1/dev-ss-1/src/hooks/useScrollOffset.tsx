import {
  useState, 
  useEffect
} from "react"

const useScrollOffset = () => {

  const [
    scrollPosition, 
    setScrollPosition
  ] = useState<Array<number>>([0, 0])

  useEffect(() => {

    const handleScroll = () => {
      const position = [window.screenX, window.screenY]
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll, { passive : true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return scrollPosition
}

export default useScrollOffset