let dataList = [];

function init() {
    check();
}

init();

function check() {
    let emailCheck = document.querySelector('.emailCheck');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function (e) {
        let dateValue = date.value;
        let passwordCheck = document.querySelector('.passwordCheck').value;
        let password = document.querySelector('.password').value;
        let email = document.querySelector('.email').value;
        let username = document.querySelector('.userName').value;

        if (!validateEmail(email)) {
            emailCheck.innerHTML = '請輸入有效電子郵件';
            return;
        }

        repect();

        function repect() {
            axios.get('http://localhost:3000/users')
                .then(function (res) {
                    let isEmailUsed = false;
                    res.data.forEach(function (item) {
                        if (item.account === email) {
                            isEmailUsed = true;
                        }
                    });

                    if (isEmailUsed) {
                        let emailCheck = document.querySelector('.emailCheck');
                        emailCheck.innerHTML = '該帳號已被使用';
                    } else {
                        
                        registerUser();
                    }
                })
                .catch(function (error) {
                    console.error('Error fetching user data:', error);
                });
        }

        function registerUser() {
            
            let userData = {
                account: email,
                password: password,
                userName: username,
                birthday: dateValue
            };


            dataList.push(userData);
            if(password!==passwordCheck){
                alert('請確認重複密碼是否一致')
                return;
            }
            alert('註冊成功');
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .then(response => response.json())
            .catch(error => {
                console.error('Registration failed:', error);
            });

            
            window.location.href = 'https://gebyman.github.io/personal/login.html';
        }
        
        
    });

    

    let messageuserName = document.querySelector('.messageuserName');
    btn.addEventListener('click', function (e) {
        let username = document.querySelector('.userName').value;
        let str = '';

        if (username == 0) {
            str += '請輸入要註冊的名稱';
        } else {
            messageuserName.innerHTML = str;
        }
    });

    let messagepassword = document.querySelector('.messagepassword');
    btn.addEventListener('click', function (e) {
        let password = document.querySelector('.password').value;
        let str = '';

        if (password == 0) {
            str += '請輸入要註冊的密碼';
        }
        messagepassword.innerHTML = str;
    });

    let messagepasswordCheck = document.querySelector('.messagepasswordCheck');
    btn.addEventListener('click', function (e) {
        let password = document.querySelector('.password').value;
        let passwordCheck = document.querySelector('.passwordCheck').value;
        let str = '';

        if (passwordCheck !== password) {
            str += '請輸入相同密碼';
        }
        messagepasswordCheck.innerHTML = str;
    });

    const date = document.querySelector('.date');
    btn.addEventListener('click', function (e) {
        let str = '';
        let dateValue = date.value;
        str = dateValue;
    });

    function validateEmail(email) {
        let emailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(email);
    }
}
