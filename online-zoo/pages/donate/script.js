const menuList = document.querySelectorAll(".menuList");
for (let i = 0; i < menuList.length; i++) {
   menuList[i].addEventListener('click', active);
}

function active() {
   for (let i = 0; i < menuList.length; i++) {
      if (menuList[i] != this) {
         menuList[i].classList.remove('active-href');
      }
   }
   this.classList.add('active-href');
}