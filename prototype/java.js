fetch('https://countries-api-hsak.onrender.com/api/countries/')
.then(function(response){  return response.json()})

.then(function(data){console.log(data)

   let main = document.querySelector('#main')

   function displayCountries(list){
     main.innerHTML="";
    list.forEach(function(country){
    
       let div = document.createElement('div');
    div.className='div';
    div.addEventListener('click',function(){window.location.href = `country-details.html?name=${country.name}`;})
    let p =document.createElement('p')
    p.innerHTML=country.name;
    div.appendChild(p)
    let img = document.createElement('img');
    img.src=country.flag
    div.appendChild(img);
    main.appendChild(div);
    
   });
  
 }
     displayCountries(data);


   
let select = document.querySelector('#select')
select.addEventListener('change',function(){

let contienent = select.value;

if(contienent==="all"){
   displayCountries(data)
   return;

}else{
   let filtered = data.filter(country=>country.continent === contienent)
   displayCountries(filtered);

}
})

})

   

