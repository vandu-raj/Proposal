function showProposal() {
    document.getElementById("sorryBox").classList.add("hidden");
    document.getElementById("proposalBox").classList.remove("hidden");
  }
  
  function showSorryAgain() {
    alert("I’m really sorry for hurting you. Please forgive me... I’ll wait forever if I have to. 💔");
    document.getElementById("proposalBox").classList.add("hidden");
    document.getElementById("sorryBox").classList.remove("hidden");
  }
  
  function showPromise() {
    document.getElementById("proposalBox").classList.add("hidden");
    document.getElementById("promiseBox").classList.remove("hidden");
  }
  
  function rejectProposal() {
    alert("I understand. I'll be waiting for you. 💔");
    document.getElementById("proposalBox").classList.add("hidden");
    document.getElementById("sorryBox").classList.remove("hidden");
  }
  
  function finalLove() {
    document.getElementById("promiseBox").classList.add("hidden");
    document.getElementById("finalBox").classList.remove("hidden");
  }
  
  // Generate random hearts dynamically
  function createHearts(count = 30) {
    const heartsContainer = document.querySelector(".hearts");
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = `${5 + Math.random() * 5}s`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      heartsContainer.appendChild(heart);
    }
  }
  
  createHearts();
  