import * as React from "react";
import { storeImageSlide, frontStyle, prevStyle } from './store.module.css';

// automatic image slide
const StoreImageSlide = ({ src }) => {
  const imageNum = src.length
  const [front, setFront] = React.useState(1);
  const [prev, setPrev] = React.useState(0);

  const nextSlide = () => {
    setPrev(front)
    if (front === imageNum - 1) setFront(0) // last
    else setFront(front + 1)
  }
  React.useEffect(() => {
    function tick() {
      return setTimeout(() => nextSlide(), 5000);
    }
    tick();
    return () => clearTimeout(tick)
  }, [front])

  return (
    <div className={storeImageSlide}>
      {src.map((node, i) =>
        <img key={i}
          src={node.url}
          className={
            i === front ? frontStyle : (i === prev ? prevStyle : '')
          } />)}
    </div>
  )
}
export default StoreImageSlide