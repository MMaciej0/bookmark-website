function validation() {
  const form = document.getElementById("form");
  const email = document.getElementById("email");
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value.match(pattern)) {
    form.classList.remove("invalid");
    email.style.outline = "3px solid lightgreen";
  } else {
    form.classList.add("invalid");
    email.style.outline = "none";
  }

  if (email.value == "") {
    form.classList.remove("invalid");
    email.style.outline = "none";
  }
}
