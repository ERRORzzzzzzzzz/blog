/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "be5baf3803edfcef9ae634271717e3c6"
  },
  {
    "url": "assets/css/0.styles.5b5feda9.css",
    "revision": "16b9dacb9e84bc312d01921070435cec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.41dbd96c.js",
    "revision": "d35947b6372b678128cd9760ad324d64"
  },
  {
    "url": "assets/js/100.ab308d7c.js",
    "revision": "cdbcf98c7338a2f06bc34d6388353596"
  },
  {
    "url": "assets/js/101.0526455d.js",
    "revision": "7e79488b74ef4e4903bcf981b60d09cc"
  },
  {
    "url": "assets/js/102.945d1df4.js",
    "revision": "9795d957437f61f6e67876b7e122b86f"
  },
  {
    "url": "assets/js/103.499f3df4.js",
    "revision": "c1875c7c0b58c886969158dd1cdf30b9"
  },
  {
    "url": "assets/js/104.81ae37c8.js",
    "revision": "cd631afa500aa0643e32dc452bd01f6e"
  },
  {
    "url": "assets/js/105.c0d7b9c7.js",
    "revision": "9efe3096d16837f6e902c064ed92a5fd"
  },
  {
    "url": "assets/js/106.a748ade7.js",
    "revision": "80779022fa5be9cf1aaa99d48a503036"
  },
  {
    "url": "assets/js/107.5f7d3673.js",
    "revision": "6ea4019095f7d43c2af2b388eb154d7c"
  },
  {
    "url": "assets/js/108.692904c6.js",
    "revision": "6f09676a93372f1d0c649c6dd1e642a5"
  },
  {
    "url": "assets/js/109.8af3f330.js",
    "revision": "c0276af0a6aa8a3bd6fc857e58cffef9"
  },
  {
    "url": "assets/js/11.59051f17.js",
    "revision": "fc636188dfaa5776ac9fbece1167d6c1"
  },
  {
    "url": "assets/js/110.fedce966.js",
    "revision": "31e8871e1bb897539fb817dfcb676634"
  },
  {
    "url": "assets/js/111.e56ec98e.js",
    "revision": "939e171aa447bee158f691d7fcff4910"
  },
  {
    "url": "assets/js/112.e4ff833f.js",
    "revision": "8ee226000d04e93d3f70862478023614"
  },
  {
    "url": "assets/js/113.c306c861.js",
    "revision": "cdb3832a91478780f9f26a3d23ed3c25"
  },
  {
    "url": "assets/js/114.6b4d3470.js",
    "revision": "d594df17ec6a0f465452bd43ed13bcfb"
  },
  {
    "url": "assets/js/115.8da4ec4a.js",
    "revision": "b61a864e543dbc01ad59bd17f1ab77b0"
  },
  {
    "url": "assets/js/116.3b63bbb9.js",
    "revision": "8577e6ea6a5d516ed8e3f28b0b1f9c46"
  },
  {
    "url": "assets/js/117.bfffb743.js",
    "revision": "718c123a037dc24ecc256f45328c4b46"
  },
  {
    "url": "assets/js/118.d8cc4dc2.js",
    "revision": "d4208bbcc004d48244f3ab2fab077e19"
  },
  {
    "url": "assets/js/119.bdb2a5f4.js",
    "revision": "9b89d06b76f847c3d1222458e9510598"
  },
  {
    "url": "assets/js/12.228741a5.js",
    "revision": "b4f7be223f3adb8ca92f9889333105da"
  },
  {
    "url": "assets/js/120.c82dc1b0.js",
    "revision": "5127ac2955f7b16c6c941a182c0b618c"
  },
  {
    "url": "assets/js/121.c6be16e1.js",
    "revision": "dafb87b658ca35d850e2f59a8cd52aad"
  },
  {
    "url": "assets/js/122.6e4b1fb5.js",
    "revision": "4225fa7d5e5bbfd5faee632d5ea88167"
  },
  {
    "url": "assets/js/123.8c588ff9.js",
    "revision": "13a20adf4a6fa07bb3e6476e1964553c"
  },
  {
    "url": "assets/js/124.3412e72e.js",
    "revision": "67e089ff624ddcb3db24dadf15ea8424"
  },
  {
    "url": "assets/js/125.9d0e5375.js",
    "revision": "c0dabfa4fec17acabba2122ab1a2694b"
  },
  {
    "url": "assets/js/126.a09eb6be.js",
    "revision": "c6fcee2c0c731d52f6e953b6f9955a2b"
  },
  {
    "url": "assets/js/127.af283f92.js",
    "revision": "951f7aa34b745eb2808c6eddc79d012b"
  },
  {
    "url": "assets/js/128.ae4e365e.js",
    "revision": "ae7d49aafa5625bc9a13773044687c89"
  },
  {
    "url": "assets/js/129.8f2a2674.js",
    "revision": "ad8b552a60c3dfa6b3f71a9b52316645"
  },
  {
    "url": "assets/js/13.1e8df012.js",
    "revision": "b13c172102ef83747bdd12b42f691c75"
  },
  {
    "url": "assets/js/130.f81ff443.js",
    "revision": "14d7520bdcf3f5933acd8128b271d9f5"
  },
  {
    "url": "assets/js/131.122b9791.js",
    "revision": "01cf99f115135fde67cea6f7ad16b9aa"
  },
  {
    "url": "assets/js/132.7c8b46a4.js",
    "revision": "0d6001d63614a09a3c43285cf63ce568"
  },
  {
    "url": "assets/js/133.a5897721.js",
    "revision": "6132f14c907b5ea65b27ec35f80c3fa3"
  },
  {
    "url": "assets/js/134.76691d8d.js",
    "revision": "eab518845b93fba2e2c9cb1443e5bf86"
  },
  {
    "url": "assets/js/135.11058f91.js",
    "revision": "6901fda6f7631c57369ce7c10085f5ee"
  },
  {
    "url": "assets/js/136.c67e163a.js",
    "revision": "547ede318540bf5e17587bdd7cb66213"
  },
  {
    "url": "assets/js/137.4b43f4af.js",
    "revision": "ef572e6ffb68ae6a984c18c6c92ea0d2"
  },
  {
    "url": "assets/js/138.ba130e8b.js",
    "revision": "58de077e1d6395b0c0f48b738fd4baf6"
  },
  {
    "url": "assets/js/139.05783690.js",
    "revision": "044be6b719981366a93d8d109944bb57"
  },
  {
    "url": "assets/js/14.febfef5a.js",
    "revision": "da3bd47e1b553417caa8467a6423479f"
  },
  {
    "url": "assets/js/140.23e5b78d.js",
    "revision": "b485bb0995c0612b50167b5411f9e87c"
  },
  {
    "url": "assets/js/141.91e60970.js",
    "revision": "a123f688d2b24b6a8d736aa8d1aff3d2"
  },
  {
    "url": "assets/js/142.59c0c830.js",
    "revision": "495daa8bb2cf51fe6816f37601e00fe5"
  },
  {
    "url": "assets/js/143.debc502e.js",
    "revision": "42875b45cd3e464cc14b96e7ad8fd0ed"
  },
  {
    "url": "assets/js/144.1ecd8208.js",
    "revision": "0987426dd4a592d8bf0a88278b28c265"
  },
  {
    "url": "assets/js/145.a351bbb0.js",
    "revision": "00e70ffe72af6f7ec70a4cec43a46e0b"
  },
  {
    "url": "assets/js/146.d478d2d8.js",
    "revision": "94999e32094edb9a1428a5a8eb830d6c"
  },
  {
    "url": "assets/js/147.69f2044d.js",
    "revision": "a92d44443c4549506657e119405feb3c"
  },
  {
    "url": "assets/js/148.d9a1e70c.js",
    "revision": "344b004abdd331536f48fcedbf0a72a6"
  },
  {
    "url": "assets/js/149.141b9db2.js",
    "revision": "8739c07d5fb5b090f9bc77ff6896b11f"
  },
  {
    "url": "assets/js/15.ec15ac92.js",
    "revision": "6b885cfee0afac6125e6e3d49353a546"
  },
  {
    "url": "assets/js/150.9db89225.js",
    "revision": "d70d35726f3c66f384e15de8afc2ebb6"
  },
  {
    "url": "assets/js/151.0fcf9115.js",
    "revision": "89138a44a5cd33116bec2c2f8f2c9536"
  },
  {
    "url": "assets/js/152.b8b67c49.js",
    "revision": "4b0baf631a4b96fb7ca1b05d3ae15f76"
  },
  {
    "url": "assets/js/153.c1a08f21.js",
    "revision": "a20956657c29bdbda4dfe9ac2bc0e2ea"
  },
  {
    "url": "assets/js/154.11c8041f.js",
    "revision": "8f366692792ae766fc9eb74451daba0e"
  },
  {
    "url": "assets/js/155.9caeb244.js",
    "revision": "23f778b2b7c290a6b908602cfa69fd61"
  },
  {
    "url": "assets/js/156.fb580082.js",
    "revision": "e3ce231d72ba4bd8149a9b4435f5f497"
  },
  {
    "url": "assets/js/157.4169b984.js",
    "revision": "3243e354845794f18f8f7d48688ff6dd"
  },
  {
    "url": "assets/js/158.3f1284f1.js",
    "revision": "9de60d87e8a55cca9bd1c223c79bfd72"
  },
  {
    "url": "assets/js/159.db1a0a87.js",
    "revision": "3a72e2efaf1d5138f8d069027bff10a7"
  },
  {
    "url": "assets/js/16.20b6666b.js",
    "revision": "957762fb1076ac233993547cc4846f16"
  },
  {
    "url": "assets/js/160.952689a9.js",
    "revision": "c8d7d0a207c99e71a329dc6dab045f43"
  },
  {
    "url": "assets/js/161.0154148d.js",
    "revision": "bba32144bd7f6a8be3896f632590f480"
  },
  {
    "url": "assets/js/162.8d2c7b86.js",
    "revision": "4150b863971f0b0c39a5eb91d20a896c"
  },
  {
    "url": "assets/js/163.56ab1a17.js",
    "revision": "e54fbfc9bb7ab0e4de1ad74b934e3a86"
  },
  {
    "url": "assets/js/164.51d7be13.js",
    "revision": "0f03b4a6cdae9f48cfb46b0376a2a37c"
  },
  {
    "url": "assets/js/165.4b4ae73d.js",
    "revision": "2659500d6270aa3cad649507ff2efabd"
  },
  {
    "url": "assets/js/166.84f5b4f8.js",
    "revision": "25e5c266d1662541dde5d89053af7ad6"
  },
  {
    "url": "assets/js/167.64ffe161.js",
    "revision": "7e2ffd1410fbc342dec5d68ac68a5279"
  },
  {
    "url": "assets/js/17.c2e9a215.js",
    "revision": "f060afb9f290c46cce986c7829eb1cad"
  },
  {
    "url": "assets/js/18.57746ff0.js",
    "revision": "7b1458125ed64a89c106719746e0a1c4"
  },
  {
    "url": "assets/js/19.e636e2f0.js",
    "revision": "c8e535df9a11e906975c97fd6a40bfed"
  },
  {
    "url": "assets/js/2.f2881f60.js",
    "revision": "caf7f1967295c3d438c091701432371e"
  },
  {
    "url": "assets/js/20.8959fb99.js",
    "revision": "f43ea04162b8efcde70c3b9fd7b36f36"
  },
  {
    "url": "assets/js/21.843f2878.js",
    "revision": "f8030561f820a0e5b746bc839bda37f5"
  },
  {
    "url": "assets/js/22.0260b0a8.js",
    "revision": "a062be4c2b2d77a0f15c169585575a1d"
  },
  {
    "url": "assets/js/23.014c541f.js",
    "revision": "6568a7a542aff37237dc262bcf1d4484"
  },
  {
    "url": "assets/js/24.1350e882.js",
    "revision": "5c410fd75690795e23469ac76588c2e8"
  },
  {
    "url": "assets/js/25.88bc1ff2.js",
    "revision": "67365325eacdcbce81cf9bdcde4ba28d"
  },
  {
    "url": "assets/js/26.6e53fd42.js",
    "revision": "60094e0bb864c0a5b52a7627b6dfd156"
  },
  {
    "url": "assets/js/27.b088ae4f.js",
    "revision": "a89a455f1b62a44011cd37ee561a5d86"
  },
  {
    "url": "assets/js/28.bce21004.js",
    "revision": "7fe992ad408343f0dc617f07c5eefcba"
  },
  {
    "url": "assets/js/29.e9295591.js",
    "revision": "fd79971d67d0a6a40e294dfd57b627f2"
  },
  {
    "url": "assets/js/3.2482c351.js",
    "revision": "d5ad98dc2620addb133fdc9f36d7280a"
  },
  {
    "url": "assets/js/30.b9ffb0e3.js",
    "revision": "390fd9d029364dd13a4e314cb939b964"
  },
  {
    "url": "assets/js/31.265eb91c.js",
    "revision": "bbd7dd3217c8cf251c7fa6dc14512af8"
  },
  {
    "url": "assets/js/32.de80fb41.js",
    "revision": "d6b5800529889c2f2c9cbd0c637d8e2e"
  },
  {
    "url": "assets/js/33.ca58525f.js",
    "revision": "841b99adeba1b3b552860efb18fd26fe"
  },
  {
    "url": "assets/js/34.b19eb5e6.js",
    "revision": "f0f2341ceb4dd9c1db976b19232dfbf2"
  },
  {
    "url": "assets/js/35.d7b9d413.js",
    "revision": "f9e3c9895704a21193f361c9effd36c1"
  },
  {
    "url": "assets/js/36.5dc608b2.js",
    "revision": "c4c065dc5708cfc3d80e207212241d5d"
  },
  {
    "url": "assets/js/37.3a41b829.js",
    "revision": "6f5512d587045fd641e9625e9bb83df7"
  },
  {
    "url": "assets/js/38.d11ae1a8.js",
    "revision": "51442926e157799632cd70108341f254"
  },
  {
    "url": "assets/js/39.3fb4ac69.js",
    "revision": "f81a2e59b4f604b92575af3ced2979ac"
  },
  {
    "url": "assets/js/4.6561383e.js",
    "revision": "ffc8e5c537bab8ee1f15c3cd9bfc8f3a"
  },
  {
    "url": "assets/js/40.842418c3.js",
    "revision": "97d9daddd639a0fbc65d629dddfe6744"
  },
  {
    "url": "assets/js/41.099cef93.js",
    "revision": "10477fab5b8ec0feffe0bff246d8683c"
  },
  {
    "url": "assets/js/42.525b06eb.js",
    "revision": "7dd1f328f86a35315376bf654e296b96"
  },
  {
    "url": "assets/js/43.3139b720.js",
    "revision": "8cb7b5d534dd10c984212d8e6b01b204"
  },
  {
    "url": "assets/js/44.6e92ba92.js",
    "revision": "93ca1cc70abbdc9e637d55d571babdf0"
  },
  {
    "url": "assets/js/45.6e157493.js",
    "revision": "3b55d719954c7ba2e57909d5ca8c9fa6"
  },
  {
    "url": "assets/js/46.3c7ce487.js",
    "revision": "6f71081fc737268ac774cd228b07252e"
  },
  {
    "url": "assets/js/47.9132637a.js",
    "revision": "fc89480ed33f268fb4ab11db319fc33b"
  },
  {
    "url": "assets/js/48.5fad8aae.js",
    "revision": "3a1ac48422c243c54873f794ab0e2b63"
  },
  {
    "url": "assets/js/49.afb5c922.js",
    "revision": "d6bcb4239535c265d45961a9956541d1"
  },
  {
    "url": "assets/js/5.a692a018.js",
    "revision": "41db3e91d2c6c18dc98238540cf5de91"
  },
  {
    "url": "assets/js/50.65c2a3c2.js",
    "revision": "fdb343c3ea0d4adea85546ec334d669c"
  },
  {
    "url": "assets/js/51.b0d3fcfb.js",
    "revision": "b8924f9ef1b96ba60590068351d1b865"
  },
  {
    "url": "assets/js/52.6702465e.js",
    "revision": "128ce5c7b03b5f15e1243215c912e428"
  },
  {
    "url": "assets/js/53.da569e35.js",
    "revision": "006b2d76fb64ad96ca85c1fad513d68c"
  },
  {
    "url": "assets/js/54.92c80337.js",
    "revision": "656dca23814150b170197614c83ec658"
  },
  {
    "url": "assets/js/55.ef0e843f.js",
    "revision": "a3be8fa51ed367a38e12e9a12008e41e"
  },
  {
    "url": "assets/js/56.b555a05d.js",
    "revision": "1713df3ab535f4503bca487d3d8d7291"
  },
  {
    "url": "assets/js/57.7bed1207.js",
    "revision": "4a0d2340614e46fba155301c1108cdc5"
  },
  {
    "url": "assets/js/58.3e9fdf09.js",
    "revision": "ba9b515db2c29373bfaf797fee34c03a"
  },
  {
    "url": "assets/js/59.056faf3c.js",
    "revision": "96e80d21ce983fbe353dd98a2fb2f4d3"
  },
  {
    "url": "assets/js/6.34faa664.js",
    "revision": "ed64e47e637d3db9773e4f44ff85e6ef"
  },
  {
    "url": "assets/js/60.c83a2346.js",
    "revision": "e7f995992f48dcf43f318292fc37e170"
  },
  {
    "url": "assets/js/61.3743965c.js",
    "revision": "f445ca44d13835934ebc71b85688931f"
  },
  {
    "url": "assets/js/62.66cbf990.js",
    "revision": "afa97cd1f28331835ea460fe4761254c"
  },
  {
    "url": "assets/js/63.6f7ce2f7.js",
    "revision": "18539368146d6a47c56e0531f79f3110"
  },
  {
    "url": "assets/js/64.5b2c5312.js",
    "revision": "215aa6db49b968336817fd029a7b65b8"
  },
  {
    "url": "assets/js/65.2c80b6a7.js",
    "revision": "2d3f132808eebb69a046c258cbf9d8fc"
  },
  {
    "url": "assets/js/66.5389532d.js",
    "revision": "8d591cfe8ba5efa8a2d77ef6b3db64a7"
  },
  {
    "url": "assets/js/67.6e65cabe.js",
    "revision": "473922331308cb7edbcd48e034e08046"
  },
  {
    "url": "assets/js/68.a80d8a4f.js",
    "revision": "1aec66ddfb186d056f258dc182289303"
  },
  {
    "url": "assets/js/69.05461d20.js",
    "revision": "c4715b02395ecbcb0c448a3f107d3e2f"
  },
  {
    "url": "assets/js/7.eee03784.js",
    "revision": "072ccfc800e021fbe4f442bc867fc7a7"
  },
  {
    "url": "assets/js/70.f5ab6c35.js",
    "revision": "ce4662f76f016679c38909870feb7ed8"
  },
  {
    "url": "assets/js/71.586259b7.js",
    "revision": "705a0accc4d93dc17ceacb7874dbabac"
  },
  {
    "url": "assets/js/72.61b3ad14.js",
    "revision": "e8911a27c1e2e4297685d67ed3c99dc5"
  },
  {
    "url": "assets/js/73.3f902ebf.js",
    "revision": "c7e5934d46cd6a0775bb356713a7db19"
  },
  {
    "url": "assets/js/74.e0e1c9b1.js",
    "revision": "f55d1bb91b78d57afd1cce0c98d71919"
  },
  {
    "url": "assets/js/75.e615d6a9.js",
    "revision": "d0050fa7af5d8661d5f67dfc4231adbe"
  },
  {
    "url": "assets/js/76.8685a600.js",
    "revision": "eb779201c58a8f97076f00180ea5d73a"
  },
  {
    "url": "assets/js/77.7d690a55.js",
    "revision": "a07b77eace0b3fb5872ba620ee18230d"
  },
  {
    "url": "assets/js/78.9255df93.js",
    "revision": "a5aa84cd6e29399457be4de4d4b821d3"
  },
  {
    "url": "assets/js/79.5884c882.js",
    "revision": "800980195e2b2dd8601f90b53429a5d1"
  },
  {
    "url": "assets/js/8.10bee0ee.js",
    "revision": "08542b26ac3fd0ae7fc7ea11c972bef6"
  },
  {
    "url": "assets/js/80.e6f3e479.js",
    "revision": "93f7109c5d055ec7acb0839f413be571"
  },
  {
    "url": "assets/js/81.9b858a9f.js",
    "revision": "b1f97a607d4a0da6ae78b5a026263e82"
  },
  {
    "url": "assets/js/82.e7b53d50.js",
    "revision": "c483c37b95b7161f37b0ca02eee34085"
  },
  {
    "url": "assets/js/83.e04b9f12.js",
    "revision": "faf111b50dd2a91aafbcd0d45815aa35"
  },
  {
    "url": "assets/js/84.8b5bd0c0.js",
    "revision": "1fe6f0c553b659a2cecce4ae7e42a490"
  },
  {
    "url": "assets/js/85.dced4508.js",
    "revision": "a9ee227e3245dfcba0111b30991a5598"
  },
  {
    "url": "assets/js/86.a048734b.js",
    "revision": "5f3292fb6f0e367da777009e80c7ada5"
  },
  {
    "url": "assets/js/87.f933f87d.js",
    "revision": "6c1df075ddbfa10c272c07d3968a6b9b"
  },
  {
    "url": "assets/js/88.e9186d25.js",
    "revision": "dfa5b08e39000359f8f5480eed55a369"
  },
  {
    "url": "assets/js/89.32f0c1cb.js",
    "revision": "69ee99da339e49c3b34cf12e7dec8d9a"
  },
  {
    "url": "assets/js/9.70045519.js",
    "revision": "c01655b448188d35951840107de816d2"
  },
  {
    "url": "assets/js/90.d1b70890.js",
    "revision": "65f769ec7faed8dea9653bd7bc629aff"
  },
  {
    "url": "assets/js/91.208a3093.js",
    "revision": "9bd0038175e8a612ae994072730bcf6b"
  },
  {
    "url": "assets/js/92.d1bf0b45.js",
    "revision": "0cf025598a9518dad46da92e056adebc"
  },
  {
    "url": "assets/js/93.977e0f43.js",
    "revision": "396279efca908343c378a9ded30a2905"
  },
  {
    "url": "assets/js/94.d07ccccf.js",
    "revision": "cc4bf15452cddd9215f787b48d883725"
  },
  {
    "url": "assets/js/95.29feb43b.js",
    "revision": "8713d3e482e4a159eb9485a2609eeeed"
  },
  {
    "url": "assets/js/96.eae40709.js",
    "revision": "635cb7b084286d3ba35e136f9636d365"
  },
  {
    "url": "assets/js/97.8e745938.js",
    "revision": "0a8e3cd7402e92dcd38b624fd83f4f88"
  },
  {
    "url": "assets/js/98.34bf9ffe.js",
    "revision": "3cded17c85bb954d0ed95032dfbaca1c"
  },
  {
    "url": "assets/js/99.a6ead1a2.js",
    "revision": "9735b8560e64f511f157b814401a3d00"
  },
  {
    "url": "assets/js/app.0cdeab91.js",
    "revision": "f2983e5894dd1da58ec92b0584f5f852"
  },
  {
    "url": "docs/设计模式手册/index.html",
    "revision": "62814a7f58ec15f349a342a326cd24c7"
  },
  {
    "url": "edit-tools.png",
    "revision": "d63c67c78f0f3c86539240d2e1539304"
  },
  {
    "url": "friends/index.html",
    "revision": "033686ff45da2c5e741d296e12848f1c"
  },
  {
    "url": "guide/index.html",
    "revision": "0d88e531e41938364d12af49770fbe71"
  },
  {
    "url": "index.html",
    "revision": "8efa69fa7947fb0071baad072eb625e4"
  },
  {
    "url": "notes/交互设计/love.html",
    "revision": "dc9aa0d1baa6f15efb70ab8b8736d95a"
  },
  {
    "url": "notes/交互设计/个人主页设计.html",
    "revision": "70841115866cdab9b9968a580ac5e0e8"
  },
  {
    "url": "notes/交互设计/交互设计资料.html",
    "revision": "6f56480e3c14b421b88c2dabfbbf1098"
  },
  {
    "url": "notes/待整理.html",
    "revision": "979b7caa59a441b4b1e7574a0e3d485e"
  },
  {
    "url": "notes/静态网站/重构选型.html",
    "revision": "398ab505e39af2db3658fdfc2d772cf8"
  },
  {
    "url": "passages/2018-05-23-es-promise/index.html",
    "revision": "eb8e07cb0ef2fc92b7531af7e42e9f96"
  },
  {
    "url": "passages/2018-05-29-promise-async-await-order/index.html",
    "revision": "29445df548e92d5e4a35027cc94a97da"
  },
  {
    "url": "passages/2018-05-29-scss-fisrt-step/index.html",
    "revision": "1ee38772d484526978671b733b84a48c"
  },
  {
    "url": "passages/2018-05-29-scss-more/index.html",
    "revision": "58c09c600d75eb4408e016becac1a273"
  },
  {
    "url": "passages/2018-06-05-border-sizing/index.html",
    "revision": "3f0f7fc4288f5550a1dd037aea87cdba"
  },
  {
    "url": "passages/2018-06-19-batch-edit-log/index.html",
    "revision": "3cd81044856f93ea9ef2a17e1f52cf09"
  },
  {
    "url": "passages/2018-07-29-webpack-demos-introduction/index.html",
    "revision": "e298e5b20f17296d23bb00f37bac6894"
  },
  {
    "url": "passages/2018-07-30-webpack-pack-js/index.html",
    "revision": "b59456ed9d524ae6dcc398ee34eea57e"
  },
  {
    "url": "passages/2018-07-31-webpack-compile-es6/index.html",
    "revision": "9653779e970f30d303736dcec23eb255"
  },
  {
    "url": "passages/2018-08-06-webpack-mutiple-pages/index.html",
    "revision": "d53f61357e57cc75aa09903e9f63a110"
  },
  {
    "url": "passages/2018-08-08-webpack-spa-split-lazy/index.html",
    "revision": "9fe5084b58d699d670b168d9005ed34f"
  },
  {
    "url": "passages/2018-08-17-webpack-css/index.html",
    "revision": "e24557f86b11ef9c555c91e7486d2522"
  },
  {
    "url": "passages/2018-08-18-webpack-scss/index.html",
    "revision": "2d235eeb9ab97727c922aaba16f9b75f"
  },
  {
    "url": "passages/2018-08-19-websocket-group-chat/index.html",
    "revision": "5cc8238610d9b7de8abe8dec9c92066a"
  },
  {
    "url": "passages/2018-08-20-canvas-beauty-filter/index.html",
    "revision": "8177fbbb08602182de5a1b4a7981addd"
  },
  {
    "url": "passages/2018-08-21-momentjs/index.html",
    "revision": "3e7f09a2c2a788ebd0652e5576be7104"
  },
  {
    "url": "passages/2018-08-26-ssl/index.html",
    "revision": "c62043aa6b331a12f0828a914c672489"
  },
  {
    "url": "passages/2018-08-28-webpack-scss-lazy/index.html",
    "revision": "f6934562f48929239f88b3b7bfbc4735"
  },
  {
    "url": "passages/2018-08-30-canvas-off-screen/index.html",
    "revision": "a98f0c8a64e4b9e7c9554c593d12d65f"
  },
  {
    "url": "passages/2018-09-01-js-tree-shaking/index.html",
    "revision": "296d3182b46f61be880fdf6af2d7b8ff"
  },
  {
    "url": "passages/2018-09-02-css-tree-shaking/index.html",
    "revision": "fb4d06cb2dc30c2b3f5a4eec84660e23"
  },
  {
    "url": "passages/2018-09-06-git-tag-and-version/index.html",
    "revision": "b4402c262efd263aa8ad79f8276b6602"
  },
  {
    "url": "passages/2018-09-07-git-stash/index.html",
    "revision": "d609aaf09ecf6dfd6f938de6274b2caa"
  },
  {
    "url": "passages/2018-09-09-mysql-blog-ui/index.html",
    "revision": "0587759816cd3d89c091836abb1ed4e4"
  },
  {
    "url": "passages/2018-09-11-webpack-image/index.html",
    "revision": "d7147171153247759c1c59c97edbf4a8"
  },
  {
    "url": "passages/2018-10-03-js-mathjax/index.html",
    "revision": "5ad967b725992d4ddab75a630ca4e93b"
  },
  {
    "url": "passages/2018-10-09-webpack-chracter-file/index.html",
    "revision": "d01f090f7e159c155ec543cade50e760"
  },
  {
    "url": "passages/2018-10-09-webpack-js-pacakge/index.html",
    "revision": "81724476cad745a563af25c71ca1756b"
  },
  {
    "url": "passages/2018-10-17-automatic-html/index.html",
    "revision": "e31ec28b74da8ccd27433741ec7de7f6"
  },
  {
    "url": "passages/2018-10-18-webpack-clean-and-watch-mode/index.html",
    "revision": "cbf8c12c14701e6719c443f5219788c1"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-and-prod/index.html",
    "revision": "8e4e58e149109dbb2d57978dd5674a7d"
  },
  {
    "url": "passages/2018-10-19-webpack-dev-server/index.html",
    "revision": "b953d719d6eb3e763a6f1a0b35adf8cb"
  },
  {
    "url": "passages/2018-10-23-singleton-pattern/index.html",
    "revision": "f6de0a2851f82ffaa65683fbcb98b50d"
  },
  {
    "url": "passages/2018-10-25-stragegy-pattern/index.html",
    "revision": "c7ed2a8835efd5464738d87751de3005"
  },
  {
    "url": "passages/2018-11-01-proxy-pattern/index.html",
    "revision": "c6607cb9e1b1c4bd0dd4445cef146acf"
  },
  {
    "url": "passages/2018-11-06-iter-pattern/index.html",
    "revision": "eb3f5a964a539f51101c4a38b41d03c4"
  },
  {
    "url": "passages/2018-11-18-publish-subscribe-pattern/index.html",
    "revision": "a75f7d989c50d32e445f31e82b854e24"
  },
  {
    "url": "passages/2018-11-25-command-pattern/index.html",
    "revision": "b7a672202b3c3d6df3c27b080d89ce1a"
  },
  {
    "url": "passages/2018-12-08-weekly-share-1/index.html",
    "revision": "ce7e2f4aa880f231d0ef5d8e54d3ad89"
  },
  {
    "url": "passages/2018-12-12-composite-pattern/index.html",
    "revision": "2b6c732ae3c38b44725de948aea5c2bd"
  },
  {
    "url": "passages/2018-12-16-flyweight-pattern/index.html",
    "revision": "3ffd870f720656677db5deccebf80442"
  },
  {
    "url": "passages/2018-12-24-weekly-share-2/index.html",
    "revision": "aea5670e57322e66a0db739d9e18815d"
  },
  {
    "url": "passages/2019-01-07-chain-of-responsibility-pattern/index.html",
    "revision": "6553ba927b5a8e58f4c090a9d4cdaff8"
  },
  {
    "url": "passages/2019-01-12-decorator-pattern/index.html",
    "revision": "4fed0d7c4f9b97c95e30bb42abf3c5af"
  },
  {
    "url": "passages/2019-01-16-state-pattern/index.html",
    "revision": "44231e8a64861618673427631f433106"
  },
  {
    "url": "passages/2019-01-17-adapter-pattern/index.html",
    "revision": "50210cc33f923e51c24a331ccb38ec55"
  },
  {
    "url": "passages/2019-01-19-bridge-pattern/index.html",
    "revision": "f56b76c01b2508d2a8adca5a1dfb4675"
  },
  {
    "url": "passages/2019-01-25-interpreter-pattern/index.html",
    "revision": "4da24969abcd272fc25689856e2616f7"
  },
  {
    "url": "passages/2019-01-26-memento-pattern/index.html",
    "revision": "2f32cdf9b4d2b4659ff175769b3e74ca"
  },
  {
    "url": "passages/2019-01-31-template-pattern/index.html",
    "revision": "99221a010b9909dd125c61657b22b74f"
  },
  {
    "url": "passages/2019-03-15-weekly-share-3/index.html",
    "revision": "9e1628181d18850a07adc6d989700e52"
  },
  {
    "url": "passages/2019-03-18-interview-js-code/index.html",
    "revision": "dc053fdf6573752ff7efeabb9be9cad0"
  },
  {
    "url": "passages/2019-03-19-css3-nth-child/index.html",
    "revision": "ecc2c31695361fa84d98f4d8480a2b0a"
  },
  {
    "url": "passages/2019-03-20-css3-flex/index.html",
    "revision": "096ffdeef46134f2a005704f1a0d3a6b"
  },
  {
    "url": "passages/2019-03-21-js-re/index.html",
    "revision": "0f8ba4085a3f22be97fe665b8aa7a88a"
  },
  {
    "url": "passages/2019-03-26-javascript-first/index.html",
    "revision": "794eabf709021aacea8e532c6a99b18f"
  },
  {
    "url": "passages/2019-03-27-javascript-second/index.html",
    "revision": "5d1f5c0b97703957e919ef712374637a"
  },
  {
    "url": "passages/2019-03-31-factory-pattern/index.html",
    "revision": "96b882d2cf9ecfd87120a4d92a436419"
  },
  {
    "url": "passages/2019-04-01-abstract-factory-pattern/index.html",
    "revision": "ac96108c35264cbf5dc72cf2ca3d81b1"
  },
  {
    "url": "passages/2019-04-02-pwa-service-worker/index.html",
    "revision": "306f53e285a1309052125029681add28"
  },
  {
    "url": "passages/2019-04-08-react-components-communication/index.html",
    "revision": "0ac4ac8571d19f7bbe3760b8cbb62e46"
  },
  {
    "url": "passages/2019-04-09-es6/index.html",
    "revision": "7e80ec5b29196c79818c3571bd1e0741"
  },
  {
    "url": "passages/2019-04-10-html5-drag-drop/index.html",
    "revision": "69ba5c10d575d742ef40622bda6fe582"
  },
  {
    "url": "passages/2019-04-15-wechat-h5-login/index.html",
    "revision": "b29a7cf143382a84de51c131103e0288"
  },
  {
    "url": "passages/2019-04-16-axios/index.html",
    "revision": "0ffd7dfe8ee296a632f43c0d545cfe22"
  },
  {
    "url": "passages/2019-04-23-vemojs/index.html",
    "revision": "ee3fcda25aca3c540db0afa403d0a648"
  },
  {
    "url": "passages/2019-05-02-node-block-chain/index.html",
    "revision": "0ce58f94e47c6100ac73b10874203c02"
  },
  {
    "url": "passages/2019-05-04-deep-in-jest/index.html",
    "revision": "0b2f7d252d3a707fd0effd2aea7d4244"
  },
  {
    "url": "passages/2019-05-04-jest-base/index.html",
    "revision": "b09a3a839e2eeb86f8f139f9bdf51d63"
  },
  {
    "url": "passages/2019-05-04-rr/index.html",
    "revision": "c20e32c7f7892e42870ddadd34646182"
  },
  {
    "url": "passages/2019-05-07-play-node-shell/index.html",
    "revision": "6e87501e3b80e678d05db73199e98906"
  },
  {
    "url": "passages/2019-05-15-browser/index.html",
    "revision": "06c124f2ff627965898956ba8c7f32b0"
  },
  {
    "url": "passages/2019-05-15-web-safety/index.html",
    "revision": "1f9915510707353e6073c755b4117b29"
  },
  {
    "url": "passages/2019-05-17-why-i-stopped-using-sass/index.html",
    "revision": "841a325fe6cd086404104bdd7efd4c2d"
  },
  {
    "url": "passages/2019-05-18-serverless-page-counter/index.html",
    "revision": "bd1619e9f811ca186c927cb4eda3591c"
  },
  {
    "url": "passages/2019-05-25-learn-to-learn/index.html",
    "revision": "ac75793cd18332035c4e7df0f127e0a9"
  },
  {
    "url": "passages/2019-05-28-professional-js-notes/index.html",
    "revision": "f6be638fe469d387c6cf85b7d5f68141"
  },
  {
    "url": "passages/2019-06-10-weekly-share/index.html",
    "revision": "d1dd3239174df708c3f65ec72d925210"
  },
  {
    "url": "passages/2019-06-18-deep-in-koa/index.html",
    "revision": "991f5e406a5493c67c11e0f83fc1e574"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa-3/index.html",
    "revision": "69848175761a12bb7673b16c754200ef"
  },
  {
    "url": "passages/2019-06-21-deep-in-koa/index.html",
    "revision": "6689266fab0742c01a01fca472e05afd"
  },
  {
    "url": "passages/2019-06-23-algorithm-offer/index.html",
    "revision": "c7fef7f60847f8e67f38f41c9437dc59"
  },
  {
    "url": "passages/2019-06-23-array-change-location/index.html",
    "revision": "9827b20bcb654cce796778e0f78c1e2e"
  },
  {
    "url": "passages/2019-06-23-array-find/index.html",
    "revision": "bcb33b41ce13262e06adb21894bd795c"
  },
  {
    "url": "passages/2019-06-23-array-inverse-pair/index.html",
    "revision": "3144d8b58289994d2ad34fb0a45e8fa5"
  },
  {
    "url": "passages/2019-06-23-array-min-numbers/index.html",
    "revision": "087df5bac765a97806a79028cc6352fb"
  },
  {
    "url": "passages/2019-06-23-bit-first-one/index.html",
    "revision": "4538a2bd93ad547f45bd012d96f8b2fd"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one-more/index.html",
    "revision": "cdb834ac155f9d8c291b707dac10b8a1"
  },
  {
    "url": "passages/2019-06-23-bit-number-of-one/index.html",
    "revision": "bb871b5e3879ab1cc8199553a49325d7"
  },
  {
    "url": "passages/2019-06-23-find-min-num/index.html",
    "revision": "e3562375b98a6beb67c8a166753bcb2f"
  },
  {
    "url": "passages/2019-06-23-find-times-in-sorted/index.html",
    "revision": "d2174f42cfbee64ac4ed509f3cfc12db"
  },
  {
    "url": "passages/2019-06-23-hash-first-no-repeat-char/index.html",
    "revision": "2b236dba19031e84dae20521a2148275"
  },
  {
    "url": "passages/2019-06-23-hash-ugly/index.html",
    "revision": "697dde2dc2bd1199ced575a9bbd6c9a4"
  },
  {
    "url": "passages/2019-06-23-heap-kth-numbers/index.html",
    "revision": "1806c2a2b733d1ae61efb2ce13516f2b"
  },
  {
    "url": "passages/2019-06-23-list-clone/index.html",
    "revision": "56712c78c4befb20b79321e128d10693"
  },
  {
    "url": "passages/2019-06-23-list-delete-node/index.html",
    "revision": "b8e0f5e3c6bbaa3b3255042fdc79d2b1"
  },
  {
    "url": "passages/2019-06-23-list-first-same-node/index.html",
    "revision": "30f2929d613be56770f6e9becd734bb2"
  },
  {
    "url": "passages/2019-06-23-list-last-kth-node/index.html",
    "revision": "7ffa271f189ed3edfc4e39a1a50247be"
  },
  {
    "url": "passages/2019-06-23-list-merge/index.html",
    "revision": "11b0f1f739b6c85bf7a25397b517d2db"
  },
  {
    "url": "passages/2019-06-23-list-print/index.html",
    "revision": "b908e3365881f63da680c935e5d42d0c"
  },
  {
    "url": "passages/2019-06-23-list-reverse/index.html",
    "revision": "3aa3230676af75abbbcf83ca6401ea5f"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-and-number-is-s/index.html",
    "revision": "51764f405a94aa215b6a333d23ad24f5"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-fibonacci/index.html",
    "revision": "980b96deabd7a2954a06bee22206fff7"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-from-one-to-one/index.html",
    "revision": "cf2a93940cf6f507d53305afed72af62"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-joseph-ring/index.html",
    "revision": "bef82c6c0e10db92ee606d9bccf628a3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-min-kth/index.html",
    "revision": "62e0f1163ccb73aec9ba175b0cb2e4e6"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-n-probability/index.html",
    "revision": "f1c8203334053c986b122eb219304c38"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-playing-cards/index.html",
    "revision": "7fc29d235f3ab41daa8f5447502603ce"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-pow/index.html",
    "revision": "ec8b7b3336bb71081c34517e643e54f4"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-print-matrix/index.html",
    "revision": "6ffb02a18a19f032c6f552f99037bbc3"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-s-sequence/index.html",
    "revision": "8cb46344d8cc540e98c2808ce588bd16"
  },
  {
    "url": "passages/2019-06-23-recursive-loop-times-more-than-half/index.html",
    "revision": "5c4a79f617d1b697c04b5179f8b2711b"
  },
  {
    "url": "passages/2019-06-23-stack-queue-exchange/index.html",
    "revision": "83d2ccdbb697eb799756a8916e8763f7"
  },
  {
    "url": "passages/2019-06-23-stack-queue-min-stack/index.html",
    "revision": "3884470acd2d0ab2f84089e564accb88"
  },
  {
    "url": "passages/2019-06-23-stack-queue-push-pop-order/index.html",
    "revision": "aaa3a7d15bad9a659801b6b14305f6c7"
  },
  {
    "url": "passages/2019-06-23-str-atoi/index.html",
    "revision": "5047991dd46b1df1b1bc6850163bb1d3"
  },
  {
    "url": "passages/2019-06-23-str-perm/index.html",
    "revision": "bf1b227aaac4646b63e5a78cfb40a828"
  },
  {
    "url": "passages/2019-06-23-str-replace-empty/index.html",
    "revision": "a4f00d161cca69a5a5c99dc7e4935643"
  },
  {
    "url": "passages/2019-06-23-str-reverse-sentence/index.html",
    "revision": "3548df771e4438dce8b19d7ea2635b97"
  },
  {
    "url": "passages/2019-06-23-tree-convert-to-list/index.html",
    "revision": "56fd3a6c9afcb605ed1f04c78bdab627"
  },
  {
    "url": "passages/2019-06-23-tree-is-balance/index.html",
    "revision": "12246e8911ed28dba4a01947c9c30662"
  },
  {
    "url": "passages/2019-06-23-tree-level-travel/index.html",
    "revision": "097158cd3f53cff419d88f033c9da33c"
  },
  {
    "url": "passages/2019-06-23-tree-mirror/index.html",
    "revision": "5ddabab7e6032ca5fda4e5b49c84678a"
  },
  {
    "url": "passages/2019-06-23-tree-path-with-number/index.html",
    "revision": "488af3b1ec4181f3a70852cb8b44a8a4"
  },
  {
    "url": "passages/2019-06-23-tree-rebuild/index.html",
    "revision": "bdb5727c54f0e6f53541cf7ca9b114b4"
  },
  {
    "url": "passages/2019-06-23-tree-subtree/index.html",
    "revision": "153988e1e8de6f022b1ab0adc314b958"
  },
  {
    "url": "passages/2019-06-23-tree-tail-order/index.html",
    "revision": "eaa0b8f084a6c0f349da968c6ef6151e"
  },
  {
    "url": "passages/2019-07-06-half-year/index.html",
    "revision": "a77d3f5132e2c539b320ff4940276a7a"
  },
  {
    "url": "passages/2019-07-12-redis-cache-question/index.html",
    "revision": "717d63229e991838fae9153ce66dd550"
  },
  {
    "url": "passages/2019-07-15-file-api/index.html",
    "revision": "9d19dbf354aca4376be0bd9947f3fa94"
  },
  {
    "url": "passages/2019-07-16-font-animation/index.html",
    "revision": "163b1cf939aae9e37737fb28767be20d"
  },
  {
    "url": "passages/2019-07-22-input-animation/index.html",
    "revision": "2c730cc4ecfe90725441faa47bbe9732"
  },
  {
    "url": "passages/2019-07-24-button-animation/index.html",
    "revision": "d5dae3ae006fa1d52fca4c1d08ee4c1c"
  },
  {
    "url": "passages/2019-07-25-loader-animation-first/index.html",
    "revision": "67c06f4169183e629ea3bf23dcababc1"
  },
  {
    "url": "passages/2019-07-26-loader-animation-second/index.html",
    "revision": "81639be85bc2cfb4c72fcd0c423ce950"
  },
  {
    "url": "passages/2019-08-14-game-gomoku/index.html",
    "revision": "1600eb84afd14b71712daca3f49dc234"
  },
  {
    "url": "passages/2019-08-27-koa-meet-typescript/index.html",
    "revision": "63fa358d51d8f2d1bf3cbe7e3640dd0d"
  },
  {
    "url": "passages/2019-08-27-typescript-notes/index.html",
    "revision": "8a4e313624054e02da20d6377a8ed985"
  },
  {
    "url": "passages/2019-09-03-nodejs-watch-file/index.html",
    "revision": "adc7e996b3b9d3974a6a066fb6e70915"
  },
  {
    "url": "passages/2019-09-04-count-os/index.html",
    "revision": "73639017055faec3989542d9e764e643"
  },
  {
    "url": "passages/2019-09-04-log-module/index.html",
    "revision": "26e4cd1cec274ae8c3337ad1fc17c70d"
  },
  {
    "url": "passages/2019-09-07-middleground/index.html",
    "revision": "a32c1bf1629ffa3682bfb22068970b57"
  },
  {
    "url": "passages/2019-09-11-react-router/index.html",
    "revision": "7d9022e66085e94c7a6b1fbb9518230f"
  },
  {
    "url": "passages/2019-09-11-word-segmentation-and-search/index.html",
    "revision": "cf01e4a4efe074339a3b2d1ec10539a4"
  },
  {
    "url": "passages/2019-09-30-mongo-links/index.html",
    "revision": "b9c8d79afb7e6961f5dec7f531022501"
  },
  {
    "url": "passages/2019-10-01-mongo-book/index.html",
    "revision": "011c507909adde0b86f0a41f9b191aee"
  },
  {
    "url": "passages/2019-10-02-os-base/index.html",
    "revision": "87e54640b7126e479cf74c764c161394"
  },
  {
    "url": "passages/2019-10-03-os-logic/index.html",
    "revision": "6a5c8d487adcc9719bd2d3f7db6dcfc8"
  },
  {
    "url": "passages/2019-10-03-os-user/index.html",
    "revision": "f6bc6774a7b99d10cb54201a3fd3fd65"
  },
  {
    "url": "passages/2019-10-04-os-process/index.html",
    "revision": "9b6842bfb1bfcdd045ea71a7c327a1f8"
  },
  {
    "url": "passages/2019-10-10-mongo-book-advance/index.html",
    "revision": "e798510a57b72b54aabba263e94dde40"
  },
  {
    "url": "passages/2019-10-21-react-hooks/index.html",
    "revision": "db4066f436af659dff360570e63d9356"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
