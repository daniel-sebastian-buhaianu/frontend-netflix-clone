const onDOMContentLoaded = () => {

	window.addEventListener( 'DOMContentLoaded', () => {

		setSideNavWrapperHeight();

	});

	const setSideNavWrapperHeight = () => {

		const body = document.querySelector( 'body' );
		const sideNavWrapper = document.getElementById( 'side-nav-wrapper' );

		sideNavWrapper.style.height = body.scrollHeight + 'px';
	}
}

const SideNav = () => {

	const hamburgerIcon = document.getElementById( 'hamburger-icon' );
	
	hamburgerIcon.addEventListener( 'click', () => {

		const sideNavWrapper = document.getElementById('side-nav-wrapper');
		const sideNav = document.getElementById('side-nav');

		sideNavWrapper.classList.toggle( 'active' );
		sideNav.classList.toggle( 'active' );

	});
}

const BrowseMenu = () => {

	const browse = document.getElementById( 'browse' );

	browse.addEventListener( 'click', () => handleBrowseClick() );

	const handleBrowseClick = () => {

		const browseContainer = document.querySelector( '#browse > .container' );

		if ( browseContainer.style.display !== 'flex' ) {
			browseContainer.style.display = 'flex';
		} else {
			browseContainer.style.display = 'none';
		}
	}
};

const ProfileMenu = () => {

	const browse = document.getElementById( 'profile' );

	browse.addEventListener( 'click', () => handleBrowseClick() );

	const handleBrowseClick = () => {

		const browseContainer = document.querySelector( '#profile > .container' );

		if ( browseContainer.style.display !== 'flex' ) {
			browseContainer.style.display = 'flex';
		} else {
			browseContainer.style.display = 'none';
		}
	}
};

onDOMContentLoaded();

SideNav();

BrowseMenu();

ProfileMenu();