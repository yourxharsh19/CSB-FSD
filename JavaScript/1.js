// console.log("Hello");
// console.log("a="+a);
// let a=5;

// function test(){
//      return "test";
//       }
//       const data=test();
//       console.log(data);

// function as an expression

// const test=function test(name){
//      return name="test";
//       }
//       const data=test("abc");
//       console.log(data);

// Arrow function

// const test=(name)=>{
//      return name="kkkk";
//       }
//       const data=test("abc");
//       console.log(data);

//      const test=name=> name="kkkk";
//            console.log(test());

// const test=()=> "kkkk";
//       console.log(test());

// setTimeout(()=>{
//       console.log("hello");
//       },3000);

// console.log("end");

// function greeting(){
//       console.log("hello");
// }
// greeting();

// function selectlanguage(lang){
//       let data;
//       if(lang=="java"){
//             function java(){
//                   console.log("java is selected");
//             }
//             data=java();
//       }
//       else if(lang=="python"){
//             function python(){
//                   console.log("python is selected");
//             }
//             data=python();
//       }
//       else if(lang=="c"){
//             function c(){
//                   console.log("c is selected");
//             }
//             data=c();
//       }
//       else{
//             data="not selected";
//       }
//       return data;
// }

// const div=document.getElementById('container');
// div[0].innerHTML="hello";
// console.dir(div);

// const h2=document.createElement('h2');
// h2.innerHTML="CS-b batch";
// h2.style.backgroundColor="yellow";
// // console.log(h2);
// div[0].appendChild(h2);

// const image=document.createElement('img');
// image.src="https://www.w3schools.com/js/pic_bulbon.gif";
// image.setAttribute("alt","bulb image");
// image.setAttribute('width','100px');
// image.style.height="100px";
// div[0].appendChild(image);



const button = document.getElementById('btn');
console.log(button);
const loading = document.getElementById('disp');


function displayData() {
    
    loading.innerText = 'Data Loading';
    
    setTimeout(() => {
        const div = document.getElementsByClassName('container');
        div[0].innerHTML = '<h2 style="color: blue;">Hello World</h2>';
        console.dir(div);


        const h2 = document.createElement('h2');
        h2.innerText = "CS B Students";
        h2.style.backgroundColor = 'cadetblue';
        console.log(h2);
        div[0].appendChild(h2);

        const img = document.createElement('img');
        img.src = 'https://tinypng.com/images/social/website.jpg';
        img.setAttribute('height', '200px');
        img.setAttribute('width', '300px');
        div[0].appendChild(img);
         loading.innerText = 'Data Loaded Successfully';
    }, 2000);
    
   
}

button.addEventListener('click', displayData);