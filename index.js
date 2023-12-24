let imagebox=document.getElementById("imagebox");
let image=document.getElementById("image");
let qrtext=document.getElementById("qrtext");
  function GenerateQR(){
     if(qrtext.value.length>0){
      image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
      imagebox.classList.add("show-img");
     }
  }