const inp = document.querySelector(".input1")
const img = document.querySelector('.img2')
const img1 = document.querySelector('.img1')

function see() {
    if (img1.display = 'flex') {
        img1.style.display = 'none'
        img.style.display = "flex"
    }else if (img1.display = 'none'){
        img1.style.display = "flex"
        img.style.display = "none"
    }
    
    

    if (inp.type === "password") {
        inp.type = "text";
    }else if( inp.type === "text"){
        inp.type = "password"
    }

    
}
function Changer() {
    const changerpass1 = Math.random().toString(36).slice(-5).toUpperCase();
    const changerpass = Math.random().toString(36).slice(-5).toLowerCase();
    const all = changerpass1 + changerpass;
    inp.value = all;    
        console.log(all);
    
}
