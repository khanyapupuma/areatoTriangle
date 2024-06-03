document.querySelector('.submit').addEventListener('click', ()=> {
    let input = +document.querySelector('.inPut').value
    let output = +document.querySelector('.inPut1' ).value
    let paragraph = document.querySelector('.para')
    

    paragraph.innerHTML =  input / 2 * output
})
