class Product{
    constructor(name, quantity, price){
        this.name = name
        this.quantity= quantity
        this.price = price
        this.sum = this.price*this.quantity
    }
   
}
function getdate(){
    const date = new Date();
    str = date.getFullYear().toString()+"-"+date.getMonth().toString()+'-'+date.getDay().toString();
    return str;
}

function deleteProductFromLS(i){
    localStorage.removeItem(i)
    console.log(localStorage)
}
 function addProductToLS(p,i){
        var pr = {
            'nazwa': p.name,
            'cena': p.price,
            'ilość':p.quantity,
            'suma':p.sum
        }
        localStorage.setItem(i,JSON.stringify(pr))

    }
function getProduct(id){
    let pr = JSON.parse(localStorage[id])
    return pr

}

function tableCreate() {
    const body = document.body,
    tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';
    
    //add headres
    var titles = ["nazwa","cena","ilość",'suma']
    const header = tbl.createTHead();
    var row = header.insertRow()
    var cell = row.insertCell()
    cell.style.border = '1px solid black';
    //add content
    for (let i=1;i<titles.length+1;i++){
        var cell = row.insertCell(i)
        cell.innerHTML = titles[i-1]
        cell.style.border = '1px solid black';
    }
    for(let i =0;i<localStorage.length;i++){
        const tr = tbl.insertRow();
        tr.value = i
        var item = getProduct(i+1)
        for(let j =0;j<titles.length+2;j++){
            const td = tr.insertCell()
            //Delete button
            if(j==5){
                td.insert
                var svgPath = 'bin.svg';

                var btn = document.createElement('input')
                btn.type = 'button'
                btn.className = 'btn'
                let img = document.createElement('svg')
                img.src = svgPath
                btn.value = img

                btn.onclick = function(){deleteRow(tr.value)}
                td.appendChild(btn)
                


            }
            //print number rows
            if(j==0){
                td.appendChild(document.createTextNode(i+1));

            }
            //print items
            else{td.appendChild(document.createTextNode(item[titles[j-1]]));}
            td.style.border = '1px solid black';


        }
    }
    function deleteRow(id){
        var rows = tbl.rows
        for (let index = 0; index < rows.length; index++) {
            if(rows[index].value == id){
                tbl.deleteRow(index)
                deleteProductFromLS(index)
            }

            
        }
   }


    body.appendChild(tbl);
}
  
let pr = new Product('Jabłka',1.5,4.9)
addProductToLS(pr,1)
pr = new Product('Bułka',5,0.49)
addProductToLS(pr,2)
pr = new Product('Pomidor',2,1.59)
addProductToLS(pr,3)
// write current date to title
txt = document.createTextNode('Paragon '+getdate());
t = document.getElementsByTagName('h1')
t.innerText = t.textContent = txt;


tableCreate()
