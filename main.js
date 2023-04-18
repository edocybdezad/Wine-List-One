import {wines } from "./wines.js"

const Whites = wines.filter( wines => wines.color === 'Blanco')

const Reds = wines.filter( wines => wines.color === 'Tinto')

const Cava = wines.filter( wines => wines.color === 'Cava') 

const Crianza = wines.filter( wines => wines.edad === 'Crianza')
const Ribera = wines.filter( wines => wines.dop === 'Ribera del Duero')
const Valencia = wines.filter( wines => wines.dop === 'Valencia')
const Rioja = wines.filter( wines => wines.dop === 'Rioja')
const Verdejo = wines.filter( wines => wines.cepas === 'Verdejo')

const properties = ['name','precio','info','cepas','dop']

document.addEventListener('DOMContentLoaded', function() {

    mainf();
    document.getElementById('Crianza').addEventListener('click', () => {fltrWines('Crianza',Crianza)});
    document.getElementById('Ribera').addEventListener('click', () => {fltrWines('Ribera',Ribera)});
    document.getElementById('Valencia').addEventListener('click',() => {fltrWines('Valencia',Valencia)});
    document.getElementById('Rioja').addEventListener('click', () => {fltrWines('Rioja',Rioja)});
    document.getElementById('Verdejo').addEventListener('click', () => {fltrWines('Verdejo',Verdejo)});
});

function mainf() {
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('mainPageBtn').style.display = 'none';    
    var categories = [Whites, Reds, Cava]
    const wine_sections = ['whites','reds','cava']
    for (var i = 0; i < categories.length; i++){
        main_list(categories[i], wine_sections[i]);
    }
}
function hideShowElements(side_btn,visual){
    if (document.getElementById('buttons').innerHTML != '') {
        document.getElementById('buttons').innerHTML = '';
    }
    document.getElementById(side_btn).style.display = 'inline-block';
    document.getElementById('whites').style.display = `${visual}`;
    document.getElementById('reds').style.display = `${visual}`;
    document.getElementById('cava').style.display = `${visual}`;
}
function backToHome(side_btn){
    document.getElementById('mainPageBtn').removeEventListener('click', backToHome);
    document.getElementById('buttons').innerHTML = '';
    document.getElementById('buttons').style.display = 'none';
    document.getElementById('btnTitle').style.display = '';
    document.getElementById('btnTitle').style.display = 'none';
    document.getElementById('mainPageBtn').style.display = 'none';
    hideShowElements(side_btn,'block');
}

function fltrWines(side_btn,Btn) {
    hideShowElements(side_btn,'none');
    document.getElementById('mainPageBtn').style.display = 'block';
    document.getElementById('buttons').style.display = 'block';
    document.getElementById('btnTitle').style.display = 'block';
    document.getElementById('btnTitle').innerText = `Vinos ${side_btn}`;
    Btn.forEach( (e) => {
        var item_div = document.createElement("div");
        item_div.classList.add('item--card');
        document.getElementById('buttons').appendChild(item_div);
        for (var i = 0; i < properties.length; i++){
                var item = document.createElement("p")
                item.classList.add(properties[i])
                item.innerText = e[properties[i]]
                item_div.appendChild(item)                
        }        
    })
    document.getElementById('mainPageBtn').addEventListener('click', () => {backToHome(side_btn)});
}

function main_list(w, ws) {
    w.forEach( (e) => {
        var item_div = document.createElement("div");
        item_div.classList.add('item--card');
        document.getElementById(ws).appendChild(item_div);
        for (var i = 0; i < properties.length; i++){
                var item = document.createElement("p")
                item.classList.add(properties[i])
                item.innerText = e[properties[i]]
                item_div.appendChild(item)                
        }
    })
}

