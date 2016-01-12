{
  onEnter(log, args, state)
  {
    this.k = args[0];
    this.pk = args[1];
    this.sk = args[2];
    log("entering crypto_box_curve25519xsalsa20poly1305_tweet_beforenm()");
    log(state.hexdump(this.pk, 32));
    log(state.hexdump(this.sk, 32));
  },
  onLeave(log, retval, state)
  {
    log("leaving crypto_box_curve25519xsalsa20poly1305_tweet_beforenm()");
    log(state.hexdump(this.k, 32));
  }
}
