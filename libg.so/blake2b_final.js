{
  onEnter(log, args, state)
  {
    this.state = args[0]
    this.out = args[1];
    this.length = args[2];
    log("entering blake2b_final()");
  },
  onLeave(log, retval, state) {
    log("leaving blake2b_final()");
    log(state.hexdump(this.out, this.length.toInt32()));
  }
}
