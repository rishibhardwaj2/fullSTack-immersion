const head = document.querySelector('#head');
console.log(head); 
head.style.color = 'red';
head.style.border = '2px solid green';
head.style.backgroundColor = 'pink';
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  head.style.backgroundColor = 'blue';
})