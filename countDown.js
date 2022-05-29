const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10; 

while (i >= 0) {
    const para = document.createElement('p');
    if (i === 0) {
        para.textContent = `Blastoff!`;
        }
    if else (i === 10) {
        para.textContent = `Countdown %{i}`;
        }
    else {
        para.textContent = i;
        }
    output.appendChild(para);
    i--;
}

