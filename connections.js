function openSection(button, info=false) {
  button_block = button.id+"_block"
  if (info){
    var file = button.id+".html"
  }
  else{
    var file = button.id+ "/" + button.id+".html"
  }
  if (!button.open) {
    document.getElementById(button_block).innerHTML='<object data='+ file + ' width=100%></object>';
    button.open = true
  }
  else {
    document.getElementById(button_block).innerHTML='';
    button.open = false
  }
}
