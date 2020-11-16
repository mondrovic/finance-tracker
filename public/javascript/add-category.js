const newFormHandler = async function (event) {
    event.preventDefault();
  
    const category_name = document.querySelector('input[name="category-name"]').value;
  
    if (category_name) {
      const response = await fetch(`/api/categories`, {
        method: "POST",
        body: JSON.stringify({
          category_name,
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
  
  document.querySelector("#new-category-form").addEventListener("submit", newFormHandler);
  