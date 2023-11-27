/* URL : 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'

- getTrendingNow()
  * URL : 'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'

- getTopRated()
  * URL : 'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  */
fetch(`https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213`)
  .then((response) => response.json())
  .then((json) => {
   image_display(json);
    
  })
  .catch((error) => {
    console.log("Not working", error);
});

let display = document.getElementById('myTable');
let row =display.insertRow(0)
image_display = (data) => {


  for (let i = 0; i < 20; i++) {
    let cell = row.insertCell(0);
    cell.innerHTML = `<img src="https://image.tmdb.org/t/p/w500${data.results[i].backdrop_path}" style="height: 190px;width:145px" class="image">`;
  }
};
setTimeout(()=>{let array_image = document.querySelectorAll('.image');
               let myFuncCalls = 10;
               previous=()=>{

                  myFuncCalls-=Number(10)
                 array_image.forEach((ele)=>{
                   ele.style.transform =`translateX(${myFuncCalls}%)`

                 })
                  }

               next=()=>{
                array_image.forEach((ele)=>{
                   ele.style.transform =` translateX(${myFuncCalls}%)`
                   })
                   myFuncCalls+=Number(10)

               }

               array_image.forEach((img) => {
                 console.log(img)
                 img.addEventListener("mouseover", () => {
                   img.style.transform = `scaleY(1.15) translateX(${myFuncCalls}%)`;

               }); 
               });
               array_image.forEach((img) => {
                 img.addEventListener("mouseout", () => {
                   img.style.transform = `scaleY(1) translateX(${myFuncCalls}%)`;
                   });
               });},1000)



// now let us focus on api images and displaying it https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
//img url example
//https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg



