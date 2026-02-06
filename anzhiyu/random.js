var posts=["2026/02/06/VTTP-虚拟化拓扑平台/","2026/02/06/python协程记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };