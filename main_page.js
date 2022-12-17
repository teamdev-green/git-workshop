function changeToMainPage(){

    createMainPage(config.main_page);

    let catcafe_news = document.getElementById("catcafe_news");
    createCatcafeNews(catcafe_news);


    if (config.introduce_cat_page.classList.contains("d-none") === false) config.introduce_cat_page.classList.add("d-none");
    if (config.rate_plan_page.classList.contains("d-none") === false) config.rate_plan_page.classList.add("d-none");
    if (config.contact_page.classList.contains("d-none") === false) config.contact_page.classList.add("d-none");    
    if (config.main_page.classList.contains("d-none") === true){
        config.main_page.classList.remove("d-none");
        config.main_page.classList.add("d-block");
    }
    
    if (navbarConfig.introduceCatsNav.classList.contains("active") === true) navbarConfig.introduceCatsNav.classList.remove("active");
    if (navbarConfig.priceNav.classList.contains("active") === true) navbarConfig.priceNav.classList.remove("active");
    if (navbarConfig.conntactNav.classList.contains("active") === true) navbarConfig.conntactNav.classList.remove("active");
    if (navbarConfig.mainNav.classList.contains("active") === false)navbarConfig.mainNav.classList.add("active");
    
}

function createMainPage(container){
    container.innerHTML = ``
    container.innerHTML +=`
        <section>
            <div class="slider">
                <div class="slider__content">
                    <img src="images/cat_slider_image_1.jpg" class="slider_image" alt="slider_image1">
                </div>
                <div class="slider__content">
                    <img src="images/cat_slider_image_2.jpg" class="slider_image" alt="slider_image1">
                </div>
                <div class="slider__content">
                    <img src="images/cat_slider_image_3.jpg" class="slider_image" alt="slider_image1">
                </div>
                <div class="slider__content">
                    <img src="images/cat_slider_image_4.jpg" class="slider_image" alt="slider_image1">
                </div>
                <div class="slider__content">
                    <img src="images/cat_slider_image_5.jpg" class="slider_image" alt="slider_image1">
                </div>
            </div>
        </section>
        <section class="container-fluid">
            <div class="d-flex justify-content-center align-items-center py-5 pb-3">
                <h1 class="Kosugi">Welcom to Cat Cafe Recursion</h1>
            </div>
            <div class="row">
            <div class="col-12 col-lg-6 h-100">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title Kosugi"> Concept </div>
                            <div class="card-content-wrapper justify-content-around align-items-center">
                                <p class="card-content Kosugi"> 
                                    一人、カップル、友達同士、ご家族など
                                    様々な方が楽しめる猫カフェです。
                                    猫ちゃんに癒されて、ゆったりとしたひとときを、
                                    お過ごしください。
                                </p>
                                <img class="card-photo" src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 h-100">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title Kosugi"> News </div>
                            <div class="card-content-wrapper justify-content-around align-items-center">
                                <div class="m-3 p-3 container border border-light">
                                    <div id="catcafe_news" class="overflow-scroll">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    `
}

function addNewIfLessThanThreeMonth(registYear, registMonth){
    let today = new Date();
    let beforeThreeMonth = today.setMonth(today.getMonth() - 3);
    let registerDay = new Date(registYear, registMonth);

    if (beforeThreeMonth.valueOf() <= registerDay.valueOf()) return true;
    else return false;
}

function createCatcafeNews(container){
    container.innerHTML=``
    for(let i = 0; i < catList.length; i++){
        if(addNewIfLessThanThreeMonth(catList[i].registYear, catList[i].registMonth)){
            container.innerHTML +=`
                <div class="d-flex justify-content-between">
                <p class="Kosugi">${catList[i].registYear}-${catList[i].registMonth}-${catList[i].registDay} </p>
                <p class="Kosugi">${catList[i].name} ${getSexString(catList[i].sex)}が暮らし始めました。</p>
                </div>
            `
        }
    }
    return container;
    
}

function getSexString(catSex){ 
    if(catSex === "男の子")return "くん"
    else return "ちゃん"

}

changeToMainPage();