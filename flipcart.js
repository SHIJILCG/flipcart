var minprice;
var maxprice;
var dataarry=[];
var filteredArray=[];
function makeanarrayelement(data){
    for(let item of data){
        dataarry.push(item);
    }
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
           createpriducts(apiData.products);
           makeanarrayelement(apiData.products);
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
                                                      <div class="off-percentage"><span>17% off</span></div>
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
   document.querySelector('.main-body-inner-right-side').innerHTML +=output;
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
                   <label for="">
                        <input type="checkbox" readonly>
                        <div class="squar-butt"></div>
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
           <div class="Sort-option">${item}</div>
        `;
    }
    document.querySelector('.main-body-inner-right-side-header-inner-content-3').innerHTML +=output;
}



function filtering(event){
    minprice=0;
    minprice=parseFloat(event.target.value);
    minmaxpricefiltering()
}
function filtering2(event){
    maxprice=0;
    maxprice=parseFloat(event.target.value); 
    minmaxpricefiltering()  
}
function minmaxpricefiltering(){
    if (!isNaN(minprice) && !isNaN(maxprice)) {
        filteredArray.length=0;
        filteredArray.push(...dataarry.filter(item => item.price >= minprice && item.price <= maxprice));
        for(let item of filteredArray){
            console.log(item)
        }
    }
}





fetchingdata();