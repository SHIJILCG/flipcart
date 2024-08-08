var minprice='MIN';
var maxprice='MAX';
var dataarry=[];
var filteredArray=[];
var change1=[];
var change2=[];
const originalMinOptions = document.getElementById('select-price-1').innerHTML;
const originalMaxOptions = document.getElementById('select-price').innerHTML;
function makeanarrayelement(data){
    for(let item of data){
        dataarry.push(item);
    }
    console.log(maxprice,minprice);
}
function fetchingdata(){
    const apiUrl = 'https://real-time-flipkart-api.p.rapidapi.com/products-by-category?category_id=tyy%2C4io&page=1&sort_by=popularity';
    const apiOptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd33c671b8fmsh8ee9c0f7f0cf101p1da575jsn2a124572b2e9',
            'x-rapidapi-host': 'real-time-flipkart-api.p.rapidapi.com'
        }
    };
    /*////////////////////////////////// */
    fetch(apiUrl, apiOptions)
    .then(response =>response.json())
    .then(
       (apiData)=>{
           
           makeanarrayelement(apiData.products);
           createpriducts(apiData.products);
       }
    )
    .catch(err =>{
        console.log('ERRPR:',err)
    })
 /*////////////////////////////////// */
 fetch('jsonsscript.json')
.then(response =>response.json())
.then(
   (data)=>{
      headerparts(data.headeritems);
      headerparts2(data.headeritems2);
      createbrandname(data.brandname);
      creatingsotingnames(data.sortingNames)
   }
)
.catch(err =>{
    console.log('ERRPR:',err)
})

}
function  headerparts(data){
     var item1= document.getElementById('flipcart-becomeSeller-butt-a');
     var item2= document.getElementById('flipcart-text-img');
     var item3= document.getElementById('input-1');
     var item4= document.getElementById('search-img-tag');
     var item5= document.getElementById('flipcart-login-butt-a');
     var item6= document.getElementById('flipcart-More-butt-text');
     var item7= document.getElementById('flipcart-More-butt-img');
     var item8= document.getElementById('flipcart-Cart-butt-img');
     var item9= document.getElementById('flipcart-Cart-butt-text');
     item1.innerText=data.loginSellername;
     item2.src=data.Flipcartimg;
     item3.placeholder = data.placeholdertext;
     item4.src=data.Sarchimgheader;
     item5.innerText=data.loginbuttname;
     item6.innerText=data.loginMorename;
     item7.src=data.Moreimg;
     item8.src=data.Cartimg;
     item9.innerText=data.Carttext;


}
function  headerparts2(data){
    const container=document.querySelector('.header-2-inner')
    container.innerHTML='';
     createlistdownbutt(data.listscrolldownbutt,container) ;
     createAbutt(data.abutt,container);
}
function createlistdownbutt(data,container){
    let output='';
    for(let item of data){
        output +=`
               <span class="listscrolldownbutt-item">
                        ${item.listscrolldownbuttText}
                        <img src="${item.listscrolldownbuttImg}" alt="${item.listscrolldownbuttText}">
                    </span>
        `;
    }
    container.insertAdjacentHTML('beforeend', output);
}
function  createAbutt(data,container){
    let output='';
    for(let item of data){
        output +=`
            <a  href="" id="AbuttText-id">${item.AbuttText}</a>
        `;
    }
    container.insertAdjacentHTML('beforeend', output);
}

function  createpriducts(data){
     const productContainer = document.querySelector('.productsshowHere');
  productContainer.innerHTML = ''
    let output='';
   for(let item of data){

         output +=`
           <div class="product-item">
                <div class="product-inner-item">
                      <div class="product-inner-item-condent">
                            <div class="product-inner-item-condent-inner">
                                 <a href="">

                                     <div class="product-left-side">
                                          <div class="product-img">
                                               <div class="product-img-inner">
                                                    <img src="${item.images[0]}">
                                               </div>
                                          </div>
                                     </div>
                                      <div class="product-right-side">
                                          <div class="product-details">
                                             <div class="product-details-title">${item.title}</div>
                                             <div class="product-rating-details">
                                                  <span id="rating-value">
                                                     <div class="rating-value-inner">
                                                       ${item.rating.average}
                                                       <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==">
                                                     </div>
                                                  </span>
                                                  <span id="rating-details">
                                                       <span>
                                                          <span>${item.rating.count} Rating</span>
                                                          <span id="and">&</span>
                                                          <span>${item.rating.reviewCount} Reviews</span>
                                                       </span>
                                                  </span>
                                             </div>
                                             <div class="product-main-details">
                                                 <ul id="highlights">
                                                    ${listcreating(item.highlights)}
                                                 </ul>
                                             </div>
                                          </div>
                                          <div class="product-buying-details">
                                             <div class="price-details">
                                                  <div class="price">
                                                     <div class="price-text">₹${item.price}</div>
                                                     <div class="old-price-text">₹${item.mrp}</div>
                                                      <div class="off-percentage"><span>${finddiscount(item.price,item.mrp)}</span></div>
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
   }
   productContainer.innerHTML = output;
}
function listcreating(data){
    let output='';
    for(let item of data){
       output +=`
         <li id="product-list-details">${item}</li>
       `;
    }
    return output;
}
function createbrandname(data){
    
    let output='';
    for(let item of data.brand1){
        output += `
          <div class="select-butt">
                 <div class="select-butt-inner">
                   <label">
                        <input type="checkbox" id="option-1" onchange="handleCheckboxChange('${item}',this)">
                        <div class="select-butt-inner-text">${item}</div>
                   </label>
              </div>
             </div>
        `;
    }
    
    document.querySelector('.brand-search-section-inner-1').innerHTML +=output;
    
    document.querySelector('.brand-search-section-inner-2').innerHTML +=`<span>${data.numberofitems} More</span>`;

}

function creatingsotingnames(data){
    let output='';
    for(let item of data.sorting){
        output +=`
           <div class="Sort-option" onclick="sortOptionClicked( event,'${item}')">${item}</div>
        `;
    }
    document.querySelector('.main-body-inner-right-side-header-inner-content-3').innerHTML +=output;
}



function filtering(event){
    filteredArray.length=0;
    const selectedvalue=event.target.value;
    const minSelect = document.getElementById('select-price-1');
    const maxSelect = document.getElementById('select-price');
    if(event.target.id === 'select-price-1'){
        maxSelect.innerHTML = originalMaxOptions;
        minprice=selectedvalue;
        Array.from(maxSelect.options).forEach(option =>{
           if(option.value !== 'MAX' &&  option.value <= minprice){
            
               option.remove();
           }
        }) 
           }
    else if(event.target.id === 'select-price'){
        minSelect.innerHTML = originalMinOptions;
        maxprice=selectedvalue;
        Array.from(minSelect.options).forEach(option =>{
            if(option.value !== 'MIN' &&  option.value >= maxprice){

                option.remove();
            }
            
         })
    }
  
    console.log(minprice,maxprice);
    filteraddding(minprice,maxprice);
    minmaxpricefiltering()
     
}

function minmaxpricefiltering(){
    if (!isNaN(minprice) && !isNaN(maxprice)) {
        filteredArray.push(...dataarry.filter(item => item.price >= minprice && item.price <= maxprice));
        createpriducts( filteredArray);
        
    }
    else if(!isNaN(maxprice)){
            filteredArray.push(...dataarry.filter(item => item.price <= maxprice));
            createpriducts( filteredArray);
            
    }
    else if(!isNaN(minprice)){
        filteredArray.push(...dataarry.filter(item => item.price >= minprice));
        createpriducts( filteredArray);
        
    }else{
        createpriducts(dataarry);
        
    }

}

function filteraddding(item1,item2){
    const filteringspace=document.getElementById('filtersshowingsection');
    filteringspace.innerHTML='';
    let output='';
    output +=`
          <div class="fltters">
                <div id="fitters-item">
                     <div id="crossxbutt" onclick="removefilter()">✕</div>
                     <div id="itters-item-value">₹${item1} - ₹${item2}</div>
                </div>
          </div>
          <div class="showmorefilters"></div>
    `;
    filteringspace.innerHTML = output;
    addfilterreomoveburr();
}
function filteraddding2(item1){
    const filteringspace=document.getElementById('filtersshowingsection');
    let output='';
    output +=`
          <div class="fltters">
                <div id="fitters-item">
                     <div id="crossxbutt" onclick="removefilter()">✕</div>
                     <div id="itters-item-value">${item1}</div>
                </div>
          </div>
          <div class="showmorefilters"></div>
    `;
    filteringspace.innerHTML += output;
    addfilterreomoveburr();
}
function clearallthefilters(){
    const filteringspace=document.getElementById('filtersshowingsection');
    const item1=document.getElementById('filter-adding-section-inner-id');
    const item2=document.getElementById('claearall');
    filteringspace.innerHTML='';
    item1.removeChild(item2);
}
function addfilterreomoveburr(){
    const filterclearallbutt=document.getElementById('claearall');
    filterclearallbutt.innerHTML ='';
    let output2='';
    output2 +=`
            <span>Clear all</span>
    `;
    filterclearallbutt.innerHTML += output2;
}

function sortOptionClicked(event,text){
     const sortingopion=document.getElementsByClassName('Sort-option');
     for (let option of sortingopion){
        option.classList.remove('active');
     }
     event.target.classList.add('active');
    
     sortOptionClickeddisplayed(text);
    
}
function sortOptionClickeddisplayed(text){
    if(text == 'Relevance'){
        createpriducts(dataarry);
    }
    else if(text == 'Popularity'){
        filteredArray.length=0;
        filteredArray=[...dataarry]
        filteredArray.sort((a,b)=>  b.rating.average -  a.rating.average);
        createpriducts(filteredArray);
    }
    else if(text == 'price--Low to High'){

        filteredArray.length=0;
        filteredArray=[...dataarry]
        filteredArray.sort((a,b)=>  a.price - b.price );
        createpriducts(filteredArray);
    }
    else if(text == 'price--High to Low'){
        filteredArray.length=0;
        filteredArray=[...dataarry]
        filteredArray.sort((a,b)=>  b.price - a.price  );
        createpriducts(filteredArray);
    }
    else{
        console.log("hiii18888")
    }
}
function finddiscount(a,b){
    return (((b-a)/b)*100).toFixed(2) + '%';
}
function removefilter(){
    let firstitem=document.getElementById('fitters-item');
     firstitem.remove();
     
}
function handleCheckboxChange(item,checkbox){
    filteredArray.length=0;
    if(checkbox.checked){
        console.log(item)
        for(let data of dataarry){
             if(data.brand === item){
               filteredArray.push(data);  
             }
        }
        createpriducts(filteredArray);
        filteraddding2(item);
    }
}
fetchingdata();