{
    onEnter(log, args, state)
    {
      this.q = args[0]
      this.n = args[1]
      this.p = args[2]
      log("entering crypto_scalarmult_curve25519_tweet()");
      log(state.hexdump(this.n, 32));
      log(state.hexdump(this.p, 32));
    },
    onLeave(log, retval, state)
    {
      log("leaving crypto_scalarmult_curve25519_tweet()");
      log(state.hexdump(this.q, 32));
    }
}
