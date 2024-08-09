var minprice = "MIN";
var maxprice = "MAX";
var dataarry = [];
var filteredArray = [];
const originalMinOptions = Array.from(document.getElementById("select-price-1").options);
const originalMaxOptions = Array.from(document.getElementById("select-price").options);
const minSelect = document.getElementById("select-price-1");
const maxSelect = document.getElementById("select-price");

function makeanarrayelement(data) {
  for (let item of data) {
    dataarry.push(item);
  }
  console.log(maxprice, minprice);
  console.log(dataarry.length)
  let item4=document.getElementById('numberofresults');
  item4.innerHTML +=`Showing 1 – 24 of ${dataarry.length} results for "Mobiles"`;
}
function fetchingdata() {

  /*////////////////////////////////// */
  fetch('allproducts.json')
    .then((response) => response.json())
    .then((apiData) => {
      makeanarrayelement(apiData);
      sortOptionClickeddisplayed('Relevance');
    })
    .catch((err) => {
      console.log("ERRPR:", err);
    });
  /*////////////////////////////////// */
  fetch("jsonsscript.json")
    .then((response) => response.json())
    .then((data) => {
      headerparts(data.headeritems);
      headerparts2(data.headeritems2);
      createbrandname(data.brandname);
      creatingsotingnames(data.sortingNames);
    })
    .catch((err) => {
      console.log("ERRPR:", err);
    });
}
function headerparts(data) {
  var item1 = document.getElementById("flipcart-becomeSeller-butt-a");
  var item2 = document.getElementById("flipcart-text-img");
  var item3 = document.getElementById("input-1");
  var item4 = document.getElementById("search-img-tag");
  var item5 = document.getElementById("flipcart-login-butt-a");
  var item6 = document.getElementById("flipcart-More-butt-text");
  var item7 = document.getElementById("flipcart-More-butt-img");
  var item8 = document.getElementById("flipcart-Cart-butt-img");
  var item9 = document.getElementById("flipcart-Cart-butt-text");
  item1.innerText = data.loginSellername;
  item2.src = data.Flipcartimg;
  item3.placeholder = data.placeholdertext;
  item4.src = data.Sarchimgheader;
  item5.innerText = data.loginbuttname;
  item6.innerText = data.loginMorename;
  item7.src = data.Moreimg;
  item8.src = data.Cartimg;
  item9.innerText = data.Carttext;
}
function headerparts2(data) {
  const container = document.querySelector(".header-2-inner");
  container.innerHTML = "";
  createlistdownbutt(data.listscrolldownbutt, container);
  createAbutt(data.abutt, container);
}
function createlistdownbutt(data, container) {
  let output = "";
  for (let item of data) {
    output += `
               <span class="listscrolldownbutt-item">
                        ${item.listscrolldownbuttText}
                        <img src="${item.listscrolldownbuttImg}" alt="${item.listscrolldownbuttText}">
                    </span>
        `;
  }
  container.insertAdjacentHTML("beforeend", output);
}
function createAbutt(data, container) {
  let output = "";
  for (let item of data) {
    output += `
            <a  href="" id="AbuttText-id">${item.AbuttText}</a>
        `;
  }
  container.insertAdjacentHTML("beforeend", output);
}

function createpriducts(data) {
  const productContainer = document.querySelector(".productsshowHere");
  productContainer.innerHTML = "";
  let output = "";
  for (let item of data) {
    output = `
           <div class="product-item">
                <div class="product-inner-item">
                      <div class="product-inner-item-condent">
                            <div class="product-inner-item-condent-inner">
                                 <a href="">

                                     <div class="product-left-side">
                                          <div class="product-img">
                                               <div class="product-img-inner">
                                                    <img src="${
                                                      item.images[0]
                                                    }"> 
                                               </div>
                                          </div>
                                     </div>
                                      <div class="product-right-side">
                                          <div class="product-details">
                                             <div class="product-details-title">${
                                               item.title
                                             }</div>
                                             <div class="product-rating-details">
                                                  <span id="rating-value">
                                                     <div class="rating-value-inner">
                                                       ${item.rating.average}
                                                       <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==">
                                                     </div>
                                                  </span>
                                                  <span id="rating-details">
                                                       <span>
                                                          <span>${
                                                            item.rating.count
                                                          } Rating</span>
                                                          <span id="and">&</span>
                                                          <span>${
                                                            item.rating
                                                              .reviewCount
                                                          } Reviews</span>
                                                       </span>
                                                  </span>
                                             </div>
                                             <div class="product-main-details">
                                                 <ul id="highlights">
                                                    ${listcreating(
                                                      item.highlights
                                                    )}
                                                 </ul>
                                             </div>
                                          </div>
                                          <div class="product-buying-details">
                                             <div class="price-details">
                                                  <div class="price">
                                                     <div class="price-text">₹${
                                                       item.price
                                                     }</div>
                                                     <div class="old-price-text">₹${
                                                       item.mrp
                                                     }</div>
                                                      <div class="off-percentage"><span>${finddiscount(
                                                        item.price,
                                                        item.mrp
                                                      )}</span></div>
                                                  </div>
                                                  <div class="free-delivery">
                                                    <div>
                                                        <div class="free-delivery-text">Free delivery</div>
                                                    </div>
                                                </div>
                                             </div>
                                             <div class="flipcart-assure">
                                             <img src="img/fa_62673a.png" alt="">
                                          </div>
                                        </div>
                                      </div>
                                </a>
                            </div>
                      </div>
                 </div>
           </div>

         `;

         productContainer.insertAdjacentHTML('afterbegin', output);
  }
}


function listcreating(data) {
  let output = "";
  for (let item of data) {
    output += `
         <li id="product-list-details">${item}</li>
       `;
  }
  return output;
}


function createbrandname(data) {
  let output = "";
  for (let item of data.brand1) {
    output += `
          <div class="select-butt">
                 <div class="select-butt-inner">
                   <label">
                        <input type="checkbox" id="option-1" onchange="handleCheckboxChange('${item}',this,event)">
                        <div class="select-butt-inner-text">${item}</div>
                   </label>
              </div>
             </div>
        `;
  }

  document.querySelector(".brand-search-section-inner-1").innerHTML += output;

  document.querySelector(
    ".brand-search-section-inner-2"
  ).innerHTML += `<span>${findnumberofbrand(data.brand1)}</span>`;
}


function creatingsotingnames(data) {
  let output = "";
  for (let item of data.sorting) {
    output += `
           <div class="Sort-option" onclick="sortOptionClicked( event,'${item}')">${item}</div>
        `;
  }
  document.querySelector(
    ".main-body-inner-right-side-header-inner-content-3"
  ).innerHTML += output;
}



function filtering(event) {
  
  filteredArray.length = 0;
  const selectedvalue = event.target.value;
  const currentselectedmin=minSelect.value;
  const currentselectedmax=maxSelect.value;
  resetoption(minSelect,originalMinOptions,currentselectedmin);
  resetoption(maxSelect,originalMaxOptions,currentselectedmax);
  if (event.target.id === "select-price-1") {
    minprice = selectedvalue;
    Array.from(maxSelect.options).forEach((option) => {
        
      if (option.value !== "MAX" && option.value <= minprice && minprice !== "MIN") {
          option.remove();
      }
    });
  } else if (event.target.id === "select-price") {
    maxprice = selectedvalue;
    Array.from(minSelect.options).forEach((option) => {

      if (option.value !== "MIN" && option.value >= maxprice && maxprice !== "MAX") {
        option.remove();
      }
    });
  }

  console.log(minprice, maxprice);
  filteraddding(minprice, maxprice);
  minmaxpricefiltering();
}


function resetoption(a,b,c){   /**reatingminmax and selected*/
   a.innerHTML='';
  b.forEach((option)=>{
    const newoption= option.cloneNode(true)
     a.add(newoption);
     if(newoption.value === c){
       newoption.selected=true;
     }
  })
}




function minmaxpricefiltering() {
  if (!isNaN(minprice) && !isNaN(maxprice)) {
    filteredArray.push(
      ...dataarry.filter(
        (item) => item.price >= minprice && item.price <= maxprice
      )
    );
    createpriducts(filteredArray);
  } else if (!isNaN(maxprice)) {
    filteredArray.push(...dataarry.filter((item) => item.price <= maxprice));
    createpriducts(filteredArray);
  } else if (!isNaN(minprice)) {
    filteredArray.push(...dataarry.filter((item) => item.price >= minprice));
    createpriducts(filteredArray);
  } else {
    createpriducts(dataarry);
  }
}



function filteraddding(item1, item2) {
  const filteringspace = document.getElementById("Filters-id");
  filteringspace.innerHTML = "";
  let output = "";
  output += `
                <div id="fitters-item">
                     <div id="crossxbutt" onclick="removefilter()">✕</div>
                     <div id="itters-item-value">₹${item1} - ₹${item2}</div>
                </div>
    `;
  filteringspace.innerHTML = output;
  addfilterreomovebutt();
}



function filteraddding2(item1) {
  const filteringspace = document.getElementById("Filters-id");
  let output = "";
  output += `
                <div id="fitters-item">
                     <div id="crossxbutt" onclick="removefilter()">✕</div>
                     <div id="itters-item-value">${item1}</div>
                </div>
    `;
  filteringspace.innerHTML += output;
  addfilterreomovebutt();
}



function clearallthefilters() {
  const filteringspace = document.getElementById("Filters-id");
  const item2 = document.getElementById("claearall");
  const item3 = document.getElementById("clearallthing-child");
  filteringspace.innerHTML = "";
  item2.removeChild(item3);
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');  
  checkboxes.forEach(checkboxe =>{
      if (checkboxe.checked){
          checkboxe.checked=false;
      }
  });
  filteredArray.length=0;
  createpriducts(dataarry);
}



function addfilterreomovebutt() {
  const filterclearallbutt = document.getElementById("claearall");
  filterclearallbutt.innerHTML = `<span id="clearallthing-child">Clear all</span>`;
}



function sortOptionClicked(event, text) {
  const sortingopion = document.getElementsByClassName("Sort-option");
  for (let option of sortingopion) {
    option.classList.remove("active");
  }
  event.target.classList.add("active");

  sortOptionClickeddisplayed(text);
}



function sortOptionClickeddisplayed(text) {
  if (text == "Relevance") {

    createpriducts(dataarry);

  } else if (text == "Popularity") {

      if(filteredArray.length == 0){
          filteredArray.length = 0;
          filteredArray = [...dataarry];
          filteredArray.sort((a, b) => a.rating.average - b.rating.average);
          createpriducts(filteredArray);
      }
    filteredArray.sort((a, b) => a.rating.average - b.rating.average);
    createpriducts(filteredArray);

  } else if (text == "price--Low to High") {

    if(filteredArray.length == 0){
      filteredArray.length = 0;
      filteredArray = [...dataarry];
      filteredArray.sort((a, b) => b.price - a.price);
      createpriducts(filteredArray);
  }
    filteredArray.sort((a, b) => b.price - a.price);
    createpriducts(filteredArray);

  } else if (text == "price--High to Low") {

    if(filteredArray.length == 0){
      filteredArray.length = 0;
      filteredArray = [...dataarry];
      filteredArray.sort((a, b) => a.price - b.price);
      createpriducts(filteredArray);

  }
    filteredArray.sort((a, b) => a.price - b.price);
    createpriducts(filteredArray);

  } else {

    if(filteredArray.length == 0){
      filteredArray.length = 0;
      filteredArray = [...dataarry];
      filteredArray.sort((a, b) =>  new Date(b.newLaunchDate) - new Date(a.newLaunchDate));
      createpriducts(filteredArray);
    }
    filteredArray.sort((a, b) =>  new Date(b.newLaunchDate) - new Date(a.newLaunchDate)); 
    createpriducts(filteredArray)
         
  }
}



function finddiscount(a, b) {
  return (((b - a) / b) * 100).toFixed(2) + "%";
}



function removefilter() {
  let firstitem = document.getElementById("fitters-item");
  let collection=document.querySelectorAll('#fitters-item');
  firstitem.remove();
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');  
  checkboxes.forEach(checkboxe =>{
      if (checkboxe.checked){       /*last code change */
          
      }
  });
  if(collection.length == 1){
      clearallthefilters();
  }

}



function handleCheckboxChange(item, checkbox, event) {
  filteredArray.length = 0;
  if (checkbox.checked) {
    console.log(item);
    for (let data of dataarry) {
      if (data.brand === item) {
        filteredArray.push(data);
      }
    }
    createpriducts(filteredArray);
    filteraddding2(item);
  } else {
    removeunckeckedfromfilters(item, event);
  }
}



function findnumberofbrand(data) {
  let value = data.length;
  let result = value - 6;
  if (result === 0) {
    return "";
  } else {
    return result + "More";
  }
}


fetchingdata();
