{
  onEnter(log, args, state)
  {
    this.message = args[0];
    this.ciphertext = args[1];
    this.length = args[2];
    this.unknown = args[3];
    this.nonce = args[4];
    this.s = args[5];
    state.ciphertext = state.hexdump(this.ciphertext, this.length.toInt32());
  },
  onLeave(log, retval, state)
  {
    state.events.push(
    {
      type: "recv",
      messageid: state.messageid,
      header: state.header,
      message: state.hexdump(this.message, this.length.toInt32()),
      s: state.hexdump(this.s, 32),
      nonce: state.hexdump(this.nonce, 24),
      ciphertext: state.ciphertext,
      buffer: state.buffer
    });
    state.header = false;
    state.buffer = false;
    state.ciphertext = false;
  }
}
