import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { slide, slideView, top, middle, bottom } from '../styles/components/slide.module.css'

const Slide = () => {
  const data = useStaticQuery(
    graphql`
      query SlideQuery {
        allContentfulSlide {
          edges {
            node {
              image {
                url
              }
            }
          }
        }
      }
    `)
  const slides = data.allContentfulSlide.edges
  const slidesNum = slide.length
  const [view, setView] = React.useState([0, 1, 2])
  const [front, setFront] = React.useState([0, 1, 2])
  
  /* 슬라이드 이미지 뷰 */
  const SlideView = () => {
    // initialize
    setFront([0, 1, 2])
    setView([0, 1, 2])

    const classNameList = [bottom, middle, top]
    return(
      <div className={slideView}>
        <div className={classNameList[front[0]]}>{slides[view[0]]}</div>
        <div className={classNameList[front[1]]}>{slides[view[1]]}</div>
        <div className={classNameList[front[2]]}>{slides[view[2]]}</div>
      </div>
    )
  }
  const nextSlide = () => {
    setFront(front.map(state => (state === 2 ? 0 : state + 1)))
    setView(view.map(state => {
      if (state === slidesNum - 1) return 0 // last img
      else if(state === slidesNum - 2) return 1 // last - 1 img
      else return state + 1
    }))
  }
  const NextButton = () => {
    return (
      <button onClick={nextSlide}>next</button>
    )
  }
  console.log(front)
  return (
    <div className={slide}>
      <SlideView />
      {/* <SlidePage image={slides[front]} /> */}
      <NextButton />
    </div>
  )
}

export default Slide

/* 단일 슬라이드 이미지 */
  // const SlidePage = ({ image }) => {
  //   image = image.node.image.url
  //   return (
  //     <div style={{
  //       width: '500px',
  //       height: '500px',
  //       display: 'block',
  //       background: `url(${image}) center no-repeat`,
  //     }}></div>
  //   )
  // }