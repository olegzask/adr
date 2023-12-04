const servicesHover = () => {
  const [dropMenu] = document.getElementsByClassName("services-dropdown-container");

 
dropMenu.classList.remove("dropdown-active");

};


export const scrollToTop = (e) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  servicesHover();
};


