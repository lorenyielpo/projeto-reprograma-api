let maravBox = document.querySelector(".maravilhosas__box");

fetch('https://theblackwomanhistory.firebaseio.com/.json')
    .then(response => {
        return response.json()
    })
    .then(woman => {
        console.log(woman)

        woman.content.forEach(mulheres => {
            let maraPerfil = document.createElement("div");
            maraPerfil.setAttribute("class", "maravilhosas__perfil");

            let aMara = document.createElement("a");
            aMara.setAttribute('href', "#!");

            let imgMara = document.createElement('img')
            imgMara.setAttribute("class", "img-responsive");
            imgMara.setAttribute("src", "#!");
            imgMara.setAttribute("alt", "Foto da personalidade");

            if (mulheres.metadata) {
                if (mulheres.metadata.image) {
                    if (mulheres.metadata.image.url) {
                        imgMara.setAttribute("src", mulheres.metadata.image.url)
                    }
                } else {
                    imgMara.setAttribute("src", "img/img-mulher.png")
                }
            } else {
                imgMara.setAttribute("src", "img/img-mulher.png")
            }

            let nomeMara = document.createElement("p");
            nomeMara.innerHTML = mulheres.title

            maravBox.appendChild(maraPerfil);
            maraPerfil.appendChild(aMara);
            aMara.appendChild(imgMara);
            aMara.appendChild(nomeMara);
        });
    })
    .catch(erro => {
        console.log(erro)
    })