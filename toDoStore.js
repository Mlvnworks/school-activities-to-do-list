let storedActivities=[];

const title=document.querySelector('#activity-title');
const passing=document.querySelector('#passing');
const subject=document.querySelector('#subject');
const lists=document.querySelector('#activities')

lists.addEventListener('click',list=>{
    if(list.target.classList.contains('state')){
        list.target.classList.remove('btn-warning');
        list.target.classList.add('btn-success');
        list.target.textContent=localStorage.getItem('indicText');
    }
})
document.querySelector('#add-btn').addEventListener('click',()=>{
    storedActivities.push({title:title.value,passing:passing.value,subject:subject.value,state:'unDone'});
    localStorage.setItem('activities',JSON.stringify(storedActivities));
    location.reload();
})
function output(){
    storedActivities.forEach(activity=>{
        let tr=document.createElement('tr');
        tr.className='act';
        tr.innerHTML+=`
        <td class="title">${activity.title}</td>
        <td>${activity.passing}</td>
        <td>${activity.subject}</td>
        <td>
            <i class="bi bi-circle-fill not-done ndctn"></i>
        </td>
        <td>
            <button class="btn btn-sm btn-warning state">start</button>
            <button class="btn btn-small btn-danger d-none trash text-sm">
                <i class="bi bi-trash3-fill"></i>
            </button>
        </td>
        `
        lists.append(tr);

    });
    const statText=document.querySelectorAll('.state');
    statText.forEach(col=>{
        const circle=col.parentElement.previousElementSibling.firstElementChild;
        if(col.textContent == 'start'){
            circle.setAttribute('class','bi bi-circle-fill not-done ndctn');
        }else if(col.textContent == 'done'){
            circle.setAttribute('class','bi bi-circle-fill on-going ndctn');
        }else{
            circle.setAttribute('class','bi bi-circle-fill done ndctn');
        }
    })
}
if(localStorage.length > 0){
    localStorage.setItem('indicText','done');
    storedActivities=JSON.parse(localStorage.getItem('activities'));

    const exec=output();
    const actBtn=document.querySelectorAll('.state');

}

