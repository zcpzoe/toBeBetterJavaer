import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as e,a as n,d as s,b as c,e as o,r as l}from"./app.74ec0c3b.js";const u={},i=o(`<p>对于 Java 初学者来说，多线程的很多概念听起来就很难理解。比方说：</p><ul><li>进程，是对运行时程序的封装，是系统进行资源调度和分配的基本单位，实现了操作系统的并发。</li><li>线程，是进程的子任务，是CPU调度和分派的基本单位，实现了进程内部的并发。</li></ul><p>很抽象，对不对？打个比喻，你在打一把王者（其实我不会玩哈doge）：</p><ul><li>进程可以比作是你开的这一把游戏</li><li>线程可以比作是你所选的英雄或者是游戏中的水晶野怪等之类的。</li></ul><p>带着这个比喻来理解进程和线程的一些关系，一个进程可以有多个线程就叫多线程。是不是感觉非常好理解了？</p><p><strong>❤1、线程在进程下进行</strong></p><p>(单独的英雄角色、野怪、小兵肯定不能运行)</p><p><strong>❤2、进程之间不会相互影响，主线程结束将会导致整个进程结束</strong></p><p>(两把游戏之间不会有联系和影响。你的水晶被推掉，你这把游戏就结束了)</p><p><strong>❤3、不同的进程数据很难共享</strong></p><p>(两把游戏之间很难有联系，有联系的情况比如上把的敌人这把又匹配到了)</p><p><strong>❤4、同进程下的不同线程之间数据很容易共享</strong></p><p>(你开的那一把游戏，你可以看到每个玩家的状态——生死，也可以看到每个玩家的出装等等）</p><p><strong>❤5、进程使用内存地址可以限定使用量</strong></p><p>(开的房间模式，决定了你可以设置有多少人进，当房间满了后，其他人就进不去了，除非有人退出房间，其他人才能进)</p><p>搞清楚上面这些概念之后，我们来看一下多线程创建的两种方式：</p><p>♠①：创建一个类继承Thread类，并重写run方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;:打了&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;个小兵&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来写个测试方法验证下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建MyThread对象</span>
<span class="token class-name">MyThread</span> t1<span class="token operator">=</span><span class="token keyword">new</span>  <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MyThread</span> t2<span class="token operator">=</span><span class="token keyword">new</span>  <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">MyThread</span> t3<span class="token operator">=</span><span class="token keyword">new</span>  <span class="token class-name">MyThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置线程的名字</span>
t1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;鲁班&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;刘备&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;亚瑟&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//启动线程</span>
t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下执行后的结果：</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/wangzhe-thread-01.png" alt="" loading="lazy"></p><p>♠②：创建一个类实现Runnable接口，并重写run方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span><span class="token comment">//sleep会发生异常要显示处理</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//暂停20毫秒</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;打了:&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;个小兵&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来写个测试方法验证下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建MyRunnable类</span>
<span class="token class-name">MyRunnable</span> mr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建Thread类的有参构造,并设置线程名</span>
<span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;张飞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;貂蝉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;吕布&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//启动线程</span>
t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下执行后的结果：</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/wangzhe-thread-02.png" alt="" loading="lazy"></p><p>♠③：实现Callable接口，重写call()方法，这种方式可以通过FutureTask获取任务执行的返回值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CallerTask</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Hello,i am running!&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//创建异步任务</span>
        <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> task<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CallerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//启动线程</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//等待执行完成，并获取返回结果</span>
            <span class="token class-name">String</span> result<span class="token operator">=</span>task<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ExecutionException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>❤1、为什么要重写run方法？</strong></p><p>因为run方法是用来封装被线程执行的代码。</p><p><strong>❤2、<code>run()</code>方法和<code>start()</code>方法有什么区别？</strong></p><ul><li><code>run()</code>：封装线程执行的代码，直接调用相当于调用普通方法。</li><li><code>start()</code>：启动线程，然后由JVM 调用此线程的 <code>run()</code> 方法。</li></ul><p><strong>❤3、通过继承 Thread 的方法和实现 Runnable 接口的方式创建多线程，哪个好？</strong></p><p>实现Runable接口好，原因有两个：</p><ul><li>♠①、避免了Java单继承的局限性</li><li>♠②、适合多个相同的程序代码去处理同一资源的情况，把线程、代码和数据有效的分离，更符合面向对象的设计思想。</li></ul><p>针对线程控制，大家还会遇到 3 个常见的方法，我们来一一介绍下。</p><p>1）<code>sleep()</code>：使当前正在执行的线程暂停指定的毫秒数，也就是进入休眠的状态。</p><p>需要注意的是，sleep 的时候要对异常进行处理。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span><span class="token comment">//sleep会发生异常要显示处理</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//暂停20毫秒</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）<code>join()</code>：等待这个线程执行完才会轮到后续线程得到cpu的执行权，使用这个也要抛出异常。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建MyRunnable类</span>
<span class="token class-name">MyRunnable</span> mr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建Thread类的有参构造,并设置线程名</span>
<span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;张飞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;貂蝉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;吕布&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//启动线程</span>
t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    t1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//等待t1执行完才会轮到t2，t3抢</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来看一下执行后的结果：</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/wangzhe-thread-03.png" alt="" loading="lazy"></p><p>3）<code>setDaemon()</code>：将此线程标记为守护线程，准确来说，就是服务其他的线程，像 Java 中的垃圾回收线程，就是典型的守护线程。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//创建MyRunnable类</span>
<span class="token class-name">MyRunnable</span> mr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建Thread类的有参构造,并设置线程名</span>
<span class="token class-name">Thread</span> t1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;张飞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;貂蝉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span> t3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>mr<span class="token punctuation">,</span> <span class="token string">&quot;吕布&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

t1<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">setDaemon</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//启动线程</span>
t1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
t3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果其他线程都执行完毕，main 方法（主线程）也执行完毕，JVM 就会退出，也就是停止运行。如果 JVM 都停止运行了，守护线程自然也就停止了。</p><p>最后再来看一下线程的生命周期吧，一图胜千言。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/thread/wangzhe-thread-04.png" alt="" loading="lazy"></p><hr>`,51),k=n("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),r={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"111"),s(" 即可免费领取。")],-1),m=n("p",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",loading:"lazy"})],-1);function v(b,g){const a=l("ExternalLinkIcon");return p(),e("div",null,[i,n("p",null,[s("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),k,s(" 等等等等……详情戳："),n("a",r,[s("可以说是2022年全网最全的学习和找工作的PDF资源了"),c(a)])]),d,m])}const w=t(u,[["render",v],["__file","wangzhe-thread.html.vue"]]);export{w as default};
