'use strict'

if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

$('#file-upload').on('change', readAndAppendFile)

function readAndAppendFile(e){
  const file = e.target.files[0]
  const reader = new FileReader()

  reader.onload = function (e){
    const text = e.target.result
    $('#render').html(htmlify(text))
  }

  reader.readAsText(file)
}

function htmlify(string) {
  const text = JSON.parse(string)
  const htmlToRender = generateHtml(text)

  return htmlToRender
}

function generateHtml(text) {

  if (typeof text === 'string') {
    return text
  } else if (Array.isArray(text)) {
    return generateHtml(text[0])
  } else {
    return `<${text.tag}>${generateHtml(text.content)}</${text.tag}>`
  }
}
