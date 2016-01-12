{
  onEnter(log, args, state)
  {
    this.state = args[0]
    this.in = args[1];
    this.length = args[2];
    log("blake2b_update()");
    log(state.hexdump(this.in, this.length.toInt32()));
  }
}
