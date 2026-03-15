const mailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const pNumberTest = /^0[0-9]{9}$/
const passTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
const alphaTest = /^[a-zA-ZÀ-ỹ\s]+$/

const nameInput = document.getElementById('input-name');
const emailInput = document.getElementById('input-email');
const pNumberInput = document.getElementById('input-phone-number');
const passInput = document.getElementById('input-password');
const rePassInput = document.getElementById('input-repassword');

const btnSubmit = document.getElementById('btn-signup');

btnSubmit.addEventListener('click', function(event){
  event.preventDefault();
  let name = nameInput.value;
  let mail = emailInput.value;
  let pNumber = pNumberInput.value;
  let pass = passInput.value;
  let rePass = rePassInput.value;
  if ( name && pNumber && mail && pass && rePass && pass == rePass )
  {
    const container = document.getElementById('container');
    container.innerHTML = "<h2>Chúc mừng đăng ký thành công</h2>" + name;
  }
})

rePassInput.addEventListener('blur', function (event){
  event.preventDefault();
  let rePassValue = rePassInput.value;
  if ( !passTest.test(rePassValue) )
  {
    let warnRePass = document.getElementById('warn-repassword');
    warnRePass.textContent = 'Không trống, ≥ 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 số';
    warnRePass.style.color = 'red';
  }
  else
  {
    let warnRePass = document.getElementById('warn-repassword');
    warnRePass.textContent = '';
  }
});

passInput.addEventListener('blur', function (event){
  event.preventDefault();
  let passValue = passInput.value;
  if ( !passTest.test(passValue) )
  {
    let warnPass = document.getElementById('warn-password');
    warnPass.textContent = 'Không trống, ≥ 8 ký tự, có ít nhất 1 chữ hoa, 1 chữ thường, 1 số';
    warnPass.style.color = 'red';
  }
  else
  {
    let warnPass = document.getElementById('warn-password');
    warnPass.textContent = '';
  }
});
pNumberInput.addEventListener('blur', function (event){
  event.preventDefault();
  let pNumberValue = pNumberInput.value;
  if ( !pNumberTest.test(pNumberValue) )
  {
    let warnPnumber = document.getElementById('warn-pnumber');
    warnPnumber.textContent = 'Không trống, 10 chữ số, bắt đầu bằng `0`';
    warnPnumber.style.color = 'red';
  }
  else
  {
    let warnPnumber = document.getElementById('warn-pnumber');
    warnPnumber.textContent = '';
  }
});

nameInput.addEventListener('blur', function (event){
  event.preventDefault();
  let nameValue = nameInput.value;
  if ( !alphaTest.test(nameValue) )
  {
    let warnName = document.getElementById('warn-name');
    warnName.textContent = 'Không trống, ≥ 3 ký tự, chỉ chứa chữ cái và khoảng trắng';
    warnName.style.color = 'red';
  }
  else
  {
    let warnName = document.getElementById('warn-name');
    warnName.textContent = '';
  }
});

emailInput.addEventListener('blur', function (event){
  event.preventDefault();
  let emailValue = emailInput.value;
  if ( !mailTest.test(emailValue) )
  {
    let warnMail = document.getElementById('warn-email');
    warnMail.textContent = 'Không trống, đúng định dạng `name@domain.com`';
    warnMail.style.color = 'red';
  }
  else
  {
    let warnMail = document.getElementById('warn-email');
    warnMail.textContent = '';
  }
});
