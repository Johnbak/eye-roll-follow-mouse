(() => {
  function run() {
    const bodyElem = document.querySelector("body");
    const eyeElem = document.querySelectorAll(".eye");

    function onMouseMove({ pageX, pageY }) {
      // console.log(`${pageX}  , ${pageY}`);
      eyeElem.forEach(eyeElem => {
        // console.log(eyeElem.getBoundingClientRect());
        const { left, top } = eyeElem.getBoundingClientRect();
        const eyeCenterX = left + eyeElem.offsetWidth / 2; //left off eye + width off eye / 2
        const eyeConterY = top + eyeElem.offsetHeight / 2;

        //calculate Radian
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeConterY);
        const angle = ((radian * 100) / Math.PI) * -1;
        console.log(angle);
        // eyeElem.style.transform = `rotate(${radian * -1}rad)`;
        eyeElem.style.transform = `rotate(${angle}deg)`;
      });
    }
    bodyElem.addEventListener("mousemove", onMouseMove);
  }
  run();
})();
