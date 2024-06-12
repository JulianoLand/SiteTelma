const item = document.querySelector('.item');

//modal
const modal = document.querySelector('.backgroud');
const btnFechar = document.querySelector('.btnFechar');

//abrindo modal
item.addEventListener("click", function(){
    modal.style.display = 'flex';
});

// fechando modal
modal.addEventListener('click', function(event){
    console.log(event)
    if(event.target == modal){
        modal.style.display = 'none';
    }
})

btnFechar.addEventListener('click', function(){
    modal.style.display = 'none';
})