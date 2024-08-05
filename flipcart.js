fetch('jsonsscript.json')
.then(response =>response.json())
.then(
   (data)=>{
      headerparts(data.headeritems);
      headerparts2(data.headeritems2);
   }
)
.catch(err =>{
    console.log('ERRPR:',err)
})
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
                 <img src="${item.listscrolldownbuttImg}" alt="">
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