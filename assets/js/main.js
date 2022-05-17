
// var ==========================
let nav_box_title = document.querySelectorAll('.nav_box-title');
let nav_box_outer = document.querySelectorAll('.nav_box-outer');
let vid = document.getElementById("about_video");

let vouch_btn = document.querySelector('.vouch-link');
let vouch_modal = document.querySelector('.vouch-modal');
let vouch_close = document.querySelector('.vouchClose');

let burger = document.querySelector('.burger');
let nav_bg = document.querySelector('.nav_bg');



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

// Switch Text =================================
// function([string1, string2],target id,[color1,color2])    
if (document.getElementById("console") != undefined) {
    consoleText(['Reactjs Developer', 'Vue Developer', 'Angular Developer', 'Java Developer', 'Nodejs Developer', 'React Native Developer', 'Full-stack Developer', 'Dotnet Developer', 'Devops Developer', 'Python Developer', 'Flutter Developer'], 'text', ['#F85052', '#F85052', '#F85052']);

    function consoleText(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1200)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1200)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'

                visible = true;
            }
        }, 400)
    }
}


if (document.getElementById("console2") != undefined) {
    consoleText2(['ex-PayPal', 'ex-Aplle', 'ex-Oracle', 'ex-Google', 'ex-Amazon', 'ex-Atlassian', 'ex-Netflix'], 'text2', ['#F85052', '#F85052', '#F85052']);

    function consoleText2(words, id, colors) {
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console2');
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1200)
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1200)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 120)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore2 hidden';
                visible = false;

            } else {
                con.className = 'console-underscore2';

                visible = true;
            }
        }, 400)
    }
}


// Switch Text end =============================



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

    // if (vouch_modal != undefined) {
    //     if (vouch_modal.classList.contains('active') && !e.target.closest('.modal_inner')) {
    //         vouch_modal.classList.remove('active')
    //     }
    // }

    if (nav_bg != undefined) {
        if (nav_bg.classList.contains('active') && !e.target.closest('.theme-label') && !e.target.closest('.nav_box-title')) {
            nav_bg.classList.remove('active')
        }
    }


    // if (drop_lang.classList.contains('active') && !e.target.closest('.lang_box')) {
    //     drop_lang.classList.remove('active')
    // }

}

// Accord ===================================

let accordion = document.getElementsByClassName("accord");
// let i;
// let e;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("active")
        } else {
            panel.style.maxHeight = "500px";
            panel.classList.add("active")
        }
    });
}

// Accord end ===============================


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

if (vouch_btn != undefined) {
    vouch_btn.addEventListener('click', function () {
        sleep(2).then(() => {
            vouch_modal.classList.add('active');
        });
    });
}

if (vouch_close != undefined) {
    vouch_close.addEventListener('click', function () {
        sleep(2).then(() => {
            vouch_modal.classList.remove('active');
        });
    });
}


if (burger != undefined) {
    burger.addEventListener('click', function () {
        sleep(2).then(() => {
            nav_bg.classList.add('active');
        });
    });
}



// if (btn != undefined) {
//     btn.addEventListener('click', function () {
//         btn.classList.add('active');
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

