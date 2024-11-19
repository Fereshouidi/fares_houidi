// 'use client';
// console.log('1');

// const option_icon = document.getElementById('option-icon');
// const navSection = document.getElementById('navSection');
// const options_link = document.getElementsByClassName('nav-links');

// console.log('2');

// var optionIconClicked = false;
// var navSectionExist = false;
// var optionIconHover = false;

// export const mouseEnter = () => {
//     optionIconHover = true;
//     navSectionExist = true;
//     if(optionIconClicked){
//         option_icon.classList.remove("option-icon-clicked");
//     }
//     navSection.style.height = '100vh';
//     for ( i = 0 ; i < options_link.length ; i++){
//         options_link[i].style.opacity = '1';
//         options_link[i].style.display = 'flex';
//     }
// }
// export const mouseLeave = () => {
//     optionIconHover = false;
//     if(!optionIconClicked && !navSectionExist){
//         navSectionExist = false;
//         navSection.style.height = '0';
//         for ( i = 0 ; i < options_link.length ; i++){
//             options_link[i].style.opacity = '0';
//             options_link[i].style.display = 'none';
//         }
//     }else if(!optionIconClicked && navSectionExist){
//         option_icon.classList.remove("option-icon-clicked");
//         navSection.style.height = '0';
//         for ( i = 0 ; i < options_link.length ; i++){
//             options_link[i].style.opacity = '0';
//             options_link[i].style.display = 'none';
//         }
//     }else{
//         option_icon.classList.add("option-icon-clicked")
//     }
// }
// option_icon.addEventListener('click', () => {
//     optionIconClicked = !optionIconClicked;
//     if(optionIconClicked){
//         if(!navSectionExist){
//             option_icon.classList.add("option-icon-clicked")
//         }else{
//             option_icon.classList.remove("option-icon-clicked")
//         }
//         option_icon.classList.add("option-icon-clicked")
//         navSection.style.height = '100vh';
//         for ( i = 0 ; i < options_link.length ; i++){
//             options_link[i].style.opacity = '1';
//             options_link[i].style.display = 'flex';
//         }
//     }else{
//         option_icon.classList.remove("option-icon-clicked")
//         navSection.style.height = '0';
//         for ( i = 0 ; i < options_link.length ; i++){
//             options_link[i].style.opacity = '0';
//             options_link[i].style.display = 'none';
//         }
//     }
    
// })
// navSection.addEventListener('mouseenter', () => {
//     // optionIconClicked = !optionIconClicked;
//    // optionIconHover = true;
//    navSectionExist = true;
//     option_icon.classList.add("option-icon-clicked")
//     navSection.style.height = '100vh';
//     for ( i = 0 ; i < options_link.length ; i++){
//         options_link[i].style.opacity = '1';
//         options_link[i].style.display = 'flex';
//     }
// })
// navSection.addEventListener('mouseleave', () => {
//    // optionIconHover = false;
//    navSectionExist = false;
//     if(optionIconClicked){
//         option_icon.classList.add("option-icon-clicked")
//     }else{
//         option_icon.classList.remove("option-icon-clicked")
//         navSection.style.height = '0';
//         for ( i = 0 ; i < options_link.length ; i++){
//             options_link[i].style.opacity = '0';
//             options_link[i].style.display = 'none';
//         }
//     }
// })
// for ( i = 0 ; i < options_link.length ; i++){
//     options_link[i].addEventListener('click', () => {
//         navSectionExist = false;
//         navSection.style.height = '0';
//         for ( i = 0 ; i < options_link.length ; i++){
//             options_link[i].style.opacity = '0';
//             options_link[i].style.display = 'none';
//         }
//     })
// }

