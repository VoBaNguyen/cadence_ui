// Handle dropdown selection
$(".ic-dropdown-item").bind("click", (e) => {
  dropdown = e.target.closest(".dropdown");
  dropdownValue = dropdown.querySelector(".dropdown-value");
  dropdownValue.innerHTML = e.target.innerHTML;
  dropdownValue.setAttribute("value", e.target.getAttribute("value"));
});
