import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./framerMotionIndex.css";

const FramerMotionIndex = () => {
	const control = useAnimation();
	return (
		<div className="box-container">
			<motion.div
				className="box"
				animate={{
					x: 500,
					opacity: 0.8,
					// scale: 2,
					rotate: 360,
				}}
				initial={{
					opacity: 0.1,
				}}
				transition={{
					type: "spring",
					stiffness: 50,
					damping: 5,
				}}
			></motion.div>
			<motion.div
				className="box"
				animate={{
					scale: [1, 1.4, 1.4, 1],
					borderRadius: ["20%", "20%", "50%", "20%"],
					rotate: [0, 0, 270, 270],
				}}
				whileHover={{ scale: 1.1 }}
				whileTap={{
					scale: 0.9,
				}}
				drag
				dragConstraints={{
					right: 20,
					left: -20,
					top: 5,
					bottom: 5,
				}}
				transition={{ duration: 2 }}
			></motion.div>
			<button
				className="button"
				onClick={() => {
					control.start({
						x: 500,
						transition: { duration: 2 },
					});
				}}
			>
				right
			</button>
			<button
				className="button"
				onClick={() => {
					control.start({
						x: 0,
						transition: { duration: 2 },
					});
				}}
			>
				left
			</button>
			<button
				className="button"
				onClick={() => {
					control.start({
						borderRadius: "50%",
						transition: { duration: 2 },
					});
				}}
			>
				circle
			</button>
			<button
				className="button"
				onClick={() => {
					control.start({
						borderRadius: "0",
						transition: { duration: 2 },
					});
				}}
			>
				square
			</button>
			<button
				className="button"
				onClick={() => {
					control.stop();
				}}
			>
				stop
			</button>
			<p>test git 12345</p>
			<div>
				<motion.div className="box" animate={control}></motion.div>
			</div>
		</div>
	);
};

export default FramerMotionIndex;
