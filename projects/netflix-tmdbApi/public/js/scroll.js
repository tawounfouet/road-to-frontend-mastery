const setupScrolling = () => {
    const container = [...document.querySelectorAll('.movie-container')];
    const nxtbtn = [...document.querySelectorAll('.nxt-btn')];
    const prebtn = [...document.querySelectorAll('.pre-btn')];

    container.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtbtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });

        prebtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    });
}