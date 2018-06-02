const border = [
  '<div class="border-section">╔</div>', //0
  '<div class="border-section-rt">╗</div>', //1
  '<div class="border-section">╚</div>', //2
  '<div class="border-section-rt">╝</div>', //3
  '<div class="border-section">═</div>', //4
  '<div class="border-section">║</div>', //5
  '<div class="border-section-rt">║</div>', //6
  '<div class="border-section">[ ]</div>', //7
  '<div class="eol"></div>'  //8
]
let document1 = {
  border: '',
  content: '<div class="content" id="content1" contenteditable="true">/<div>'
}

document1.border += border[0] + border[4] + border[7];
for (var i = 0; i < 100; i++ ) document1.border += border[4];
document1.border += border[1] + border[8];
for (var j = 0; j < 20; j++ ) document1.border += border[5] + border[6] + border[8];
document1.border += border[2]
for (var i = 0; i < 104; i++ ) document1.border += border[4];
document1.border += border[3] + border[8];

document.getElementById("editor").innerHTML =
`
<div class='window' id='document1'>
${document1.border}
${document1.content}
</div>
`

document.getElementById("content1").innerHTML = "test";
