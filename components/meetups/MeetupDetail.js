import React from 'react';
import classes from './MeetupDetail.module.css';
const MeetupDetail = ({ id, src, alt, title, address, desc }) => {
	console.log(src);
	return (
		<section className={classes.detail}>
			{/* <p>{id}</p> */}
			<img src={src} alt={alt} />
			<h1>{title}</h1>
			<address>{address}</address>
			<h3>description:</h3>
			<p>{desc}</p>
		</section>
	);
};

export default MeetupDetail;
