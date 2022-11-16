import React from 'react';
import classes from './MeetupDetail.module.css';
const MeetupDetail = ({ src, alt, title, address, desc }) => {
	return (
		<section className={classes.detail}>
			<img src={src} alt={alt} />
			<h1>{title}</h1>
			<address>{address}</address>
			<h3>description:</h3>
			<p>{desc}</p>
		</section>
	);
};

export default MeetupDetail;
