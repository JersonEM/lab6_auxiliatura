document.addEventListener("DOMContentLoaded", function(){
    const enlaceContainer = document.getElementById("enlace-container");
    
    const enlace = document.createElement("a");
    enlace.href = "https://keybr.com";
    enlace.textContent = "Keybr.com";
    enlaceContainer.appendChild(enlace);
  });

  const buyList = [
    "books",
    "bread",
    "eraser",
    "earphones",
    "collection-cards",
    "hdmi",
    "vga",
    "motherboard",
    "university-books",
  ];

  document.addEventListener("DOMContentLoaded", function(){
    const ListContainer = document.getElementById("Lista")
    buyList.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      ListContainer.appendChild(listItem);
    })
  })