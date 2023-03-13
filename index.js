const form = document.querySelector('#user-form');
const dobInput = document.querySelector('#dob');
const entries = JSON.parse(localStorage.getItem('user-entries') || '[]');

const displayEntries = () => {
  const rows = entries.map(({ name, email, password, dob, acceptTermsAndConditions }) => {
    return `<tr>
      <td>${name}</td>
      <td>${email}</td>
      <td>${password}</td>
      <td>${dob}</td>
      <td>${acceptTermsAndConditions}</td>
    </tr>`;
  }).join('');

  const table = `<table border="10"><tr>
    <th>Name</th>
    <th>Email Address</th>
    <th>Password</th>
    <th>Dob</th>
    <th>Accepted terms?</th>
    </tr>${rows}</table>`;

  document.querySelector('#user-entries').innerHTML = table;
};

const saveEntry = (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const dob = dobInput.value;
  const acceptTermsAndConditions = document.querySelector('#acceptTerms').checked;

  entries.push({ name, email, password, dob, acceptTermsAndConditions });

  localStorage.setItem('user-entries', JSON.stringify(entries));
  displayEntries();
};

dobInput.min = `${new Date().getFullYear() - 55}-01-01`;
dobInput.max = `${new Date().getFullYear() - 18}-12-31`;
form.addEventListener('submit', saveEntry);
displayEntries();
