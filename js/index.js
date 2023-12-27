const burgerBtn = document.querySelector('#burger');
const mobileMenu = document.querySelector(".mobile");

let isMenuCreated = false; 

burgerBtn.addEventListener('click', function(e) {
    if (!isMenuCreated){ 
        const div = document.createElement('div');
        //新增div
        div.classList.add('mobileMenu')
        const ul = document.createElement('ul');
        //新增ul
        
        const aboutUsLink = document.createElement('a');
        
        aboutUsLink.href = "#"; 
        aboutUsLink.textContent = "關於我們";
        
        const questionLink = document.createElement('a');
        questionLink.href = "#"; 
        questionLink.textContent = "常見問題";
        
        const wishLink = document.createElement('a');
        wishLink.href = "#";
        wishLink.textContent = "許願上架";
        
        const li1 = document.createElement('li');
        li1.appendChild(aboutUsLink);
        
        const li2 = document.createElement('li');
        li2.appendChild(questionLink);
        
        const li3 = document.createElement('li');
        li3.appendChild(wishLink);
        
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        //將li元素添加到ul
        
        div.appendChild(ul);
        //將ul元素添加到div
        mobileMenu.appendChild(div);
        isMenuCreated = true;
    } else {
        mobileMenu.innerHTML = "";
        isMenuCreated = false;
    }
});