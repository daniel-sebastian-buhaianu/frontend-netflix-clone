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

BrowseMenu();

ProfileMenu();