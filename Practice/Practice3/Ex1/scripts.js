const nameInput = document.getElementById('input-name');
const poinInput = document.getElementById('input-point');
const btnSubmit = document.getElementById('btnSubmit');
const infoStudent = document.getElementById('infoStudent');
const quantity = document.getElementById('quantity');
const avarage = document.getElementById('avarage');

btnSubmit.addEventListener('click', addInfo)
nameInput.addEventListener('keydown', function (e) {
  if ( e.key === 'Enter' )
  {
      addInfo();
  }
})
poinInput.addEventListener('keydown', function (e) {
  if ( e.key === 'Enter' )
  {
      addInfo();
  }
})

let arr = new Array
function addInfo(event)
{
  event.preventDefault();
  let valueName = nameInput.value.trim();
  let valuePoint = Number(poinInput.value);
  console.log(valuePoint)
  console.log(valuePoint)
  if ( !valueName || isNaN(valuePoint) || ( valuePoint < 0 || valuePoint > 10 ))
  {
    alert("Nhập lại đi bạn yêu!");
  }
  else
  {
    let newEle = new Array
    newEle[0] = valueName
    newEle[1] = valuePoint
    arr.push(newEle)
    render()
  }
}


function render ()
{
  while ( infoStudent.childElementCount )
  {
    let childOfBody = infoStudent.firstChild
    infoStudent.removeChild(childOfBody);
  }
  let sum = 0;
  for ( let i = 0; i < arr.length; ++i )
  {
    let newTr = document.createElement('tr');
    newTr.className = 'd-column'
    let newTd1 = document.createElement('td');
    newTd1.textContent = i + 1
    let newTd2 = document.createElement('td');
    newTd2.textContent = arr[i][0];
    let newTd3 = document.createElement('td');
    newTd3.textContent = arr[i][1];
    sum += arr[i][1]
    let newTd4 = document.createElement('td');
    if ( arr[i][1] >= 8.5 )
    {
      newTd4.textContent = "Giỏi";
    }
    else if ( arr[i][1] >= 7 )
    {
      newTd4.textContent = "Khá";
    }
    else if ( arr[i][1] >= 5 )
    {
      newTd4.textContent = "Trung Bình";
    }
    else
    {
      newTd4.textContent = "Yếu"
    }
    let newTd5 = document.createElement('td');
    let newBtn = document.createElement('button');
    newBtn.textContent = "Xóa"
    newBtn.addEventListener('click', function(){
      arr.splice(arr.indexOf(arr[i]), 1);
      render();
    });
    newTd5.appendChild(newBtn)
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd4);
    newTr.appendChild(newTd5);
    infoStudent.appendChild(newTr)
  }
  quantity.textContent = arr.length;
  avarage.textContent = sum/arr.length;
}
