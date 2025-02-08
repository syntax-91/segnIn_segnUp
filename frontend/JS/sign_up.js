let inp_password = document.querySelector('.inp_p');

let form = document.querySelector('#form');

form.addEventListener("submit", function (e) {
    console.log("Данные отправлены");
    e.preventDefault(); // Вызываем preventDefault на событии
    user_data(e.target);
});

async function user_data(info){

    let username = info.username.value;
    let password = info.password.value;


    try {
    
        const res = await fetch("https://67a65cc3510789ef0dfb34c8.mockapi.io/api/v1/users");
        
        const data = await res.json();
        console.log(data)

        if(data){

            const user = data.find(user => user.username.trim() === username.trim() && user.password.trim() === password.trim())
           
            if(user){
                alert(`Привет ${user.username}`)
                inp_password.className = 'inp_p outline-0 w-[80%] h-[100%] border-1 border-[#6b656f] rounded-[10px] pl-[10px]'
            } else {
                inp_password.className = 'inp_p outline-0 w-[80%] h-[100%] border-1 border-red-700 rounded-[10px] pl-[10px]'
            }

        } else {
            console.log('Что то пошло не так :(') 
        }

    } catch (e){
        console.log(`ERROR: ${e}`)
    }

    return false;
}