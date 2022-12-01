//モーダル
const modalArea = document.getElementById("modalArea");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalBg = document.getElementById("modalBg");
const toggle = [openModal, closeModal, modalBg];

for (let i = 0; i < toggle.length; i++) {
  toggle[i].addEventListener(
    "click",
    function () {
      modalArea.classList.toggle("is-show");
    },
    false
  );
}
