const pages = document.querySelectorAll(".page");
const homePage = pages[0];
const aboutPage = pages[1];
const myskillsPage = pages[2];
const workPage = pages[3];
const contactPage = pages[4];

const options = Array.from(document.querySelectorAll(".option"));
const home = document.querySelector(".logo")
options.push(home)

selectOption()

function selectOption() {
    options.forEach(option => {
        option.addEventListener("click", () => {
            const onOption = document.getElementsByClassName("option on");
            if(onOption.length !== 0) onOption[0].classList.remove("on")

            if(option.classList.length == 1) {
                if(option.classList[0] == "logo") {
                    changePage(homePage);
                }
            }else {
                if(option.classList[1] == "about") {
                    changePage(aboutPage)

                    option.classList.add("on")
                }else if(option.classList[1] == "my-skills") {
                    changePage(myskillsPage)

                    option.classList.add("on")
                }else if(option.classList[1] == "work") {
                    changePage(workPage)

                    option.classList.add("on")
                }else if(option.classList[1] == "contact") {
                    changePage(contactPage)

                    option.classList.add("on")
                }
            }
        })
    })
}

function changePage(targetPage) {
    pages.forEach(page => {
        if(page.classList[page.classList.length -1] == "on") {
            page.classList.remove("on");

            targetPage.classList.add("on")
        }
    });
}