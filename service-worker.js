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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d62df7c91ea3972c5ca3348939c6d4f6"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e70ba1dc.js",
    "revision": "207c3a241899762e2a66d00b708f2fed"
  },
  {
    "url": "assets/js/11.f5389cb8.js",
    "revision": "6f2c3cfd2bb6a2891961030c97c141c8"
  },
  {
    "url": "assets/js/12.dd061dce.js",
    "revision": "f24a75b9f54e7bfc67f08f08d6b1e5a2"
  },
  {
    "url": "assets/js/13.a38bae57.js",
    "revision": "d204b05473b845efacda91f489813acd"
  },
  {
    "url": "assets/js/14.379a7b6f.js",
    "revision": "eda8249fdd8aa0c9ed59d4f03c7a7df0"
  },
  {
    "url": "assets/js/15.0d97a3f1.js",
    "revision": "86553b71e95a24abbb0842a78daaa0a2"
  },
  {
    "url": "assets/js/16.96e0afd1.js",
    "revision": "40cb0efd633aa47a50057575c9f8da23"
  },
  {
    "url": "assets/js/17.1621d6f8.js",
    "revision": "17f73096b46c66eba74807e4328775f1"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.e54d2efd.js",
    "revision": "d0ce26b91ccc67909ab954a572d96f72"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.8634aa44.js",
    "revision": "a5746913d741aa688c9b0bef3b49a202"
  },
  {
    "url": "assets/js/21.d8f66771.js",
    "revision": "66e715e21f645e4807b683fc2c467473"
  },
  {
    "url": "assets/js/22.d755962d.js",
    "revision": "c99c95c865ebaba7596ecad5a9c5f0ed"
  },
  {
    "url": "assets/js/23.40ec0da2.js",
    "revision": "def9b952db1e2c33007ea7a1b4d3e1c5"
  },
  {
    "url": "assets/js/24.ba26a95a.js",
    "revision": "8ebc62a91b9c1d213930fc6425d26d67"
  },
  {
    "url": "assets/js/25.730c5e9c.js",
    "revision": "b37b1d80121ef221b207827a3fc19f88"
  },
  {
    "url": "assets/js/26.05c11010.js",
    "revision": "e625043f29005862d1791da575587091"
  },
  {
    "url": "assets/js/27.b605021b.js",
    "revision": "57a9f2b1a9b035b19230f3cfbf583030"
  },
  {
    "url": "assets/js/28.8b723ad9.js",
    "revision": "245b02ce7d183ce41e0b5c875de81ae4"
  },
  {
    "url": "assets/js/29.8102a27f.js",
    "revision": "bdfde4ef08ba1efe2e0ca26f692580d6"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.42cb6708.js",
    "revision": "d57a3552d4b3aa3440c9e4d6e0169d5c"
  },
  {
    "url": "assets/js/31.8825a69b.js",
    "revision": "3c750568e73307ceb6f0f840e285b9f9"
  },
  {
    "url": "assets/js/32.87beca8a.js",
    "revision": "f325ba349f47334a2e6be874eb1c6c6d"
  },
  {
    "url": "assets/js/33.09f4b706.js",
    "revision": "1f85cd6c559c1f3dd2a9a48b3bfa9bc9"
  },
  {
    "url": "assets/js/34.599d29a3.js",
    "revision": "c7f4938a2bdd368a2926ec01472e05d9"
  },
  {
    "url": "assets/js/35.81a46588.js",
    "revision": "b85a93d6cafe99d3698f7063acbfd792"
  },
  {
    "url": "assets/js/36.0f1fbfe7.js",
    "revision": "7bef548ba593fac73ae4686b740ec861"
  },
  {
    "url": "assets/js/37.78f01aa5.js",
    "revision": "d60892cd572ce39259d63d297f35f8b8"
  },
  {
    "url": "assets/js/38.300ffac9.js",
    "revision": "2f4da5a985f31bf876dcd565b16a104a"
  },
  {
    "url": "assets/js/39.c735e62a.js",
    "revision": "380f1aae3f4a2edd3f789d6fc3e925ca"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.6bfb0415.js",
    "revision": "283ff2c9556e268352c58fa5689ad509"
  },
  {
    "url": "assets/js/41.f29edd91.js",
    "revision": "afba91222b6a57fb745a4973af49ef52"
  },
  {
    "url": "assets/js/42.e0976761.js",
    "revision": "6872468d5ae7c5f0f29f529b9a7e4639"
  },
  {
    "url": "assets/js/43.d19d122c.js",
    "revision": "374a89c54353280a0b1ff6fa071dc078"
  },
  {
    "url": "assets/js/44.ce085715.js",
    "revision": "305557308f53cbc8f22723880091e20c"
  },
  {
    "url": "assets/js/45.6a62db81.js",
    "revision": "1752bb1db13168e095e4ff1d162597c9"
  },
  {
    "url": "assets/js/46.8821f174.js",
    "revision": "4448e3bc4f81957d23c2e41db4d01f65"
  },
  {
    "url": "assets/js/47.fc817602.js",
    "revision": "45713ef949ad634bdc8cd925aaa0e321"
  },
  {
    "url": "assets/js/48.23c5fdae.js",
    "revision": "17e7c7732a6611058e60b593e003d326"
  },
  {
    "url": "assets/js/49.d3df3574.js",
    "revision": "573bcc7527a58db24ca78753897a78b8"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.52f0a12b.js",
    "revision": "a8dba859dd11fcd474844b9333e3d581"
  },
  {
    "url": "assets/js/51.9b7bd61f.js",
    "revision": "5143ff0be37f12c45f2cfee97e42488b"
  },
  {
    "url": "assets/js/52.8015841f.js",
    "revision": "83744ae24e3b59eaa5548ea2f8bd965e"
  },
  {
    "url": "assets/js/53.22d03e2d.js",
    "revision": "407ca9600665b93aa8d1f3b4f0b07d77"
  },
  {
    "url": "assets/js/54.56544534.js",
    "revision": "4aaeadbb5c1b1e0225379d57f7b30841"
  },
  {
    "url": "assets/js/55.3bcc9eda.js",
    "revision": "21e6c0148950755660326797a9c33879"
  },
  {
    "url": "assets/js/56.86072289.js",
    "revision": "c518ae6467fb8f21b9483e6a8ff47a3d"
  },
  {
    "url": "assets/js/57.4b4263b3.js",
    "revision": "6a5f8a4b3cfcac0c8c3c4670aca83e1f"
  },
  {
    "url": "assets/js/58.6a3a89c8.js",
    "revision": "780f0dcff28b5df4d2a55b8739e8197f"
  },
  {
    "url": "assets/js/59.34caea1f.js",
    "revision": "d1102bd94d899993c75e750f801ab1a2"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.d6e316f2.js",
    "revision": "f2beda339544765aa7feca8afbde41ed"
  },
  {
    "url": "assets/js/61.0a534de4.js",
    "revision": "37a106805aae7776181ca3cbcf7e2270"
  },
  {
    "url": "assets/js/62.c0c5de54.js",
    "revision": "3c431ba3c7c3a36e6215df01aa1700ee"
  },
  {
    "url": "assets/js/63.01d99200.js",
    "revision": "0c466faf654d7bc4f6606398181705ff"
  },
  {
    "url": "assets/js/64.f59193e7.js",
    "revision": "b84764a39b289bf7289ba3baca981058"
  },
  {
    "url": "assets/js/65.3acd93e6.js",
    "revision": "506a6286d82edf838eab423e74c3d591"
  },
  {
    "url": "assets/js/66.51ee15f1.js",
    "revision": "ec8b203bbfbe4eda823e60fb9a281b46"
  },
  {
    "url": "assets/js/67.95329b50.js",
    "revision": "e3d98a2a0d19c5e55d18838ce2cdeec4"
  },
  {
    "url": "assets/js/68.772c174c.js",
    "revision": "dc13fa866b66872ec8603695060adbe8"
  },
  {
    "url": "assets/js/69.f5db9ea7.js",
    "revision": "ab6cd0b97074e3bfaadb402436b25d9e"
  },
  {
    "url": "assets/js/7.3b40b39b.js",
    "revision": "cf9306e8b6853a2d0c307e2381ab5628"
  },
  {
    "url": "assets/js/70.309471c8.js",
    "revision": "72519b90e091a0a6f84c05fbd6f24202"
  },
  {
    "url": "assets/js/71.b48ad246.js",
    "revision": "1d5ee42148292f6cdcec47d865ef153e"
  },
  {
    "url": "assets/js/72.3b0ddd89.js",
    "revision": "eac1a245f9d9aba2b59c51f8260e0cff"
  },
  {
    "url": "assets/js/73.a4bd7eca.js",
    "revision": "4992ad4328156b986f5f905a7035efa3"
  },
  {
    "url": "assets/js/74.8b805f5e.js",
    "revision": "f80bc1e8a58d58d67f7162c192600ca1"
  },
  {
    "url": "assets/js/75.877caa02.js",
    "revision": "bb097210deaa63f203e2ae5ac9ed83ba"
  },
  {
    "url": "assets/js/76.d9184990.js",
    "revision": "a6b5370e9e7f432df7104640601ad56f"
  },
  {
    "url": "assets/js/77.2421ecf7.js",
    "revision": "80e3676fcf8372baba89df2e6804918b"
  },
  {
    "url": "assets/js/78.1974932d.js",
    "revision": "8231c08b2a24deb5dc144b6522797dc5"
  },
  {
    "url": "assets/js/79.e707fb2a.js",
    "revision": "aec99afdd99efb252fd9a3f4f5441596"
  },
  {
    "url": "assets/js/8.78dada4a.js",
    "revision": "6cd68af40dcf5ce5d9cdcd00b9ed4b9f"
  },
  {
    "url": "assets/js/80.10be7626.js",
    "revision": "4ae5f2527c27effb3176919d19587cce"
  },
  {
    "url": "assets/js/81.7d863e9c.js",
    "revision": "df4d4cf233b8a43ce40ab7ebe5a44305"
  },
  {
    "url": "assets/js/82.d1b7dc9f.js",
    "revision": "921b9c36cb5c41b7cff9863cbd4dc4c5"
  },
  {
    "url": "assets/js/83.5f198f7a.js",
    "revision": "9ecb60f84664147c7eb65241bf455530"
  },
  {
    "url": "assets/js/84.27d41b72.js",
    "revision": "c911bd01b2cbee890a649aaa6fab1b92"
  },
  {
    "url": "assets/js/85.b67e79f2.js",
    "revision": "0e776990766e1159ab3bd171ad1e905e"
  },
  {
    "url": "assets/js/86.2a5f9f85.js",
    "revision": "ca929e60f8d5289fb666dd7931c620a7"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.da06d019.js",
    "revision": "8d884c09dc6dced1cd23d04e5b0d6fe6"
  },
  {
    "url": "assets/js/app.e88e7930.js",
    "revision": "6c1ee90be161c3ec437ec74d871d8069"
  },
  {
    "url": "compiler/ast.html",
    "revision": "b34ff7cc9204ed661da575afcf8b89a7"
  },
  {
    "url": "compiler/binder.html",
    "revision": "95b55bdb54b6b85aa05ebfe9170de511"
  },
  {
    "url": "compiler/checker.html",
    "revision": "f1bc2e5da1c7405ae1d5cd34a1072cfd"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "8d1c0e944debb542a378a1dce4828df8"
  },
  {
    "url": "compiler/overview.html",
    "revision": "00580b6e3195531ddfda40b783761df6"
  },
  {
    "url": "compiler/parser.html",
    "revision": "b509b70d12c32adfeeefbec0d2affb9f"
  },
  {
    "url": "compiler/program.html",
    "revision": "65692cf2131bf3e9f401f3e551a87520"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "82f672459dc64e775674eabaa8d4733f"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "5520a005a9031fbc6a29be31785d9cfe"
  },
  {
    "url": "error/interpreting.html",
    "revision": "a435e252abea43e2f72ec569ea33574e"
  },
  {
    "url": "faqs/class.html",
    "revision": "79ed72bd83fa7ab1d4ebdd93bce2fe4e"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "ad5baef3e37fa5bf86c473f4817501b0"
  },
  {
    "url": "faqs/comments.html",
    "revision": "1414d6f7bcdce51129837841d4101122"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "f405f25506b8b449800fb1fce8d611d8"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "a7c57a806989ff0e39feb5c06d8182ae"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "5b51110f95472264896866d2f49c09de"
  },
  {
    "url": "faqs/enums.html",
    "revision": "2b8ed22991529356d6c765284f5f390e"
  },
  {
    "url": "faqs/function.html",
    "revision": "c9c57ede0d59ee668202d4041b04b2e4"
  },
  {
    "url": "faqs/generics.html",
    "revision": "53a3f961ff702a448897e6bf4eb2fb04"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "b98469f8915d6eb9dcce7570271b209f"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "8078a0aec805128786b6c8001262f7d9"
  },
  {
    "url": "faqs/modules.html",
    "revision": "b5a4c8307177fceec4bfae644b4a28d5"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "02e4a5b10871390db44de58daaccdcd0"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "938b39f53abb13603bc06de93462b2ce"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "c89fd547ea9b7c9e54ca2c4a8c8c3096"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "dabad3e316638188d42edfbfcb07c080"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "dc49debbc3b6751861beee53132c04df"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "67e6f9146cb582c08909054ef1fe1fe9"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "009d154326319a3ac44c01cba41b547b"
  },
  {
    "url": "jsx/support.html",
    "revision": "765115e200379e04134b13caa14dd502"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "ad204697da1b463e5e8b30506b190101"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "0a33c4971904b8550dd0682ab169f176"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "fbeec05c92ec4b2bf197b50df5bda92b"
  },
  {
    "url": "project/modules.html",
    "revision": "c0f681ec4e8e108be3c168b877743cca"
  },
  {
    "url": "project/namespaces.html",
    "revision": "b85715ad3419bb0583240f9a4cfce0c4"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "8b98df52a32d240e36529eac57414a10"
  },
  {
    "url": "tips/barrel.html",
    "revision": "1b00b60dcd1d6f7dea607d487e7b23e7"
  },
  {
    "url": "tips/bind.html",
    "revision": "ead89c18e1c1ed0ef6a1109e2ed27769"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "cdaa561dc9c58536eba5c5bbf08a2397"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "200ab58855e6a26b213b5cf7c995cb92"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "4d93c1903faae1f155ea892dbea42c3a"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "5f992600f704db4d05e63504e97d44c1"
  },
  {
    "url": "tips/curry.html",
    "revision": "6db41fe64a1e35dea54d688501229391"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "80fe6d618624fcb469e2c8838d7cdcaa"
  },
  {
    "url": "tips/infer.html",
    "revision": "261444a480000b84add08de3eff658c3"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "0b3f8ae654b7c9d3cab30a50be4faa14"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "4f5c5791fa50527e8538013ee031da96"
  },
  {
    "url": "tips/metadata.html",
    "revision": "906227698529258b9f04384b5d0c66d6"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "ff0c02a7c958b91f7b063cab134c0e25"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "5dc154e92b49ec065a0da5934a251b79"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "844515ffee2fbf5abe7f68b06a628317"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "30d5abfca4bb5f7aca3a5127ce43f8f8"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "66afa0b728e9c2a7ac01696b3eb68802"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "fc4a05cddc98c86a0b4ec9d44e09cad1"
  },
  {
    "url": "tips/truthy.html",
    "revision": "755b889fd9d682716f635776c7b353b0"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "47e839cdbd2f3d1d25133b66a60fea4b"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "d2c0814354d6406dc834d63846d59841"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "092a2a854aa4b986dc960e4cdabea42b"
  },
  {
    "url": "typings/callable.html",
    "revision": "ddbdb5d00878e40527a17d4917ed3c41"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "2c62c78b67a54852ccd493c265df274d"
  },
  {
    "url": "typings/enums.html",
    "revision": "6b6c22d5b9ceccc165d4399b8cceed9b"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "8f1d67cf89708bd4b03f0f4c73460be5"
  },
  {
    "url": "typings/freshness.html",
    "revision": "ec682f21d1fd87a1a03ddc6630d6c495"
  },
  {
    "url": "typings/functions.html",
    "revision": "6d30e6ebf9ba0742b887031072a5991b"
  },
  {
    "url": "typings/generices.html",
    "revision": "fdc1a5a60ae16214f7aa786bebef237b"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "88091ac1bfa520a17bf019a3331761ca"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "a077a256a01fc2d2a908cc011b37d380"
  },
  {
    "url": "typings/lib.html",
    "revision": "fffa4e48cd4ebba9ae6cd97e3946b517"
  },
  {
    "url": "typings/literals.html",
    "revision": "97ed7122dfa6fc9a853220d0a0a016e3"
  },
  {
    "url": "typings/migrating.html",
    "revision": "66e8b5c3cc3f947e57e60b9ac9ac38ce"
  },
  {
    "url": "typings/mixins.html",
    "revision": "38a271f46f0f5a19d8bc05978cdc94c7"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "13682c42be0a20a4648254b7d66a2642"
  },
  {
    "url": "typings/neverType.html",
    "revision": "2383bc6a1d71423190d7c15db13c697d"
  },
  {
    "url": "typings/overview.html",
    "revision": "df3377970e9ebf095d7cbed93ceec399"
  },
  {
    "url": "typings/readonly.html",
    "revision": "090ce7612dd98c71fb0fb2e7d7bb7c35"
  },
  {
    "url": "typings/thisType.html",
    "revision": "543275dee3a837e3ced9b0c6bc1fc13a"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "836f38a4084a989eafd98b5a3b2f4104"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "152400b4268041d688cb478a496dc86a"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "11df0c59995251e543f1a2bf6ccb5ff5"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "806d2061237fa9f1cbb3d0ae3b068e74"
  },
  {
    "url": "typings/types.html",
    "revision": "6b006c0558b56c8b99314771042081de"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
