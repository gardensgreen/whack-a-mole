// Write your JS here.

// **Test Animation**
// setInterval(() => {
//     const moleHeads = document.querySelectorAll(".wgs__mole-head");
//     for(let moleHead of moleHeads){
//         moleHead.classList.toggle("wgs__mole-head--hidden");
//     }
// }, 1000);

const popUpRandomMole = () => {
    const moleHeads = document.querySelectorAll(".wgs__mole-head");
    let randomNum = Math.floor(Math.random() * 7);
    let mole = moleHeads[randomNum];
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(() => {
        hideMole(mole);
    }, 1000);
};

const hideMole = (mole) => {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);
}

setTimeout(popUpRandomMole, 0);
