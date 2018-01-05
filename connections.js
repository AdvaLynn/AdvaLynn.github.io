function openSection(button) {
  if (button.id == "education_btn" && !button.open) {
    document.getElementById('education_block').innerHTML='<object data="education.html" ></object>';
    button.open = true
  }
  else if (button.id == "education_btn") {
    document.getElementById('education_block').innerHTML='';
    button.open = false
  }
  if (button.id == "experience_btn" && !button.open) {
    document.getElementById('experience_block').innerHTML='<object data="experience.html" ></object>';
    button.open = true
  }
}
