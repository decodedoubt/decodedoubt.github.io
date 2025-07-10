document.addEventListener("DOMContentLoaded", function () {
  const tickers = document.querySelectorAll(".tickercontainer");

  tickers.forEach(ticker => {
    const tickerList = ticker.querySelector("ul.newsticker");
    const items = tickerList.querySelectorAll("li");
    const speed = parseInt(ticker.dataset.speed) || 50;

    // Clone items for loop
    items.forEach(item => {
      const clone = item.cloneNode(true);
      tickerList.appendChild(clone);
    });

    let listWidth = 0;
    tickerList.querySelectorAll("li").forEach(item => {
      listWidth += item.offsetWidth + 30;
    });
    tickerList.style.width = listWidth + "px";

    let left = 0;
    let paused = false;

    // Hover to pause
    ticker.addEventListener("mouseenter", () => paused = true);
    ticker.addEventListener("mouseleave", () => paused = false);

    function animate() {
      if (!paused) {
        left -= 1;
        if (Math.abs(left) >= listWidth / 2) {
          left = 0;
        }
        tickerList.style.transform = `translateX(${left}px)`;
      }
      requestAnimationFrame(animate);
    }

    animate();
  });
});

