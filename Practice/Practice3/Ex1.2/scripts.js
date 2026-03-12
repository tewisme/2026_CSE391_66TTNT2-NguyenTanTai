const nameInput = document.getElementById('input-name');
const poinInput = document.getElementById('input-point');
const btnSubmit = document.getElementById('btnSubmit');
const infoStudent = document.getElementById('infoStudent');
const quantity = document.getElementById('quantity');
const avarage = document.getElementById('avarage');
const response = document.getElementById('notice-no-res');

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
let arrTemp = new Array
function addInfo(event)
{
  event.preventDefault();
  let valueName = nameInput.value.trim();
  let valuePoint = Number(poinInput.value);
  if ( !valueName || isNaN(valuePoint) || ( valuePoint < 0 || valuePoint > 10 ))
  {
    alert("Nhập lại đi bạn yêu!");
  }
  else
  {
    let newEle = new Array
    newEle[0] = valueName
    newEle[1] = valuePoint
    if ( newEle[1] >= 8.5 )
    {
      newEle[2] = "Giỏi";
    }
    else if ( newEle[1] >= 7 )
    {
      newEle[2] = "Khá";
    }
    else if ( newEle[1] >= 5 )
    {
      newEle[2] = "Trung Bình";
    }
    else
    {
      newEle[2] = "Yếu"
    }
    arr.push(newEle)
    render(arr)
  }
}


function render (newArray)
{
  while ( infoStudent.childElementCount )
  {
    let childOfBody = infoStudent.firstChild
    infoStudent.removeChild(childOfBody);
  }
  let sum = 0;
  for ( let i = 0; i < newArray.length; ++i )
  {
    let newTr = document.createElement('tr');
    newTr.className = 'd-column'
    let newTd1 = document.createElement('td');
    newTd1.textContent = i + 1
    let newTd2 = document.createElement('td');
    newTd2.textContent = newArray[i][0];
    let newTd3 = document.createElement('td');
    newTd3.textContent = newArray[i][1];
    sum += newArray[i][1]
    let newTd4 = document.createElement('td');
    newTd4.textContent = newArray[i][2];
    if(newTd4.textContent === 'Yếu'){
      newTr.style.backgroundColor = 'yellow'
    }
    let newTd5 = document.createElement('td');
    let newBtn = document.createElement('button');
    newBtn.textContent = "Xóa"
    newBtn.addEventListener('click', function(){
      arr.splice(newArray.indexOf(newArray[i]), 1);
      render(newArray);
    });
    newTd5.appendChild(newBtn)
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd4);
    newTr.appendChild(newTd5);
    infoStudent.appendChild(newTr)
  }
  if ( newArray.length )
  {
    quantity.textContent = newArray.length;
    avarage.textContent = sum/newArray.length;
  }
  else
  {
    quantity.textContent = 0;
    avarage.textContent = 0;
    response.textContent = 'Không có kết quả'
  }
  arrTemp = arr
}
//---------------------------------------------------//
const btnReset = document.getElementById('btnReset');
const btnTextFilter = document.getElementById('btnTextFilter');
const inputFilter = document.getElementById('textFilter');

function arrNameFilter (nameFilter)
{
  let res = new Array
  for ( let i in arr )
  {
    console.log(arr[i])
    if ( arr[i][0].toLowerCase().includes(nameFilter) )
    {
      res.push(arr[i]);
    }
  }
  return res
}
btnReset.addEventListener('click', function (event){
  event.preventDefault();
  render(arr);
})

btnTextFilter.addEventListener('click', function (event){
  event.preventDefault();
  let nameFilter = inputFilter.value;
  if ( !nameFilter )
  {
    alert("Vui lòng nhập từ khóa");
  }
  else
  {
    render(arrNameFilter(nameFilter));
  }
})
//---------------------------------------------------//
const gradeInput = document.getElementById('grades');
const btnGradeFilter = document.getElementById('btnGradeFilter');

function arrGradeFilter(gradeFilter)
{
  res = new Array
  for ( let i in arr )
  {
    if(arr[i][2] == gradeFilter)
    {
      res.push(arr[i]);
    }
  }
  return res
}

btnGradeFilter.addEventListener('click', function(event){
  event.preventDefault();
  let gradeFilter = gradeInput.value;
  render(arrGradeFilter(gradeFilter));
});
//---------------------------------------------------//
const gradeHeader = document.getElementById('gradeHeader');
let checkCount = 0;
gradeHeader.addEventListener('click', function(event){
  event.preventDefault();
  checkCount++;
  if ( checkCount % 2 == 0 )
  {
    render((arrTemp.sort((a, b) => a[1] - b[1])));
  }
  else
  {
    render((arrTemp.sort((a, b) => b[1] - a[1])));
  }
});
//---------------------------------------------------//
const btnFilterAll = document.getElementById('btnFilterAll');

function arrFilterAll (nameFilter, gradeFilter)
{
  let arrName = arrNameFilter(nameFilter);
  let arrGrade = arrGradeFilter(gradeFilter);
  let res = arrName.filter(e => arrGrade.includes(e));
  return res;
}

btnFilterAll.addEventListener('click', function(event){
  event.preventDefault();
  let nameFilter = inputFilter.value;
  let gradeFilter = gradeInput.value;
  render(arrFilterAll(nameFilter, gradeFilter));
});
