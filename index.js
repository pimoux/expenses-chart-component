fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    const statsElt = document.querySelector(".stats");
    data.forEach((stat, i) => {
        const { day, amount } = stat;
      const elt = document.createElement("div");
      elt.classList.add("stat");

      const bar = document.createElement("div");
      bar.classList.add("bar");
      if (i === 2) bar.classList.add("current-day");
      bar.style.height = determineHeight(amount);

      const dayElt = document.createElement("p");
      dayElt.classList.add("day");
      dayElt.textContent = day;

      const tooltip = document.createElement("div");
      tooltip.classList.add("tooltip");
      tooltip.textContent = `$${amount}`;
      tooltip.style.transform = `translateY(${-amount * 2.9}px)`;

      elt.appendChild(bar);
      elt.appendChild(dayElt);
      elt.appendChild(tooltip);
      statsElt.appendChild(elt);
    });

    const allTooltips = document.querySelectorAll(".tooltip");

    document.querySelectorAll(".bar").forEach((bar, i) => {
        bar.addEventListener("mouseover", () => {
            allTooltips[i].style.opacity = 1;
        });

        bar.addEventListener("mouseout", () => {
            allTooltips[i].style.opacity = 0;
        });
    })
  });

const determineHeight = (amount) => {
  const value = amount * 2.9;
  return `${value}px`;
};
