import React  from "react";
import TheBlackBook from "/Users/williamhart/Desktop/whportfolio/wh_portfolio/src/components/images/TheBlackBook.png";
import FoodFREQS from "./images/FoodFREQS.png";
import gitThatCurrency from "./images/gitThatCurrency.png";
// import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // TheBlackBook
  const openPopupboxTheBlackBook = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={TheBlackBook} alt="TheBlackBox." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Heroku:</b> <a className="hyper-link" onClick={() => window.open("https://floating-refuge-15851.herokuapp.com/")}>https://floating-refuge-15851.herokuapp.com/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTheBlackBook = {
    titleBar: {
      enable: true,
      text: "TheBlackBook",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // FoodFreqs
  const openPopupboxFoodFREQS = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={FoodFREQS} alt="FoodFREQS" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Heroku:</b> <a className="hyper-link" onClick={() => window.open("https://vast-sierra-04127.herokuapp.com/profile", "_blank")}>https://vast-sierra-04127.herokuapp.com/profile</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/wjimh314/foodFREQS", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigFoodFREQS = {
    titleBar: {
      enable: true,
      text: "City Guide App project."
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // gitThatCurrency
  const openPopupboxgitThatCurrency = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={gitThatCurrency} alt="Portfolio Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/wjimh314/GitThatCurrency", "_blank")}>https://github.com/wjimh314/GitThatCurrency</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfiggitThatCurrency = {
    titleBar: {
      enable: true,
      text: "gitThatCurrency",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  }

  // Task Manager React and Redux Project
//   const openPopupboxTaskManager = () => {
//     const content = (
//       <>
//         <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
//         <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
//         <br />
//         <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
//       </>
//     )
//     PopupboxManager.open({ content })
//   }

//   const popupboxConfigTaskManager = {
//     titleBar: {
//       enable: true,
//       text: "Task Manager React and Redux project."
//     },
//     fadeIn: true,
//     fadeInSpeed: 500
//   }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxTheBlackBook}>
            <img className="portfolio-image" src={TheBlackBook} alt="TheBlackBook" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxFoodFREQS}>
            <img className="portfolio-image" src={FoodFREQS} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxgitThatCurrency}>
            <img className="portfolio-image" src={gitThatCurrency} alt="gitThatCurrency" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          {/* <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div> */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigTheBlackBook} />
      <PopupboxContainer {...popupboxConfigFoodFREQS} />
      <PopupboxContainer {...popupboxConfiggitThatCurrency} />
      {/* <PopupboxContainer {...popupboxConfigTaskManager} /> */}
    </div>
  )
}

export default Portfolio;