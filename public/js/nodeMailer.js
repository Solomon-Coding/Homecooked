async function emailFormHandler(event) {
  event.preventDefault();

  const recipient = document.querySelector('#emailRecipient').value;
  const subject = document.querySelector('#emailSubject').value;
  const message = document.querySelector('#emailMessage').value;
console.log(recipient)
console.log(subject)
console.log(message)
  const response = await fetch(`/api/recipes/send`,{
    method: 'POST',
    body:JSON.stringify({
      recipient,
      subject,
      message,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

document
  .querySelector('.emailForm')
  .addEventListener('submit', emailFormHandler);
