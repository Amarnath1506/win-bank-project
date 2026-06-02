
const users = {
customer:{
email:'customer@winbank.in',
password:'Customer@123',
role:'customer'
},
admin:{
email:'admin@winbank.in',
password:'Admin@123',
role:'admin'
}
};

function login(){

const role=document.getElementById('role').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

if(!role || !email || !password){
alert('Please enter all fields');
return;
}

const user=users[role];

if(email===user.email && password===user.password){

document.getElementById('loginPage').classList.add('hidden');
document.getElementById('appPage').classList.remove('hidden');

document.getElementById('loggedUser').innerText=email;

if(role==='admin'){
document.querySelector('.admin-only').classList.remove('hidden');
}

}
else{
alert('Invalid credentials');
}
}

function logout(){
location.reload();
}

function showPage(id,element){

document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
document.getElementById(id).classList.add('active');

document.querySelectorAll('.nav').forEach(n=>n.classList.remove('active'));
element.classList.add('active');

document.getElementById('pageTitle').innerText=element.innerText;
}

function addTransaction(desc,amount){

let row=`<tr>
<td>${desc}</td>
<td>₹${amount}</td>
<td>Completed</td>
</tr>`;

document.getElementById('txnTable').innerHTML += row;
document.getElementById('dashboardTxn').innerHTML += row;
}

function fundTransfer(){

const ben=document.getElementById('beneficiary').value;
const amount=document.getElementById('transferAmount').value;
const otp=document.getElementById('transferOtp').value;

if(!ben || !amount || !otp){
alert('Enter all transfer details');
return;
}

if(otp!=='654321'){
alert('Invalid OTP');
return;
}

addTransaction('Transfer to '+ben,amount);

alert('Fund Transfer Successful');
}

function payBill(){

const type=document.getElementById('billType').value;
const amount=document.getElementById('billAmount').value;
const otp=document.getElementById('billOtp').value;

if(!amount || !otp){
alert('Enter bill details');
return;
}

if(otp!=='654321'){
alert('Invalid OTP');
return;
}

addTransaction(type+' Bill Payment',amount);

alert('Bill Payment Successful');
}

function downloadStatement(){
alert('Statement Downloaded');
}
