document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".palette-card");

  if (!cards.length) {
    return;
  }

  let overlay = null;

  const closeOverlay = () => {
    if (!overlay) {
      return;
    }

    overlay.remove();
    overlay = null;
    document.body.classList.remove("has-palette-overlay");
  };

  const openOverlay = (card) => {
    closeOverlay();

    overlay = document.createElement("div");
    overlay.className = "palette-zoom-overlay";

    const visual = card.querySelector(".visual");

    if (!visual) {
      return;
    }

    const zoomCard = visual.cloneNode(true);
    zoomCard.classList.add("palette-zoom-visual");

    overlay.appendChild(zoomCard);
    document.body.appendChild(overlay);
    document.body.classList.add("has-palette-overlay");

    overlay.addEventListener("click", closeOverlay);
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      openOverlay(card);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeOverlay();
    }
  });
});
