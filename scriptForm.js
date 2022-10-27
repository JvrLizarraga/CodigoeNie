var inputs=document.getElementsByClassName("formulario__input");
for (var i = 0; i<inputs.length; i++){
    inputs[i].addEventListener("keyup", function(){
        if(this.value.length>=1){
            this.nextElementSibling.classList.add("fijar");
        }else{
            this.nextElementSibling.classList.remove("fijar");
        }
    });
}

console.log('Gatos')

const URL = 'https://api.thecatapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    });


