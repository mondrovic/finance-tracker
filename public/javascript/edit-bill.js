const billId = document.querySelector('input[name="bill-id"]').value;

const editBillHandler = async function(event) {
  event.preventDefault();

  const bill_name = document.querySelector('input[name="bill-name"]').value;
  const amount = document.querySelector('input[name="bill-amount"]').value;
  const category_id = document.querySelector('select[name="category_id"]').value;

  await fetch(`/api/bills/${billId}`, {
    method: "PUT",
    body: JSON.stringify({
      bill_name,
      amount,
      category_id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/bills/${billId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};


document.querySelector('#edit-bill-form').addEventListener('submit', editBillHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);


