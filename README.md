# frida-coc-handlers

Run with:

    python tracer.py -U -i crypto_box_curve25519xsalsa20poly1305_tweet_keypair -i crypto_box_curve25519xsalsa20poly1305_tweet -i crypto_secretbox_xsalsa20poly1305_tweet -i crypto_secretbox_xsalsa20poly1305_tweet_open -i send -i recv -i close -X libNimsWrap.so com.supercell.clashofclans

For basic file handling support, use the modified version of tracer.py [here](https://raw.githubusercontent.com/clugh/frida-python/master/src/frida/tracer.py).
