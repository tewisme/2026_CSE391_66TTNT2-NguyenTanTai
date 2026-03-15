const productInput = document.getElementById('products');
const quantityInput = document.getElementById('quantity');
const dateInput = document.getElementById('dates');
const addressInput = document.getElementById('address');
const notesInput = document.getElementById('notes');
const paymentInput = document.getElementById('payment');

const btnBuy = document.getElementById('btn-buy');

const prices = {
  "book": 1,
  "bible": 2,
  "rd": 0
}



dateInput.addEventListener('input', function(event){
  event.preventDefault();
  let date1 = new Date(dateInput.value);
  let date2 = new Date();
  let bias = (date1 - date2)/(1000*60*60*24);
  let warn = document.getElementById('warn-date');
  if ( bias < 0 || bias > 30 )
  {
    warn.textContent = 'Ngày giao phải trong vòng 30 ngày';
  }
  else
  {
    warn.textContent = "";
  }
});

quantityInput.addEventListener('input', calTotal)
function calTotal(event){
  event.preventDefault();
  let quantity = Number(quantityInput.value);
  let name = productInput.value;
  let warn = document.getElementById('warn-quantity');
  console.log(quantity);
  if (quantity < 1 || quantity > 99)
  {
    warn.textContent = "Vui lòng nhập số lượng hợp lệ!";
  }
  else if ( name != 'default' )
  {
    warn.textContent = "Hóa đơn của bạn là: " + (quantity*prices[name]).toLocaleString("vi-VN") + "vnd";
    warn.style.color = 'black';
  }
  else
  {
    warn.textContent = "";
  }
};

productInput.addEventListener('blur', function(event){
  event.preventDefault();
  let product = productInput.value;
  let warn = document.getElementById('warn-items');
  calTotal(event);
  if ( product == 'default' )
  {
    warn.textContent = "Vui lòng chọn sản phẩm";
  }
  else
  {
    warn.textContent = "";
  }
});

btnBuy.addEventListener('click', function(event){
  event.preventDefault();
});
