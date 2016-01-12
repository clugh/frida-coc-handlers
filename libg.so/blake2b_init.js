{
  onEnter(log, args, state)
  {
    this.state = args[0]
    this.length = args[1]
    log("blake2b_init()");
    log(this.length.toInt32())
  }
}
