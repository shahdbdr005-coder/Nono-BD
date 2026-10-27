// Elements
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const fromBtn = document.getElementById("fromBtn");
const song = document.getElementById("song");

let isOpen = false;



// ================= LOADING SCREEN =================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loadingPage = document.getElementById("loading-page");

        if (loadingPage) {

            loadingPage.style.display = "none";

        }

    }, 6000);

});




// ================= ENVELOPE OPEN/CLOSE =================


function toggleEnvelope(){


    if(!isOpen){


        envelope.classList.add("open");


        if(openBtn){

            openBtn.innerText = "اقفلي الرسالة 💌";

        }



        // Play music

        if(song){

            song.play().catch(() => {

                console.log("User interaction needed for audio");

            });

        }


        isOpen = true;



    }else{


        envelope.classList.remove("open");


        if(openBtn){

            openBtn.innerText = "Click Here 💌";

        }



        if(song){

            song.pause();

            song.currentTime = 0;

        }


        isOpen = false;


    }


}





// Button click

if(openBtn){

    openBtn.addEventListener("click", toggleEnvelope);

}





// Envelope click

if(envelope){

    envelope.addEventListener("click", toggleEnvelope);

}





// ================= MESSAGE BUTTON =================


if(fromBtn){


    fromBtn.addEventListener("click", () => {


        alert(

        "From Bador ❤️\n\nأجمل هدية لأجمل نونو في الدنيا 💖"

        );


    });


}






// ================= OPTIONAL: HEARTS EFFECT =================


function createHeart(){


    const heart = document.createElement("div");


    heart.innerHTML = "❤️";


    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.bottom = "-20px";

    heart.style.fontSize = Math.random()*20 + 20 + "px";

    heart.style.zIndex = "10";


    heart.style.animation =
    "heartMove 5s linear forwards";



    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },5000);



}



setInterval(createHeart,1200);





// Add animation for hearts

const style = document.createElement("style");


style.innerHTML = `

@keyframes heartMove {

    from {

        transform:translateY(0);

        opacity:1;

    }


    to {

        transform:translateY(-110vh);

        opacity:0;

    }

}

`;



document.head.appendChild(style);