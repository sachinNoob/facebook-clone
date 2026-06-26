let confirm = document.getElementById('confirm');
let delete_ = document.getElementById('delete');

confirm.addEventListener("click", () => {
    confirm.innerText = "Friend";
    delete_.remove()
});

let frd = document.getElementById('frd')
delete_.addEventListener("click", () => {
    frds.remove()
})



let ppf = document.getElementById('ppf');
let ppff = document.getElementById('ppff');

ppf.addEventListener("click", () => {
    if (ppff.style.display == "block") {
        ppff.style.display = "none";
    } else {
        msg1.style.display = "none";
        ppff.style.display = "block";
    }
});


let msg = document.getElementById('msg');
let msg1 = document.getElementById('msg1');

msg.addEventListener("click", () => {
    if (msg1.style.display == "block") {
        msg1.style.display = "none";
    } else {
        ppff.style.display = "none";
        msg1.style.display = "block";
    }
});

let theme = document.getElementById('btwn');
theme.addEventListener('click', () => {
    let darktheme = document.documentElement.classList.toggle("dark");
    localStorage.setItem('theme', darktheme ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
});


let frdss = document.getElementsByClassName('friendprf')[0];
let msg_box = document.getElementById('msg-box');

frdss.addEventListener("click", () => {

    if (msg_box.style.display == "block") {
        console.log('block')
        msg_box.style.display = "none";
    } else {
        msg1.style.display = "none";
        msg_box.style.display = "block"

    }
});

let closemsgbox = document.getElementsByClassName('msg-box-close')[0];

closemsgbox.addEventListener("click", () => {

    msg_box.style.display = "none";
});

let likebtn = document.getElementsByClassName('like-section');
for (let likebtns of likebtn) {
    likebtns.addEventListener('click', (e) => {
        let element = e.target;
        console.log(element)

        let like_text = element.getElementsByClassName('likesss')[0]
        let like_img = element.getElementsByClassName('likess')[0]

        if (like_text.textContent == 'Like') {

            like_img.src = "./assets/img/facebook-reactions.png";
            like_text.innerText = "Liked";

            like_text.style.color = "blue";
        } else {

            like_img.src = "./assets/img/facebook-reactions.png";
            like_text.innerText = "Like";

            like_text.style.color = "black";

        }



    })


};