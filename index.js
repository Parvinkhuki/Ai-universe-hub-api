
    const hendleData=async()=>{
        const Res=await fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        const datas= await Res.json();
        const data=datas.data;
       
        data.tools.slice(0,4).forEach(tool => {
            console.log(tool);
          //  id(tool)
            const divContainer=document.getElementById("card-container")
     
            const div=document.createElement("div")
      
            div.classList=" bg-base-100 shadow-xl"
            div.innerHTML=`
            <figure class="px-10 pt-10">
              <img src=${tool?.image?tool.image:"no Image Found"
              } />
            </figure>
            <div class="card-body text-2xl font-bold">
            <h2>Feature</h2>
            <div>



              <h2 class="card-title">${tool.name}</h2>
             
            </div>
          </div>`
          divContainer.appendChild(div)
        
        
          
        });
        }
// const features=features=>{
//   const id=features.features
//   id.forEach(feature => {
//     const div=document.getElementById()
//   });

// }
















hendleData()