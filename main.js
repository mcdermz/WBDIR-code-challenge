'use strict'

if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

$('#file-upload').on('change', function (e){
  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = function (e){
    const text = e.target.result
    $('#render').html(htmlify(text))
  }

  reader.readAsText(file)
})

function htmlify(text) {
  return '<h1>hello world<h1>'
}
