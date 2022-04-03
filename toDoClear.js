const table=document.querySelector('tbody')

table.addEventListener('click',(e)=>{
    if(e.target.classList.contains('d')){
        const area=e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.textContent;
        if(confirm(`are you sure you want to delete ${area}?`)){
            console.log(localStorage)
        }
    }
  
})
document.querySelector('#clear-all').addEventListener('click',()=>{
    if(confirm(`this will delete your all activities`)){
        localStorage.clear();
        location.reload();
    }
});
