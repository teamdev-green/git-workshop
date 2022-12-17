const config = {
    main_page: document.getElementById("main_page"),//Home画面
    introduce_cat_page: document.getElementById("introduce_cat_page"),//猫紹介画面
    rate_plan_page: document.getElementById("rate_plan_page"),//料金プラン画面
    contact_page: document.getElementById("contact_page")//コンタクト画面
}



function ChangeToRatePlanPage(){

    let introHtml =
     `
     
 
     <div id="rate_plan_page d-flex align-items-center">
      <div class="text-center d-block mx-auto">
          <br>
          <br>
     <h1 class="price">料金プラン</h1>
     <table>
     
      <thead class="d-block mx-auto">
              <tr>
                  <td class="non"></td>
                  
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th>60分</th>
                  <td data-label="価格" class="priceRate">¥2,200</td>
              </tr>
              <tr>
                  <th>90分</th>
                  <td data-label="価格"class="priceRate">¥2,700</td>
              </tr>
              <tr>
                  <th>フリータイム</th>
                  <td data-label="価格"class="priceRate">¥3,800</td>
              </tr>
          </tbody>
     
     </table>   
     
      </div>
      <br>
      <h2 class="price">店舗情報</h2>
      <div>
      <table class="shop-info">
          
          <tbody>
          <tr>
          <th>住所</th>
          <td>
          東京都豊島区南池袋1-23-44444</td>
          </tr>
          <tr>
          <th>TEL</th>
          <td>03-1234-5678</td>
          </tr>
          <tr>
          <th>時間</th>
          <td>10:00～20:00</td>
          </tr>
          <tr>
          <th>定休日</th>
          <td>水曜日</td>
          </tr>
          <tr>
       
       </tr>
      </tbody>
     </table>
     
     </div>
     </div>
     </div>
     </div>
     `;
 
     let link = document.createElement('link');
         link.href = '/styles/price.css';
         link.rel = 'stylesheet';
         link.type = 'text/css';
         let h = document.getElementsByTagName('head')[0];
         h.appendChild(link);
 
 
     if (config.main_page.classList.contains("d-none") === false) config.main_page.classList.add("d-none");
     if (config.introduce_cat_page.classList.contains("d-none") === false) config.introduce_cat_page.classList.add("d-none");
     if (config.contact_page.classList.contains("d-none") === false) config.contact_page.classList.add("d-none");    
     document.getElementById("rate_plan_page").innerHTML = introHtml;
 }