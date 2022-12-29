import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as i,a as e,d as a,b as r,e as o,r as s}from"./app.74ec0c3b.js";const h={},c=o('<p>众所周知，Java 并发是 Java 程序员必须懂但又很难懂的一块知识点。一般来说，很少有人敢说自己精通 Java 并发的，一是容易被面试官吊打，二是并发编程涉及到操作系统、内存、CPU 等计算机专业比较核心的内容，比较考验一个程序员的内功。</p><p>今天这篇文章就来给大家盘点一下 Java 并发到底该如何从入门到精通，请及时用鸡毛掸子把收藏夹里的灰清理一下。在阅读过程中，如果有所帮助，麻烦点赞/收藏和转发，算是对我码字的这份坚持的亿点点鼓励。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-1.gif" alt="" loading="lazy"></p><h2 id="一、为什么要学-java-并发" tabindex="-1"><a class="header-anchor" href="#一、为什么要学-java-并发" aria-hidden="true">#</a> 一、为什么要学 Java 并发？</h2><p>有句话不知道当讲不当讲，先讲了再说，就是“如果你只想 CURD，那么 Java 并发不学也罢！”但其实呢，大家都已经被教育的很有涵养了，工作中拧不拧螺丝不重要，重要的是面试一定要会造火箭，不然面试的机会都很难捞得到。</p><p>那作为 Java 体系中非常重要的一环，Java 并发自然是必须要掌握的，最起码也得会起个多线程吧？哈哈哈。高级点的，像平常开发中用到的 Tomcat 服务器、消息中间件、RPC 框架等等，它们的底层都涉及到了并发编程。</p><p>当然了，Java 并发涉及到东西实在是不少，包括操作系统的知识，Java 虚拟机的一些知识，Java 线程模型的知识，多线程相关的关键字，比如说 synchronized、volatile 等，还有锁的知识、JDK 提供的工具类等等，学起来还是非常容易令人头大的。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-2.png" alt="" loading="lazy"></p><p>因此，我们需要一些高效的学习路线图，以及一些优质的学习资源，从而减少我们学习Java 并发编程所投入的时间和精力。</p><h2 id="二、java-并发学习路线图" tabindex="-1"><a class="header-anchor" href="#二、java-并发学习路线图" aria-hidden="true">#</a> 二、Java 并发学习路线图</h2><p>这是我最近整理的一张关于 Java 并发编程的思维导图，大的方向可以分为三个部分：线程基础、理论基础、工具类 JUC。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-map.png" alt="" loading="lazy"></p><p>线程基础部分包括：</p><ul><li>线程的创建方式</li><li>线程的状态切换</li><li>线程的基本操作</li><li>线程组和线程优先级</li></ul><p>理论基础包括：</p><ul><li>进程和线程的区别</li><li>多线程解决了什么问题，又带来了什么问题？</li><li>如何解决并发问题？包括 Java 内存模型，以及两个常见的关键字 volatile 和 synchronized</li></ul><p>工具类 JUC 包括：</p><ul><li>锁 Lock 系的 AQS、ReentrantLock、ReentrantReadWriteLock、Condition、LockSupport</li><li>并发容器系的 ConcurrentHashMap、ConcurrentLinkedQueue、CopyOnWriteArrayList、ThreadLocal、BlockingQueue</li><li>线程池系的 ThreadPoolExecutor、ScheduledThreadPoolExecutor</li><li>原子系的 AtomicInteger、AtomicIntegerArray、AtomicReference 等等</li><li>通信工具系的倒计时器 CountDownLatch、循环栅栏 CyclicBarrier、资源访问控制 Semaphore、数据交换 Exchanger、移相器Phaser</li><li>Fork/Join框架</li></ul><p>最后再来个经典的生产者消费者模式进行实践，整个 Java 并发体系就学得非常扎实了！</p><h2 id="三、硬核-java-并发学习资料" tabindex="-1"><a class="header-anchor" href="#三、硬核-java-并发学习资料" aria-hidden="true">#</a> 三、硬核 Java 并发学习资料</h2><h3 id="_1-java-程序员进阶之路" tabindex="-1"><a class="header-anchor" href="#_1-java-程序员进阶之路" aria-hidden="true">#</a> <strong>1）Java 程序员进阶之路</strong></h3><p>学 Java，当然要找 Java 程序员进阶之路，网址我贴下面了哈：</p>',22),p={href:"https://tobebetterjavaer.com/home.html#java%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},d=e("p",null,"进去直接找 Java 核心里面的 Java 并发编程就对了。我按照前面的思维导图整理了 27 篇文章，全部都是硬核级别的，跟着学就对了。",-1),u=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-map-1.png",alt:"",loading:"lazy"})],-1),_=e("h3",{id:"_2-视频",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-视频","aria-hidden":"true"},"#"),a(),e("strong",null,"2）视频")],-1),b=e("p",null,"懂的都懂，看视频到 B 站。黑马的《Java并发编程》评价还不错，300 多个小节，我觉得讲的比较好的有三部分：synchronized优化原理、AQS和线程池。",-1),v=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-4.png",alt:"",loading:"lazy"})],-1),g={href:"https://www.bilibili.com/video/BV16J411h7Rd",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"_3-书籍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-书籍","aria-hidden":"true"},"#"),a(),e("strong",null,"3）书籍")],-1),J={href:"https://book.douban.com/subject/10484692/",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-5.png",alt:"",loading:"lazy"})],-1),f=e("p",null,"《Java 并发编程实战》这本书从总体上来看，分两条主线：",-1),x=e("ul",null,[e("li",null,"介绍 Java 并发包的重要组件和原理"),e("li",null,"如何利用这些组件来保证线程安全")],-1),k=e("p",null,"到底该如何获得线程安全呢？背会并理解下面这段话：",-1),y=e("blockquote",null,[e("p",null,"Writing thread-safe code is, at its core, about managing access to state, and in particular to shared, mutable state.")],-1),C={href:"https://book.douban.com/subject/26591326/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://book.douban.com/subject/35634953/",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"之后，再去啃《Java 并发编程实战》就会发现没有以前那么费劲了，这本书之所以被誉为 Java 并发编程的圣经，确实可以看得出作者在并发编程方面有着丰富的经验。",-1),B=e("h3",{id:"_4-开源电子书",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-开源电子书","aria-hidden":"true"},"#"),a(),e("strong",null,"4）开源电子书")],-1),L={href:"http://concurrent.redspider.group/RedSpider.html",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-6.png",alt:"",loading:"lazy"})],-1),A={href:"https://github.com/RedSpider1/concurrent",target:"_blank",rel:"noopener noreferrer"},R={href:"https://mp.weixin.qq.com/s/pxKrjw_5NTdZfHOKCkwn8w",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"沉默王二",-1),P=e("strong",null,"并发",-1),E=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"扫码关注后回复「并发」关键字",loading:"lazy"})],-1),U=e("p",null,"再推荐一份 GitHub 上星标 3.6k+ 的 Java 并发知识点总结：",-1),D={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},H=e("p",null,"仓库里有一句话我非常喜欢，也分享给各位小伙伴：",-1),N=e("blockquote",null,[e("p",null,"努力的意义，就是，在以后的日子里，放眼望去全是自己喜欢的人和事！")],-1),T=e("h3",{id:"_5-付费专栏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-付费专栏","aria-hidden":"true"},"#"),a(),e("strong",null,"5）付费专栏")],-1),V={href:"http://gk.link/a/11cBH",target:"_blank",rel:"noopener noreferrer"},W=e("h2",{id:"四、优质八股文",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#四、优质八股文","aria-hidden":"true"},"#"),a(" 四、优质八股文")],-1),F={href:"https://mp.weixin.qq.com/s/1jhBZrAb7bnvkgN1TgAUpw",target:"_blank",rel:"noopener noreferrer"},Q=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-7.png",alt:"",loading:"lazy"})],-1),G=e("p",null,"为了方便大家的阅读和背诵，我已经将其整理到了二哥的小破站《Java 程序员进阶之路》上，面渣逆袭 Java 并发篇：",-1),I={href:"https://tobebetterjavaer.com/sidebar/sanfene/javathread.html",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,"Java 并发编程八股文（背诵版）：",-1),M={href:"https://tobebetterjavaer.com/baguwen/java-thread.html",target:"_blank",rel:"noopener noreferrer"},O=o('<p>这两份八股文的质量都非常高，来看一下AQS了解多少小节下的内容，图文并茂，非常容易消化和吸收。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-8.png" alt="" loading="lazy"></p><p>诚实点说，如果能把这两份八股文背会的话，简历上就真的敢写“精通”Java 并发了。</p><h2 id="五、java-并发学习心得" tabindex="-1"><a class="header-anchor" href="#五、java-并发学习心得" aria-hidden="true">#</a> 五、Java 并发学习心得</h2><p>Java 提供的并发组件，大致可以分为两类：</p><ul><li>从预防阶段下手，防止错误发生，比如说 synchronized 关键字</li><li>一旦发生错误能及时重试，比如说 CAS</li></ul><p>对于线程数量比较多的并发场景，采用预防的措施会比较合理，这样大部分线程就不会因为小概率时间的 CAS 重试浪费掉大量的 CPU 周期；在线程数量小的时候，CAS 的意义就比较大，因为预防措施带来的线程切换要比 CAS 等待的开销更大。</p><p>想要学好 Java 并发编程，就必须得对下图中提到的基础概念进行充分的理解。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java-thread-9.jpg" alt="" loading="lazy"></p><p>在我看来，并发编程主要是用来解决这两个痛点的：</p><ul><li>多个线程对同一变量造成的不一致问题；</li><li>为提高性能，计算机的很多执行单元都配备了缓存，那势必会影响并发编程的数据一致性。</li></ul><p>需要提醒一点的是，多线程并发虽然是用来解决性能问题的，但并不意味着所有情况下都需要开启多线程，有时候反而会适得其反，那如果不是特别要求，尽量不要过早开启多线程。</p><p>并发编程是 Java 体系当中相对难掌握的一块知识点，比较考验一名程序员的内功，其实并发编程最早的应用领域就是操作系统的实现。</p><p>如果你已经有一定的编程经验，建议先学一下《计算机组成原理》，对操作系统、内存、CPU 先进行一些大致的了解，然后再来学习 Java 并发编程，可能就会感觉舒服多了！</p><p>结合我多年的工作经验来看，并发编程可以抽象成<strong>三个核心问题：分工、同步和互斥</strong>。</p><p>1）分工</p><p>分工指的是如何高效地拆解任务并分配给线程，像并发编程领域的一些设计模式，比如说生产者与消费者就是用来进行分工的。</p><p>2）同步</p><p>同步指的是线程之间如何协作，一个线程执行完了一个任务，要通知另外一个线程开工。还拿生产者-消费者模型来说吧，当队列满的时候，生产者线程等待，当队列不满的时候，生产者线程需要被唤醒重新执行；当队列空的时候，消费者线程开始等待，不空的时候，消费者线程被重新唤醒。</p><p>3）互斥</p><p>互斥指的是保证同一时刻只有一个线程访问共享资源，是解决线程安全问题的杀手锏。</p><p>当多个线程同时访问一个共享变量的时候，很容易出现“线程安全”问题，因为结果可能是不确定的——导致出现这个问题的根源就是可见性、有序性和原子性——为了解决它们，Java 引入了内存模型的概念，可以在一定程度上缓解“线程安全”的问题，但要想完全解决“线程安全”问题，还得靠互斥。</p><p>互斥的核心技术就是锁，比如说 synchronized，还有各种 Lock。</p><p>锁可以解决线程安全的问题，但同时也就意味着程序的性能要受到影响。</p><p>因此，Java 提供了针对不同场景下的锁，比如说读写锁 ReadWriteLock，可以解决多线程同时读，但只有一个线程能写的问题；但 ReadWriteLock 也有自己的问题，就是如果有线程正在读，写线程需要等待度线程释放锁后才能获得写锁，也就是读的过程中不允许写，属于一种悲观的读锁。</p><p>为了进一步提升并发执行的效率，Java 8 引入了一个新的读写锁 StampedLock，与ReadWriteLock 相比，StampedLock的优势在于读的过程中也允许获取写锁后写入，但带来的问题就是可能读的数据不一致，需要一点额外的代码来判断读的过程中是否有写入，本质上是一种乐观的锁。</p><p>乐观锁的意思就是估计读的过程中大概率不会有写入，而悲观锁则是读的过程中拒绝有写入，两者的区别就在于性能上会有差异，乐观锁需要针对小概率事件进行多一步的检测，但性能也会有所提升；悲观锁更能保证“线程安全性”。</p><p>听我这么一说，是不是一下子就清晰多了！</p><p>另外，需要 Java 学习资料的话，可以直接戳我整理的这个 GitHub/码云仓库——📚Java程序员必读书单整理，附下载地址，助力每一个Java程序员构建属于自己的知识体系。包括但不限于Java、设计模式、计算机网络、操作系统、数据库、数据结构与算法、大数据、架构、面试等等。</p>',29),Z={href:"https://github.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},X={href:"https://gitee.com/itwanger/JavaBooks",target:"_blank",rel:"noopener noreferrer"},Y=e("p",null,"给大家截图展示一下里面都有哪些优质的 PDF：",-1),$=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xuexiluxian/java/java-books.jpg",alt:"",loading:"lazy"})],-1),ee=e("p",null,[e("strong",null,"Java 并发编程虽然难学，会涉及到操作系统、CPU、内存等偏基础方面的内容，但如果你能坚持学下去，内功自然而然就提升了一大截"),a("。")],-1),ae=e("hr",null,null,-1),te=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),re={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},oe=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"111"),a(" 即可免费领取。")],-1),ne=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",loading:"lazy"})],-1);function le(ie,se){const t=s("ExternalLinkIcon");return l(),i("div",null,[c,e("blockquote",null,[e("p",null,[e("a",p,[a("https://tobebetterjavaer.com/home.html#java并发编程"),r(t)])])]),d,u,_,b,v,e("blockquote",null,[e("p",null,[a("视频地址："),e("a",g,[a("https://www.bilibili.com/video/BV16J411h7Rd"),r(t)])])]),m,e("p",null,[a("纸质书只推荐一本《"),e("a",J,[a("Java 并发编程实战"),r(t)]),a("》，豆瓣评分 9.0。不过这本书确实有点老了，基本上是按照 Java 6 来讲解的，希望出版社能早点出 2.0 版。")]),j,f,x,k,y,e("p",null,[a("如果发现不是很好懂，想从国内作者下手的话，可以尝试一下《"),e("a",C,[a("Java并发编程的艺术"),r(t)]),a("》和《"),e("a",z,[a("图解Java并发编程"),r(t)]),a("》这两本书，虽然豆瓣上评分一般，但对于构建 Java 并发的知识体系还是有很大帮助的。")]),w,B,e("p",null,[a("推荐 RedSpider社区的"),e("a",L,[a("深入浅出 Java 多线程"),r(t)]),a("，比Java 并发编程实战更通俗易懂一些，因为里面穿插了很多精美的手绘图。")]),S,e("blockquote",null,[e("p",null,[a("GitHub地址："),e("a",A,[a("https://github.com/RedSpider1/concurrent"),r(t)])])]),e("p",null,[a("考虑到有些小伙伴可能需要 "),e("a",R,[a("PDF 版本"),r(t)]),a("，我花了一周的时间整理了一份，需要的小伙伴请扫描下方的二维码关注作者的原创公众号「"),q,a("」回复关键字「"),P,a("」就可以拉取到了。")]),E,U,e("blockquote",null,[e("p",null,[e("a",D,[a("https://github.com/CL0610/Java-concurrency"),r(t)])])]),H,N,T,e("p",null,[a("王宝令老师在极客时间上开了一门《Java 并发编程实战》的付费专栏，质量还是挺高的，喜欢的小伙伴可以戳"),e("a",V,[a("链接"),r(t)]),a("去购买。")]),W,e("p",null,[a("这里给大家推荐两份 Java 并发编程方面的八股文，一份来自"),e("a",F,[a("三分恶"),r(t)]),a("，一份来自小牛，先截图给大家看一下 Java 并发方面都有哪些高频的面试题。")]),Q,G,e("blockquote",null,[e("p",null,[e("a",I,[a("https://tobebetterjavaer.com/sidebar/sanfene/javathread.html"),r(t)])])]),K,e("blockquote",null,[e("p",null,[e("a",M,[a("https://tobebetterjavaer.com/baguwen/java-thread.html"),r(t)])])]),O,e("ul",null,[e("li",null,[a("GitHub 地址："),e("a",Z,[a("https://github.com/itwanger/JavaBooks"),r(t)])]),e("li",null,[a("码云地址："),e("a",X,[a("https://gitee.com/itwanger/JavaBooks"),r(t)])])]),Y,$,ee,ae,e("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),te,a(" 等等等等……详情戳："),e("a",re,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),r(t)])]),oe,ne])}const pe=n(h,[["render",le],["__file","thread.html.vue"]]);export{pe as default};
