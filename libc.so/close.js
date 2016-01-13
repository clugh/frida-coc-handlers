{
  onEnter(log, args, state)
  {
    this.fd = args[0];
    if(state.sockfd && this.fd.toInt32() == state.sockfd.toInt32())
    {
      state.sockfd = false;
      log("session closed");
    }
  }
}
