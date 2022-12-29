import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,a as e,d as n,b as o,e as l,r as i}from"./app.74ec0c3b.js";const c={},p=l(`<p><strong>文件的IO就告一段落了</strong>，我们来学习网络中的IO~~~为了更好地理解NIO，<strong>我们先来学习一下IO的模型</strong>~</p><p>根据UNIX网络编程对I/O模型的分类，<strong>在UNIX可以归纳成5种I/O模型</strong>：</p><ul><li><strong>阻塞I/O</strong></li><li><strong>非阻塞I/O</strong></li><li><strong>I/O多路复用</strong></li><li>信号驱动I/O</li><li>异步I/O</li></ul><h2 id="学习i-o模型需要的基础" tabindex="-1"><a class="header-anchor" href="#学习i-o模型需要的基础" aria-hidden="true">#</a> 学习I/O模型需要的基础</h2><h3 id="文件描述符" tabindex="-1"><a class="header-anchor" href="#文件描述符" aria-hidden="true">#</a> 文件描述符</h3><p>Linux 的内核将所有外部设备<strong>都看做一个文件来操作</strong>，对一个文件的读写操作会<strong>调用内核提供的系统命令(api)</strong>，返回一个<code>file descriptor</code>（fd，文件描述符）。而对一个socket的读写也会有响应的描述符，称为<code>socket fd</code>（socket文件描述符），描述符就是一个数字，<strong>指向内核中的一个结构体</strong>（文件路径，数据区等一些属性）。</p><ul><li>所以说：在Linux下对文件的操作是<strong>利用文件描述符(file descriptor)来实现的</strong>。</li></ul><h3 id="用户空间和内核空间" tabindex="-1"><a class="header-anchor" href="#用户空间和内核空间" aria-hidden="true">#</a> 用户空间和内核空间</h3><p>为了保证用户进程不能直接操作内核（kernel），<strong>保证内核的安全</strong>，操心系统将虚拟空间划分为两部分</p><ul><li><strong>一部分为内核空间</strong>。</li><li><strong>一部分为用户空间</strong>。</li></ul><h3 id="i-o运行过程" tabindex="-1"><a class="header-anchor" href="#i-o运行过程" aria-hidden="true">#</a> I/O运行过程</h3><p>我们来看看IO在系统中的运行是怎么样的(我们<strong>以read为例</strong>)</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/moxing-54ee4738-b689-4026-863f-13e456b374de.jpg" alt="" loading="lazy"></p><p>可以发现的是：当应用程序调用read方法时，是需要<strong>等待</strong>的---&gt;从内核空间中找数据，再将内核空间的数据拷贝到用户空间的。</p><ul><li><strong>这个等待是必要的过程</strong>！</li></ul><p>下面只讲解用得最多的3个I/0模型：</p><ul><li><strong>阻塞I/O</strong></li><li><strong>非阻塞I/O</strong></li><li><strong>I/O多路复用</strong></li></ul><h2 id="阻塞i-o模型" tabindex="-1"><a class="header-anchor" href="#阻塞i-o模型" aria-hidden="true">#</a> 阻塞I/O模型</h2><p>在进程(用户)空间中调用<code>recvfrom</code>，其系统调用直到数据包到达且<strong>被复制到应用进程的缓冲区中或者发生错误时才返回</strong>，在此期间<strong>一直等待</strong>。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/moxing-8a1cb207-6c56-4bd8-8489-c21d5a76e1ca.jpg" alt="" loading="lazy"></p><h2 id="非阻塞i-o模型" tabindex="-1"><a class="header-anchor" href="#非阻塞i-o模型" aria-hidden="true">#</a> 非阻塞I/O模型</h2><p><code>recvfrom</code>从应用层到内核的时候，如果没有数据就<strong>直接返回</strong>一个EWOULDBLOCK错误，一般都对非阻塞I/O模型<strong>进行轮询检查这个状态</strong>，看内核是不是有数据到来。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/moxing-6590a3de-0e7c-4ce2-aa1c-815625095e62.jpg" alt="" loading="lazy"></p><h2 id="i-o复用模型" tabindex="-1"><a class="header-anchor" href="#i-o复用模型" aria-hidden="true">#</a> I/O复用模型</h2><p>前面也已经说了：在Linux下对文件的操作是<strong>利用文件描述符(file descriptor)来实现的</strong>。</p><p>在Linux下它是这样子实现I/O复用模型的：</p><ul><li>调用<code>select/poll/epoll/pselect</code>其中一个函数，<strong>传入多个文件描述符</strong>，如果有一个文件描述符<strong>就绪，则返回</strong>，否则阻塞直到超时。</li></ul><p>比如<code>poll()</code>函数是这样子的：<code>int poll(struct pollfd *fds,nfds_t nfds, int timeout);</code></p><p>其中 <code>pollfd</code> 结构定义如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">pollfd</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> fd<span class="token punctuation">;</span>         <span class="token comment">/* 文件描述符 */</span>
    <span class="token keyword">short</span> events<span class="token punctuation">;</span>         <span class="token comment">/* 等待的事件 */</span>
    <span class="token keyword">short</span> revents<span class="token punctuation">;</span>       <span class="token comment">/* 实际发生了的事件 */</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/moxing-aec90e84-33c5-4f5b-997e-8db54d6bce88.jpg" alt="" loading="lazy"></p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nio/moxing-62def8ad-3ca3-467b-81f6-5d0a31dd7fdc.jpg" alt="" loading="lazy"></p><ul><li>（1）当用户进程调用了select，那么整个进程会被block；</li><li>（2）而同时，kernel会“监视”所有select负责的socket；</li><li>（3）当任何一个socket中的数据准备好了，select就会返回；</li><li>（4）这个时候用户进程再调用read操作，将数据从kernel拷贝到用户进程(空间)。</li><li>所以，I/O 多路复用的特点是<strong>通过一种机制一个进程能同时等待多个文件描述符</strong>，而这些文件描述符<strong>其中的任意一个进入读就绪状态</strong>，select()函数<strong>就可以返回</strong>。</li></ul><p>select/epoll的优势并不是对于单个连接能处理得更快，而是<strong>在于能处理更多的连接</strong>。</p><h2 id="i-o模型总结" tabindex="-1"><a class="header-anchor" href="#i-o模型总结" aria-hidden="true">#</a> I/O模型总结</h2><p>正经的描述都在上面给出了，不知道大家理解了没有。下面我举几个例子总结一下这三种模型：</p><p><strong>阻塞I/O：</strong></p><ul><li><p>Java3y跟女朋友去买喜茶，排了很久的队终于可以点饮料了。我要绿研，谢谢。可是喜茶不是点了单就能立即拿，于是我<strong>在喜茶门口等了一小时才拿到</strong>绿研。</p></li><li><p>在门口干等一小时</p></li></ul><p><strong>非阻塞I/O：</strong></p><ul><li><p>Java3y跟女朋友去买一点点，排了很久的队终于可以点饮料了。我要波霸奶茶，谢谢。可是一点点不是点了单就能立即拿，<strong>同时</strong>服务员告诉我：你大概要等半小时哦。你们先去逛逛吧~于是Java3y跟女朋友去玩了几把斗地主，感觉时间差不多了。于是<strong>又去一点点问</strong>：请问到我了吗？我的单号是xxx。服务员告诉Java3y：还没到呢，现在的单号是XXX，你还要等一会，可以去附近耍耍。问了好几次后，终于拿到我的波霸奶茶了。</p></li><li><p>去逛了下街、斗了下地主，时不时问问到我了没有</p></li></ul><p><strong>I/O复用模型：</strong></p><ul><li><p>Java3y跟女朋友去麦当劳吃汉堡包，现在就厉害了可以使用微信小程序点餐了。于是跟女朋友找了个地方坐下就用小程序点餐了。点餐了之后玩玩斗地主、聊聊天什么的。<strong>时不时听到广播在复述XXX请取餐</strong>，反正我的单号还没到，就继续玩呗。~~<strong>等听到广播的时候再取餐就是了</strong>。时间过得挺快的，此时传来：Java3y请过来取餐。于是我就能拿到我的麦辣鸡翅汉堡了。</p></li><li><p>听广播取餐，<strong>广播不是为我一个人服务</strong>。广播喊到我了，我过去取就Ok了。</p></li></ul>`,42),d={href:"https://www.zhihu.com/question/29005375/answer/667616386",target:"_blank",rel:"noopener noreferrer"},g=e("hr",null,null,-1),h=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),u={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[n("微信搜 "),e("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"111"),n(" 即可免费领取。")],-1),b=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",loading:"lazy"})],-1);function v(f,k){const t=i("ExternalLinkIcon");return a(),r("div",null,[p,e("blockquote",null,[e("p",null,[n("参考链接："),e("a",d,[n("https://www.zhihu.com/question/29005375/answer/667616386"),o(t)]),n("，整理：沉默王二")])]),g,e("p",null,[n("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),h,n(" 等等等等……详情戳："),e("a",u,[n("可以说是2022年全网最全的学习和找工作的PDF资源了"),o(t)])]),m,b])}const O=s(c,[["render",v],["__file","moxing.html.vue"]]);export{O as default};
