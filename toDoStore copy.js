let ctvts=[];

const addBtn=document.querySelector('#add-btn');
addBtn.addEventListener('click',()=>{
    const actTitle=document.querySelector('#activity-title').value;
    const actDate=document.querySelector('#passing').value;
    const actSubject=document.querySelector('#subject').value;
    const actLink=document.querySelector('#link').value;
    if(actTitle === "" || actDate=== ""|| actSubject===""){
        alert('please enter all fields');
    }else{
    ctvts.unshift({title:actTitle,date:actDate,subject:actSubject,link:actLink,state:'unDone'});

    localStorage.setItem('activities',JSON.stringify(ctvts));
    location.reload();
    }
});
function output(table){
    ctvts.forEach(activity=>{
        if(activity.state === 'unDone'){
            if(activity.link === ""){
                const tr=document.createElement('tr');
                tr.className='act';
                tr.innerHTML=`
                <td class="title">${activity.title}</td>
                <td>${activity.date}</td>
                <td>${activity.subject}</td>
                <td>
                    no link
                </td>
                <td>
                    <button class="btn btn-sm btn-warning state done-btn">Doned</button>
                    <button class="btn btn-small btn-danger d-none trash text-sm">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </td>
                `;
                table.append(tr);
            }else{
                const tr=document.createElement('tr');
                tr.className='act';
                tr.innerHTML=`
                <td class="title">${activity.title}</td>
                <td>${activity.date}</td>
                <td>${activity.subject}</td>
                <td>
                    <a href="${activity.link}" target="_blank" class="btn btn-primary btn-sm link-open">
                        Open link
                    </a>
                </td>
                <td>
                    <button class="btn btn-sm btn-warning state done-btn">Doned</button>
                    <button class="btn btn-small btn-danger d-none trash text-sm">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </td>
                `;
                table.append(tr);
            }
        }else{
            if(activity.link===""){
                const tr=document.createElement('tr');
                tr.className='act';
                tr.innerHTML=`
                <td class="title">${activity.title}</td>
                <td>${activity.date}</td>
                <td>${activity.subject}</td>
                <td>
                   no link
                </td>
                <td>
                    <button class="btn btn-success state">
                        <i class="bi bi-check2-all"></i>
                    </button>
                    <button class="btn btn-small btn-danger d-none trash text-sm">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </td>
                `;
                table.append(tr);
            }else{
                const tr=document.createElement('tr');
                tr.className='act';
                tr.innerHTML=`
                <td class="title">${activity.title}</td>
                <td>${activity.date}</td>
                <td>${activity.subject}</td>
                <td>
                    <a href="${activity.link}" target="_blank" class="btn btn-primary btn-sm link-open">
                        Open link
                    </a>
                </td>
                <td>
                    <button class="btn btn-success state">
                        <i class="bi bi-check2-all"></i>
                    </button>
                    <button class="btn btn-small btn-danger d-none trash text-sm">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </td>
                `;
                table.append(tr);
            }
        }
    })
}

if(localStorage.getItem('activities')){
    ctvts=JSON.parse(localStorage.getItem('activities'));
    const activityTable=output(document.querySelector('#activities'));
    const  tableList=document.querySelector('#activities');
    
    //Listing Events
    tableList.addEventListener('click',(e)=>{
        if(e.target.classList.contains('state')){
            const targ=e.target.parentElement.parentElement.firstElementChild.textContent;
            let state=ctvts.filter(activity=> activity.title == targ && activity.state == 'unDone')
            .map(activity=> activity.state='done');

            localStorage.setItem('activities',JSON.stringify(ctvts));
            location.reload();
        }
    })
    tableList.addEventListener('click',table=>{
        if(table.target.classList.contains('trash')){
            const title=table.target.parentElement.parentElement.firstElementChild.textContent;
            let remove=ctvts.filter(activity=>activity.title != title)
            if(confirm('are you sure you want to delete '+ title)){
                ctvts = remove
                localStorage.setItem('activities',JSON.stringify(ctvts));
                location.reload();
            }
        }
    })
};



