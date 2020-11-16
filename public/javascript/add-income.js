const user_id = document.querySelector('input[name="user-id"]').value;

const addIncomeHandler = async function(event) {
  event.preventDefault();

  
  const amount = document.querySelector('input[name="income-amount"]').value;
  

  await fetch(`/api/income`, {
    method: "POST",
    body: JSON.stringify({
      amount,
      user_id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace('/dashboard');
};

document.querySelector('#add-income-form').addEventListener('submit', addIncomeHandler);


