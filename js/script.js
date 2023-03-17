

const headerBlock = document.querySelector('.header');

const headerHeight = headerBlock.offsetHeight;
let headerHighlighted = false;
const startHeight = document.querySelector('.start').offsetHeight;

const scrolled = window.scrollY;

console.log(scrolled);



const animItems= document.querySelectorAll("._anim-items");


 
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);

        
    function animOnScroll(){
        if (window.scrollY >  startHeight + headerHeight) {
            headerBlock.classList.add('header__scroll');
            headerHighlighted = true;
            
        }
        else if(window.scrollY < startHeight + headerHeight){
            headerBlock.classList.remove('header__scroll');
            headerHighlighted = false;
        }
        for(let index=0;index < animItems.length;index++){
            const animItem = animItems[index]; 
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset=offset(animItem).top;
            const animStart =2;

            let animItemPoint=window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight/ animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('an_active');
            }
            else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('an_active');
                }
                
                    
                
            }
        } 
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return{ top:rect.top + scrollTop,left:rect.left + scrollLeft}

        
    }
    setTimeout(() => {
        animOnScroll();
    },400)

}

function headerLight(){

}


window.addEventListener('scroll', headerLight)











const burgerButton = document.querySelector('.burger__button');

const burgerBody = document.querySelector('.burger__body');



const burgDecor = document.querySelector('.burger__decor')

const burgerButtonDecors = document.querySelectorAll('.burger__button__decor');


const mainBody = document.querySelector('body');




burgerButton.addEventListener('click', function ()  {

    mainBody.classList.toggle('body_noScroll');
    burgDecor.classList.toggle('burger__dec__active');
    if (headerHighlighted == true){
        headerBlock.classList.toggle('header__scroll')
        
    }
    
    

    if(burgerBody.classList.length<2){
        burgerBody.classList.toggle('burger__show');
        
    }
    else{
        burgerBody.classList.toggle('burger__hide');
        burgerBody.classList.toggle('burger__show');

    }
   
    for (let i = 0; i < burgerButtonDecors.length; i++) {
        burgerButtonDecors[i].classList.toggle('burger__dec__active');
        
    }
    
});