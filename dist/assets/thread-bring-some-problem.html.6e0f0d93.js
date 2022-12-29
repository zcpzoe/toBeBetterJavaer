import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as e,d as a,b as s,e as r,r as c}from"./app.74ec0c3b.js";const l={},i=r(`<h1 id="并发编程带来了哪些问题" tabindex="-1"><a class="header-anchor" href="#并发编程带来了哪些问题" aria-hidden="true">#</a> 并发编程带来了哪些问题？</h1><p>多线程技术有这么多的好处，难道就没有一点缺点么，就在任何场景下就一定适用么？很显然不是。</p><p>在实际工作中，错误使用多线程非但不能提高效率还可能使程序崩溃。以在路上开车为例：</p><p>在一个单向行驶的道路上，每辆汽车都遵守交通规则，这时候整体通行是正常的。『单向车道』意味着『一个线程』，『多辆车』意味着『多个job任务』。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-c0a03b79-36d8-4120-888e-0597aa66ca5b.png" alt="单线程顺利同行" loading="lazy"></p><p>如果需要提升车辆的同行效率，一般的做法就是扩展车道，对应程序来说就是『加线程池』，增加线程数。这样在同一时间内，通行的车辆数远远大于单车道。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-a65346bc-7b8b-4883-9d85-d07859df2e69.png" alt="多线程顺利同行" loading="lazy"></p><p>然而成年人的世界没有那么完美，车道一旦多起来『加塞』的场景就会越来越多，出现碰撞后也会影响整条马路的通行效率。这么一对比下来『多车道』确实可能比『单车道』要慢。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-532930da-03fe-4a59-aee8-0b97b5f1a966.png" alt="多线程故障" loading="lazy"></p><p>防止汽车频繁变道加塞可以采取在车道间增加『护栏』，那在程序的世界该怎么做呢？</p><p>程序世界中多线程遇到的问题归纳起来就是三类：<code>『线程安全问题』</code>、<code>『活跃性问题』</code>、<code>『性能问题』</code>，接下来会讲解这些问题，以及问题对应的解决手段。</p><h2 id="线程安全问题" tabindex="-1"><a class="header-anchor" href="#线程安全问题" aria-hidden="true">#</a> 线程安全问题</h2><p>有时候我们会发现，明明在单线程环境中正常运行的代码，在多线程环境中可能会出现意料之外的结果，其实这就是大家常说的『线程不安全』。那到底什么是线程不安全呢？往下看。</p><p><strong>原子性</strong></p><p>举一个银行转账的例子，比如从账户A向账户B转1000元，那么必然包括2个操作：从账户A减去1000元，往账户B加上1000元，两个操作都成功才意味着一次转账最终成功。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-eba43c92-e42d-4318-a40c-b9365c32d922.png" alt="" loading="lazy"></p><p>试想一下，如果这两个操作不具备原子性，从A的账户扣减了1000元之后，操作突然终止了，账户B没有增加1000元，那问题就大了。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-c22ae9be-bd80-4613-9c7e-3feb83c6c83f.png" alt="" loading="lazy"></p><p>银行转账这个例子有两个步骤，出现了意外后导致转账失败，说明没有原子性。</p><blockquote><p>原子性：即一个操作或者多个操作 要么全部执行并且执行的过程不会被任何因素打断，要么就都不执行。</p><p>原子操作：即不会被线程调度机制打断的操作，没有上下文切换。</p></blockquote><p>在并发编程中很多操作都不是原子操作，出个小题目：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 操作1</span>
i<span class="token operator">++</span><span class="token punctuation">;</span>   <span class="token comment">// 操作2</span>
i <span class="token operator">=</span> j<span class="token punctuation">;</span> <span class="token comment">// 操作3</span>
i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 操作4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这四个操作中有哪些是原子操作，哪些不是的？不熟悉的人可能认为这些都是原子操作，其实只有操作1是原子操作。</p><ul><li>操作1：对基本数据类型变量的赋值是原子操作；</li><li>操作2：包含三个操作，读取i的值，将i加1，将值赋给i；</li><li>操作3：读取j的值，将j的值赋给i；</li><li>操作4：包含三个操作，读取i的值，将i加1，将值赋给i；</li></ul><p>在单线程环境下上述四个操作都不会出现问题，但是在多线程环境下，如果不通过加锁操作，往往可能得到意料之外的值。</p><p>在Java语言中通过可以使用synchronize或者lock来保证原子性。</p><p><strong>可见性</strong></p><p>talk is cheap，先show一段代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
* Author: leixiaoshuai
*/</span>
<span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 线程1执行</span>
    i <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 线程2执行</span>
    j <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">return</span> j<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线程1执行update方法将 i 赋值为100，一般情况下线程1会在自己的工作内存中完成赋值操作，却没有及时将新值刷新到主内存中。</p><p>这个时候线程2执行get方法，首先会从主内存中读取i的值，然后加载到自己的工作内存中，这个时候读取到i的值是50，再将50赋值给j，最后返回j的值就是50了。原本期望返回100，结果返回50，这就是可见性问题，线程1对变量i进行了修改，线程2没有立即看到i的新值。</p><blockquote><p>可见性：指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值。</p></blockquote><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-d91ca0c2-4f39-4e98-90e2-8acb793eb983.png" alt="" loading="lazy"></p><p>如上图每个线程都有属于自己的工作内存，工作内存和主内存间需要通过store和load等进行交互。</p><p>为了解决多线程可见性问题，Java语言提供了<code>volatile</code>这个关键字。当一个共享变量被volatile修饰时，它会保证修改的值会立即被更新到主存，当有其他线程需要读取时，它会去内存中读取新值。而普通共享变量不能保证可见性，因为变量被修改后什么时候刷回到主存是不确定的，另外一个线程读的可能就是旧值。</p><p>当然Java的锁机制如synchronize和lock也是可以保证可见性的，加锁可以保证在同一时刻只有一个线程在执行同步代码块，释放锁之前会将变量刷回至主存，这样也就保证了可见性。</p><p>关于线程不安全的表现还有『有序性』，这个问题会在后面的文章中深入讲解。</p><h2 id="活跃性问题" tabindex="-1"><a class="header-anchor" href="#活跃性问题" aria-hidden="true">#</a> 活跃性问题</h2><p>上面讲到为了解决<code>可见性</code>问题，我们可以采取加锁方式解决，但是如果加锁使用不当也容易引入其他问题，比如『死锁』。</p><p>在说『死锁』前我们先引入另外一个概念：<code>活跃性问题</code>。</p><blockquote><p>活跃性是指某件正确的事情最终会发生，当某个操作无法继续下去的时候，就会发生活跃性问题。</p></blockquote><p>概念是不是有点拗口，如果看不懂也没关系，你可以记住活跃性问题一般有这样几类：<code>死锁</code>，<code>活锁</code>，<code>饥饿问题</code>。</p><p><strong>（1）死锁</strong></p><p>死锁是指多个线程因为环形的等待锁的关系而永远的阻塞下去。一图胜千语，不多解释。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-d4e65d5f-3de1-4a1c-8ae1-02cb3bfb528c.png" alt="" loading="lazy"></p><p><strong>（2）活锁</strong></p><p>死锁是两个线程都在等待对方释放锁导致阻塞。而<code>活锁</code>的意思是线程没有阻塞，还活着呢。</p><p>当多个线程都在运行并且修改各自的状态，而其他线程彼此依赖这个状态，导致任何一个线程都无法继续执行，只能重复着自身的动作和修改自身的状态，这种场景就是发生了活锁。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-d1f9e916-0985-46fe-bf87-63fccfd27bae.png" alt="" loading="lazy"></p><p>如果大家还有疑惑，那我再举一个生活中的例子，大家平时在走路的时候，迎面走来一个人，两个人互相让路，但是又同时走到了一个方向，如果一直这样重复着避让，这俩人就是发生了活锁，学到了吧，嘿嘿。</p><p><strong>（3）饥饿</strong></p><p>如果一个线程无其他异常却迟迟不能继续运行，那基本是处于饥饿状态了。</p><p>常见有几种场景:</p><ul><li>高优先级的线程一直在运行消耗CPU，所有的低优先级线程一直处于等待；</li><li>一些线程被永久堵塞在一个等待进入同步块的状态，而其他线程总是能在它之前持续地对该同步块进行访问；</li></ul><p>有一个非常经典的饥饿问题就是<code>哲学家用餐问题</code>，如下图所示，有五个哲学家在用餐，每个人必须要同时拿两把叉子才可以开始就餐，如果哲学家1和哲学家3同时开始就餐，那哲学家2、4、5就得饿肚子等待了。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-314a47df-c953-4b7d-831c-007173981819.png" alt="" loading="lazy"></p><h2 id="性能问题" tabindex="-1"><a class="header-anchor" href="#性能问题" aria-hidden="true">#</a> 性能问题</h2><p>前面讲到了线程安全和死锁、活锁这些问题会影响多线程执行过程，如果这些都没有发生，多线程并发一定比单线程串行执行快吗，答案是不一定，因为多线程有<code>创建线程</code>和<code>线程上下文切换</code>的开销。</p><p>创建线程是直接向系统申请资源的，对操作系统来说创建一个线程的代价是十分昂贵的，需要给它分配内存、列入调度等。</p><p>线程创建完之后，还会遇到线程<code>上下文切换</code>。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-d125d0b9-3b60-46cd-a79f-a26dd5210b44.png" alt="" loading="lazy"></p><p>CPU是很宝贵的资源速度也非常快，为了保证雨露均沾，通常为给不同的线程分配<code>时间片</code>，当CPU从执行一个线程切换到执行另一个线程时，CPU 需要保存当前线程的本地数据，程序指针等状态，并加载下一个要执行的线程的本地数据，程序指针等，这个开关被称为『上下文切换』。</p><p>一般减少上下文切换的方法有：</p><ul><li>无锁并发编程：可以参照concurrentHashMap锁分段的思想，不同的线程处理不同段的数据，这样在多线程竞争的条件下，可以减少上下文切换的时间。</li><li>CAS算法，利用Atomic下使用CAS算法来更新数据，使用了乐观锁，可以有效的减少一部分不必要的锁竞争带来的上下文切换</li><li>使用最少线程：避免创建不需要的线程，比如任务很少，但是创建了很多的线程，这样会造成大量的线程都处于等待状态</li><li>协程：在单线程里实现多任务的调度，并在单线程里维持多个任务间的切换</li></ul><h2 id="有态度的总结" tabindex="-1"><a class="header-anchor" href="#有态度的总结" aria-hidden="true">#</a> 有态度的总结</h2><p>多线程用好了可以让程序的效率成倍提升，用不好可能比单线程还要慢。</p><p>用一张图总结一下上面讲的：</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/thread-bring-some-problem-119223c9-83a9-42e1-9a0c-f9c706a1e793.png" alt="" loading="lazy"></p><hr>`,69),d=e("p",null,"编辑：沉默王二，内容大部分来源以下三个开源仓库：",-1),b={href:"http://concurrent.redspider.group/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/CL0610/Java-concurrency",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/CoderLeixiaoshuai/java-eight-part",target:"_blank",rel:"noopener noreferrer"},h=e("hr",null,null,-1),v=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),g={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"111"),a(" 即可免费领取。")],-1),j=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",loading:"lazy"})],-1);function f(_,y){const n=c("ExternalLinkIcon");return o(),p("div",null,[i,e("blockquote",null,[d,e("ul",null,[e("li",null,[e("a",b,[a("深入浅出 Java 多线程"),s(n)])]),e("li",null,[e("a",u,[a("并发编程知识总结"),s(n)])]),e("li",null,[e("a",m,[a("Java八股文"),s(n)])])])]),h,e("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),v,a(" 等等等等……详情戳："),e("a",g,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),s(n)])]),k,j])}const w=t(l,[["render",f],["__file","thread-bring-some-problem.html.vue"]]);export{w as default};
