document.querySelector("form").addEventListener("submit", handleSubmit);

function handleSubmit(e) {
   e.preventDefault();

   const data = document.getElementById("numInput").value;
   console.log(data);
   document.getElementById("numInput").value = "";
}
