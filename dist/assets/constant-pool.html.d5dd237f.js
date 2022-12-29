import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a,d as n,b as e,e as l,r as c}from"./app.74ec0c3b.js";const r={},i=l(`<p>“三妹，今天我们来学习一下字符串常量池吧，这是字符串中非常关键的一个知识点。”我话音未落，青岛路小学那边传来了嘹亮的歌声就钻进了我的耳朵，“唱 ~ 山 ~ 歌 ~”</p><p>三妹说，“好呀，开始吧，哥。”</p><p>“先从这道面试题开始吧！”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“这行代码创建了几个对象？”</p><p>“不就一个吗？”三妹不假思索地回答。</p><p>“不，两个！”我直接否定了三妹的答案，“使用 new 关键字创建一个字符串对象时，Java 虚拟机会先在字符串常量池中查找有没有‘二哥’这个字符串对象，如果有，就不会在字符串常量池中创建‘二哥’这个对象了，直接在堆中创建一个‘二哥’的字符串对象，然后将堆中这个‘二哥’的对象地址返回赋值给变量 s。”</p><p>“如果没有，先在字符串常量池中创建一个‘二哥’的字符串对象，然后再在堆中创建一个‘二哥’的字符串对象，然后将堆中这个‘二哥’的字符串对象地址返回赋值给变量 s。”</p><p>“为什么要先在字符串常量池中创建对象，然后再在堆上创建呢？这样不就多此一举了？”三妹敏锐地发现了问题。</p><p>我回答，“由于字符串的使用频率实在是太高了，所以 Java 虚拟机为了提高性能和减少内存开销，在创建字符串对象的时候进行了一些优化，特意为字符串开辟了一个字符串常量池。”</p><p>通常情况下，我们会采用双引号的方式来创建字符串对象，而不是通过 new 关键字的方式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;三妹&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当执行 <code>String s = &quot;三妹&quot;</code> 时，Java 虚拟机会先在字符串常量池中查找有没有“三妹”这个字符串对象，如果有，则不创建任何对象，直接将字符串常量池中这个“三妹”的对象地址返回，赋给变量 s；如果没有，在字符串常量池中创建“三妹”这个对象，然后将其地址返回，赋给变量 s。</p><p>“哦，我明白了，哥。”三妹突然插话到，“有了字符串常量池，就可以通过双引号的方式直接创建字符串对象，不用再通过 new 的方式在堆中创建对象了，对吧？”</p><p>“是滴。new 的方式始终会创建一个对象，不管字符串的内容是否已经存在，而双引号的方式会重复利用字符串常量池中已经存在的对象。”我说。</p><p>来看下面这个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>按照我们之前的分析，这两行代码会创建三个对象，字符串常量池中一个，堆上两个。</p><p>再来看下面这个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;三妹&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;三妹&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这两行代码只会创建一个对象，就是字符串常量池中的那个。这样的话，性能肯定就提高了！</p><p>“那哥，字符串常量池在内存中的什么位置呢？”三妹问。</p><p>我说，“三妹，你这个问题问得好呀！”</p><p>在 Java 8 之前，字符串常量池在永久代中。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/constant-pool-01.png" alt="" loading="lazy"></p><p>Java 8 之后，移除了永久代，字符串常量池就移到了堆中。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/constant-pool-02.png" alt="" loading="lazy"></p><p>“哥，能再简单给我解释一下方法区，永久代和元空间的概念吗？有点模糊。”三妹说。</p><p>我说，“可以呀。”</p>`,29),u={href:"https://tobebetterjavaer.com/oo/interface.html",target:"_blank",rel:"noopener noreferrer"},d=a("li",null,"永久代是 HotSpot 虚拟机中对方法的一个实现，就像是接口的实现类；",-1),v=a("li",null,"Java 8 的时候，移除了永久代，取而代之的是元空间，是方法区的另外一个实现。",-1),g=a("p",null,[n("永久代是放在运行时数据区中的，所以它的大小受到 Java 虚拟机本身大小的限制，所以 Java 8 之前，会经常遇到 "),a("code",null,"java.lang.OutOfMemoryError: PremGen Space"),n(" 的异常，PremGen Space 就是方法区的意思；而元空间是直接放在内存中的，所以只受本机可用内存的限制，虽然也会发生内存溢出，但出现的几率相对之前就小了很多。")],-1),m=a("p",null,"“明白了吧，三妹？”我问。",-1),k=a("p",null,"“嗯嗯。”三妹回答。",-1),_=a("p",null,"“那关于字符串常量池，就先说这么多吧，是不是还挺有意思的。”我说。",-1),b=a("p",null,"“是的，我现在是彻底搞懂了字符串常量池，哥，你真棒！”三妹说。",-1),h=a("hr",null,null,-1),j=a("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),f={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},S=a("p",null,[n("微信搜 "),a("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),a("strong",null,"111"),n(" 即可免费领取。")],-1),q=a("p",null,[a("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",loading:"lazy"})],-1);function J(w,x){const s=c("ExternalLinkIcon");return o(),p("div",null,[i,a("ul",null,[a("li",null,[n("方法区是 Java 虚拟机规范中的一个概念，就像是一个"),a("a",u,[n("接口"),e(s)]),n("吧；")]),d,v]),g,m,k,_,b,h,a("p",null,[n("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),j,n(" 等等等等……详情戳："),a("a",f,[n("可以说是2022年全网最全的学习和找工作的PDF资源了"),e(s)])]),S,q])}const V=t(r,[["render",J],["__file","constant-pool.html.vue"]]);export{V as default};
