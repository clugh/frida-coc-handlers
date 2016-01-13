{
  onEnter(log, args, state)
  {
    this.message = args[0];
    this.ciphertext = args[1];
    this.length = args[2];
    this.unknown = args[3];
    this.nonce = args[4];
    this.s = args[5];
    if(state.messageid)
    {
      state.ciphertext = state.hexdump(this.ciphertext, this.length.toInt32());
    }
  },
  onLeave(log, retval, state)
  {
    if(state.messageid)
    {
      send(
      {
        from: "/coc",
        json: JSON.stringify(
        {
          type: "recv",
          messageid: state.messageid,
          header: state.header,
          message: state.hexdump(this.message, this.length.toInt32()),
          s: state.hexdump(this.s, 32),
          nonce: state.hexdump(this.nonce, 24),
          ciphertext: state.ciphertext,
          buffer: state.buffer
        })
      });
      state.messageid = false;
      state.header = false;
      state.message = false;
      state.s = false;
      state.nonce = false;
      state.ciphertext = false;
      state.buffer = false;
    }
  }
}
