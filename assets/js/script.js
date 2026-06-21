let confirm = document.getElementById('confirm');
let delete_ = document.getElementById('delete');

confirm.addEventListener("click" , () =>{
    confirm.innerText = "Friend";
delete_.remove()
});

let frd = document.getElementById('frd')
delete_.addEventListener("click" , () => {
    frd.remove()
})



let ppf = document.getElementById('ppf');
let ppff = document.getElementById('ppff');

ppf.addEventListener("click" , () => {
    ppff.style.display = "block" ;
})