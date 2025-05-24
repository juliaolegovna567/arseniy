document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "💬 'Изначально никто не живет на небесах: ни ты, ни я, ни даже Бог.'",
      "👾 'Судьба — это магия'",
      "🌈 'сф койл койл  шарю за дота 2'",
      "🔥 'играю на гитаре как лирику пишу'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Гитара": "Я люблю играть на гитаре, выступал недавно :)",
      "Музыка": "я люблю слушать рок или такого подобного, серега пират,нервы",
      "Одежда": "одеваюсь в рубашки и в широкие штаны",
      "Игры": "люблю сюжетные игры"
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  