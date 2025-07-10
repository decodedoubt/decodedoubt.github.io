document.addEventListener("DOMContentLoaded", function () {
  const tickers = document.querySelectorAll(".newsticker");

  tickers.forEach(ticker => {
    const speed = parseInt(ticker.getAttribute("data-speed")) || 50;
    const textLength = ticker.scrollWidth;
    const containerWidth = ticker.parentElement.offsetWidth;
    const totalDistance = textLength + containerWidth;

    const duration = totalDistance / speed;

    ticker.style.animationDuration = duration + "s";
  });
});
