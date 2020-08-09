const navslide = () => {
    /**create an anonyme function who will get the lines and the navslider */
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li'); //**a var to get the li tags from html one by one (to add the animation for the link one by one) */

    // Toggle nav
    lines.addEventListener('click', () => {
        /**when click we will run a function */ /** when we click in the lines the navlinke will get the class of the nav-active*/
        nav.classList.toggle('nav-active') /**? */

        // Animate links
        navLinks.forEach((link, index) => {
            /**link is the individual link and they have access to index*/
            console.log(index); /**how many index  we have to easly animate the delay between each  */

            if (link.style.animation) {
                /**if this link has animation do nothing */
                link.style.animation = '';
            } else {
                /**else do the animation each time */
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +1.5}s`

            }
            console.log(index / 7); /**to manage the delay of the links equally*/

           

        });
    });
  

}

navslide();