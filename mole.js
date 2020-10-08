// Write your JS here.

// **Test Animation**
// setInterval(() => {
//     const moleHeads = document.querySelectorAll(".wgs__mole-head");
//     for(let moleHead of moleHeads){
//         moleHead.classList.toggle("wgs__mole-head--hidden");
//     }
// }, 1000);

const moleHeads = document.querySelectorAll(".wgs__mole-head");

const popUpRandomMole = () => {
    const notMoleHeads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked");
    if(notMoleHeads.length === 0){
        alert("You Won!");
        return;
    }
    let randomNum = Math.floor(Math.random() * notMoleHeads.length);
    let mole = notMoleHeads[randomNum];
    mole.classList.remove("wgs__mole-head--hidden");
    setTimeout(() => {
        hideMole(mole);
    }, 3000);
};

const hideMole = (mole) => {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);
}

setTimeout(popUpRandomMole, 0);

moleHeads.forEach((moleHead) => {
    moleHead.addEventListener("click", (e) => {
        e.target.classList.add("wgs__mole-head--hidden");
        e.target.classList.add("wgs__mole-head--whacked");
    })
})
