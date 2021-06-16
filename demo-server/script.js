const {
  KeyManager,
} = require('@holo-host/cryptolib')
const crypto = require('crypto')


function randomBytes(length = 32) {
  return crypto.randomBytes(length);
}

function logkey (key) {
  let str = "new Uint8Array(["

  for (var i = 0; i < key.length; i++) {
    str+= `${key[i]},`
  }

  str += "]),"

  console.log(str)
}

for (var i = 0; i < 500; i++) {
  const seed = randomBytes(32)
  const keys = new KeyManager(seed)
  logkey(keys.publicKey())
}
