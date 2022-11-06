import React from "react";
import TheBlackBook from "./images/TheBlackBook.png";
import FoodFREQS from "./images/FoodFREQS.png";
import gitThatCurrency from "./images/gitThatCurrency.png";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX

import {
	PopupboxManager,
	PopupboxContainer,
} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
	// TheBlackBook
	const openPopupboxTheBlackBook = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={TheBlackBook}
					alt="Netflix Clone Project..."
				/>
				<p>
					We created an application to give prospective
					developers a handy resource to connect with other
					established developers and maintain an index of
					code snippets, terminology, and concepts to
					quickly reference. user will create a profile and
					be able to add comments to a selection of various
					basic topics. we will also give them a way to
					create their own snippets that other users can
					leave comments on.
				</p>
				<b>Heroku:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							"https://floating-refuge-15851.herokuapp.com/"
						)
					}>
					https://floating-refuge-15851.herokuapp.com/
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({});
	};

	const PopupboxConfigTheBlackBook = {
		titleBar: {
			enable: true,
			text: "TheBlackBook.",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	//  GitThatCurrency
	const openPopupboxgitThatCurrency = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={gitThatCurrency}
					alt="gitThatCurrency "
				/>
				<p>
					The goal of the project was to use IP API that can
					pull the user's current IP address and allow the
					user to access different country options through a
					dropdown menu. This information will then allow
					the user to be able to convert a certain amount of
					money to the currency that the country of their
					choosing uses on the website. DISCLAIMER: It will
					not actually convert the user's money, but simply
					determine how much the user's money would be worth
					in a specific country.
				</p>
				<b>Demo:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							"https://city-guide-app-project.herokuapp.com/",
							"_blank"
						)
					}>
					https://city-guide-app-project.herokuapp.com/
				</a>
				<br />
				<b>GitHub:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							"https://github.com/wjimh314/GitThatCurrency"
						)
					}>
					https://github.com/wjimh314/GitThatCurrency
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({});
	};

	const PopupboxConfiggitThatCurrency = {
		titleBar: {
			enable: true,
			text: "GitThatCurrency",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	// FoodFREQS
	const openPopupboxFoodFREQS = () => {
		const content = (
			<>
				<img
					className="portfolio-image-popupbox"
					src={FoodFREQS}
					alt="FoodFREQS"
				/>
				<p>
					We decided to make an application for people
					strongly influenced by the culinary world. Using
					this application, the user will be able to create
					a profile, search recipes they want to cook
					frequently, save them to their profile and
					interact with other FoodFREQS.
				</p>
				<b>GitHub:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							"https://github.com/wjimh314/foodFREQS"
						)
					}>
					https://github.com/wjimh314/foodFREQS
				</a>
				<br />
				<b>GitHub:</b>{" "}
				<a
					className="hyper-link"
					onClick={() =>
						window.open(
							"https://github.com/wjimh314/foodFREQS"
						)
					}>
					https://github.com/wjimh314/foodFREQS
				</a>
			</>
		);
		PopupboxManager.open({ content });
		PopupboxManager.update({});
	};

	const PopupboxConfigFoodFREQS = {
		titleBar: {
			enable: true,
			text: "food",
		},
		fadeIn: true,
		fadeInSpeed: 500,
	};

	return (
		<div
			id="portfolio"
			className="portfolio-wrapper">
			<div className="container">
				<h1 className="text-uppercase text-center py-5">
					portfolio
				</h1>
				<div className="image-box-wrapper row justify-content-center">
					<div
						className="portfolio-image-box"
						onClick={openPopupboxTheBlackBook}>
						<img
							className="portfolio-image"
							src={TheBlackBook}
							alt="TheBlackBook"
						/>
						<div className="overflow"></div>
						<FontAwesomeIcon
							className="portfolio-icon"
							icon={faSearchPlus}
						/>
					</div>
					{/* - */}
					<div
						className="portfolio-image-box"
						onClick={openPopupboxgitThatCurrency}>
						<img
							className="portfolio-image"
							src={gitThatCurrency}
							alt="gitThatCurrency"
						/>
						<div className="overflow"></div>
						<FontAwesomeIcon
							className="portfolio-icon"
							icon={faSearchPlus}
						/>
					</div>
					{/* - */}
					<div
						className="portfolio-image-box"
						onClick={openPopupboxFoodFREQS}>
						<img
							className="portfolio-image"
							src={FoodFREQS}
							alt="FoodFREQS"
						/>
						<div className="overflow"></div>
						<FontAwesomeIcon
							className="portfolio-icon"
							icon={faSearchPlus}
						/>
					</div>
					{/* - */}
				</div>
			</div>
			<PopupboxContainer {...PopupboxConfigTheBlackBook} />
			<PopupboxContainer
				{...PopupboxConfiggitThatCurrency}
			/>
			<PopupboxContainer {...PopupboxConfigFoodFREQS} />
		</div>
	);
};

export default Portfolio;
