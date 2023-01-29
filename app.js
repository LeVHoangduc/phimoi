var container = document.querySelector(".container");
var forMoreBTN = document.querySelector(".img_dimBTN");
var close = document.querySelector(".close");
var container_two = document.querySelector(".container_two");

forMoreBTN.addEventListener("click",e=>{
    container.classList.add("dim");
    container_two.classList.remove("dim");

})

close.addEventListener("click",e=>{
    container.classList.remove("dim");
    container_two.classList.add("dim");

})




// gallery
var main_img = document.querySelector(".main_img img");
var list_img  = document.querySelectorAll(".list_img img"); 
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var imgFeature = document.querySelector(".img_feature");


var currentIndex =0;
function updateImg(index){

    // remove active
    document.querySelectorAll(".list_img div").forEach(e=>{
        e.classList.remove("active");
    })
    currentIndex = index;
    main_img.src = list_img[currentIndex].getAttribute('src');
    list_img[currentIndex].parentElement.classList.add("active");
}

list_img.forEach((imgElement,index)=>{
    imgElement.addEventListener("click",e=>{
        imgFeature.style.opacity = '0';
        setTimeout(()=>{
            updateImg(index);
            imgFeature.style.opacity = '1';
        },400)
    })
})

// BUTTON

prev.addEventListener("click",e=>{
    if(currentIndex == 0)
        currentIndex = list_img.length-1;
    else
        currentIndex--;
    imgFeature.style.animation ='';
    setTimeout(()=>{
        updateImg(currentIndex);
        imgFeature.style.animation = 'slideLeft 0.9s ease-in-out forwards';
    },200)
    // updateImg(currentIndex);
})

next.addEventListener("click",e=>{
    if(currentIndex == list_img.length-1)
        currentIndex = 0;
    else
        currentIndex++;
    imgFeature.style.animation ='';
    setTimeout(()=>{
        updateImg(currentIndex);
        imgFeature.style.animation = 'slideRight 0.9s ease-in-out forwards';
    },200)
})

document.addEventListener("keydown",(e)=>{
    if(e.keyCode=='37' && currentIndex >=0)
        {
            if(currentIndex == 0)
                currentIndex = list_img.length-1;
            else
                currentIndex--;
            imgFeature.style.animation ='';
            setTimeout(()=>{
            updateImg(currentIndex);
            imgFeature.style.animation = 'slideLeft 0.9s ease-in-out forwards';
            },200)
        }
    if(e.keyCode=='39' && currentIndex <= list_img.length-1)
    {
        if(currentIndex == list_img.length-1)
            currentIndex = 0;
        else
            currentIndex++;
        imgFeature.style.animation ='';
        setTimeout(()=>{
        updateImg(currentIndex);
        imgFeature.style.animation = 'slideRight 0.9s ease-in-out forwards';
        },200)
    }
    if(e.keyCode=='32')
    {
        currentIndex =Math.floor(Math.random()*8);
        //console.log(currentIndex);
        updateImg(currentIndex);
    }
})

updateImg(0);