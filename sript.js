let ButtonLength = document.querySelectorAll(".drum").length;


for(let i = 0; i < ButtonLength; i++) {
    let loppingWord = document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let ButtonWord = this.innerHTML;
        AllInOne(ButtonWord);
        AnimationButton(ButtonWord);
        
    });


   
}
document.addEventListener("keypress", function (event) {
    AllInOne(event.key);
    AnimationButton(event.key);
});


function AllInOne (key) {
    switch (key) {
        case "w":
        let tom1 = new Audio("./Assets/Sounds/tom-1.mp3");
        tom1.play();
        break;
        case "a":
        let tom2 = new Audio("./Assets/Sounds/tom-2.mp3");
        tom2.play();
        break;
        
        case "s":
        let tom3 = new Audio("./Assets/Sounds/tom-3.mp3");
        tom3.play();
        break;
        case "d":
        let tom4 = new Audio("./Assets/Sounds/tom-4.mp3");
        tom4.play();
        break;
        case "j":
        let snare = new Audio("./Assets/Sounds/snare.mp3");
        snare.play();
        break;
        case "k":
        let crash = new Audio("./Assets/Sounds/crash.mp3");
        crash.play();
        break;
        case "l":
        let kick = new Audio("./Assets/Sounds/kick-bass.mp3");
        kick.play();
        break;
        default: 
        console.log("nothing");
        break;

    }
}

function AnimationButton (currentKey) {
    let AllBUtton = document.querySelector("." + currentKey);
    AllBUtton.classList.add("pressed");

    setTimeout(function () {
        AllBUtton.classList.remove("pressed");
    }, 400);
    

}




// document.querySelectorAll(".drum")[3].addEventListener("click", function () {
//     console.log(this.innerHTML);

// });
