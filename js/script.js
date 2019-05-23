let maravBox = document.querySelector(".maravilhosas__box");

fetch('http://localhost:5001/maravilhosas/')
    .then(response => {
        return response.json()
    })
    .then(woman => {
        console.log(woman)

        woman.content.forEach(mulheres => {
            console.log(mulheres)

            let maraPerfil = document.createElement("div");
            maraPerfil.setAttribute("class", "maravilhosas__perfil");

            let aMara = document.createElement("a");
            aMara.setAttribute('href', "#!");

            let imgMara = document.createElement('img')
            imgMara.setAttribute("class", "img-responsive");
            imgMara.setAttribute("alt", "Foto da personalidade");

            (mulheres.metadata && mulheres.metadata.image) ? imgMara.setAttribute("src", mulheres.metadata.image.url) : imgMara.setAttribute("src", "img/img-mulher.png");

            let nomeMara = document.createElement("p");
            nomeMara.innerHTML = mulheres.title

            maravBox.appendChild(maraPerfil);
            maraPerfil.appendChild(aMara);
            aMara.appendChild(imgMara);
            aMara.appendChild(nomeMara);
        });

        const btn = document.querySelector("send-form");
        btn.addEventListener("click", (evento) => {
            evento.preventDefault()

            nomeMaravilhosa = document.querySelector('#nomeMara').value;
            imageLink = document.querySelector('#imageUrl').value;

            fetch('localhost:5001/maravilhosas/', {
                method: POST,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'title': nomeMaravilhosa,
                    'urlImage': imageLink
                })
            })
                .then(response => {
                    return response.json();
                })
                .then(mulher => {
                    console.log(mulher)
                    mulher.content.forEach(mulherCard => {
                        let maraPerfil = document.createElement("div");
                        maraPerfil.setAttribute("class", "maravilhosas__perfil");
            
                        let aMara = document.createElement("a");
                        aMara.setAttribute('href', "#!");
            
                        let imgMara = document.createElement('img')
                        imgMara.setAttribute("class", "img-responsive");
                        imgMara.setAttribute("alt", "Foto da personalidade");
            
                        if(mulherCard.metadata && mulherCard.metadata.image) {
                            imgMara.setAttribute("src", mulheres.metadata.image.url)
                        } else if(mulher.urlImage){
                            imgMara.setAttribute("src", imageLink)
                        }else {
                            imgMara.setAttribute("src", "img/img-mulher.png")
                        };
            
                        let nomeMara = document.createElement("p");
                        nomeMara.innerHTML = mulherCard.title
            
                        maravBox.appendChild(maraPerfil);
                        maraPerfil.appendChild(aMara);
                        aMara.appendChild(imgMara);
                        aMara.appendChild(nomeMara); 
                    })
                })
                .catch(erro => {
                    console.log(erro)
                })
        });

    })
    .catch(erro => {
        console.log(erro)
    })

