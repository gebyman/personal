let btn = document.querySelector('.loginBtn');
const accountMessage = document.querySelector('.accountMessage');
const passwordMessage = document.querySelector('.passwordMessage');

btn.addEventListener('click', function (e) {
    const account = document.querySelector('.account').value;
    const password = document.querySelector('.password').value;

    let accountMessageStr = '';
    let passwordMessageStr = '';

    if (account == 0) {
        accountMessageStr += '請輸入帳號';
    }
    if (password == 0) {
        passwordMessageStr += '請輸入密碼';
    }

    accountMessage.innerHTML = accountMessageStr;
    passwordMessage.innerHTML = passwordMessageStr;

    if (accountMessageStr === '' && passwordMessageStr === '') {
        let loginSuccess = false;

        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(dataList => {
                dataList.forEach(function (item) {
                    if (account === item.account && password === item.password) {
                        loginSuccess = true;
                        document.querySelector('.account').value = '';
                        document.querySelector('.password').value = '';
                        window.location.href = 'https://gebyman.github.io/personal/index.html';
                        alert('登入成功');
                        return;
                    }
                    
                });

                if (!loginSuccess) {
                    alert('登入失敗');
                }
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }
});
