const colourCards = document.querySelectorAll(".card")

function gray(){
    document.body.classList.remove('pink', 'yellow', 'blue');
    document.body.classList.add('gray');
}

function pink(){
    document.body.classList.remove('gray', 'yellow', 'blue');
    document.body.classList.add('pink');
}

function blue(){
    document.body.classList.remove('pink', 'yellow', 'gray');
    document.body.classList.add('blue');
}

function yellow(){
    document.body.classList.remove('pink', 'gray', 'blue');
    document.body.classList.add('yellow');
}