console.log('%c HI', 'color: firebrick')


function loadPics() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(resp => resp.json())
        .then(json => renderPics(json))
}

function renderPics(json) {
    const container = document.getElementById('dog-image-container');
    let imageArr = json.message;
    for (let i of imageArr) {
        let images = document.createElement('img');
        images.src = i;
        images.style.width = "25%";
        container.appendChild(images);
    }
}

function loadBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(function(json) {
            let breedArr = Object.keys(json.message);
            renderBreeds(breedArr)
            let dropDown = document.getElementById('breed-dropdown');
            dropDown.addEventListener("change", function(e) {
                let letter = dropDown.value;
                breedArr = breedArr.filter(breed => breed[0] === letter)
                renderBreeds(breedArr);
            })
        })
}

function renderBreeds(arr) {
    const listContainer = document.getElementById('dog-breeds');
    listContainer.innerText = "";
    for (let i of arr) {
        let breed = document.createElement('li');
        breed.innerHTML = i;
        listContainer.appendChild(breed);
    }
}


let breedlist = document.querySelectorAll('#dog-breeds li');


function changeColor() {
    for (let i = 0; i < breedlist.length; i++) {
        breedlist[i].addEventListener('click', function() {
            breedlist[i].style.color = "red";
            console.log("as");
        })
    }
}

function drop() {

}

window.onload = function() {
    loadPics();
    loadBreeds();
    changeColor();
    drop();
};
