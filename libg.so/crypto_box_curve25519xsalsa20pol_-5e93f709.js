{
  onEnter(log, args, state)
  {
    this.pk = args[0];
    this.sk = args[1];
    log("entering crypto_box_curve25519xsalsa20poly1305_tweet_keypair()");
  },
  onLeave(log, retval, state)
  {
    log("leaving crypto_box_curve25519xsalsa20poly1305_tweet_keypair()");
    log(state.hexdump(this.pk, 32));
    log(state.hexdump(this.sk, 32));
  }
}
