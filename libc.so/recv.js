{
  onEnter(log, args, state)
  {
    this.sockfd = args[0]
    this.buffer = args[1]
    this.length = args[2]
    this.flags = args[3]
  },
  onLeave(log, retval, state)
  {
    if(this.sockfd.toInt32() == state.sockfd.toInt32())
    {
      if(this.length == 7)
      {
        state.messageid = state.hexdump(this.buffer, 2);
        log("recv(" + state.messageid + ")");
      }
      else if(state.messageid == "4e84")
      {
        log("recv(" + state.hexdump(this.buffer, this.length.toInt32()) + "")
      }
    }
  }
}
