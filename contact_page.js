const config = {
    main_page: document.getElementById("main_page"),//Home画面
    introduce_cat_page: document.getElementById("introduce_cat_page"),//猫紹介画面
    rate_plan_page: document.getElementById("rate_plan_page"),//料金プラン画面
    contact_page: document.getElementById("contact_page")//コンタクト画面
}

function ChangeToContactPage(){
    

    let introHtml =
    `
    <div class="Form">
        <div class="Form-Item">
          <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>お名前</p>
          <input type="text" class="Form-Item-Input">
        </div>
        <div class="Form-Item">
          <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>電話番号</p>
          <input type="text" class="Form-Item-Input">
        </div>
        <div class="Form-Item">
          <p class="Form-Item-Label"><span class="Form-Item-Label-Required">必須</span>メールアドレス</p>
          <input type="email" class="Form-Item-Input">
        </div>
        <div class="Form-Item">
          <p class="Form-Item-Label isMsg"><span class="Form-Item-Label-Required">必須</span>お問い合わせ内容</p>
          <textarea class="Form-Item-Textarea"></textarea>
        </div>
        <input type="submit" class="Form-Btn" value="送信する">
      </div>
    
    `;


    if (config.main_page.classList.contains("d-none") === false) config.main_page.classList.add("d-none");
    if (config.introduce_cat_page.classList.contains("d-none") === false) config.introduce_cat_page.classList.add("d-none");
    if (config.rate_plan_page.classList.contains("d-none") === false) config.rate_plan_page.classList.add("d-none");    
    document.getElementById("contact_page").innerHTML = introHtml;
}