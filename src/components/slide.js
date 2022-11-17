import React from "react";
import TextItems from "../data/pageStaticContent";
import useSlideData from "../hooks/useSlideData";
import {
  slide,
  slideView,
  move,
  top,
  middle,
  bottom,
  nextButton
} from "../styles/components/slide.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Slide = () => {
  const slideData = useSlideData()
  // const slideNum = slideData.length;
  const [isMove, setMove] = React.useState(null);
  const [view, setView] = React.useState([0, 1, 2]);
  const [front, setFront] = React.useState([0, 1, 2]);

  /* 슬라이드 뷰 */
  const SlideView = () => {
    const classNameList = [bottom, middle, top];
    return (
      <div className={`${slideView} ${isMove}`}>
        <div
          style={{
            backgroundImage: `url(${slideData[view[0]].url})`,
          }}
          className={classNameList[front[0]]}
        ></div>
        <div
          style={{
            backgroundImage: `url(${slideData[view[1]].url})`,
          }}
          className={classNameList[front[1]]}
        ></div>
        <div
          style={{
            backgroundImage: `url(${slideData[view[2]].url})`,
          }}
          className={classNameList[front[2]]}
        ></div>
      </div>
    );
  };

  /* 다음 슬라이드에 들어갈 인덱스 설정 */
  const nextSlide = () => {
    if (isMove === null) {
      // 리렌더링에서만 애니메이션 재생
      setMove(move);
    }
    setFront(front.map((state) => (state === 2 ? 0 : state + 1)));
    // setView(view.map((state) => (state === slideNum - 1 ? 0 : state + 1)));
  };

  /* 다음 슬라이드 버튼 */
  const NextButton = () => {
    return (
      <button
        className={nextButton}
        onClick={nextSlide}>
        <AiOutlineRight/>
      </button>
    );
  };

  /*** 리턴 */
  return (
    <div className={slide}>
      <SlideView />
      <NextButton />
    </div>
  );
};

export default Slide;
