import{_ as s,c as n,a,o as i}from"./app-okPrtdaK.js";const l={};function d(c,e){return i(),n("div",null,[...e[0]||(e[0]=[a(`<h1 id="orchid" tabindex="-1"><a class="header-anchor" href="#orchid"><span>orchid</span></a></h1><p>orchid是一门由仓鼠🐹创造的编程语言，以下是其特性</p><h2 id="io" tabindex="-1"><a class="header-anchor" href="#io"><span>IO</span></a></h2><p>orchid语言的每条语句都用 <code>.</code> 结尾。<code>&quot;&quot;</code> 内的内容会自动输出</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&quot;hello world&quot;.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>\\</code> 用于转义</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&quot;hello\\\\&quot;.</span>
<span class="line">&quot;world\\n&quot;.</span>
<span class="line">~ . ~ 我们不允许空语句</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>input</code> 函数输入一Byte字符，返回ascii码值，不跳过空白字符</p><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2><p><code>~</code> 用于注释</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&quot;hello&quot;. ~ 这是注释</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="变量定义" tabindex="-1"><a class="header-anchor" href="#变量定义"><span>变量定义</span></a></h2><p>orchid语言使用 <code>:</code> 定义变量，用 <code>=</code> 赋值<br> orchid语言的变量名要求：</p><ol><li>不能与orchid的预定义变量相同（<code>Ord</code>,<code>ω</code>,<code>Func</code>,<code>Array</code>）</li><li>不能含有特殊符号</li><li>支持unicode</li></ol><p>orchid语言最为常见的类型为 <code>Ord</code> ，用于表示小于 <math><msub><mi>ε</mi><mn>0</mn></msub></math> 的序数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Ord.</span>
<span class="line">a = 10.</span>
<span class="line">c : Ord = 10. ~ 这是 c: Ord. c=10. 的简写</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 orchid 语言中，<code>==</code> 被称为“强硬赋值”，因为它赋值了两次。被“强硬赋值”的变量将变为不可变常量</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Ord.</span>
<span class="line">a == 10. ~ a将变为常量</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 orchid 语言中，<code>===</code> 被称为“强强赋值”，因为它赋值了三次。被“强强赋值”的变量将会永远存在，除非你重装orchid编译器</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">δ : Ord === 10. ~ 此后你将永远不能修改a</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要注意的是，orchid的每一条语句都有返回值。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">γ : Ord. ~ 返回γ的引用</span>
<span class="line">β : Ord == 10. ~ 返回β的引用</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>在访问变量时，作用域内的变量如果和外层的重名，则使用作用域内的。<br> 同作用域的变量不能重名<br> 每一种类型都存在初始值。对于 <code>Ord</code> 类型，其初值为 <math><mn>0</mn></math></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">γ : Ord.</span>
<span class="line">γ. ~ 0</span>
<span class="line">x : Ord = Ord().</span>
<span class="line">x. ~ 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ord的运算" tabindex="-1"><a class="header-anchor" href="#ord的运算"><span>Ord的运算</span></a></h2><p>以下字符串是Ord字面量</p><ol><li>一个正整数，即 <code>0|([1-9][0-9]*)</code></li><li><code>ω</code></li></ol><p>以下是Ord支持的运算</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Ord = 10.</span>
<span class="line">b : Ord = 15.</span>
<span class="line">c : Ord = ω.</span>
<span class="line">a + b . ~25</span>
<span class="line">a * b . ~150</span>
<span class="line">a ^ b . ~1000000000000000</span>
<span class="line">d : Ord = c * 2 + 1 . ~ω2+1</span>
<span class="line">c * c . ~ω^2</span>
<span class="line">c * b . ~ω15</span>
<span class="line">c + a . ~ω+10</span>
<span class="line">a + c . ~ω，序数乘法不满足交换律</span>
<span class="line">b * c . ~ω，序数乘法不满足交换律</span>
<span class="line">c ^ a . ~ω^10</span>
<span class="line">d * d . ~ω^2*4+ω4+1</span>
<span class="line">d ^ d . ~ω^{ω2+1}2+ω^{ω2}</span>
<span class="line">a &gt; b . ~0，此处表示布尔值</span>
<span class="line">a &lt;= b . ~1</span>
<span class="line">a :: b . ~0，因为==为强行赋值，所以::表示相等</span>
<span class="line">a != b . ~1</span>
<span class="line">$a . ~11，取后继</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运算等级（由高到低，部分见后文）</p><ul><li><code>\\</code></li><li><code>$</code></li><li><code>^</code></li><li><code>*</code></li><li><code>+</code></li><li><code>&gt;</code>,<code>&lt;</code>,<code>&gt;=</code>,<code>&lt;=</code>,<code>::</code>,<code>!=</code></li><li><code>:</code></li><li><code>=</code>,<code>==</code>,<code>===</code>,（右结合）</li><li><code>,</code>,<code>;</code>,<code>[n]</code></li></ul><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h2><p>你可以使用 <code>Array</code> 来创建数组，用 <code>()</code> 访问元素</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Array(Ord) = Array(Ord)(1,2,4).</span>
<span class="line">a(2). ~ 4</span>
<span class="line">a(3). ~ 0，数组越界时为类型默认值</span>
<span class="line">a(4) = 4. ~ 自动扩容</span>
<span class="line">b : Array(Ord) = [1,2,4]. ~ 简写</span>
<span class="line">~ c : Array(Ord) = [1,,4]. ~ 不允许裸漏的分隔符</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组可以嵌套</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Array(Array(Ord)) = [[1,2,3],[4,5,6]].</span>
<span class="line">a(1)(2). ~ 5</span>
<span class="line">a(0)(1). ~ 2</span>
<span class="line">a(2). ~ Array(Ord):[] Array的默认值为对应类型的空数组</span>
<span class="line">~ c : Array(Array(Ord)) = [1,[3,4]]. ~ 不允许类型不同的数组</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以用 <code>;</code> 表示“二维数组”</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Array(Ord) = [1,3,4;8,5,6].</span>
<span class="line">a(0). ~ 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>;</code> 是比 <code>,</code> 更高级的分隔符<br> 事实上，如果我们认为上面的代码中 <code>1,3,4</code> 是第 <math><mn>0,1,2</mn></math> 个元素，那么 <code>8</code> 的索引应该比 <code>1,3,4</code> （包括如果加入更多的 <code>,</code>）都高，即 <math><mrow><mrow><mi>sup</mi><mo>⁡</mo></mrow><mo form="prefix" stretchy="false">(</mo><mn>0,1,2</mn><mo separator="true">,</mo><mi>.</mi><mi>.</mi><mi>.</mi><mo form="postfix" stretchy="false">)</mo><mo>=</mo></mrow><mrow><mi>ω</mi></mrow></math></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Array(Ord) = [1,3,4;8,5,6].</span>
<span class="line">a(ω). ~ 8</span>
<span class="line">a(ω+1). ~ 5</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>[2]</code> 是比 <code>;</code> 更高级的分隔符<br> 事实上，<code>,</code> 被视为 <code>[0]</code>，<code>;</code> 被视为 <code>[1]</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Array(Ord) = [1,2,3;4,5[2]5,4;114,514].</span>
<span class="line">a(ω^2+1). ~ 4</span>
<span class="line">a(ω^2+ω). ~ 114 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>\\length</code> 可以获取数组长度（即数组的最后一个元素的下标+1）；<code>\\deep</code> 可以获取 <math><mrow><mn>1</mn><mo>+</mo></mrow></math> 数组的最大分隔符。对于空数组，<code>\\deep</code> 返回0<br><code>[]</code> 内也可以是序数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">o : Ord = ω.</span>
<span class="line">a : Array(Ord) = [1[o+1]2[o]5,3].</span>
<span class="line">a\\length(). ~ ω^(ω+1)+ω^ω+2</span>
<span class="line">a\\deep(). ~ ω+1</span>
<span class="line">a(ω^(ω+1)). ~ 2</span>
<span class="line">o = 114. ~ a不变</span>
<span class="line">a(ω^(ω+1)+ω^ω+1). ~ 3</span>
<span class="line">b : Array(Array(Ord)) = [[1,3;4,2[o]2,4][o+1][4,2;1[4]3][o*2][3,2[4],2[o]]].</span>
<span class="line">~ 如上的数组也是可以解析的</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="match" tabindex="-1"><a class="header-anchor" href="#match"><span>match</span></a></h2><p><code>Ord</code> 支持用 <code>#</code> 进行匹配<br><code>#</code> 有以下几种基本匹配</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Ord = 1 .</span>
<span class="line">b : Ord = ω .</span>
<span class="line">#(a){</span>
<span class="line">    α+β =&gt; &quot;0&quot;. ~ 两个序数相加</span>
<span class="line">    /func1 =&gt; &quot;1&quot;. ~ 极限序数</span>
<span class="line">    ω^α =&gt; α+2!</span>
<span class="line">    $α =&gt; &quot;3&quot;. ~ 后继序数</span>
<span class="line">    b+1919 =&gt; &quot;4&quot;. ~ 常数匹配</span>
<span class="line">}.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此处 <code>/func1</code> 匹配极限序数，<code>func1 : Ord(小于ω)-&gt;Ord</code> 是一个获取基本列的函数<br> 如果基本列的函数参数大于等于 <code>ω</code>，返回 <code>0</code></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Ord = ω^2+ω+1 .</span>
<span class="line">#(a){</span>
<span class="line">    α + β =&gt; α! ~ 叹号也是语句结尾符号之一。这里可以退出match并返回α</span>
<span class="line">    ω^α =&gt; α + 1 .</span>
<span class="line">    0 =&gt; %{</span>
<span class="line">        α = 114514.</span>
<span class="line">    }(). ~ 这是一种特殊用法</span>
<span class="line">}. ~ match是有返回值的。如果匹配的想没有返回，则返回值为0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以创造复杂的匹配</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#(a){</span>
<span class="line">    $(α + ω^β) =&gt; α .</span>
<span class="line">    α + /func1 =&gt; 333 .</span>
<span class="line">    α + β + 1333 =&gt; β .</span>
<span class="line">    $$α =&gt; 0 .</span>
<span class="line">    /func1 =&gt; 114 .</span>
<span class="line">}.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，orchid不会检查你是否考虑了所有情况。如果一个也不匹配，将会直接跳过 <code>#</code>。</p><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Ord = 1.</span>
<span class="line">b : &amp;Ord = a.</span>
<span class="line">b = 10.</span>
<span class="line">a. ~ 10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>=</code>,<code>==</code>,<code>===</code>,<code>:</code> 返回的都是引用<br> 所以 <code>a : Ord = 1</code> 其实是 <code>(a : Ord) = 1</code></p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><h3 id="普通函数" tabindex="-1"><a class="header-anchor" href="#普通函数"><span>普通函数</span></a></h3><p>你可以使用类似变量的语法定义函数。<br> 函数的默认值为返回返回值默认值的空函数<br> 如果某个语句的结尾是 <code>!</code>，那么将返回这个语句的结果。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">add1 : Func(Ord,[Ord]) = %(a : Ord){ ~ Func的参数为返回值和参数数组</span>
<span class="line">    a+1!</span>
<span class="line">}.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果函数体执行完毕时没有返回，则返回返回值类型的默认值</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">zzz : Func(Ord,[Ord]).</span>
<span class="line">ff : Func(Ord,[Ord]) = %(Ord a){</span>
<span class="line">    #(a){</span>
<span class="line">        $β =&gt; zzz(β)!</span>
<span class="line">        0 =&gt; 1!</span>
<span class="line">    }.</span>
<span class="line">}.</span>
<span class="line">zzz = %(Ord a){</span>
<span class="line">    #(a){</span>
<span class="line">        $α =&gt; ff(α)!</span>
<span class="line">        0 =&gt; 0!</span>
<span class="line">    }.</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>很多语言都只支持有限个参数，但是orchid语言支持更多的参数，就像Array那样<br> 你可以使用 <code>@</code> 来表示某个位置的参数</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">func1 : Func(Ord,[Ord,Ord;Ord]) = %(a:Ord,b:Ord;c:Ord){</span>
<span class="line">    0!</span>
<span class="line">}.</span>
<span class="line">x : Ord == ω*2+1 .</span>
<span class="line">func2 : Func(Ord,[Ord,Ord;Ord[x]Ord]) = %(a:Ord,b:Ord;c:Ord[x]d:Ord){</span>
<span class="line">    0!</span>
<span class="line">}.</span>
<span class="line">func2(1,2;3[ω*2+1]4).</span>
<span class="line">func2(1@0,2@1,3@ω,4@(ω^(ω2+1))). ~此行效果和上一行相同</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，<code>Array</code> 也是函数</p><h3 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数"><span>匿名函数</span></a></h3><p>你可能已经发现了，<code>%</code> 创建的是匿名函数</p><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类"><span>类</span></a></h2><p>类和函数的本质相同<br> 在变量声明中，<code>:</code> 右侧的部分是一个函数<br> 如果一个函数被当作类，那么其中所有的局部变量/函数将作为成员变量/函数，其中的所有代码将作为构造函数<br> 类内的成员变量/函数使用 <code>\\</code> 访问<br> 事实上，<code>Array</code> 的 <code>length</code> 和 <code>deep</code> 就是成员函数<br><code>&amp;</code> 后接符号作为函数名可以重载运算符（包括 <code>+</code> <code>*</code> <code>^</code> <code>::</code> <code>&gt;</code> <code>&lt;</code> <code>&lt;=</code> <code>&gt;=</code> <code>!=</code> <code>()</code> <code>[]</code>）。这样的函数无法显式调用。<code>()</code> 的参数任意；<code>[]</code> 的参数为 <code>Ord</code>，其他参数数量为 <math><mn>1</mn></math>，类型任意</p><h2 id="作用域、行号和跳转" tabindex="-1"><a class="header-anchor" href="#作用域、行号和跳转"><span>作用域、行号和跳转</span></a></h2><p>匿名函数和 <code>#</code> 匹配可以创建作用域<br> 事实上，<code>!</code> 总是跳出一层作用域<br> 你可以用 <code>!!</code> 或更多叹号结尾，这回跳出多层作用域<br> 如果已经跳到顶层，将会忽略剩余部分<br> orchid支持行号</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">0 | α : Ord = 1.</span>
<span class="line">2 | &quot;berber&quot;.</span>
<span class="line">3 | &quot;123&quot;.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>orchid要求每个行号的要么上一行结尾是 <code>.?!</code> 之一，要么在代码开头<br> orchid支持序数行号</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">0 | lsq : Ord = 1.</span>
<span class="line">ω | &quot;berber&quot;.</span>
<span class="line">ω^3 | &quot;123&quot;.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你甚至可以在行号中放入类似 <code>#</code> 的匹配</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">0 | sff : Ord = 3802.</span>
<span class="line">ω*α | &quot;berber&quot;. ~ 所有形如 ω*α 的行都是此内容</span>
<span class="line">ω^3 | &quot;123&quot;.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码将重复输出 <code>berber</code><br><code>?</code> 是第三种语句结束符号，可以在同作用域跳转/向外跳转<br> 需要注意的是，match引发的作用域无法作为跳转终点。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">ω*2 | &quot;Ber&quot;. ~ 行号的匹配顺序也类似match</span>
<span class="line">ω*α | &quot;ber&quot;.</span>
<span class="line">ω*$α+1 | ω^3?</span>
<span class="line">ω^3 | &quot;123&quot;.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行顺序：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">ω*1 | &quot;ber&quot;.</span>
<span class="line">ω*2 | &quot;Ber&quot;.</span>
<span class="line">ω*$1+1 | ω^3?</span>
<span class="line">ω^3 | &quot;123&quot;.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出 <code>berBer123</code><br> 事实上，<code>?</code> 前也可以是一条完整的表达式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">a : Ord = 10.</span>
<span class="line">(ω^3)+a?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>行号不是必须的，他更像是flag</p>`,82)])])}const p=s(l,[["render",d]]),t=JSON.parse('{"path":"/posts/26Summer/260824-orchid.html","title":"orchid","lang":"zh-CN","frontmatter":{"date":"2026-8-24","category":"fun","title":"orchid","tag":["none"]},"headers":[{"level":2,"title":"IO","slug":"io","link":"#io","children":[]},{"level":2,"title":"注释","slug":"注释","link":"#注释","children":[]},{"level":2,"title":"变量定义","slug":"变量定义","link":"#变量定义","children":[]},{"level":2,"title":"Ord的运算","slug":"ord的运算","link":"#ord的运算","children":[]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[]},{"level":2,"title":"match","slug":"match","link":"#match","children":[]},{"level":2,"title":"引用","slug":"引用","link":"#引用","children":[]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"普通函数","slug":"普通函数","link":"#普通函数","children":[]},{"level":3,"title":"匿名函数","slug":"匿名函数","link":"#匿名函数","children":[]}]},{"level":2,"title":"类","slug":"类","link":"#类","children":[]},{"level":2,"title":"作用域、行号和跳转","slug":"作用域、行号和跳转","link":"#作用域、行号和跳转","children":[]}],"git":{"contributors":[{"name":"wuyugu","username":"wuyugu","email":"wuyugu3624175@outlook.com","commits":1,"url":"https://github.com/wuyugu"}],"changelog":[{"hash":"adb95963cbfc0bce339baee44d6e66e4a57f59c2","time":1788573182000,"email":"wuyugu3624175@outlook.com","author":"wuyugu","message":"merge main to only-safe"}]},"filePathRelative":"posts/26Summer/260824-orchid.md"}');export{p as comp,t as data};
