---
date: 3025/3/3
category: note
title: 公理系统相关证明
tag:
    - 数学
---
本期目标：
- 证明存在可数非递归序数 $\Omega$
- 证明 “存在不可达基数 $I$ ” 独立于 ZFC
- 证明 AC 独立于 ZF
- 证明 CH 独立于 ZFC

## 目标一
Kleene’s $\mathcal{O}$ 是一种把自然数映射到可数递归序数的体系，其需要先指定一套图灵机编码 $f$
- $\mathcal{O}(0)=0$
- $\mathcal{O}(2^n)=\mathcal{O}(n)+1$，且 $\mathcal{O}(n)<\mathcal{O}(2^n)$
- 假设第 $i$ 个图灵机 $f(i)$ 对每个自然数都有输出，设输出数列为 $a_0,a_1,...$，且 $\forall j, \mathcal{O}(a_j)$ 有定义，且 $\forall j, \mathcal{O}(a_j)<\mathcal{O}(a_{j+1})$，则 $\mathcal{O}(3\times5^)=\sup(\mathcal{O}(a_0),\mathcal{O}(a_1),\mathcal{O}(a_2),...)$，且 $\forall j,\mathcal{O}(a_j) < \mathcal{O}(3\times5^j)$

如此可见可数递归序数的集合是可数的

计所有可数序数的集合为 $\omega_1$，假设其可数，则 $\omega_1 \in \omega_1$ ，矛盾，故其不可数

故一定存在可数非递归序数

## 目标二

> 这跨度是不是有点大

强不可达基数被定义为一个大于 $\aleph_0$ 的基数，既是正则基数（共尾度等于自身），又不能通过取幂集达到（强极限）。

### 引理一
$\mathrm{ZFC} \nvdash \exist I$
反设可证
考虑冯诺依曼层级 $V_I$

**定义2.1.1** 集合 $x$ 的冯诺依曼秩为 $\mathrm{rank}(x)=\min_\kappa x\in V_{\kappa+1} $

**引理2.1.1** $\mathrm{card}(V_\alpha)=\beth_\alpha$
显然

**引理2.1.2** 若 $x\in V_I$，则 $\mathrm{card}(x) < I$

可知 $\mathrm{rank}(x)=\alpha<I$。由强极限可知 $\mathrm{card}(V_\alpha)=\beth_\alpha<I$，所以 $\mathrm{card}(x)<I$

空集公理：显然
外延公理：在外部 $V$ 中也成立
正则公理：$\in$ 的极小元显然在 $V_I$ 中
配对公理：配对最多使秩增加1
并集公理：并集不会使得秩增大
无穷公理：显然
幂集公理：最多使秩增加1
选择公理：$V$ 中存在全局良序，截取到 $V_I$ 中即可
分离公理模式：不会使秩增大

替换公理模式：
假设被替换的集合为 $\alpha$，替换的（类）函数为 $F$
$\mathrm{card}(\alpha)<I$
考虑集合 $S=\{\mathrm{rank}(F(u))\ |\ u\in\alpha\}$
则 $\mathrm{card}(S)<\mathrm{card}(\alpha)<I$
利用其正则性，则 $\sup S < I$
则 $F[\alpha]\in V_{\sup S+2} \in V_I$

至此可知 $V_I$ 是ZFC的模型
于哥德尔不完备性定理矛盾

### 引理二
$\mathrm{ZFC} \nvdash ¬\exist I$
假设 $\mathrm{ZFC}+∃I$ 相容
矛盾

证毕

## 目标三

> 这跨度是不是太大了

证明 AC 独立于 ZF

### 引理一
ZF和AC相容

定义可构造宇宙：
$\mathrm{Def}(A)=$ 所有在结构 $(A,\in)$ 中定义的子集
$L_{\alpha+1}=\mathrm{Def}(L_\alpha)$，其它定义和冯诺依曼宇宙相同
$L = \bigcup_{\alpha\in\mathbf{Ord}}L_\alpha$

**引理3.1.1** $L_\alpha$ 是传递集。及 $\forall x \in L_\alpha, x\subset L_\alpha$

证明：
当 $\alpha=0$ 时显然
假设 $L_\alpha$ 是传递的，取 $x\in L_{\alpha+1}$，即 $x \subseteq L_\alpha$
考虑任意元素 $y\in x$，故 $y \in L_\alpha$，即 $y \subseteq L_\alpha$
因为 $y \in L_\alpha$，取公式 $\phi(z,p) = z\in p$，取 $p=y$，由此公式定义的子集应正好为 $y$
极限步骤略

空集公理&无穷公理&外延公理：显然
正则公理：由传递性可继承于 $V$
配对公理：$\{x,y\}$ 由 $z=x\vee z=y$ 构造
并集公理：$\cup x$ 由 $y\in x\wedge z\in y$ 构造

反射定理：设 $\Gamma$ 是有限的公式集 $\forall(a,\Gamma),\forall \xi,\exist $ 极限序数 $\alpha>\xi,a\in L_\alpha \wedge (\Gamma $ 在 $L_\alpha$ 中成立 $) \Leftrightarrow (\Gamma $ 在 $L$ 中成立 $)$

定义子公式：公式的AST语法树上的子树

证明：假定 $\Gamma$ 的公式只含有 $\neg \rightarrow \exist$ （自证不难）
收集 $\Gamma$ 的所有子公式到 $\Phi$
对于 $\Phi$ 中的每一个公式 $\theta = \exist y，\phi(y,x_1,...,x_k)$
定义 
$$
F_\theta(\alpha)=
\begin{cases}
\min_\beta \exist a_1...a_k \in L_\alpha, \exist b \in L_\beta, L \models \phi & 存在这样的\beta\\
0 & \beta 不存在
\end{cases}
$$
$H(\alpha) = \max\left(\alpha+1,\bigcup_{\theta\in\Phi}F_\theta(\alpha)\right)$

$a_0=\xi$
$a_{i+1}=H(a_i)$
$\eta = \sup_{m \in \omega} a_m$

显然 $\eta$ 是极限序数
对于原子公式 $x\in y$ 和逻辑连接词，显然在 $L_\eta$ 中成立

对于 $L \models \exist y \phi(y,a)$，