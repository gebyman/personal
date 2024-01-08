const comment = document.querySelector('.commentbtn')
const commentClose = document.querySelector('.commentBtnClose')
const commentModal = document.querySelector('.commentModal')
const commentarea = document.querySelector('.commentarea').value

const shareModal = document.querySelector('.shareModal')
const shareBtn = document.querySelector('.shareBtn')
const shareClose = document.querySelector('.shareBtnClose')

const commentBtnConfirm = document.querySelector('.commentBtnConfirm')
function commentCloseFunction (){
    commentModal.classList.add("hidden");
}

comment.addEventListener('click',function(e){
    commentModal.classList.remove("hidden");
})


commentClose.addEventListener('click',function(e){
    commentCloseFunction()
})

commentBtnConfirm.addEventListener('click',function(e){
    const commentarea = document.querySelector('.commentarea')
    let str = '';
    if(commentarea.value===''){
        alert('請輸入評論')
        return;
    }else{
    alert ('評論成功');
    commentarea.value=''
}

commentModal.classList.add("hidden");
    
})

function shareCloseFunction (){
    shareModal.classList.add("hidden");
}

shareBtn.addEventListener('click',function(e){
    shareModal.classList.remove("hidden");
})
shareClose.addEventListener('click',function(e){
    shareCloseFunction()
})