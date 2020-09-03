let ActivationStatus = false;

const mobileMenu = function() {
    const setMenu = document.querySelector(".mobile-menu");
    const setMenuUl = document.querySelector(".mobile-ul");
    const setMenuAnchor = document.querySelectorAll(".mobile-li a");

    if (ActivationStatus === false) {
      setMenu.style.height = "280px";
      setMenuUl.style.visibility = "visible";
      
      const AnchorSize = setMenuAnchor.length;
      let i;
      for(i=0; i<AnchorSize; i++) {
          setMenuAnchor[i].style.opacity="1";
      }

      ActivationStatus = true;
    }
    else if (ActivationStatus === true) {
        setMenu.style.height = "0.1px";
        setMenuUl.style.visibility = "hidden";

        const AnchorSize = setMenuAnchor.length;
        let i;
        for(i=0; i<AnchorSize; i++) {
            setMenuAnchor[i].style.opacity="0";
        }

        ActivationStatus = false;
    }

}

