const e=JSON.parse('{"key":"v-576f584c","path":"/netty/rumen.html","title":"超详细Netty入门，看这篇就够了！","lang":"zh-CN","frontmatter":{"title":"超详细Netty入门，看这篇就够了！","shortTitle":"超详细Netty入门","description":"本文主要讲述Netty框架的一些特性以及重要组件，希望看完之后能对Netty框架有一个比较直观的感受，希望能帮助读者快速入门Netty，减少一些弯路。","tag":["netty"],"category":["思否"],"head":[["meta",{"name":"description","content":"本文主要讲述Netty框架的一些特性以及重要组件，希望看完之后能对Netty框架有一个比较直观的感受，希望能帮助读者快速入门Netty，减少一些弯路。"}],["meta",{"name":"keywords","content":"java,netty,网络编程,nio"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/netty/rumen.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"超详细Netty入门，看这篇就够了！"}],["meta",{"property":"og:description","content":"本文主要讲述Netty框架的一些特性以及重要组件，希望看完之后能对Netty框架有一个比较直观的感受，希望能帮助读者快速入门Netty，减少一些弯路。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-26T14:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"netty"}],["meta",{"property":"article:modified_time","content":"2022-12-26T14:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"一、Netty概述","slug":"一、netty概述","link":"#一、netty概述","children":[]},{"level":2,"title":"二、为什么使用Netty","slug":"二、为什么使用netty","link":"#二、为什么使用netty","children":[{"level":3,"title":"2.1 NIO的缺点","slug":"_2-1-nio的缺点","link":"#_2-1-nio的缺点","children":[]},{"level":3,"title":"2.2 Netty的优点","slug":"_2-2-netty的优点","link":"#_2-2-netty的优点","children":[]}]},{"level":2,"title":"三、架构图","slug":"三、架构图","link":"#三、架构图","children":[]},{"level":2,"title":"四、永远的Hello Word","slug":"四、永远的hello-word","link":"#四、永远的hello-word","children":[{"level":3,"title":"4.1 引入Maven依赖","slug":"_4-1-引入maven依赖","link":"#_4-1-引入maven依赖","children":[]},{"level":3,"title":"4.2 创建服务端启动类","slug":"_4-2-创建服务端启动类","link":"#_4-2-创建服务端启动类","children":[]},{"level":3,"title":"4.3 创建服务端处理器","slug":"_4-3-创建服务端处理器","link":"#_4-3-创建服务端处理器","children":[]},{"level":3,"title":"4.4 创建客户端启动类","slug":"_4-4-创建客户端启动类","link":"#_4-4-创建客户端启动类","children":[]},{"level":3,"title":"4.5 创建客户端处理器","slug":"_4-5-创建客户端处理器","link":"#_4-5-创建客户端处理器","children":[]},{"level":3,"title":"4.6 测试","slug":"_4-6-测试","link":"#_4-6-测试","children":[]}]},{"level":2,"title":"五、Netty的特性与重要组件","slug":"五、netty的特性与重要组件","link":"#五、netty的特性与重要组件","children":[{"level":3,"title":"5.1 taskQueue任务队列","slug":"_5-1-taskqueue任务队列","link":"#_5-1-taskqueue任务队列","children":[]},{"level":3,"title":"5.2 scheduleTaskQueue延时任务队列","slug":"_5-2-scheduletaskqueue延时任务队列","link":"#_5-2-scheduletaskqueue延时任务队列","children":[]},{"level":3,"title":"5.3 Future异步机制","slug":"_5-3-future异步机制","link":"#_5-3-future异步机制","children":[]},{"level":3,"title":"5.4 Bootstrap与ServerBootStrap","slug":"_5-4-bootstrap与serverbootstrap","link":"#_5-4-bootstrap与serverbootstrap","children":[]},{"level":3,"title":"5.5 Channel","slug":"_5-5-channel","link":"#_5-5-channel","children":[]},{"level":3,"title":"5.6 Selector","slug":"_5-6-selector","link":"#_5-6-selector","children":[]},{"level":3,"title":"5.7 PiPeline与ChannelPipeline","slug":"_5-7-pipeline与channelpipeline","link":"#_5-7-pipeline与channelpipeline","children":[]},{"level":3,"title":"5.8 ChannelHandlerContext","slug":"_5-8-channelhandlercontext","link":"#_5-8-channelhandlercontext","children":[]},{"level":3,"title":"5.9 EventLoopGroup","slug":"_5-9-eventloopgroup","link":"#_5-9-eventloopgroup","children":[]}]},{"level":2,"title":"写在最后","slug":"写在最后","link":"#写在最后","children":[]},{"level":2,"title":"思维导图","slug":"思维导图","link":"#思维导图","children":[]},{"level":2,"title":"前言","slug":"前言-1","link":"#前言-1","children":[]},{"level":2,"title":"一、Netty概述","slug":"一、netty概述-1","link":"#一、netty概述-1","children":[]},{"level":2,"title":"二、为什么使用Netty","slug":"二、为什么使用netty-1","link":"#二、为什么使用netty-1","children":[{"level":3,"title":"2.1 NIO的缺点","slug":"_2-1-nio的缺点-1","link":"#_2-1-nio的缺点-1","children":[]},{"level":3,"title":"2.2 Netty的优点","slug":"_2-2-netty的优点-1","link":"#_2-2-netty的优点-1","children":[]}]},{"level":2,"title":"三、架构图","slug":"三、架构图-1","link":"#三、架构图-1","children":[]},{"level":2,"title":"四、永远的Hello Word","slug":"四、永远的hello-word-1","link":"#四、永远的hello-word-1","children":[{"level":3,"title":"4.1 引入Maven依赖","slug":"_4-1-引入maven依赖-1","link":"#_4-1-引入maven依赖-1","children":[]},{"level":3,"title":"4.2 创建服务端启动类","slug":"_4-2-创建服务端启动类-1","link":"#_4-2-创建服务端启动类-1","children":[]},{"level":3,"title":"4.3 创建服务端处理器","slug":"_4-3-创建服务端处理器-1","link":"#_4-3-创建服务端处理器-1","children":[]},{"level":3,"title":"4.4 创建客户端启动类","slug":"_4-4-创建客户端启动类-1","link":"#_4-4-创建客户端启动类-1","children":[]},{"level":3,"title":"4.5 创建客户端处理器","slug":"_4-5-创建客户端处理器-1","link":"#_4-5-创建客户端处理器-1","children":[]},{"level":3,"title":"4.6 测试","slug":"_4-6-测试-1","link":"#_4-6-测试-1","children":[]}]},{"level":2,"title":"五、Netty的特性与重要组件","slug":"五、netty的特性与重要组件-1","link":"#五、netty的特性与重要组件-1","children":[{"level":3,"title":"5.1 taskQueue任务队列","slug":"_5-1-taskqueue任务队列-1","link":"#_5-1-taskqueue任务队列-1","children":[]},{"level":3,"title":"5.2 scheduleTaskQueue延时任务队列","slug":"_5-2-scheduletaskqueue延时任务队列-1","link":"#_5-2-scheduletaskqueue延时任务队列-1","children":[]},{"level":3,"title":"5.3 Future异步机制","slug":"_5-3-future异步机制-1","link":"#_5-3-future异步机制-1","children":[]},{"level":3,"title":"5.4 Bootstrap与ServerBootStrap","slug":"_5-4-bootstrap与serverbootstrap-1","link":"#_5-4-bootstrap与serverbootstrap-1","children":[]},{"level":3,"title":"5.5 Channel","slug":"_5-5-channel-1","link":"#_5-5-channel-1","children":[]},{"level":3,"title":"5.6 Selector","slug":"_5-6-selector-1","link":"#_5-6-selector-1","children":[]},{"level":3,"title":"5.7 PiPeline与ChannelPipeline","slug":"_5-7-pipeline与channelpipeline-1","link":"#_5-7-pipeline与channelpipeline-1","children":[]},{"level":3,"title":"5.8 ChannelHandlerContext","slug":"_5-8-channelhandlercontext-1","link":"#_5-8-channelhandlercontext-1","children":[]},{"level":3,"title":"5.9 EventLoopGroup","slug":"_5-9-eventloopgroup-1","link":"#_5-9-eventloopgroup-1","children":[]}]},{"level":2,"title":"写在最后","slug":"写在最后-1","link":"#写在最后-1","children":[]}],"git":{"createdTime":1660305957000,"updatedTime":1672064201000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":34.77,"words":10432},"filePathRelative":"netty/rumen.md","localizedDate":"2022年8月12日"}');export{e as data};
