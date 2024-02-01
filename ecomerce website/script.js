const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const btn=document.getElementById('close')

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(btn){
    btn.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}