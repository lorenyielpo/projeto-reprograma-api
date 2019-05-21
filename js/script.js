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