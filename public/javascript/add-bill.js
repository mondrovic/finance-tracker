const newFormHandler = async function (event) {
  event.preventDefault();

  const bill_name = document.querySelector('input[name="bill-name"]').value;
  const amount = document.querySelector('input[name="bill-amount"]').value;
  const category_id = document.querySelector('select[name="category_id"]').value;
  console.log(bill_name + " / " + amount + " / " + category_id);

  if (bill_name && amount) {
    const response = await fetch(`/api/bills`, {
      method: "POST",
      body: JSON.stringify({
        bill_name,
        amount,
        category_id,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#new-bill-form")
  .addEventListener("submit", newFormHandler);
