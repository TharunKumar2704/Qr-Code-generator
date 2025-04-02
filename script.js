let Container = document.querySelector(".container");
let QRinput = document.querySelector(".form input");
let QRbutton = document.querySelector(".form button");

let QRimage = document.querySelector(".qr-code");
let Download = document.querySelector(".saveqr");

QRbutton.addEventListener("click",()=>{
    let QRvalue = QRinput.value;
    QRimage.innerHTML="";
    let code =new QRCode(QRimage,{
        text : QRvalue,
        width: 180,
        height :180,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    Container.classList.add("active");

});
Download.addEventListener("click",()=>{
    let Imgsrc = QRimage.querySelector("img").src;

    Download.href=Imgsrc;
    Download.download='QRCode';
});
