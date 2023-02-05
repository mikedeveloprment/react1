// imports
import React from "react";
import clas from "./Widgets.module.css";

// component
const Widgets = () => {
	const reactArray = "GeT- % to -manage % more -than % 100 -projects".split("");
	const reactArray2 = " Premium".split("");

	return (
		<div className={clas.widgetsCont}>
			<div className={clas.contWidgets1}>
				<div
					style={{
						animationDelay: "1s",
					}}
					className={`${clas.widget1} ${clas.widget2}`}
				>
					<span className={clas.numberWidget}>50</span>
					<p className={clas.titleWidget}>Total Tasks</p>
					<b className={clas.noteWidget}>+2 this week</b>
				</div>
				<div
					style={{
						animationDelay: "1.1s",
					}}
					className={clas.widget1}
				>
					<span className={clas.numberWidget}>3</span>
					<p className={clas.titleWidget}>Overdue Tasks</p>
					<b className={clas.noteWidget}>+1 this week</b>
				</div>
			</div>
			<div className={`${clas.contWidgets1} ${clas.contWidgets4}`}>
				<div
					style={{
						animationDelay: "1.2s",
					}}
					className={clas.widget1}
				>
					<span className={clas.numberWidget}>12</span>
					<p className={clas.titleWidget}>Completed Tasks</p>
					<b className={clas.noteWidget}>+3 this week</b>
				</div>
				<div
					style={{
						animationDelay: "1.3s",
					}}
					className={`${clas.widget1} ${clas.widget3}`}
				>
					<span className={clas.numberWidget}>23</span>
					<p className={clas.titleWidget}>To do Tasks</p>
					<b className={clas.noteWidget}>+5 this week</b>
				</div>
			</div>
			<div
				style={{
					animationDelay: "1.3s",
				}}
				className={clas.contWidget3}
			>
				{reactArray.map((i, index) =>
					i === "%" ? (
						<br key={index} />
					) : i === "-" ? (
						<span key={index}>&nbsp;</span>
					) : i === "T" ? (
						<span
							key={index}
							className={`${clas.letterTitle} ${clas.letterTitle3}`}
							style={{
								animationDelay: `${index * 0.02 + 1.8}s`,
							}}
						>
							{i.toLocaleLowerCase()}

							<div className={clas.Premium}>
								{reactArray2.map((i, index) => (
									<span
										key={index}
										className={`${clas.letterTitle} ${clas.letterTitle2}`}
										style={{
											animationDelay: `${index * 0.02 + 1.8}s`,
										}}
									>
										{i}
									</span>
								))}
							</div>
						</span>
					) : (
						<span
							key={index}
							className={clas.letterTitle}
							style={{
								animationDelay: `${index * 0.02 + 1.8}s`,
							}}
						>
							{i}
						</span>
					)
				)}
			</div>
			<div
				className={clas.contWidget2}
				style={{
					animationDelay: "1.4s",
				}}
			>
				<div className={clas.procentCont}>
					<span>72%</span>
					<div className={clas.procent}></div>
				</div>
				<span className={clas.titleWidget2}>
					of Project <br /> is Completed
				</span>
			</div>
		</div>
	);
};

export default Widgets;
