/* initaialisation des variables */
let btnPlus = document.querySelector('.btnPlus');
let btnMoins = document.querySelector('.btnMoins');
let addArticle = document.querySelector('.add__article');
let delArticle = document.querySelector('.delete__article');

/* Ajout d'un evenement */
btnPlus.addEventListener('click', increaseQuantity);
btnMoins.addEventListener('click', descreaseQuantity);
addArticle.addEventListener('click', addPanier);
delArticle.addEventListener('click',delPanier);

/* fonction des evenement */

function increaseQuantity(){
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1;
    let qty = parseInt(this.previousElementSibling.value);
    let price = parseInt(this.parentElement.parentElement.nextElementSibling.innerText);
    subTotal(this, price, qty);
}

function descreaseQuantity(){
    if (parseInt(this.nextElementSibling.value) > 0){
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) - 1;
        let qty = parseInt(this.nextElementSibling.value);
        let price = parseInt(this.parentElement.parentElement.nextElementSibling.innerText);
        subTotal (this, price, qty);
        total();
    }

}

function subTotal(elt, price, qty) {
    let subTotal = price * qty;
    elt.parentElement.parentElement.nextElementSibling.nextElementSibling.innerText = subTotal;
}


function total(){
    let subTotalAll = document.querySelectorAll('.subTotal');
    let tot = 0;
    for (x of subTotalAll){
    tot =tot + parseInt(x.innerHTML)
    }
    document.querySelector('.total').innerHTML = "Total : " + tot;

}


/* Ajouter un nouveau article */

function addPanier(){
    let inArticle = document.querySelector('.in__article').value;
    let Price = document.querySelector('.in__price').value;
    document.querySelector('.tbody').innerHTML += 
    `<tr class="tbody__line">
    <td class="article">
        <!-- <div>
            <img src="res/image_1024.jpg" alt="sac de riz">
        </div> -->
        <div>
            <p class="name__article">${inArticle}</p>
            <button class="delete__article">Suprimer</button>
        </div>
    </td>
    <td>
        <div class="qtys">
            <button class="btnMoins">-</button>
            <input class="qty" type="text" value="1">
            <!-- <p class="qte">1</p> -->
            <button class="btnPlus">+</button>
        </div>
    </td>
    <td>
        <p class="priceU">${Price}</p>
    </td>
    <td>
        <p class="subTotal">${Price}</p>
    </td>
</tr>`;
    loadPage();
}

/* supprimer un element */
function delPanier(){
    nameArticle = this.previousElementSibling.parentElement.parentElement.parentElement;
    nameArticle.remove('.tbody');

    loadPage();
}

/* chargement de la page lors de l'ajour */

function loadPage(){
    let btnPlusAll = document.querySelectorAll('.btnPlus');
    let btnMoinsAll = document.querySelectorAll('.btnMoins');
    btnPlusAll.forEach((btn) => btn.addEventListener('click',increaseQuantity));
    btnMoinsAll.forEach((btn) => btn.addEventListener('click', descreaseQuantity));

    let btnDelAll = document.querySelectorAll('.delete__article');
    btnDelAll.forEach((btn) => btn.addEventListener('click', delPanier));

    }

 