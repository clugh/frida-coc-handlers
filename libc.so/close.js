{
  onEnter(log, args, state)
  {
    this.fd = args[0];
    if(state.sockfd && this.fd.toInt32() == state.sockfd.toInt32())
    {
      state.sockfd = false;
      filename = "./session-" + Process.getCurrentThreadId() + ".json";
      log("writing " + filename + " ...");
      send(
      {
        from: "/close",
        filename: filename,
        json: JSON.stringify(state.events)
      });
      state.events = [];
    }
  }
}
