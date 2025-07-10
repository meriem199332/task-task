let productContainer = document.querySelector("#productsContainer");
let table = document.querySelector('table tbody');
let bill = [];
let History = [];


const showProducts = () => {
    productContainer.innerHtml = "";
    phones.forEach((el, index) => {
        productContainer.innerHTML += ` <div class="bg-white p-3 rounded shadow border d-flex">
  <div class="col-3 d-flex ">
    <img class="col-12 object-fit-cover" src="${el.imgUrl}" alt="">
  </div>
  <div class="col-9 p-3 d-flex flex-column">
    <h5 class="text-capitalize">${el.name}</h5>
    <div class="d-flex justify-content-between align-items-center"><p class="m-0 fw-bold">Price : ${el.price}</p>
    <button class="btn btn-primary text-capitalize" onclick="addBill(${index})">add to bill</button>
    </div>
  </div>
   </div>`;
    });
};
showProducts();

    

let showBill = () => {
    table.innerHTML = '';
    bill.forEach((el, index) => {
        table.innerHTML += `
          <tr class="text-capitalize">
                <td>${index + 1}</td>
                <td>${el.name}</td>
                 <td>${el.price} $</td>
                <td>
                <div class="d-flex align-items-center justify-content-center gap-4">
                <button class="btn btn-danger" onclick="minusButton(${index})">-</button>
                 <span>  ${el.Qty}</span>
                <button class="btn btn-success" onclick="plusButton(${index})">+</button>
                </div>
              </td>
           
            <td>${el.Qty * el.price} $</td>
            <td > <i  onclick="deleteBill(${index})" class="bi bi-trash3-fill" ></i></td>
            </tr>
      `;
    });
};
showBill();

const calcTotal = () => {
    let total = 0;
   
    bill.forEach((el) => {
        total += el.price * el.Qty
    });
    document.querySelector("#total").innerText = total;
    showBill();
};
calcTotal();

const addBill = (productIndex) => {
   
    let productObj = phones[productIndex]
    delete productObj.stockQty;
    delete productObj.imgUrl;
    productObj.Qty = 1;
    bill.push(productObj)
   
    calcTotal();
    
};


const deleteBill = (removeBill) => {
    bill.splice(removeBill, 1);
    showBill();
};
const plusButton = (addtoindex) => {
    bill[addtoindex].Qty++;
 
    showBill();
};
const minusButton = (dedactindex) => {
    if (bill[dedactindex].Qty > 1) {
        bill[dedactindex].Qty--;
        showBill();
    }
    
   
};
let myModal = document.querySelector("#myModal");
let amount = document.querySelector("#amount");
let total = document.querySelector("#total");
let historyModal = document.querySelector("#historyModal");
let remainValue = document.querySelector("#remainValue");
let openModal = () => {
    myModal.style.display = "flex";
};
let closeModal = () => {
    myModal.style.display = "none";
};

let openBillHistory = () => {
    displayHistory();
    historyModal.style.display = "flex"; 

};
let closeHistoryModal = () => {
    historyModal.style.display = "none";
};
let calcRemain = () => {

    let remain = +amount.value - +total.innerText;
    remainValue.innerText = `${remain}`;
};
function saveTotal() {
    let billObj = {
        date: new Date().toLocaleString(),
        doneBy: "Dabo",
        total: +total.innerText,
    };

    History.push(billObj);

    displayHistory(); 

    closeModal(); 

    bill = []; 
    calcTotal(); 
   
    
};
  

let historyList = document.querySelector("#historyList");

function displayHistory() {
    historyList.innerHTML = ""; 

    History.forEach((bill) => {
        let div = document.createElement("div");
        div.className = "border p-2 mb-3 rounded bg-light";
        div.innerHTML = `
        <p><strong>Total:</strong> ${bill.total}$</p>
        <p><strong>Done by:</strong> ${bill.doneBy}</p>
        <p><strong>Date:</strong> ${bill.date}</p>
      `;
        historyList.appendChild(div);
    });
};
  



// let saveTotal = (save) => {
//     let saveT = History[save];
// }
// let calcRemain = () => {
//     amount - total;
// }
