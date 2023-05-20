const Form = () => {

	const coreInputs = Array.from( document.getElementsByClassName( 'form-item text-input' ) );

	coreInputs.forEach( coreInput => {
		coreInput.addEventListener( 'focusin', event => handleCoreInputFocusIn( event ) );
		coreInput.addEventListener( 'focusout', event => handleCoreInputFocusOut( event ) );

		const input = coreInput.lastElementChild;
		if ( input.value !== '' ) {
			coreInput.classList.add( 'focused' );
		}
	});

	const handleCoreInputFocusIn = event => {
		const parent = event.target.parentElement;

		if ( ! parent.classList.contains( 'focused' ) ) {
			parent.classList.add( 'focused' );
		}
	};

	const handleCoreInputFocusOut = event => {
		const parent = event.target.parentElement;

		if ( parent.lastElementChild.value === ''
			&& parent.classList.contains( 'focused' ) ) {

			parent.classList.remove( 'focused' );
		}
	};

};

Form();