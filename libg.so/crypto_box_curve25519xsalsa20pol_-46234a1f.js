{
  onEnter(log, args, state)
  {
    this.ciphertext = args[0];
    this.message = args[1];
    this.length = args[2];
    this.unknown = args[3];
    this.nonce = args[4];
    this.pk = args[5];
    this.sk = args[6];
    send(
    {
      from: "/coc",
      json: JSON.stringify(
      {
        type: "crypto_box",
        serverkey: state.hexdump(this.pk, 32)
      })
    });
  }
}
