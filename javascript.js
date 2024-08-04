
// -------------------Qr Code Generator------------------

const qrCode=document.getElementById('qr')
const input=document.getElementById('inputText')

document.getElementById('clickme').addEventListener('click',(e)=>{
    qrCode.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value
   qrCode.style.marginLeft='80px'

})