{
  onEnter(log, args, state)
  {
    this.sockfd = args[0];
    this.buffer = args[1];
    this.length = args[2];
    this.flags = args[3];
  },
  onLeave(log, retval, state)
  {
    if(state.sockfd && this.sockfd.toInt32() == state.sockfd.toInt32())
    {
      if(this.length == 7)
      {
        state.messageid = state.hexdump(this.buffer, 2);
        state.header = state.hexdump(this.buffer, 7);
      }
      else
      {
        if(this.length > 0 && state.header)
        {
          state.buffer = state.hexdump(this.buffer, this.length.toInt32());
          if(state.messageid == "4e84")
          {
            send(
            {
              from: "/coc",
              json: JSON.stringify(
              {
                type: "recv",
                messageid: state.messageid,
                header: state.header,
                buffer: state.buffer
              })
            });
            state.messageid = false;
            state.header = false;
            state.buffer = false;
          }
        }
      }
    }
  }
}
