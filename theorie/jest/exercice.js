function hello(name) {
  return 'Hello ' + name;
}

function pileOuFace(random) {
  return random() > 0.5 ? 'pile' : 'face';
}

exports.hello = hello;
exports.pileOuFace = pileOuFace;
