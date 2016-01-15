{
  onEnter(log, args, state)
  {
    this.s = args[0];
    this.pk = args[1];
    this.sk = args[2];
    send(
    {
      from: "/coc",
      json: JSON.stringify(
      {
        type: "beforenm",
        serverkey: state.hexdump(this.pk, 32)
      })
    });
  }
}
