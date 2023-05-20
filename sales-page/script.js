const accordion = () => {

  const accordionButtons = document.querySelectorAll('.accordion-button');

  accordionButtons.forEach( btn => {
    btn.addEventListener( 'click', handleAccordionButtonClick );
  });

  function handleAccordionButtonClick() {

    this.classList.toggle('active');

    const answer = this.nextElementSibling;

    if ( this.classList.contains('active') ) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = '0';
    }
  }
};

accordion();