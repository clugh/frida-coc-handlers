{
  onEnter(log, args, state)
  {
    this.pk = args[0];
    this.sk = args[1];
  },
  onLeave(log, retval, state)
  {
    if(state.sockfd)
    {
      send(
      {
        from: "/coc",
        json: JSON.stringify(
        {
          type: "keypair",
          pk: state.hexdump(this.pk, 32),
          sk: state.hexdump(this.sk, 32)
        })
      });
    }
  }
}
