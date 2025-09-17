
let from=document.querySelector("#from");
let to=document.querySelector("#to");
let img=document.querySelector(".img");
let img1=document.querySelector(".img1");
let conver=document.querySelector(".conver1");
let butt=document.querySelector("#butt");
let amount=document.querySelector("#amount");
const base_url="https://v6.exchangerate-api.com/v6/6c871ca496818f1c0eb68c7b/pair";


from.innerHTML="<option>US</option>";
to.innerHTML="<option>IN</option>";




Object.entries(countryList).forEach(([keys,values])=>
{



    from.innerHTML+=`<option value='${values}'  >${values}</option>`;
    to.innerHTML+=`<option value='${values}'>${values}</option>`;
   
});

function updateFlag()
{
    let selectedCountry=from.value;
    img.setAttribute("src",`https://flagsapi.com/${selectedCountry}/flat/64.png`);
    reverssetext();
    
}


function updateText(obj,value)
{
let selectedCountry=from.value;
 return Object.keys(obj).find(key => obj[key] === value);
}
function updateText1(obj,value)
{
let selectedCountry=to.value;
 return Object.keys(obj).find(key => obj[key] === value);
}


function updateFlag1()
{
    let selectedCountry=to.value;
   
    
    img1.setAttribute("src",`https://flagsapi.com/${selectedCountry}/flat/64.png`);
    reverssetext();
    }


    async function updateRate()
    {
        
    c1=updateText(countryList,from.value);
    c2=updateText1(countryList,to.value);
    const URL=`${base_url}/${c1}/${c2}`;
   let response=await fetch(URL);
   let data=await response.json();
   let mnt=data.conversion_rate;

    
    if(amount.value==null || amount.value<=0)
    {
        
        conver.innerText="please enter valid input";
    }
   else if(amount.value>0){

    conver.innerText=`${amount.value}${c1}   IS EQUAL TO   ${amount.value *mnt}${c2}`;
   }
   else{
    conver.innerText="please enter valid input";
    
   }
   
   
    
    }

    function reverssetext()
    {
        conver.innerText=" ";
    }
   
   
// updateFlag();
// updateFlag1();
function update()
{
    updateFlag();
    updateFlag1();
    
}




from.addEventListener("change",update);
to.addEventListener("change",update);
butt.addEventListener("click",updateRate)