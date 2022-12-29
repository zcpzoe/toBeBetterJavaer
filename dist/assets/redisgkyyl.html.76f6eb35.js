import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,a as e,d as a,b as r,e as o,r as c}from"./app.74ec0c3b.js";const d={},p=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-83928ee9-7ab4-4cac-a5e8-d34d23f67ee7.jpg",alt:"",loading:"lazy"})],-1),l={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},h=o('<p>这里要等待 5 分钟 ...😂😂😂😂😂😂</p><p><strong>为了不辜负公众号读者朋友们的期待，二哥请我的三剑客团队之一楼仔单独给大家写了一篇</strong>，他一直在大厂，也是目前部门的技术总监，就请他针对这块知识，再结合之前的一些面试情况，给大家唠唠。</p><h2 id="_1-redis-分片策略" tabindex="-1"><a class="header-anchor" href="#_1-redis-分片策略" aria-hidden="true">#</a> 1. Redis 分片策略</h2><h3 id="_1-1-hash-分片" tabindex="-1"><a class="header-anchor" href="#_1-1-hash-分片" aria-hidden="true">#</a> 1.1 Hash 分片</h3><p>我们都知道，对于 Reids 集群，我们需要通过 hash 策略，将 key 打在 Redis 的不同分片上。</p><p>假如我们有 3 台机器，常见的分片方式为 hash(IP)%3，其中 3 是机器总数。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-3ec3fcb6-946e-4551-bb27-a10485dfd898.jpg" alt="" loading="lazy"></p><p>目前很多小公司都这么玩，上手快，简单粗暴，但是这种方式有一个致命的缺点：<strong>当增加或者减少缓存节点时，总节点个数发生变化，导致分片值发生改变，需要对缓存数据做迁移。</strong></p><p>那如何解决该问题呢，答案是一致性 Hash。</p><h3 id="_1-2-一致性-hash" tabindex="-1"><a class="header-anchor" href="#_1-2-一致性-hash" aria-hidden="true">#</a> 1.2 一致性 Hash</h3><p>一致性哈希算法是 1997 年由麻省理工学院提出的一种分布式哈希实现算法。</p><p><strong>环形空间</strong>：按照常用的 hash 算法来将对应的 key 哈希到一个具有 2^32 次方个桶的空间中，即 0~(2^32)-1 的数字空间中，现在我们可以将这些数字头尾相连，想象成一个闭合的环形。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-06ba1ced-137e-4361-94b1-e4e881e0393b.jpg" alt="" loading="lazy"></p><p><strong>Key 散列 Hash 环</strong>：现在我们将 object1、object2、object3、object4 四个对象通过特定的 Hash 函数计算出对应的 key 值，然后散列到 Hash 环上。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-e97a5a69-f36d-4fc6-aae2-81f9e78b6e07.jpg" alt="" loading="lazy"></p><p><strong>机器散列 Hash 环</strong>：假设现在有 NODE1、NODE2、NODE3 三台机器，以顺时针的方向计算，将所有对象存储到离自己最近的机器中，object1 存储到了 NODE1，object3 存储到了 NODE2，object2、object4 存储到了 NODE3。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-add22da4-5277-4632-b30d-d45476d7aa2e.jpg" alt="" loading="lazy"></p><p><strong>节点删除</strong>：如果 NODE2 出现故障被删除了，object3 将会被迁移到 NODE3 中，这样仅仅是 object3 的映射位置发生了变化，其它的对象没有任何的改动。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-b75ac60e-4d28-4185-a466-778262063474.jpg" alt="" loading="lazy"></p><p><strong>添加节点</strong>：如果往集群中添加一个新的节点 NODE4，object2 被迁移到了 NODE4 中，其它对象保持不变。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-b09cd375-b900-451c-bc35-7f47f11186a8.jpg" alt="" loading="lazy"></p><p>通过对节点的添加和删除的分析，<strong>一致性哈希算法在保持了单调性的同时，还使数据的迁移达到了最小，这样的算法对分布式集群来说是非常合适的，避免了大量数据迁移，减小了服务器的的压力。</strong></p><blockquote><p>如果机器个数太少，为了避免大量数据集中在几台机器，实现平衡性，可以建立虚拟节点（比如一台机器建立 3-4 个虚拟节点），然后对虚拟节点进行 Hash。</p></blockquote><h2 id="_2-高可用方案" tabindex="-1"><a class="header-anchor" href="#_2-高可用方案" aria-hidden="true">#</a> 2. 高可用方案</h2><p>很多时候，公司只给我们提供一套 Redis 集群，至于如何计算分片，我们一般有 2 套成熟的解决方案。</p><p><strong>客户端方案</strong>：也就是客户端自己计算 Redis 分片，无论你使用 Hash 分片，还是一致性 Hash，都是由客户端自己完成。</p><p>客户端方案简单粗暴，但是只能在单一语言系统之间复用，如果你使用的是 PHP 的系统，后来 Java 也需要使用，你需要用 Java 重新写一套分片逻辑。</p><p><strong>为了解决多语言、不同平台复用的问题</strong>，就衍生出中间代理层方案。</p><p><strong>中间代理层方案</strong>：将客户端解决方案的经验移植到代理层中，通过通用的协议（如 Redis 协议）来实现在其他语言中的复用，<strong>用户无需关心缓存的高可用如何实现，只需要依赖你的代理层即可。</strong></p><p>代理层主要负责读写请求的路由功能，并且在其中内置了一些高可用的逻辑。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-98eb1a34-a750-45e1-a78c-3ae328617ec3.jpg" alt="" loading="lazy"></p><blockquote><p>你可以看看，你们公司的 Redis 使用的是哪种方案呢？对于“客户端方案”，其实有的也不用自己去写，比如负责维护 Redis 的部门会提供不同语言的 SDK，你只需要去集成对应的 SDK 即可。</p></blockquote><h2 id="_3-高可用原理" tabindex="-1"><a class="header-anchor" href="#_3-高可用原理" aria-hidden="true">#</a> 3. 高可用原理</h2><h3 id="_3-1-redis-主从" tabindex="-1"><a class="header-anchor" href="#_3-1-redis-主从" aria-hidden="true">#</a> 3.1 Redis 主从</h3><p>Redis 基本都通过“主 - 从”模式进行部署，<strong>主从库之间采用的是读写分离的方式。</strong></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-fa7256d3-3e62-4456-8874-d4d278143c7e.jpg" alt="" loading="lazy"></p><p>同 MySQL 类似，<strong>主库支持写和读，从库只支持读，数据会先写到主库，然后定时同步给从库</strong>，具体的同步规则，主要将 RDB 日志从主库同步给从库，然后从库读取 RDB 日志，这里比较复杂，其中还涉及到 replication buffer，就不再展开。</p><p>这里有个问题，一次同步过程中，主库需要完成 2 个耗时操作：生成 RDB 文件和传输 RDB 文件。</p><p>如果从库数量过多，主库忙于 fock 子进程生成 RDB 文件和数据同步，会阻塞主库正常请求。</p><p>这个如何解决呢？<strong>答案是 “主 - 从 - 从” 模式。</strong></p><p>为了避免所有从库都从主库同步 RDB 日志，可以借助从库来完成同步：比如新增 3、4 两个 Slave，可以<strong>等 Slave 2 同步完后，再通过 Slave 2 同步给 Slave 3 和 Slave 4。</strong></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-3cc67fa9-9a09-4d52-835c-2b3a64dc9989.jpg" alt="" loading="lazy"></p><p>如果我是面试官，我可能会继续问，如果数据同步了 80%，网络突然终端，当网络后续又恢复后，Redis 会如何操作呢？</p><h3 id="_3-2-redis-分片" tabindex="-1"><a class="header-anchor" href="#_3-2-redis-分片" aria-hidden="true">#</a> 3.2 Redis 分片</h3><p>这个有点像 MySQL 分库分表，将数据存储到不同的地方，避免查询时全部集中到一个实例。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-66fa5ada-7558-4041-b387-5ad19d9e0f81.jpg" alt="" loading="lazy"></p><p>其实还有一个好处，就是数据进行主从同步时，如果 RDB 数据过大，会严重阻塞主线程，如果用分片的方式，可以将数据分摊，比如原来有 10 GB 的数据，分摊后，每个分片只有 2 GB。</p><p>可能有同学会问，Redis 分片，和“主 - 从”模式有啥关系呢？你可以理解，<strong>图中的每个分片都是主库，每个分片都有自己的“主 - 从”模式结构。</strong></p><p>那么数据如何找到对应的分片呢，前面其实已经讲过，假如我们有 3 台机器，常见的分片方式为 hash(IP)%3，其中 3 是机器总数，hash 值为机器 IP，这样每台机器就有自己的分片号。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-3ec3fcb6-946e-4551-bb27-a10485dfd898.jpg" alt="" loading="lazy"></p><p>对于 key，也可以采用同样的方式，找到对应的机器分片号 hash(key)%3，hash 算法有很多，可以用 CRC16(key)，也可以直接取 key 中的字符，通过 ASCII 码转换成数字。</p><h3 id="_3-3-redis-哨兵机制" tabindex="-1"><a class="header-anchor" href="#_3-3-redis-哨兵机制" aria-hidden="true">#</a> 3.3 Redis 哨兵机制</h3><h5 id="_3-3-1-什么是哨兵机制" tabindex="-1"><a class="header-anchor" href="#_3-3-1-什么是哨兵机制" aria-hidden="true">#</a> 3.3.1 什么是哨兵机制 ？</h5><p>在主从模式下，如果 master 宕机了，从库不能从主库同步数据，主库也不能提供读写功能。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-65ea84e0-085a-4d51-8dad-24795772f3cf.jpg" alt="" loading="lazy"></p><p><strong>怎么办呢 ？这时就需要引入哨兵机制 ！</strong></p><p><strong>哨兵节点是特殊的 Redis 服务，不提供读写服务，主要用来监控 Redis 实例节点。</strong></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-221f629c-8603-4dcc-9da4-d5ef1bed7400.jpg" alt="" loading="lazy"></p><p>那么当 master 宕机，哨兵如何执行呢？</p><h5 id="_3-3-2-判断主机下线" tabindex="-1"><a class="header-anchor" href="#_3-3-2-判断主机下线" aria-hidden="true">#</a> 3.3.2 判断主机下线</h5><p>哨兵进程会使用 PING 命令检测它自己和主、从库的网络连接情况，用来判断实例的状态，如果哨兵发现主库或从库对 PING 命令的响应超时了，哨兵就会先把它标记为“主观下线”。</p><p>那是否一个哨兵判断为“主观下线”，就直接下线 master 呢？</p><p>答案肯定是不行的，需要遵循 “少数服从多数” 原则：<strong>有 N/2+1 个实例判断主库“主观下线”，才判定主库为“客观下线”。</strong></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-c68ed8b4-79d3-4c63-beed-f45ca6c6dfbb.jpg" alt="" loading="lazy"></p><p>比如上图有 3 个哨兵，有 2 个判断 “主观下线”，那么就标记主库为 “客观下线”。</p><h5 id="_3-3-3-选取新主库" tabindex="-1"><a class="header-anchor" href="#_3-3-3-选取新主库" aria-hidden="true">#</a> 3.3.3 选取新主库</h5><p>我们有 5 个从库，需要选取一个最优的从库作为主库，分 2 步：</p><ul><li><strong>筛选</strong>：检查从库的当前在线状态和之前的网络连接状态，过滤不适合的从库；</li><li><strong>打分</strong>：根据从库优先级、和旧主库的数据同步接近度进行打分，选最高分作为主库。</li></ul><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-c07bdc8f-da53-4d6d-99ed-63cf9544cbb8.jpg" alt="" loading="lazy"></p><p><strong>如果分数一致怎么办 ？</strong> Redis 也有一个策略：ID 号最小的从库得分最高，会被选为新主库。</p><p>当 slave 3 选举为新主库后，<strong>会通知其它从库和客户端，对外宣布自己是新主库</strong>，大家都得听我的哈！</p><p>今天就先聊这么多，我们下期见，大家都学废了么 ？</p><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2>',73),g={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-cac9bcac-2980-444e-b4fe-b7532c5d7a0c.png",alt:"球友及时分享的 23 届秋招提前批汇总",loading:"lazy"})],-1),m={href:"https://mp.weixin.qq.com/s/3RVsFZ17F0JzoHCLKbQgGw",target:"_blank",rel:"noopener noreferrer"},f=e("strong",null,"360 多名",-1),_=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-redisgkyyl-16b9dcde-d92b-428d-87cf-52e5799b4ffe.png",alt:"球友分享的个人面经，非常真诚😁",loading:"lazy"})],-1),y=e("hr",null,null,-1),j=e("p",null,[e("em",null,"没有什么使我停留——除了目的，纵然岸旁有玫瑰、有绿荫、有宁静的港湾，我是不系之舟"),a("。")],-1),v={href:"https://mp.weixin.qq.com/s?__biz=Mzg3OTU5NzQ1Mw==&mid=2247488519&idx=1&sn=c082f8f8a5442e622f5c82af63994359&chksm=cf0356e5f874dff3ba81f06e4387d76a5ebbdd1ca0799a2699832aa15c29258abf3abed9fee5&scene=27#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[e("strong",null,"推荐阅读"),a("：")],-1),u={href:"https://mp.weixin.qq.com/s/1WdD2eLVMT-efMukLrtAwg",target:"_blank",rel:"noopener noreferrer"},x={href:"https://mp.weixin.qq.com/s/2wW4ZZWMYXuyY2-tLGvIwQ",target:"_blank",rel:"noopener noreferrer"},w={href:"https://mp.weixin.qq.com/s/16AvpvTZ4NOyfFvU57ok9Q",target:"_blank",rel:"noopener noreferrer"},R={href:"https://mp.weixin.qq.com/s/WAM1Y__mtSsDsO24RP3oPg",target:"_blank",rel:"noopener noreferrer"},z=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao-old.jpg",alt:"",loading:"lazy"})],-1);function q(D,N){const t=c("ExternalLinkIcon");return s(),n("div",null,[p,e("p",null,[a("Redis 高可用，太重要啦！"),e("a",l,[a("二哥编程星球"),r(t)]),a("的好几个球友找工作面试的时候，都被问到了这个问题，那么公众号的读者朋友们也先不要着急看文章，可以想一想，如果面试官给你抛这么个问题，你会怎么回答呢，可以先想 5 分钟。")]),h,e("p",null,[a("一个人可以走得很快，但一群人才能走得更远。"),e("a",g,[a("二哥的编程星球"),r(t)]),a("里的每个球友都非常的友善，除了鼓励你，还会给你提出合理的建议。")]),b,e("p",null,[e("a",m,[a("二哥的编程星球"),r(t)]),a("（戳链接加入）上线2个月，已经有 "),f,a(" 小伙伴加入了，如果你也需要一个良好的学习氛围，戳链接加入我们的大家庭吧！这是一个 Java 学习指南 + 编程实战的私密圈子，你可以向二哥提问、帮你制定学习计划、跟着二哥一起做实战项目，冲冲冲。")]),_,y,j,e("blockquote",null,[e("p",null,[a("转载链接："),e("a",v,[a("https://mp.weixin.qq.com/s?__biz=Mzg3OTU5NzQ1Mw==&mid=2247488519&idx=1&sn=c082f8f8a5442e622f5c82af63994359&chksm=cf0356e5f874dff3ba81f06e4387d76a5ebbdd1ca0799a2699832aa15c29258abf3abed9fee5&scene=27#wechat_redirect"),r(t)]),a("，出处：楼仔，整理：沉默王二")])]),k,e("ul",null,[e("li",null,[e("a",u,[a("去外包，我也挺知足"),r(t)])]),e("li",null,[e("a",x,[a("我的第一次，4万！"),r(t)])]),e("li",null,[e("a",w,[a("入职新公司半个月了"),r(t)])]),e("li",null,[e("a",R,[a("垃圾国企，离职也罢"),r(t)])])]),z])}const E=i(d,[["render",q],["__file","redisgkyyl.html.vue"]]);export{E as default};
