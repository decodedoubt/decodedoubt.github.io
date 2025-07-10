document.addEventListener("DOMContentLoaded", function () {
  const tickers = document.querySelectorAll(".tickercontainer");

  tickers.forEach(ticker => {
    const tickerList = ticker.querySelector("ul.newsticker");
    const items = tickerList.querySelectorAll("li");
    const speed = parseInt(ticker.dataset.speed) || 50; // px per second

    // Clone items to make seamless loop
    items.forEach(item => {
      const clone = item.cloneNode(true);
      tickerList.appendChild(clone);
    });

    let listWidth = 0;
    tickerList.querySelectorAll("li").forEach(item => {
      listWidth += item.offsetWidth + 30; // + margin-left
    });

    tickerList.style.width = listWidth + "px";

    let left = 0;

    function animate() {
      left -= 1;
      if (Math.abs(left) >= listWidth / 2) {
        left = 0;
      }
      tickerList.style.transform = `translateX(${left}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  });
});
