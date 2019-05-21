let maravBox = document.querySelector(".maravilhosas__box");

let maraPerfil = document.createElement("div");
maraPerfil.setAttribute("class", ".maravilhosas__box");

let nomeMara = document.createElement("a");
nomeMara.setAttribute('href', "#!");

let imgMara = document.createElement('img')
imgMara.setAttribute("class", "img-responsive");
imgMara.setAttribute("src", x);
imgMara.setAttribute("alt", "Foto da personalidade");

maravBox.appendChild(maraPerfil);
maraPerfil.appendChild(nomeMara);
maraPerfil.appendChild(imgMara)