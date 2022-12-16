const config = {
    main_page: document.getElementById("main_page"),//Home画面
    introduce_cat_page: document.getElementById("introduce_cat_page"),//猫紹介画面
    rate_plan_page: document.getElementById("rate_plan_page"),//料金プラン画面
    contact_page: document.getElementById("contact_page")//コンタクト画面
}

const catList = [
    {"id":"2d8","name":"Spencer","sex":"男の子","url":"https://cdn2.thecatapi.com/images/2d8.jpg","width":3264,"height":2448, "registYear":2022, "registMonth":12, "registDay":1},
    {"id":"a5r","name":"Spike","sex":"女の子","url":"https://cdn2.thecatapi.com/images/a5r.jpg","width":612,"height":816, "registYear":2020, "registMonth":4, "registDay":1},
    {"id":"b3i","name":"Stuart","sex":"男の子","url":"https://cdn2.thecatapi.com/images/b3i.jpg","width":500,"height":408, "registYear":2021, "registMonth":6, "registDay":1},
    {"id":"bil","name":"Tank","sex":"女の子","url":"https://cdn2.thecatapi.com/images/bil.jpg","width":500,"height":334, "registYear":2022, "registMonth":3, "registDay":1},
    {"id":"blj","name":"Tanner","sex":"男の子","url":"https://cdn2.thecatapi.com/images/blj.jpg","width":2736,"height":3648, "registYear":2021, "registMonth":2, "registDay":1},
    {"id":"col","name":"Taz","sex":"男の子","url":"https://cdn2.thecatapi.com/images/col.jpg","width":720,"height":521, "registYear":2019, "registMonth":1, "registDay":1},
    {"id":"ef7","name":"Teddy","sex":"男の子","url":"https://cdn2.thecatapi.com/images/ef7.jpg","width":500,"height":333, "registYear":2020, "registMonth":3, "registDay":1},
    {"id":"1tm","name":'Teddy-bear',"sex":"男の子","url":"https://cdn2.thecatapi.com/images/1tm.jpg","width":440,"height":447, "registYear":2022, "registMonth":4, "registDay":1},
    {"id":"2kt","name":"Tex","sex":"男の子","url":"https://cdn2.thecatapi.com/images/2kt.jpg","width":500,"height":332, "registYear":2021, "registMonth":5, "registDay":1},
    {"id":"MTgxMzIyMg","name":"Thor","sex":"女の子","url":"https://cdn2.thecatapi.com/images/MTgxMzIyMg.jpg","width":679,"height":1024, "registYear":2021, "registMonth":3, "registDay":1},
    {"id":"8pv","name":"Thumper","sex":"男の子","url":"https://cdn2.thecatapi.com/images/8pv.jpg","width":1600,"height":1200, "registYear":2022, "registMonth":10, "registDay":1},
    {"id":"auk","name":"Thunder","sex":"女の子","url":"https://cdn2.thecatapi.com/images/auk.jpg","width":1280,"height":961, "registYear":2021, "registMonth":12, "registDay":1},
    {"id":"aur","name":"Timmy","sex":"男の子","url":"https://cdn2.thecatapi.com/images/aur.jpg","width":333,"height":500, "registYear":2022, "registMonth":12, "registDay":1},
    {"id":"cek","name":"Tinker","sex":"男の子","url":"https://cdn2.thecatapi.com/images/cek.png","width":765,"height":1024, "registYear":2022, "registMonth":2, "registDay":1},
    {"id":"e7q","name":"Tommy-boy","sex":"男の子","url":"https://cdn2.thecatapi.com/images/e7q.jpg","width":500,"height":461, "registYear":2022, "registMonth":3, "registDay":1},
    {"id":"MTk0NTk5Nw","name":"Tinker-bell","sex":"男の子","url":"https://cdn2.thecatapi.com/images/MTk0NTk5Nw.jpg","width":640,"height":853, "registYear":2019, "registMonth":4, "registDay":1},
    {"id":"KJF8fB_20","name":"Tinky","sex":"女の子","url":"https://cdn2.thecatapi.com/images/KJF8fB_20.jpg","width":820,"height":1024, "registYear":2021, "registMonth":4, "registDay":1},
    {"id":"16g","name":"Tiny","sex":"女の子","url":"https://cdn2.thecatapi.com/images/16g.jpg","width":700,"height":228, "registYear":2020, "registMonth":10, "registDay":``},
    {"id":"1de","name":"Tipper","sex":"男の子","url":"https://cdn2.thecatapi.com/images/1de.jpg","width":640,"height":427, "registYear":2021, "registMonth":10, "registDay":1},
    {"id":"a5b","name":"Tommy","sex":"男の子","url":"https://cdn2.thecatapi.com/images/a5b.jpg","width":625,"height":873, "registYear":2020, "registMonth":9, "registDay":1}
]

function ChangeToIntroduceCatPage(){
    let introHtml =`
        <div class="bg-white d-flex justify-content-center">
            <div class="row p-4 col-10">
        `

    for (let i = 0; i < catList.length; i++){
        introHtml +=`
            <div class="col-3 p-1">
                <div class="row flex-column align-items-center text-center">
                    <img class="cat-intro-img" src="${catList[i].url}">
                    <h1 class="my-4"><strong><span class="text-danger">${addNewIfLessThanThreeMonth(catList[i].registYear, catList[i].registMonth)}</span>${catList[i].name}</strong></h1>
                    <h2 class="my-2">${catList[i].sex}</h2>
                    <h2>${catList[i].registYear}/${catList[i].registMonth}/${catList[i].registDay} 入店</h2>
                </div>
            </div>
        `
    }

    introHtml += `
            </div>
        </div>
        `

        
    function addNewIfLessThanThreeMonth(registYear, registMonth){
        let today = new Date();
        let beforeThreeMonth = today.setMonth(today.getMonth() - 3);
        let registerDay = new Date(registYear, registMonth);

        if (beforeThreeMonth.valueOf() <= registerDay.valueOf()) return "new ";
        else return "";
    }
    

    if (config.main_page.classList.contains("d-none") === false) config.main_page.classList.add("d-none");
    if (config.rate_plan_page.classList.contains("d-none") === false) config.rate_plan_page.classList.add("d-none");
    if (config.contact_page.classList.contains("d-none") === false) config.contact_page.classList.add("d-none");    
    document.getElementById("introduce_cat_page").innerHTML = introHtml;
}









