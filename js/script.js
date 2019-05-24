let maravBox = document.querySelector(".maravilhosas__box");

fetch("http://localhost:5001/maravilhosas/")
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
            aMara.setAttribute("href", "#!");

            let imgMara = document.createElement("img")
            imgMara.setAttribute("class", "img-responsive");
            imgMara.setAttribute("alt", "Foto da personalidade");

            if (mulheres.metadata == undefined || mulheres.metadata.image == "" || mulheres.metadata.image.url == "") {
                imgMara.setAttribute("src", "img/img-mulher.png")
            } else {
                imgMara.setAttribute("src", mulheres.metadata.image.url)
            };

            let nomeMara = document.createElement("p");
            nomeMara.innerHTML = mulheres.title;

            let removerBtn = document.createElement("button");
            removerBtn.setAttribute("type", "button");
            removerBtn.setAttribute("data-id", mulheres.id)
            removerBtn.classList.add("btn", "btn_roxo")
            removerBtn.innerHTML = "x";

            maravBox.appendChild(maraPerfil);
            maraPerfil.appendChild(aMara);
            aMara.appendChild(imgMara);
            aMara.appendChild(nomeMara);
            maraPerfil.appendChild(removerBtn);

            removerBtn.addEventListener("click", () => {
                fetch(`http://localhost:5001/maravilhosas/${mulheres.id}`, {
                    method: "DELETE",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "id": removerBtn.getAttribute("data-id")
                    })
                })
                    .then(() => {
                        maravBox.removeChild(maraPerfil);
                    })
                    .catch((erro)=>{
                        console.log(erro);
                    })
            })

        });

    })
    .catch(erro => {
        console.log(erro);
    })

const btn = document.querySelector("#send-form");
btn.addEventListener("click", () => {

    nomeMaravilhosa = document.querySelector("#nomeMara").value;
    imageLink = document.querySelector("#imageUrl").value;

    fetch("http://localhost:5001/maravilhosas/", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": nomeMaravilhosa,
            "metadata": {
                "image": {
                    "url": imageLink
                }
            }
        })
    })
})