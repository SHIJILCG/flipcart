
// Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/todos/1'),
//     fetch('https://jsonplaceholder.typicode.com/todos/1'),
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
// ])
//         .then((data)=>{
//            return data.json();
//         })
//         .then((data)=>{
//             console.log(data)
//         });
// console.log('started');
// let a,b,result;
// try{
//     console.log('on try');
//     a=getval();
//     const b=getval2();
//     result =proccessvalue(a,b);

// }catch(e){
//     result=0;
//    console.log("my error",e)
// }
// finally{
//     console.log('this code anyway');
// }

// function getval(){
//     return 12;
   
// }

// function getval2(){
//     console.log('inside getval2');
//     throw 'my error';
//     return 22;
// }
// function proccessvalue(a, b){
//     return a + b;
// }
// console.log(result);
// console.log('ended');
// fetch('jsonsscript.json')
//    .then(response => response.json())
//    .then(data => {
//       fetchedData(data);
//    })
//    .catch(error => console.error('Error fetching the JSON:', error));

// function fetchedData(value) {
//     for(let item of value){
//         output += `
//            <div class="products">
//              <img src="${item.image}" alt="${item.image}">
//              <p class="title">${item.title}</p>
//              <p class="description">${item.description}</p>
//              <p class="price">
//                   <span>${item.price}</span>
//                   <span>&euro;</span>
//               </p>
//             </div>
//         `;
//     }
// } 
// fetch('jsonsscript.json')
//    .then(response => response.json())
//    .then(data => {
//       fetchedData(data);
//    })
//    .catch(error => console.error('Error fetching the JSON:', error));

// function fetchedData(value) {
//     let output = ''; // Initialize the output variable
//     for (let item of value) {
//         output += `
//            <div class="products-2">
//              <img src="${item.imge}" alt="${item.title}">
//              <p class="title">${item.title}</p>
//              <p class="description">${item.description}</p>
//              <p class="price">
//                   <span>${item.price}</span>
//                   <span>&euro;</span>
//               </p>
//             </div>
//         `;
//     }
//     document.querySelector(".products").innerHTML = output;
// }
// fetch('jsonsscript.json')
//    .then(response => {
//        if (!response.ok) {
//            throw new Error('Network response was not ok ' + response.statusText);
//        }
//        return response.json();
//    })
//    .then(data => {
//       console.log('Data fetched successfully:', data);
//       fetchedData(data);
//    })
//    .catch(error => console.error('Error fetching the JSON:', error));

// function fetchedData(value) {
//     let output = ''; // Initialize the output variable
//     for (let item of value) {
//         output += `
//            <div class="products">
//              <img src="${item.image}" alt="${item.title}">
//              <p class="title">${item.title}</p>
//              <p class="description">${item.description}</p>
//              <p class="price">
//                   <span>${item.price}</span>
//                   <span>&euro;</span>
//               </p>
//             </div>
//         `;
//     }
//     console.log('Generated HTML:', output); // Log the generated HTML
//     const valueElement = document.querySelector(".products");
//     if (valueElement) {
//         valueElement.innerHTML = output; // Set the innerHTML here
//     } else {
//         console.error('Element with class "value" not found in the DOM.');
//     }
// }

// }
fetch('jsonsscript.json')
   .then( response =>{
     if(!response.ok){
         throw new Error('Network response was not ok');
     }
     return response.json();
   })
   .then(
      data=>{
          createproducts(data.product);
      }
   )
   .catch(error =>{
     console.log('There was a problem with the fetch operation:', error)
   })
function createproducts(values){
    let output='';
    for(let item of values){
        output +=`
           <div class="products">
              <div class="product-inner">
                 <div class="product-img">
                     <div class="product-img-inner">
                          <img src="${item.imge}">
                     </div>
                  </div>
                 <div class="product-title">
                    <span>${item.title}</span>
                 </div>
                 <div class="product-description">
                    <p>${item.description}</p>
                 </div>
                 <div class="product-price">
                    <span>${item.price}<span>
                 </div>
              </div>
           </div>

        `;
    }
    document.querySelector(".main-body-inner").innerHTML=output;
}