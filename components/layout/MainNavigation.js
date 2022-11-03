import { useContext } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../store/favourites-context';

function MainNavigation() {
	const favoritesCtx = useContext(FavoritesContext);

	return (
		<header className={classes.header}>
			<div className={classes.logo}>Meetups</div>
			<nav>
				<ul>
					<li>
						<Link href="/">All Meetups</Link>
					</li>
					<li>
						<Link href="/new-meetup">New Meetup</Link>
					</li>
					{/* <li>
						<Link href="/favorites">
							My Favorites
							<span className={classes.badge}>
								{favoritesCtx.totalFavorites}
							</span>
						</Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
