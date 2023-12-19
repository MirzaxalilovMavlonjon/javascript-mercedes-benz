let loader=document.querySelector('[load]');
//loader

setTimeout(()=>{
    loader.style.opacity='1'
    setTimeout(() => {
        loader.style.display='none'
    }, 2000);
},3000);
//tabs



let tabcontent=document.querySelectorAll('.tabcontent'),
tabheader__items=document.querySelector('.tabheader__items'),
body=document.querySelector('body')
   tabheaderitem=document.querySelectorAll('.tabheader__item');
   let colors=['red','green','aqua', 'yellow']
//    console.log(tabheader__items);
function hide(){
    tabcontent.forEach(function(item){
        item.style.display='none';
    })
    tabheaderitem.forEach(function(item){

        item.classList.remove('tabheader__item_active');
        item.style.color='';
    })
}

function show(i=0){
    tabcontent[i].style.display='block';
    tabheaderitem[i].classList.add('tabheader__item_active')
    tabheaderitem[i].style.color=colors[i];
    body.style.backgroundColor=colors[i];
}
hide();
show();


tabheader__items.addEventListener('click',(e)=>{
if(e.target  && e.target.classList.contains('tabheader__item')){
    tabheaderitem.forEach(function(item,index){
        if(e.target==item){
            hide();
            show(index)
        }
    }) 

}
});

//modal uchun

function hidemymodal(){
    modal.style.display='none'
}
function showmymodal(){
    modal.style.display='block'
}

let feedback=document.querySelectorAll('[feedback]'),
    modal=document.querySelector('[modal]'),
    closeBtn=modal.querySelector('.modal__close')
// console.log(closeBtn);
feedback.forEach((item)=>{
    item.addEventListener('click',()=>{
     showmymodal();
    })
});

closeBtn.addEventListener('click',()=>{
   hidemymodal();
});
modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
       hidemymodal();
    }

})

function showmymodalbyscroll(){
    if(window.pageYOffset+document.documentElement.clientHeight >=document.documentElement.scrollHeight){
        showmymodal();
        window.removeEventListener('scroll',showmymodalbyscroll)
               
    }
}
window.addEventListener('scroll',showmymodalbyscroll)


//cards
let cards=document.querySelectorAll('.menu__item');
function hidecards(){
    cards.forEach((s)=>{
        s.style.transform='scale(1)'
        s.classList.remove('extra')
    })
}
function showcards(i){
    cards[i].style.transform='scale(1.3)';
    cards[i].classList.add('extra')
}

cards.forEach(function(item,idx){
    item.addEventListener('mouseover',function(e){
        console.log('salom');
        hidecards();
        showcards(idx);
    })
})

//timer uchun

let tugash= '2025-11-16';

function calcTimer(endTime){
    let time =Date.parse(endTime)-Date.parse(new Date),
    days=Math.floor(time/(1000*60*60*24)),
    hours=Math.floor(time/(1000*60*60)%24),
    minutes=Math.floor((time/1000)/60%60),
    seconds=Math.floor((time/1000)%60);
    return{days,hours,minutes,seconds}
}
function date(joy,vaqt){
     let time=document.querySelector(joy);
     days=time.querySelector('#days'),
     hours=time.querySelector('#hours'),
     minutes=time.querySelector('#minutes'),
     seconds=time.querySelector('#seconds');
     let vaqt2=setInterval(ozgartirish,1000)
    
function ozgartirish(){
    let timer=calcTimer(vaqt);
    days.innerHTML=setZero(timer.days),
    hours.innerHTML=setZero(timer.hours),
    minutes.innerHTML=setZero(timer.minutes),
    seconds.innerHTML=setZero(timer.seconds);
}
function setZero(num){
    if(num<10){
        return '0'+num
    }else{
        return num
    }
}
}
date('.promotion__timer',tugash)

//slider uchun

let slides=document.querySelectorAll('.offer__slide'),
    current=document.querySelector('#current'),
    total=document.querySelector('#total'),
    next=document.querySelector('.offer__slider-next'),
    prev=document.querySelector('.offer__slider-prev');
    // console.log(slides,current,total,next,prev);
let slideindex=1;

showslides(slideindex);
function showslides(i){
    if(i>slides.length){
        i=1;
        // console.log('salom');
    }
    if(i<1
        ){
        i=slides.length;
        // console.log('salom');
    }
    slides.forEach(item=>item.style.display='none');
    slides[i-1].style.display='block';

    if(slides.length<10){
        current.textContent=`0${i}`
    }else{
        current.textContent=i
    }


    function changeindex(s){
        showslides(i += s)
    }
    next.addEventListener('click',()=>{
      changeindex(1)
    });
    prev.addEventListener('click',()=>{
        changeindex(-1)
    })

}
MouseEvent
//extra 

let inputs=document.querySelectorAll('.modal__input'),
    callme=document.querySelector('#submit');

let ism;
let raqam;

callme.addEventListener('click',(e)=>{
  e.preventDefault()
  console.log('ism',ism);
  console.log('raqam',raqam);
  inputs[0].value='';
  inputs[1].value='';

})

inputs.forEach((item,index)=>{


    item.addEventListener('input',(e)=>{
     if(e.target && e.target.classList.contains('bir')){
         ism=e.target.value
     }else{
         raqam=e.target.value
     }

    })
    console.log();

})



































































































































































































































































































































































































