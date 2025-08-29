document.getElementById("addCourseForm").addEventListener("submit", function(e){
  e.preventDefault();

  let courseName = document.getElementById("courseName").value;
  let courseDesc = document.getElementById("courseDesc").value;

  let li = document.createElement("li");
  li.textContent = courseName + " - " + courseDesc;

  document.getElementById("courseList").appendChild(li);

  // reset fields
  document.getElementById("courseName").value = "";
  document.getElementById("courseDesc").value = "";
});
