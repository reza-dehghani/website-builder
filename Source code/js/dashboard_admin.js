let panel = document.querySelector("#panel");
let hamburgerMenu = document.querySelector("#hamburger_menu");
let closeArrowBtn = document.querySelector(".close-arrow-btn");
let sections = document.querySelectorAll(".sections > div");
let panelListTag = document.querySelectorAll(".right-panel ul li");
let changeInfoBtn = document.querySelector("#changeInfoButton");
let changeInfoSection = document.querySelector("#changeInfoSection");
let exitBtn = document.querySelector("#exitButton");
let exitBtnMobile = document.querySelector("#exitButtonMobile");
let deleteAccountBtn = document.querySelector("#deleteAccountButton");
let returnBtnMobile = document.querySelector("#returnButtonMobile");

/* when click on hamburger menu the panel should appear to user
   and also the close arrow button should be in panel,so user can
   close the panel through it. so this Event listener plays role
   when we click on hamburger menu.
*/
let showPanelMobile = () => {
    if (panel.classList.contains("hidden")) {
        hamburgerMenu.classList.add("hidden");
        exitBtnMobile.classList.add("hidden");
        returnBtnMobile.classList.add("hidden");
        panel.classList.remove("hidden", "opacity-0");
        closeArrowBtn.classList.remove("hidden");
    }
};

/* when we want to close panel this event listener should execute 
   and close panel and show hamburger menu
*/
let closePanelMobile = () => {
    panel.classList.add("hidden", "opacity-0");
    closeArrowBtn.classList.add("hidden");
    hamburgerMenu.classList.remove("hidden");
    exitBtnMobile.classList.remove("hidden");
    returnBtnMobile.classList.remove("hidden");
}

/* when click on one item of panel, that item should get
   background-color secondary and related information to
   that section will display and other section should be
   disappeared
*/
let showSpecialSection = () => {

    panelListTag[2].classList.add("bg-secondary");
    sections[0].classList.remove("hidden");
    /* we start this loop from item 3 (i=2) because first two
       item have no special function and be displayed just for
       info to user
    */
    for (let i = 2; i < panelListTag.length; i++) {

        panelListTag[i].addEventListener("click", () => {
            // remove background color secondary class for other item
            document.querySelectorAll(".right-panel ul li.bg-secondary").forEach((el) => {
                el.classList.remove("bg-secondary");
            });
            /* add hidden class to divs tag that don't have that class
               because just one item should be displayed to user
            */
            document.querySelectorAll(".sections > div").forEach((sec) => {
                if (!sec.classList.contains("hidden")) {
                    sec.classList.add("hidden");
                }
            });

            panelListTag[i].classList.add("bg-secondary");
            sections[i - 2].classList.remove("hidden");
            /* if user first click on ' تغییر جزئیات ' and then click on
               other li tag this section should be disappeared
            */
            changeInfoSection.classList.add("hidden");
        });
    }
}

/* when user click on 'تغییر جزئیات' that section should be 
   disappeared and change info section be displayed to user
*/
let showDetailsInfoSection = () => {
    sections[0].classList.add("hidden");
    changeInfoSection.classList.remove("hidden");
    returnBtnMobile.classList.remove("hidden");
};

/* when user click the arrow left button that section
   should be disappeared and section admin info be
   displayed to user
*/
let returnToUserInfoSection = () => {
    sections[0].classList.remove("hidden");
    changeInfoSection.classList.add("hidden");
};

/* when user click on 'خروج' button an alert should
   should be displayed to warn user that you are
   loging out from panel
*/
let exitFromPanel = () => {

    // using sweetalert2 for create a beautiful alert
    Swal.fire({
        title: 'خروج',
        text: 'آیا برای خارج شدن از پنل کاربری مطمئن هستید؟ ',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'بله',
        confirmButtonColor: '#66bb6a',
        cancelButtonColor: '#d33',
        cancelButtonText: 'خیر',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "../../index.html";
        }
    });
};


/* when user click on 'حذف حساب کاربری' button an alert
   should be displayed to warn user that you are deleting
   your account permanently 
*/
let deleteAccount = () => {

    // using sweetalert2 for create a beautiful alert
    Swal.fire({
        title: 'اخطار',
        text: 'آیا از حذف حساب کاربری خود مطمئن هستید؟ ',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'بله',
        confirmButtonColor: '#66bb6a',
        cancelButtonColor: '#d33',
        cancelButtonText: 'خیر',
        reverseButtons: true,
    }).then((result) => {

        if (result.isConfirmed) {
            Swal.fire({
                title: 'خروج',
                text: 'یک درخواست به ایمیل شما ارسال شده است،روی لینک مربوطه کلیک کنید تا فرایند حذف آغاز شود!',
                icon: 'success',
                confirmButtonText: 'باشه',
                confirmButtonColor: '#66bb6a'
            })
        }
    });
};

let formValidationFromUserInfo = () => {
    Swal.fire({
        title: 'هشدار',
        text: 'آیا از صحت اطلاعات مطمئن هستید؟ ',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'بله',
        confirmButtonColor: '#66bb6a',
        cancelButtonColor: '#d33',
        cancelButtonText: 'خیر',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            console.log('user clicked yes');
        } else {
            console.log('user clicked no');
        }
    })
};

hamburgerMenu.addEventListener("click", showPanelMobile);
closeArrowBtn.addEventListener("click", closePanelMobile);
showSpecialSection();
changeInfoBtn.addEventListener("click", showDetailsInfoSection);
changeInfoSection.children[0].addEventListener("click", returnToUserInfoSection);
returnBtnMobile.addEventListener("click", returnToUserInfoSection);
exitBtn.addEventListener("click", exitFromPanel);
exitBtnMobile.addEventListener("click", exitFromPanel);
deleteAccountBtn.addEventListener("click", deleteAccount);
changeInfoSection.querySelector("form").addEventListener("submit", formValidationFromUserInfo);