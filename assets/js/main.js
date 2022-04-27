
// var ==========================
let nav_box_title = document.querySelectorAll('.nav_box-title');
let nav_box_outer = document.querySelectorAll('.nav_box-outer');
let vid = document.getElementById("about_video");


function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

// Theme Change ====================================

const toggleSwitch = document.querySelector('#theme-check');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);

// Theme Change end ================================


window.onscroll = function () {
    scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 100) {
        document.querySelector('.header').classList.add('stick');
    } else {
        document.querySelector('.header').classList.remove('stick');
    }
};

window.onclick = function (e) {

    nav_box_outer.forEach(nav_box_outer => {
        if (nav_box_outer != undefined) {
            nav_box_outer.classList.contains('active') && e.target.closest('.nav_box-title');
            nav_box_outer.classList.remove('active')
        }
    }
    );

    // if (drop_lang.classList.contains('active') && !e.target.closest('.lang_box')) {
    //     drop_lang.classList.remove('active')
    // }



}


// Clicks ======================================================

if (nav_box_title != undefined) {
    nav_box_title.forEach(r => {
        r.addEventListener('click', function () {
            sleep(2).then(() => {
                nav_box_outer.forEach(p => {
                    p.classList.remove('active');
                })


                this.nextElementSibling.classList.add("active");
            })
        });
    });
}

// if (btn != undefined) {
//     btn.addEventListener('click', function () {
//         btn.classList.add('remove');
//     });
// }



// if (navs_list_link != undefined && !lang) {
//     navs_list_link.forEach(x => {
//         x.addEventListener('click', function () {
//             sleep(2).then(() => {
//                 navs.classList.remove('active');
//                 navs_list.classList.remove('active');
//             });
//         });
//     })
// }

