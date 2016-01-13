{
  onEnter(log, args, state)
  {
    this.ciphertext = args[0];
    this.message = args[1];
    this.length = args[2];
    this.unknown = args[3];
    this.nonce = args[4];
    this.s = args[5];
    state.message = state.hexdump(this.message, this.length.toInt32());
    state.s = state.hexdump(this.s, 32);
    state.nonce = state.hexdump(this.nonce, 24);
  },
  onLeave(log, retval, state)
  {
    state.ciphertext = state.hexdump(this.ciphertext, this.length.toInt32());
  }
}
