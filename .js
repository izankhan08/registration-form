// Select the form and add an event listener to submit button
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Define the handleSubmit function
function handleSubmit(event) {
  event.preventDefault(); // prevent the default form submission behavior

  // Get the input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Do something with the input values (in this case, just log them to the console)
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);

  // Clear the form
  form.reset();
}
