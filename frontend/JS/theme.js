//localStorage Theme
let LCT = localStorage.getItem('theme');

let body = document.querySelector('body');
let btn = document.querySelector('.theme_btn');
let btn_form = document.querySelector('.btn_f');

    if(LCT == 'light'){
        body.classList.remove('dark');
        btn.classList.remove('dark');
        btn_form.classList.remove('dark');
    } else {
        btn_form.classList.add('dark')
        body.classList.add('dark');
        btn.classList.add('dark')
    }

btn.addEventListener('click', () => {

    let currentTheme = localStorage.getItem('theme');
    
    if(currentTheme === 'light'){
        body.classList.add('dark');
        btn.classList.add('dark');
        btn_form.classList.add('dark')

        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        btn.classList.remove('dark');
        btn_form.classList.remove('dark')

        localStorage.setItem('theme', 'light');
    }
});