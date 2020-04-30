// var a = new Promise((res,rej) => {
//     setTimeout(function(){
//         console.log("111")
//         res()
//     },3000)
// })
// a.then(()=>{
//     setTimeout(function(){
//         console.log("222")
//         return new Promise((res,rej)=>{
//             setTimeout(function(){
//                 console.log("333")
//                 res()
//             },1000)
//         }).then(()=>{
//             setTimeout(function(){
//                 console.log("444")
//             },1000)
//         })
//     },1000)
// })

// async function asyncFun(){
//    async function setName(name){
//         return new Promise((res,rej) => {
//             setTimeout(()=>{
//                 console.log(name)
//                 res("我错咯我错咯");
//             },1000)
//         })
//     }
//     async function setName2(name){
//         return new Promise((res,rej) => {
//             setTimeout(()=>{
//                 console.log(name)
//                 rej("我错咯我错咯");
//             },1000)
//         })
//     }
//     for(let i = 0; i < 3;i++){
//         await setName2(i).catch(e=>console.log(e));
//     }
  
// }

// asyncFun();
var a=0;
if(1){
    console.log(a,window.a)
    a=1;
    function a(){
    }
    console.log(a,window.a)
    a =function(){
    }
    console.log(a,window.a)
}
console.log(a,window.a)


var a;
a=0;
if(1){
    var a;
    func
    a =1;
}