fetch('https://countries-api-hsak.onrender.com/api/countries/')
.then(function(response){  return response.json()})
.then(function(data){console.log(data)


let content= document.querySelector('#content');

let select = document.createElement('select');
select.id='select'
for(let i =0;i<data.length;i++){
let options = document .createElement('option');
options.value=data[i].name;
options.textContent=data[i].name;
select.appendChild(options);


}

content.appendChild(select)

})









let select = document.querySelector('#select');
    select.addEventListener('change',function(){
    let contents=select.value});}












<div id="content">
  <select name="countries" id="select">
    <option value="option1"  id="option1">South America</option>
    <option value="option2" id="option2">Europe</option>
    <option value="option3" id="option3">Africa</option>
    <option value="option4" id="option4">Assia</option>
    <option value="option5" id="option5">Oceania</option>
    <option value="option6" id="option6">North America</option>
</select>



