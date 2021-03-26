const opisanie = document.getElementById('opisaniye');
const pic = document.getElementById('pic');
const btn = document.getElementById('btn');
const father = document.getElementById('father');

btn.addEventListener('click', ()=>{
    const mother = document.createElement('div');
    const text = document.createElement('p');
    const img = document.createElement('img');
    img.src = pic.value;
    const closer = document.createElement('div');
    text.innerText = opisanie.value;

    mother.classList.add('mother');
    img.classList.add('img');
    closer.classList.add('close');
    closer.innerText = 'X';

    mother.appendChild(closer);
    father.appendChild(mother);
    mother.appendChild(img);
    mother.appendChild(text);

    closer.addEventListener('click', item=>mother.remove())
})