const sideBar = document.querySelector(".side-bar");
const toggle = sideBar.querySelector(".toggle");
const sideBarPhone = document.querySelector(".side-bar-phone")
const togglePhone = sideBarPhone.querySelector(".toggle")
const options = document.querySelectorAll(".menu .nav-link");
const pages = document.querySelectorAll(".page");

toggle.addEventListener("click", () => {
    sideBar.classList.toggle("close");
    sideBarPhone.classList.toggle("close");
})

togglePhone.addEventListener("click", () => {
    sideBar.classList.toggle("close");
    sideBarPhone.classList.toggle("close");
})

changePage()

function changePage() {
    options.forEach(option => {
        option.addEventListener("click", () => {
            pages.forEach(page => {
                const optionTarget = option.querySelector(".nav-text").innerHTML.toLowerCase().replace(/ /g, "-");
                const pageTarget = page.classList[1]

                page.classList.remove("on");

                if(optionTarget == pageTarget) {
                    page.classList.add("on")
                    if (!sideBar.classList.contains("close")) {
                        sideBar.classList.toggle("close");
                        sideBarPhone.classList.toggle("close");
                    }
                }
            })
        })
    })
}