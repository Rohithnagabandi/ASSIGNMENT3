const box1=document.getElementById("box-1");
box1.addEventListener('click',()=>{
    box1.style.backgroundColor="red";
    // box1.style.color='white'
})

const box2=document.getElementById("box-2");
box2.addEventListener('click',()=>{
    box2.style.backgroundColor="blue";
    // box2.style.color='white'
})

const box3=document.getElementById("box-3");
box3.addEventListener('click',()=>{
    box3.style.backgroundColor="green";
    // box3.style.color='white'
})

const box4=document.getElementById("box-4");
box4.addEventListener('click',()=>{
    box4.style.backgroundColor="yellow";
    // box4.style.color='white'
})

document.getElementById('btn1').addEventListener('click',function() {
    const name =document.getElementById('nameinput').value;
    document.getElementById('heading').textContent='Hello , '+name;
});
