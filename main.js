var main = document.querySelector('#main');
var pooSvgTpl = document.querySelector('#poo-svg');

var leftAim = document.querySelector('#left-aim-dot');
var rightAim = document.querySelector('#right-aim-dot');

main.innerHTML = pooSvgTpl.innerHTML;

var poo = document.querySelector('#poo-emoji');
var leftPupil = document.querySelector('#left-pupil');
var rightPupil = document.querySelector('#right-pupil');

var origLeftTransform = leftPupil.getAttribute('transform');
var origRightTransform = rightPupil.getAttribute('transform');

// Max X position on minor axis
var MVMT_WIDTH = 10;
// Max Y position on major axis
var MVMT_HEIGHT = 12;

var PUPIL_DISTANCE = 70;
var PUPIL_PCT_DOWN_FACE = 0.54;

console.log(poo.offsetLeft, poo.offsetTop, poo.offsetWidth, poo.offsetHeight);

function movePupils(leftX, leftY, rightX, rightY) {
  leftPupil.setAttribute('transform', 'translate(' + leftX + ', ' + leftY + ') ' + origLeftTransform);
  rightPupil.setAttribute('transform', 'translate(' + rightX + ', ' + rightY + ') ' + origRightTransform);
}

document.body.onmousemove = function (e) {
  var leftEyeX = poo.offsetLeft + poo.offsetWidth / 2 - PUPIL_DISTANCE / 2;
  var rightEyeX = poo.offsetLeft + poo.offsetWidth / 2 + PUPIL_DISTANCE / 2;
  var eyeY = poo.offsetTop + poo.offsetHeight * PUPIL_PCT_DOWN_FACE;

  var lx = Math.max(-MVMT_WIDTH, Math.min(e.clientX - leftEyeX, MVMT_WIDTH));
  var ly = Math.max(-MVMT_HEIGHT, Math.min(e.clientY - eyeY, MVMT_HEIGHT));
  var rx = Math.max(-MVMT_WIDTH, Math.min(e.clientX - rightEyeX, MVMT_WIDTH));
  var ry = Math.max(-MVMT_HEIGHT, Math.min(e.clientY - eyeY, MVMT_HEIGHT));

  movePupils(lx, ly, rx, ry);
};
