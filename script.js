let head = document.querySelector('.head')

window.onscroll=()=>{
    if(window.scrollY > 0){
        head.classList.add('active')
        console.log('if')
    }else{
        head.classList.remove('active')
        console.log('else')
    }
}

let bar = document.querySelector('.bar')
let navbar = document.querySelector('.navbar')

bar.addEventListener('click', ()=>{
    bar.classList.toggle('fa-times')
    navbar.classList.toggle('poly')
})