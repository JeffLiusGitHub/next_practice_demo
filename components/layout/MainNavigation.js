import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import classes from './MainNavigation.module.css';


function MainNavigation() {

	return (
		<header className={classes.header}>
			<div className={classes.logo}>Meetups</div>
			<nav>
				<ul>
					<li>
						<Link href="/">All</Link>
					</li>
					<li>
						<Link href="/new-meetup">New</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
