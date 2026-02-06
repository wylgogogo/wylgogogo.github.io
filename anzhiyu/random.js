var posts=["2026/02/05/hello-world/","2026/02/06/python协程记录/","2026/02/06/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };