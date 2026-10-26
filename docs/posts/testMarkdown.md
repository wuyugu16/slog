---
date: 2026-10-25
category: tool
title: markdown测试
sticky: 10000
---
如果本页由内容为渲染，证明markdown崩了
123（换行）
456
**粗体**
*斜体*
$\LaTeX+1$

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$


::: details 114
内容
:::

脚注 1 链接[^first].

脚注 2 链接[^second].

行内的脚注^[Text of inline footnote] 定义.

重复的页脚引用[^second].


```js
export default {
  name: 'MyComponent',
  // ...
}
```

<code>html测试</code>

<code id="123"> js测试： 1+1 = {{ i }} </code>

<script setup>
import {ref} from 'vue';
let i = ref(1+1);
</script>

[^first]: 脚注 **可以包含特殊标记**

    也可以由多个段落组成

[^second]: 脚注文字。