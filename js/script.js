let maravBox = document.querySelector(".maravilhosas__box");

fetch('http://localhost:5001/maravilhosas/')
    .then(response => {
        return response.json();
    })
    .then(woman => {
        console.log(woman);

        woman.content.forEach(mulheres => {
            console.log(mulheres);

            let maraPerfil = document.createElement("div");
            maraPerfil.setAttribute("class", "maravilhosas__perfil");

            let aMara = document.createElement("a");
            aMara.setAttribute('href', "#!");

            let imgMara = document.createElement('img')
            imgMara.setAttribute("class", "img-responsive");
            imgMara.setAttribute("alt", "Foto da personalidade");

            (mulheres.metadata && mulheres.metadata.image) ? imgMara.setAttribute("src", mulheres.metadata.image.url) : imgMara.setAttribute("src", "img/img-mulher.png");

            let nomeMara = document.createElement("p");
            nomeMara.innerHTML = mulheres.title;

            maravBox.appendChild(maraPerfil);
            maraPerfil.appendChild(aMara);
            aMara.appendChild(imgMara);
            aMara.appendChild(nomeMara);

        });

    })
    .catch(erro => {
        console.log(erro);
    })

const btn = document.querySelector("#send-form");
btn.addEventListener("click", () => {

    nomeMaravilhosa = document.querySelector('#nomeMara').value;
    imageLink = document.querySelector('#imageUrl').value;

    fetch('http://localhost:5001/maravilhosas/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nomeMaravilhosa,
            'metadata': {
                'image':{
                    'url' : imageLink
                }
            }
        })
    })
        .then(response => {
            return response.json();
        })
        .then(mulher => {
            console.log(mulher);

            mulher.content.forEach(mulherCard => {
                let perfilMara = document.createElement("div");
                perfilMara.setAttribute("class", "maravilhosas__perfil");

                let maraA = document.createElement("a");
                maraA.setAttribute('href', "#!");

                let maraImg = document.createElement('img');
                maraImg.setAttribute("class", "img-responsive");
                maraImg.setAttribute("alt", "Foto da personalidade");

                console.log(mulherCard.urlImage)

                if (mulherCard.metadata && mulherCard.metadata.image) {
                    maraImg.setAttribute("src", mulherCard.metadata.image.url)
                } else {
                    maraImg.setAttribute("src", "img/img-mulher.png")
                };

                let maraNome = document.createElement("p");
                maraNome.innerHTML = mulherCard.title;

                maravBox.appendChild(perfilMara);
                perfilMara.appendChild(maraA);
                maraA.appendChild(maraImg);
                maraA.appendChild(maraNome);
            })
        })
        .catch(erro => {
            console.log(erro);
        })

})