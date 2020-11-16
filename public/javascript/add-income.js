const user_id = document.querySelector('input[name="user-id"]').value;

const editBillHandler = async function(event) {
  event.preventDefault();

  
  const amount = document.querySelector('input[name="income-amount"]').value;
  

  await fetch(`/api/income/${user_id}`, {
    method: "PUT",
    body: JSON.stringify({
      amount,
      user_id
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace('/dashboard');
};

document.querySelector('#edit-income-form').addEventListener('submit', editBillHandler);


