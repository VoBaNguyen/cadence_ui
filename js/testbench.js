// Handle dropdown selection
$(".ic-dropdown-item").bind("click", (e) => {
  dropdown = e.target.closest(".dropdown");
  dropdownValue = dropdown.querySelector(".dropdown-value");
  dropdownValue.innerHTML = e.target.innerHTML;
  dropdownValue.setAttribute("value", e.target.getAttribute("value"));
});

// Tree view
$(".symbol-expand")
  .before()
  .bind("click", (e) => {
    treeBranch = e.target.closest(".tree-branch");
    console.log(treeBranch);
    treeBranch.querySelector(".tree-nested").classList.toggle("active");
    e.target.classList.toggle("symbol-collapse");
  });

console.log($(".symbol-expand").before());
