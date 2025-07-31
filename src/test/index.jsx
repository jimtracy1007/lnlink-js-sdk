import { LnlinkSdk } from "../index.js";
import { useRef, useEffect } from "react";
export default function Test() {
  const lnlinkSdkRef = useRef(null);
  useEffect(() => {
    lnlinkSdkRef.current = new LnlinkSdk({
      env: "development",
      singer: window.nostr,
      sendTo: "npub1reg0m7776sqmjsgrw59pq9un2u430g7pxeygyszge6nct5sv5fks3n9f4n",
    });
  }, []);
  return (
    <>
      <div>
        <h2>Lnd test</h2>
        <div
          style={{
            display: "flex",
            width: "500px",
            margin: "0 auto",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button
            onClick={async () => {
              const res = await lnlinkSdkRef.current.fee.getFeeRate();
              console.log(res);
            }}
          >
            getFeeRate
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.getInfo()}>
            getInfo
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.startLitd()}>
            startLitd
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.stopLitd()}>
            stopLitd
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.restartLitd()}>
            restartLitd
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.getState()}>
            getState
          </button>
          <button onClick={() => lnlinkSdkRef.current.litd.genseed()}>
            genseed
          </button>
          {/* 
          ["ability","bracket","actress","tail","siren","critic","mandate","suggest","uphold","outside","airport","perfect","cave","basic","jaguar","strike","fiction","roast","repair","sand","upgrade","alcohol","unique","hedgehog"]
          */}

          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.initWallet({
                password: "12345678",
                seed: [
                  "abandon",
                  "above",
                  "stumble",
                  "there",
                  "denial",
                  "clutch",
                  "dove",
                  "sport",
                  "still",
                  "top",
                  "river",
                  "hole",
                  "prison",
                  "file",
                  "kick",
                  "correct",
                  "toss",
                  "mirror",
                  "start",
                  "stairs",
                  "metal",
                  "easily",
                  "pretty",
                  "flash",
                ],
              })
            }
          >
            initWallet
          </button>
          {/* 
           walletBalance
           */}
          <button onClick={() => lnlinkSdkRef.current.litd.walletBalance()}>
            walletBalance
          </button>
          {/* 
           newAddress
           */}
          <button onClick={() => lnlinkSdkRef.current.litd.newAddress()}>
            newAddress
          </button>
          {/* 
           openChannel
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.openChannel({
                host: "regtest.lnfi.network:9735",
                node_pubkey:
                  "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                amount: 1000000,
                push_amount: 0,
                sat_per_vbyte: 3,
              })
            }
          >
            openChannel
          </button>
          {/* 
           listChannels
           */}
          <button onClick={() => lnlinkSdkRef.current.litd.listChannels()}>
            listChannels
          </button>
          {/* 
           closeChannel
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.closeChannel({
                channel_point_str:
                  "28c0fe4fb81e4323eba900ebf4bf52125c9147128794c68899cdce6cafde75ef:0",
                sat_per_vbyte: 3,
              })
            }
          >
            closeChannel
          </button>
          {/* 
           connectPeer
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.connectPeer({
                host: "regtest.lnfi.network:9735",
                pubkey:
                  "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                perm: true,
              })
            }
          >
            connectPeer
          </button>
          {/* 
           addInvoice
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.addInvoice({
                amt: 1000,
                memo: "test",
              })
            }
          >
            addInvoice
          </button>
          {/* 
           payInvoice
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.payInvoice({
                payment_request:
                  "lnbcrt10u1p58mcw2pp5v86f2l9zfpk00t6vg4ffk9zqxwv0luwn2wpd7jjpq8nyc3jg38psdxvdec82c33wymkzmt4ddk8svrxdfmnwdnyw36kc7n6dp5x5mtxvcuxgaf4d3ukuemhxvmnwepc895xsunddg6rjae58pehxmr5dcmhjhmwwp6kyvfexekhxwtv8paryvnpwsuhxdryvachwangw3kn2atddq6kzvrvwfcxzanewce8ja34d43k56rkweu8jdtcwv68zmrsvdescqzzsxqrrsssp5sychq0565pukmpqegtdmcxme6khztnjg2mlrctg2guxyavhlmsws9qxpqysgqyqswdkd79nhds66x3s0r7jsd643h57ejeajklqxqnhnrk9gwu9eqt4gmsv8ml93u3rgu7lucj9dnae2dedezlkaj0l8cvmwyc7mf0pgqpy5l69",
              })
            }
          >
            payInvoice
          </button>

          {/* 
            taprootassets
          */}
          {/* 
          newTapdAddr
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.newTapdAddr({
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                amt: 1000 * 100,
              })
            }
          >
            newTapdAddr
          </button>

          {/* 
            unlock
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.unlockWallet({
                password: "12345678",
              })
            }
          >
            unlock
          </button>

          {/* 
           sendTapdAssets
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.sendTapdAssets({
                tap_addrs: [
                  "taprt1qqqszqspqqzzpaavn8evq683z478suqj75xtqs6rw5zuxzwxmp59uy6umpypk85aq5ssxwz9ltzhu3xfyll7uysw85pfwsv8u8ltfty0qgvgx9q8sw7eaf9xqcssyjx7ux3zsyphj0a2f4y9x8quqhv80eelq2z53x59t73jlxxaf9gnpqssyv26dawu7d0q0hvc9t7myyuathppjj80qze8vyjqfd3e2nfqnjcwpgpl6qlgpshksctndpkkz6tv8ghj7mtpd9kxymmc9e6x2undd9hxzmpwd35kw6r5de5kueeww3hkgcte8g6rgvcvgz9ve",
                ],
              })
            }
          >
            sendTapdAssets
          </button>
          {/* 
           createTapdChannel
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.createTapdChannel({
                asset_amount: 800 * 100,
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                node_pubkey:
                  "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                fee_rate_sat_per_vbyte: 4,
              })
            }
          >
            createTapdChannel
          </button>

          {/* 
           addTapdInvoice
           {
            "accepted_buy_quote": {
                "peer": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                "id": "1f590e34863111bd8d20773ce9162d6892fa58bfaee595c8f737d5ee52b067a6",
                "scid": "17813942070653511590",
                "asset_max_amount": "1000",
                "ask_asset_rate": {
                    "coefficient": "10000000000000",
                    "scale": 6
                },
                "expiry": "1752747360371",
                "min_transportable_units": "35"
            },
            "invoice_result": {
                "r_hash": "3b87d0f614873e967a850fed492573247d69320e79e96a7b8a6775ccfe8f15d8",
                "payment_request": "lnbcrt100u1p583np5pp58wrapas5sulfv759plk5jftny37kjvsw085k57u2va6uel50zhvqdqqcqzzsxqzfvrzjqf7j7xl8rhpycc932pcy382w7f6d664vydks93nuwmtfxh00hft2daeh6hh99vr85cqqqqlgqqqqqqgq2qsp574zwrzuv6tggrua2pz5tre8c3e50tcee8tp007a45cppwqp23cgq9qxpqysgq6hllvm5qxdgz97m43hptylwrs5f0exv8lcv8ur3fx8u5rzu5vrk343x5jh7ufc9qvc5z45500czdjegkzf4dt5ywl069jhqp8yt9s8cq508pmz",
                "add_index": "2",
                "payment_addr": "f544e18b8cd2d081f3aa08a8b1e4f88e68f5e3393ac2f7fbb5a60217002a8e10"
            }
        }
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.addTapdInvoice({
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                asset_amount: 10 * 100,
              })
            }
          >
            addTapdInvoice
          </button>

          {/* 
          decodeAssetPayReq
                {
            "asset_amount": "1000",
            "decimal_display": {
                "decimal_display": 2
            },
            "asset_group": {
                "raw_group_key": "02e657e387215cbdfc2b93c0fad99457c37f84b1afcf05ee03cc33fe259d34f2ca",
                "tweaked_group_key": "033845fac57e44c927ffee120e3d02974187e1feb4ac8f021883140783bd9ea4a6",
                "asset_witness": "014033578d35c172bb6c51b10b489002651df31eee7006cddf50c4f8baf418fdf2a9a4f23b3e78cbc32d83357692fd1ed8de1bcea618f81d336716433737e88c59a0",
                "tapscript_root": ""
            },
            "genesis_info": {
                "genesis_point": "fe5f7860a90a7e58f72ffb60ec6322247a8b15b92390ec87cc9696702945e384:0",
                "name": "USDT",
                "meta_hash": "009dc0aa29bd1c320fa9b33e15227169f23b77ab6ca845fabcdab2249b95568c",
                "asset_id": "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                "asset_type": "NORMAL",
                "output_index": 0
            },
            "pay_req": {
                "route_hints": [
                    {
                        "hop_hints": [
                            {
                                "node_id": "027d2f1be71dc24c60b15070489d4ef274dd6aac236d02c67c76d6935defba56a6",
                                "chan_id": "17813942070653511590",
                                "fee_base_msat": 1000,
                                "fee_proportional_millionths": 1,
                                "cltv_expiry_delta": 80
                            }
                        ]
                    }
                ],
                "blinded_paths": [],
                "features": {
                    "8": {
                        "name": "tlv-onion",
                        "is_required": true,
                        "is_known": true
                    },
                    "14": {
                        "name": "payment-addr",
                        "is_required": true,
                        "is_known": true
                    },
                    "17": {
                        "name": "multi-path-payments",
                        "is_required": false,
                        "is_known": true
                    },
                    "25": {
                        "name": "route-blinding",
                        "is_required": false,
                        "is_known": true
                    }
                },
                "destination": "03f716ce8c97785ec3889f119f2ea7cd7a8b6dc8e0602745b72d2cb93aad96a13f",
                "payment_hash": "3b87d0f614873e967a850fed492573247d69320e79e96a7b8a6775ccfe8f15d8",
                "num_satoshis": "10000",
                "timestamp": "1752747060",
                "expiry": "300",
                "description": "",
                "description_hash": "",
                "fallback_addr": "",
                "cltv_expiry": "80",
                "payment_addr": "f544e18b8cd2d081f3aa08a8b1e4f88e68f5e3393ac2f7fbb5a60217002a8e10",
                "num_msat": "10000000"
            }
        }

          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.decodeAssetPayReq({
                payment_request:
                  "lnbcrt100u1p58menhpp5r4739gz2dg03kkn28n5fp6f52zz8mfjz9gae0s57fc3ts9s4ql2sdqqcqzzsxqzfvrzjqf7j7xl8rhpycc932pcy382w7f6d664vydks93nuwmtfxh00hft2dameernlkdhf6gqqqqlgqqqqqqgq2qsp5xq8y585c088kdach99yvuuy76nxyfch35eshdy547an5pmvqs86q9qxpqysgq26ye2u73h8r0qpemhevnwcrzj0yu5a2lx9yx7fxglv6k6sslpau95dpqte0386uae4y3jukgaz5vpx9qvs9y7j47pzxm2vfmc3dk54sq2juj90",
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
              })
            }
          >
            decodeAssetPayReq
          </button>

          {/* 
          sendTapdPayment
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.litd.sendTapdPayment({
                asset_amount: 1000,
                asset_id:
                  "f7ac99f2c068f1157c787012f50cb043437505c309c6d8685e135cd8481b1e9d",
                payment_request:
                  "lnbcrt100u1p58meu7pp5u5y6y6gd8js6nfacm33eymg857ckjecxwnt777qk3e6fy2lz79gqdysf3hxv6fmv9ehxet5f9zr5e3hv93njwtxxf3nqd3cvccnzdfhvvmnsdesxyexvdfsvd3rqdpnxsenwdfsx43nxvpevvmxgwpk8q6k2vfnx43kgwp58qckyvt989jrkctdda6kuap6xycrqvp6cqzzsxqrrssrzjqfs8kgq4q0fel6yxesfkxl6de7j9af4g84437k4ceeuquy2h4ut33akfkxl3kcvatvqqqqlgqqqqqqgq2qsp5tpj6alqs3rchnalg6pmyfh8vasc508tjppzfqq8nlnlmfhxvlqwq9qxpqysgq92kdu4samapq4m97zr3kvf3ny88c3xengtucal6txm7g70hcjcnhpkx0q8gklqphvv2mrfgkeh7e7jajmz24e9z5l6xnycmhmwaklyqqghc7n9",
                outgoing_chan_id: "", //optional
              })
            }
          >
            sendTapdPayment
          </button>
        </div>
      </div>
      <div>
        <h2>RGB test</h2>
        <div
          style={{
            display: "flex",
            width: "500px",
            margin: "20px auto",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <button onClick={() => lnlinkSdkRef.current.rgb.getState()}>
            getState
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.startRGB()}>
            startRGB
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.stopRGB()}>
            stopRGB
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.restartRGB()}>
            restartRGB
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.getInfo()}>
            getInfo
          </button>
          <button onClick={() => lnlinkSdkRef.current.rgb.genseed("12345678")}>
            initWallet
          </button>
          {/* unlock */}
          <button onClick={() => lnlinkSdkRef.current.rgb.unlock("12345678")}>
            unlock
          </button>
          {/* walletBalance */}
          <button onClick={() => lnlinkSdkRef.current.rgb.walletBalance()}>
            walletBalance
          </button>
          {/* newAddress */}
          <button onClick={() => lnlinkSdkRef.current.rgb.newAddress()}>
            newAddress
          </button>
          {/* sendCoins */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.sendCoins({
                address:
                  "bcrt1p6vdwg0cj0ft070eavvw9j3thkh04h8x7fq2w0p8le8j6zjt00e2syu9e7h",
                amount: 200000,
              })
            }
          >
            sendCoins
          </button>

          {/* 
          createUtxos
            {
            "code": 0,
            "data": {},
            "msg": "success"
            }
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.createUtxos({
                num: 10,
                size: 300000,
                fee_rate: 5,
              })
            }
          >
            createUtxos
          </button>
          {/* 
          listUnspents
          */}
          <button onClick={() => lnlinkSdkRef.current.rgb.listUnspents()}>
            listUnspents
          </button>

          {/* 
          createRgbInvoice
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.createRgbInvoice({
                duration_seconds: 60 * 60,
              })
            }
          >
            createRgbInvoice
          </button>
          {/* 
            listPeers
          */}
          <button onClick={() => lnlinkSdkRef.current.rgb.listPeers()}>
            listPeers
          </button>
          {/* 
          connectPeer
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.connectPeer({
                pubkey:
                  "03b7153e278882e48e690acd0743305cbada86b131ab3388ccd782b45b02f064ef",
                host: "34.84.66.29:9736",
              })
            }
          >
            connectPeer
          </button>

          {/* channel */}
          <button onClick={() => lnlinkSdkRef.current.rgb.listChannels()}>
            listChannels
          </button>
          {/* 
            openChannel
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.openChannel({
                asset_id:
                  "rgb:cJ9fWFzO-snphAel-MC_HNrv-bp7s~n7-QqShKI5-LgA8Wys",
                asset_amount: 80000,
                fee_rate_sat_per_vbyte: 4,
              })
            }
          >
            openChannel
          </button>
          {/* 
            createInvoice
           */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.createInvoice({
                asset_id:
                  "rgb:cJ9fWFzO-snphAel-MC_HNrv-bp7s~n7-QqShKI5-LgA8Wys",
                asset_amount: 100,
              })
            }
          >
            createInvoice
          </button>
          {/* 
            decodeInvoice
          */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.decodeLnInvoice({
                invoice:
                  "lnbcrt30u1p58upfqdq9wfnkynp4qwm320383zpwfrnfptxswsestjad4p43xx4n8zxv67ptgkcz7pjw7pp5jufqtp4mephlawu7c2t0mlx4x8v0m3dl9gc8gzf5nzeh63kyzhkqsp5kk2grf9fcflpzcf22fd03mzcdcsyma29kajn7lkkm2s6ftp69fhs9qyysgqcqpcxqrrsslz5wfnkywnrfgukv46x0f8j6umwwp5yzetv94x5xh6gfee8vttzwqmhxlnwxuk4zu2ndp95jdfdf3n5zwzh09es7qryugtxc3exs9wnvzclx284f7rj9qup6wddc2cuatyjfjqlakmnnds37hky55qlmakwluejjfctwkpud5fwl7ln2g92w502ye952uslydllsqvnwe7n",
              })
            }
          >
            decodeLnInvoice
          </button>
          {/* 
          payInvoice
         */}
          <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.payInvoice({
                invoice:
                  "lnbcrt30u1p58upfqdq9wfnkynp4qwm320383zpwfrnfptxswsestjad4p43xx4n8zxv67ptgkcz7pjw7pp5jufqtp4mephlawu7c2t0mlx4x8v0m3dl9gc8gzf5nzeh63kyzhkqsp5kk2grf9fcflpzcf22fd03mzcdcsyma29kajn7lkkm2s6ftp69fhs9qyysgqcqpcxqrrsslz5wfnkywnrfgukv46x0f8j6umwwp5yzetv94x5xh6gfee8vttzwqmhxlnwxuk4zu2ndp95jdfdf3n5zwzh09es7qryugtxc3exs9wnvzclx284f7rj9qup6wddc2cuatyjfjqlakmnnds37hky55qlmakwluejjfctwkpud5fwl7ln2g92w502ye952uslydllsqvnwe7n",
              })
            }
          >
            payInvoice
          </button>

          {/* <button
            onClick={() =>
              lnlinkSdkRef.current.rgb.disconnectPeer({
                peer_pubkey: "",
              })
            }
          >
            disconnectPeer
          </button> */}
        </div>
      </div>
    </>
  );
}
