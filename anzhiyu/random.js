var posts=["2026/02/10/Privacy/","2026/02/06/VTTP-虚拟化拓扑平台/","2026/02/10/centos部署域名服务/","2026/02/06/python协程记录/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };