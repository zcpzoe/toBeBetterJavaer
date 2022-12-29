import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as s,a as e,d as a,b as o,e as n,r as i}from"./app.74ec0c3b.js";const c={},p=e("h1",{id:"深入理解jvm的内存结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#深入理解jvm的内存结构","aria-hidden":"true"},"#"),a(" 深入理解JVM的内存结构")],-1),d=e("p",null,"在谈 JVM 内存区域划分之前，我们先来看一下 Java 程序的具体执行过程，我画了一幅图。",-1),_=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/neicun-jiegou-dac0f4c1-8a7e-4309-a599-5664cdaf5016.png",alt:"",loading:"lazy"})],-1),h=e("p",null,"Java 源代码文件经过编译器编译后生成字节码文件，然后交给 JVM 的类加载器，加载完毕后，交给执行引擎执行。在整个执行的过程中，JVM 会用一块空间来存储程序执行期间需要用到的数据，这块空间一般被称为运行时数据区，也就是常说的 JVM 内存。",-1),u=e("p",null,"所以，当我们在谈 JVM 内存区域划分的时候，其实谈的就是这块空间——运行时数据区。",-1),v=e("p",null,"大家应该对官方出品的《Java 虚拟机规范》有所了解吧？了解这个规范可以让我们更深入地理解 JVM。该规范主要包含 6 个部分，分别是：",-1),J=e("li",null,"第一章：引言",-1),m=e("li",null,"第二章：Java 虚拟机结构",-1),g=e("li",null,"第三章：Java 虚拟机编译",-1),f={href:"https://mp.weixin.qq.com/s/uMEZ2Xwctx4n-_8zvtDp5A",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"第五章：加载、链接和初始化",-1),j=e("li",null,"第六章：Java 虚拟机指令集",-1),M=e("li",null,"第七章：操作码",-1),x=n('<p>根据第二章 Java 虚拟机结构中的规定，运行时数据区可以分为以下几个部分，见下图。</p><p><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/neicun-jiegou-e33179f3-275b-44c9-87f6-802198f8f360.png" alt="" loading="lazy"></p><h3 id="_01、程序计数器" tabindex="-1"><a class="header-anchor" href="#_01、程序计数器" aria-hidden="true">#</a> 01、程序计数器</h3><p>程序计数器（Program Counter Register）所占的内存空间不大，很小一块，可以看作是当前线程所执行的字节码指令的行号指示器。字节码解释器会在工作的时候改变这个计数器的值来选取下一条需要执行的字节码指令，像分支、循环、跳转、异常处理、线程恢复等功能都需要依赖这个计数器来完成。</p><p>在 JVM 中，多线程是通过线程轮流切换来获得 CPU 执行时间的，因此，在任一具体时刻，一个 CPU 的内核只会执行一条线程中的指令，因此，为了线程切换后能恢复到正确的执行位置，每个线程都需要有一个独立的程序计数器，并且不能互相干扰，否则就会影响到程序的正常执行次序。</p><p>也就是说，我们要求程序计数器是线程私有的。</p><p>《Java 虚拟机规范》中规定，如果线程执行的是非本地（native）方法，则程序计数器中保存的是当前需要执行的指令地址；如果线程执行的是本地方法，则程序计数器中的值是 undefined。</p><p>为什么本地方法在程序计数器中的值是 undefined 的？因为本地方法大多是通过 C/C++ 实现的，并未编译成需要执行的字节码指令。</p><p>由于程序计数器中存储的数据所占的空间不会随程序的执行而发生大小上的改变，因此，程序计数器是不会发生内存溢出现象（OutOfMemory）的。</p><h3 id="_02、java-虚拟机栈" tabindex="-1"><a class="header-anchor" href="#_02、java-虚拟机栈" aria-hidden="true">#</a> 02、Java 虚拟机栈</h3>',10),V={href:"https://mp.weixin.qq.com/s/fc48Z5tSMlBHweYIS1UL0g",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,"栈帧包含以下 5 个部分，见下图。",-1),C=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/jvm/neicun-jiegou-4ea2a60a-05df-4ed1-8109-99ae23acefd1.png",alt:"",loading:"lazy"})],-1),S={href:"https://tobebetterjavaer.com/jvm/how-jvm-run-zijiema-zhiling.md",target:"_blank",rel:"noopener noreferrer"},E=n('<h3 id="_04、堆" tabindex="-1"><a class="header-anchor" href="#_04、堆" aria-hidden="true">#</a> 04、堆</h3><p>堆是所有线程共享的一块内存区域，在 Java 虚拟机启动的时候创建，用来存储对象（数组也是一种对象）。</p><p>以前，Java 中“几乎”所有的对象都会在堆中分配，但随着 JIT（Just-In-Time）编译器的发展和逃逸技术的逐渐成熟，所有的对象都分配到堆上渐渐变得不那么“绝对”了。从 JDK 7 开始，Java 虚拟机已经默认开启逃逸分析了，意味着如果某些方法中的对象引用没有被返回或者未被外面使用（也就是未逃逸出去），那么对象可以直接在栈上分配内存。</p><p>简单解释一下 JIT 和逃逸分析。</p><p>常见的编译型语言如 C++，通常会把代码直接编译成 CPU 所能理解的机器码来运行。而 Java 为了实现“一次编译，处处运行”的特性，把编译的过程分成两部分，首先它会先由 javac 编译成通用的中间形式——字节码，然后再由解释器逐条将字节码解释为机器码来执行。所以在性能上，Java 可能会干不过 C++ 这类编译型语言。</p><p>为了优化 Java 的性能 ，JVM 在解释器之外引入了 JIT 编译器：当程序运行时，解释器首先发挥作用，代码可以直接执行。随着时间推移，即时编译器逐渐发挥作用，把越来越多的代码编译优化成本地代码，来获取更高的执行效率。解释器这时可以作为编译运行的降级手段，在一些不可靠的编译优化出现问题时，再切换回解释执行，保证程序可以正常运行。</p><p>逃逸分析（Escape Analysis），简单来讲就是，Hotspot 虚拟机可以分析新创建对象的使用范围，并决定是否在 Java 堆上分配内存的一项技术。</p><p>堆是 Java 垃圾收集器管理的主要区域，因此也被称作 GC 堆（Garbage Collected Heap）。从垃圾回收的角度来看，由于垃圾收集器基本都采用了分代垃圾收集的算法，所以堆还可以细分为：新生代和老年代。新生代还可以细分为：Eden 空间、From Survivor、To Survivor 空间等。进一步划分的目的是更好地回收内存，或者更快地分配内存。</p><p>堆这最容易出现的就是 OutOfMemoryError 错误，分为以下几种表现形式：</p><ul><li><code>OutOfMemoryError: GC Overhead Limit Exceeded</code>：当 JVM 花太多时间执行垃圾回收并且只能回收很少的堆空间时，就会发生该错误。</li><li><code>java.lang.OutOfMemoryError: Java heap space</code>：假如在创建新的对象时, 堆内存中的空间不足以存放新创建的对象, 就会引发该错误。和本机的物理内存无关，和我们配置的虚拟机内存大小有关！</li></ul><h3 id="_05、元空间" tabindex="-1"><a class="header-anchor" href="#_05、元空间" aria-hidden="true">#</a> 05、元空间</h3><p>JDK 8 的时候，原有的方法区（更准确的说应该是永久代）被彻底移除，取而代之的是元空间。</p><p>我们来说说方法区吧。方法区和堆一样，是线程共享的区域，它用来存储已经被 Java 虚拟机加载的类信息、常量、静态变量，以及便器编译后的代码等。</p><p>在有些地方，方法区也被称为永久代。但其实不能这么理解。</p><blockquote><p>《Java 虚拟机规范》中只规定了有方法区这么一个概念和它的作用，并没有规定如何去实现它。那么不同的 Java 虚拟机可能就会有不同的实现。永久代是 HotSpot 对方法区的一种实现形式。也就是说，永久代只是 HotSpot 中的一个概念，而方法区则是 Java 虚拟机规范中的一个定义，一种规范。</p></blockquote><p>换句话说，方法区和永久代的关系就像是 Java 中接口和类的关系，类实现了接口。</p>',16),y={href:"https://mp.weixin.qq.com/s/uMEZ2Xwctx4n-_8zvtDp5A",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"JDK 7 之前，运行时常量池中包含着字符串常量池，都在方法区。",-1),z=e("p",null,"JDK 7 的时候，字符串常量池从方法区中拿出来放到了堆中，运行时常量池中的其他东西还在方法区中。",-1),O=e("p",null,"JDK 8 的时候，HotSpot 移除了永久代，也就是说方法区不存在了，取而代之的是元空间。也就意味着字符串常量池在堆中，运行时常量池跑到了元空间。",-1),q=e("p",null,"再来说说为什么要将永久代 (PermGen) 或者说方法区替换为元空间 (MetaSpace) 。",-1),H=e("p",null,"第一，永久代放在 Java 虚拟机中，就会受到 Java 虚拟机内存大小的限制，而元空间使用的是本地内存，也就脱离了 Java 虚拟机内存的限制。",-1),w=e("p",null,"第二，JDK 8 的时候，在 HotSpot 中融合了 JRockit 虚拟机，而 JRockit 中并没有永久代的概念，因此新的 HotSpot 就没有必要再开辟一块空间来作为永久代了。",-1),I=e("hr",null,null,-1),K=e("strong",null,"数据库、计算机网络、算法与数据结构、设计模式、框架类Spring、Netty、微服务（Dubbo，消息队列） 网关",-1),P={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"111"),a(" 即可免费领取。")],-1),N=e("p",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",loading:"lazy"})],-1);function B(G,L){const t=i("ExternalLinkIcon");return l(),s("div",null,[p,d,_,h,u,v,e("ul",null,[J,m,g,e("li",null,[a("第四章："),e("a",f,[a("Class 文件"),o(t)])]),b,j,M]),x,e("p",null,[a("Java 虚拟机栈中是一个个栈帧，每个栈帧对应一个被调用的方法。当线程执行一个方法时，会创建一个对应的栈帧，并将栈帧压入栈中。当方法执行完毕后，将栈帧从栈中移除。"),e("a",V,[a("栈"),o(t)]),a("遵循的是后进先出的原则，所以线程当前执行的方法对应的栈帧必定在 Java 虚拟机栈的顶部。")]),k,C,e("p",null,[e("a",S,[a("Java 虚拟机栈"),o(t)])]),E,e("p",null,[a("在方法区中，还有一块非常重要的部分，也就是运行时常量池。在讲 "),e("a",y,[a("class 文件"),o(t)]),a("的时候，提到了每个 class 文件都会有个常量池，用来存放字符串常量、类和接口的名字、字段名、常量等等。运行时常量池和 class 文件的常量池是一一对应的，它就是通过 class 文件中的常量池来构建的。")]),D,z,O,q,H,w,I,e("p",null,[a("最近整理了一份牛逼的学习资料，包括但不限于Java基础部分（JVM、Java集合框架、多线程），还囊括了 "),K,a(" 等等等等……详情戳："),e("a",P,[a("可以说是2022年全网最全的学习和找工作的PDF资源了"),o(t)])]),T,N])}const R=r(c,[["render",B],["__file","neicun-jiegou.html.vue"]]);export{R as default};
