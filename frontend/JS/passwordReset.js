let form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    console.log("Форма отправлено!");
    e.preventDefault();
    resetPassword(e.target);
});


async function resetPassword(inf){

    console.info('Log 1 function reset');

    let username = inf.username.value;
    let New_password = inf.New_password.value;
    let resetHash = inf.resetHash.value;    

    console.log('Подаждите..')
    

    try {
        const res = await fetch('https://67a65cc3510789ef0dfb34c8.mockapi.io/api/v1/users');

        if(!res.ok){
            console.log('Что то пошло не так');
            return;
        }

        let data = await res.json();
        console.log(data);

        if(data){
            const user = data.find(user => user.username.trim() === username.trim() && user.resetHash.trim() === resetHash.trim())
/* *************************************** */
            let UpdatedUserData = {
                username: username,
                password: New_password
            }

            if(user){
                const UpdateRes = await fetch(`https://67a65cc3510789ef0dfb34c8.mockapi.io/api/v1/users/${user.id}`, {
                    method: 'PUT',
                    
                    headers: {
                         'Content-Type': 'application/json',
                    },

                    body: JSON.stringify(UpdatedUserData)

                });

                alert("Данные успешно обнавлены :)")
            }
        }
   
    } catch (e){
        console.log(`ERROR: ${e}`);
    }

    return false;
}