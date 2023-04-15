const pageviews = document.querySelector(".pageviews span");
const slider = document.querySelector(".slider");
const slider_plan = document.querySelector(".input-slider");
const price = document.querySelector(".number");

const sliderFunc = () => {
    let cost;
    if(slider.value == 0) {
        cost = "8.00"
        pageviews.innerHTML = "10K"
    } else if(slider.value == 1) {
        cost = "12.00";
        pageviews.innerHTML = "50K"
    } else if(slider.value == 2) {
        cost = "16.00";
        pageviews.innerHTML = "100K"
    } else if(slider.value == 3) {
        cost = "24.00";
        pageviews.innerHTML = "500K"
    } else if(slider.value == 4) {
        cost = "36.00";
        pageviews.innerHTML = "1M"
    }
    price.innerHTML = cost;
    let costAsNumber = parseInt(cost);
    if(slider_plan.value == 2) {
        discount_price = costAsNumber * 0.75;
        price.innerHTML = discount_price.toFixed(2);
    } 
}

setInterval(sliderFunc, 0);

slider.oninput = () => {
    let x = slider.value;
    slider.style.background = `linear-gradient(90deg, #A4F3EB ${x*25}%, #ECF0FB ${x*25}%)`;
}
