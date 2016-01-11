{
  onEnter(log, args, state)
  {
    this.message = args[0];
    this.ciphertext = args[1];
    this.length = args[2];
    this.nonce = args[3];
    this.sk = args[4];
    log("entering crypto_secretbox_xsalsa20poly1305_tweet_open()");
    log(state.hexdump(this.sk, 32));
    log(state.hexdump(this.ciphertext, this.length.toInt32()));
  },
  onLeave(log, retval, state)
  {
    log("leaving crypto_secretbox_xsalsa20poly1305_tweet_open()");
    log(state.hexdump(this.message, this.length.toInt32()));
  }
}
