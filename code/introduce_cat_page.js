
function ChangeToIntroduceCatPage(){
    let introHtml =`
        <div class="bg-white vh-100 d-flex justify-content-center">
            <div class="row p-4 col-10">
        `

    for (let i = 0; i < catList.length; i++){
        introHtml +=`
            <div class="col-3 mb-3 p-2">
                <div class="row flex-column align-items-center text-center">
                    <img class="cat-intro-img" src="${catList[i].url}">
                    <p class="m-0">
                        <strong>
                            <span class="text-danger">
                                ${getNewCatString(addNewIfLessThanThreeMonth(catList[i].registYear, catList[i].registMonth))}
                            </span>
                            <span class"Kosugi">
                                ${catList[i].name}
                            </span>
                        </strong>
                    </p>
                    <p class="m-0">${catList[i].sex}</p>
                    <p class="m-0">${catList[i].registYear}/${catList[i].registMonth}/${catList[i].registDay} 入店</p>
                </div>
            </div>
        `
    }

    introHtml += `
            </div>
        </div>
        `
    
    if (config.main_page.classList.contains("d-none") === false) config.main_page.classList.add("d-none");
    if (config.rate_plan_page.classList.contains("d-none") === false) config.rate_plan_page.classList.add("d-none");
    if (config.contact_page.classList.contains("d-none") === false) config.contact_page.classList.add("d-none");
    if (config.introduce_cat_page.classList.contains("d-none") === true){
        config.introduce_cat_page.classList.remove("d-none");
        config.introduce_cat_page.classList.add("d-block");
        document.getElementById("introduce_cat_page").innerHTML = introHtml;
    }

    if (navbarConfig.mainNav.classList.contains("active") === true) navbarConfig.mainNav.classList.remove("active");
    if (navbarConfig.priceNav.classList.contains("active") === true) navbarConfig.priceNav.classList.remove("active");
    if (navbarConfig.conntactNav.classList.contains("active") === true) navbarConfig.conntactNav.classList.remove("active");
    if (navbarConfig.introduceCatsNav.classList.contains("active") === false)navbarConfig.introduceCatsNav.classList.add("active");
}


function getNewCatString(newJudge){
    if(newJudge) return "new "
    else return ""
}









