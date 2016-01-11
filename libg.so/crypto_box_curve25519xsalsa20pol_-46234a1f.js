{
  onEnter(log, args, state)
  {
    this.ciphertext = args[0];
    this.message = args[1];
    this.length = args[2];
    this.nonce = args[3];
    this.pk = args[4];
    this.sk = args[5];
    log("entering crypto_box_curve25519xsalsa20poly1305_tweet()");
    log(state.hexdump(this.pk, 32));
    log(state.hexdump(this.sk, 32));
    log(state.hexdump(this.message, this.length.toInt32()));
  },
  onLeave(log, retval, state)
  {
    log("leaving crypto_box_curve25519xsalsa20poly1305_tweet()");
    log(state.hexdump(this.ciphertext, this.length.toInt32()));
  }
}
