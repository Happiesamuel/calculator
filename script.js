const all = document.querySelector('.all')
const input = all.querySelector('.input')
const but = all.querySelector('button')
const pre = document.querySelector('.pre')
const num = ['0','1','2','3','4','5','6','7','8','9','-','+','/','(',')','*']
setTimeout(function(){
    pre.classList.add('disappear')
},3000)
console.log(pre);
all.addEventListener('click',function(e){
if(e.target.classList.contains('but')){
    num.forEach(x =>{
        if(e.target.textContent === x ){
            input.textContent += x
        }
    })
    if(e.target.textContent === '='){
console.log(eval(input.textContent));
      const sum = eval(input.textContent)
        input.textContent = sum
        // if(sum) input.textContent = 'ERROR'
    }
    if(e.target.textContent === 'AC'){
    input.textContent = ''
    }
    if(e.target.textContent === 'C'){
   const sliceInput = input.textContent.slice(0,-1)
input.textContent = sliceInput
}}
if(e.target.classList.contains('sl')){
all.classList.toggle('dark')
document.querySelectorAll('.num').forEach(x => x.classList.toggle('dark-num'))
document.querySelectorAll('.sym').forEach(x => x.classList.toggle('dark-sym'))
document.querySelector('.row').classList.toggle('dark-row')
document.querySelector('.clear').classList.toggle('dark-clear')
document.querySelector('.input').classList.toggle('dark-inp')
}
if(e.target.classList.contains('sl')){
 document.querySelectorAll('.sl').forEach(x => x.classList.toggle('hide'))
}
})
