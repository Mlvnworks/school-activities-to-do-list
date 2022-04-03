const searchBar=document.querySelector('#search-bar');
const searchBtn=document.querySelector('#search-btn');
const titles=document.querySelectorAll('.title');
const activities=document.querySelectorAll('tbody tr');

document.querySelector('#delete-btn').addEventListener('click',()=>{
    const states=document.querySelectorAll('.state');
    const trash=document.querySelectorAll('.trash');
    states.forEach(state=>{
        state.classList.toggle('d-none');
    })
    trash.forEach(icon=>{
        icon.classList.toggle('d-none');
    })

})
searchBtn.addEventListener('click',()=>{
    const key=searchBar.value.toLowerCase();
    Array.from(activities).forEach(activity=>{
        const actTitle=activity.firstElementChild.textContent;
        console.log(activity)
        if(actTitle.toLowerCase().indexOf(key) != -1){
            activity.style.display='';
            
        }else{
            activity.style.display='none';
            
        }
    })
})