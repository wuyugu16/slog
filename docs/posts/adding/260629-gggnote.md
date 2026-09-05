---
date: 2026-6-29
category: note
title: Googology笔记
tag:
    - 数学
---
## Veblen函数
我下辈子一定打牢基础
### 二元Veblen函数
定义 $\varphi(\alpha)=\omega^\alpha$
所以 $\varphi(1,\alpha) = (1+\alpha)\rm{th} \beta \mapsto \varphi(\beta) \rm{fp}.$
$\varphi(2,0) = \beta\mapsto\varphi(1,\beta)\rm{fp.}$
### 多元Veblen函数
定义 $\varphi(1,0,\gamma)=(1+\gamma) \rm{th} \alpha\mapsto\varphi(\alpha,0)\rm{fp.}$
其余操作基本相同
现在对于 $\varphi(\#,\alpha+1,O,\beta)$,其等于 $(1+\beta)\rm{th}\gamma\mapsto\varphi(\#,\alpha,\gamma,O)\rm{fp.}$
### 序元Veblen函数
$\mathrm{SVO} = \varphi(1@\omega)$
$\varphi(1@\omega) = 1\mathrm{st} \forall n (\delta \mapsto \varphi(\delta @n) \mathrm{fp}.).$
$\varphi(1@\omega,1@0) = 2\mathrm{nd} \forall n (\delta \mapsto \varphi(\delta @n) \mathrm{fp}.). = \sup \{\varphi((\varphi(1@\omega)+1)@0),\varphi((\varphi(1@\omega)+1)@1),\varphi((\varphi(1@\omega)+1)@2),...\}$
$\varphi(2@\omega) = 1\mathrm{st} \forall n (\delta \mapsto \varphi(1@\omega,\delta @n) \mathrm{fp}.).$
$\varphi(\omega @\omega) = 1\mathrm{st} \forall n (\delta \mapsto \varphi(n@\omega,\delta @n) \mathrm{fp}.).$
$\varphi(\#,\alpha @\beta,\gamma @0) = (1+\gamma) \mathrm{th} \forall \delta < \alpha, \sigma < \beta (\rho \mapsto \varphi (\#, \delta @ \beta, \rho @ \sigma) \mathrm {fp}. ) .$
### 扩展序元Veblen函数
$\varphi(1 @ (1,0)) = \mathrm {LVO}$
$$
\begin{cases}
\varphi(\#,\alpha @\beta)[n] = \varphi (\#,\alpha[n] @ \beta) \text{ if } \alpha 是极限序数 \\
\varphi(\#,(\alpha+1)@\beta)[n] = \varphi(\#,\alpha @\beta, 1@\beta[n]) \text{ if }  \beta 是非零极限序数\\
\varphi(\#,(\alpha+1)@ (\beta+1) )[0] = \varphi(\#,\alpha @(\beta+1)) \\
\varphi(\#,(\alpha+1)@ (\beta+1) )[n+1] = \varphi(\#,\alpha @(\beta+1), X[n] @\beta) \text{ if }  \beta 是后继序数 \\
\varphi(\#,\alpha_1 @ \beta_1, (\alpha+1)@0)[0] = \varphi(\#,\alpha_1  @\beta_1,\alpha @0) \\
\varphi(\#,\alpha_1 @ \beta_1, (\alpha+1)@0)[n] = \varphi(\#,\alpha_1[n] @\beta_1, (\varphi(\#,\alpha_1 @ \beta_1, \alpha @ 0)+1)@0) \text{ if }  \alpha_1 是极限序数 \\
\varphi(\#,(\alpha_1+1) @ \beta_1, (\alpha+1)@0)[n] = \varphi(\#,\alpha_1 @\beta_1, 1 @ \beta_1[n], (\varphi(\#,(\alpha_1+1) @ \beta_1, \alpha @ 0)+1)@0) \text{ if }  \alpha_1 是后继序数, \beta_1 是极限序数 \\
\varphi(\#,(\alpha_1+1) @ (\beta_1+1), (\alpha+1)@0)[n+1] = \varphi(\#,\alpha_1 @ (\beta_1+1), X[n] @ \beta_1) \text{ if }  \alpha_1 是后继序数, \beta_1 是后继序数 \\
\end{cases}
$$
对于序数数组的情况，如下处理：
$\varphi(2@(1,1)) = \sup\{\varphi(1@(1,1),1@(1,0)),\varphi(1@(1,1),\varphi(1@(1,1),1@(1,0))@(1,0))，...\}$
$\varphi(1@(1@(1,0))) = \sup\{\varphi(1@\omega),\varphi(1@(1@\varphi(1@\omega))),...\}$
$\varphi(1@(1,0),1@0)=\sup\{\varphi(1@(1,0))+1,\varphi(1@({\color{RED}\varphi(1@(1,0)+1)}))\}$
$BHO=\sup\{\varphi(1,0),\varphi(1@(1,0)),\varphi(1@(1@(1,0))),...\}$
### 弱Veblen函数
$\phi(\#,\alpha+1)=\phi(\#,\alpha)+1$
:::info[分析]
$\phi(1,0)=\omega=\varphi(1)$
$\phi(1,\phi(1,0))=\omega2=\varphi(1)2$
$\phi(1,\phi(1,\phi(1,0)))=\omega3=\varphi(1)3$
$\phi(2,0)=\omega^2=\varphi(2)$
$\phi(2,\phi(2,0))=\omega^22=\varphi(1)^22$
$\phi(3,0)=\omega^3=\varphi(3)$
$\phi(\phi(1,0),0)=\omega^\omega=\varphi(\varphi(1))$
$\phi(1,0,0)=\varphi(1,0)$
$\phi(1,0,\phi(1,0,0))=\varphi(1,0)2$
$\phi(1,1,0)=\varphi(1,0)\varphi(1)$
$\phi(1,2,0)=\varphi(1,0)\varphi(2)$
$\phi(1,\phi(1,0,0),0)=\varphi(1,0)^2$
$\phi(1,\phi(1,0,1),0)=\varphi(1,0)^2\varphi(1)$（此处可能有误）
$\phi(1,\phi(1,1,0),0)=\varphi(1,0)^3$（此处可能有误）
$\phi(1,\phi(1,\phi(1,0,0),0),0)=\varphi(1,0)^{\varphi(1,0)}$（此处可能有误）
$\phi(2,0,0)=\varphi(1,1)$
$\phi(\phi(1,0,0),0,0)=\varphi(1,\varphi(1,0))$
$\phi(1,0,0,0)=\varphi(2,0)$
$\phi(\phi(1,0,0,1),0,0)=\varphi(1,\varphi(2,0)+1)$（此处可能有误）
$\phi(\phi(\phi(1,0,0,1),0,0),0,0)=\varphi(1,\varphi(1,\varphi(2,0)+1))$
$\phi(\phi(\phi(1,0,0,1),0,0),0,0)=\varphi(2,1)$
$\phi(2,0,0,0)=\varphi(2,1)$
$\phi(1,0,0,0,0)=\varphi(3,0)$
$\phi(1@\omega)=\varphi(\omega,0)$
$\phi(1@\phi(1@\omega))=\varphi(\varphi(\omega,0),0)$
$\phi(1@(1,0))=\varphi(1,0,0)$
$\phi(1@(1,0),1@1)=\varphi(1,0,0)\varphi(1)$
$\phi(1@(1,0),1@2)=\varphi(1,0,0)\varphi(1,0)$
$\phi(1@(1,0),2@2)=\varphi(1,0,0)\varphi(1,1)$
$\phi(1@(1,0),1@3)=\varphi(1,0,0)\varphi(2,0)$
$\phi(1@(1,0),1@\phi(1@(1,0)))=\varphi(1,0,0)\varphi(\varphi(1,0,0),0)$
$\phi(2@(1,0))=\varphi(1,0,1)$（此处可能有误）
$\phi(\phi(1@(1,0))@(1,0))=\varphi(1,0,\varphi(1,0,0))$（此处可能有误）
$\phi(1@(1,1))=\varphi(1,1,0)$（此处可能有误）
$\phi(1@(1,2))=\varphi(1,2,0)$
$\phi(1@(1,0,0))=\varphi(1,0,0,0)$
$\phi(1@(1@\omega))=\varphi(1@\omega)$
$\phi(1@(1@(1@...)))=\varphi(1@(1@(1@...)))=BHO$
:::
## OCF
### 含递归序数的MOCF
定义含递归序数的 $\rm{MOCF} \psi(\alpha)$ 为：
1. $C^0(\alpha) = \{0,1,\omega\}$
2. $C^{n+1}(\alpha) = \{\gamma+\delta,\gamma\times\delta,\gamma^\delta,\psi(\eta) | \gamma,\delta,\eta \in C^n(\alpha);\eta<\alpha\}$
3. $C(\alpha) = \bigcup_{n<\omega}C^n(\alpha)$
4. $\psi(\alpha)=\min\{\beta|\beta\notin C(\alpha)\}$

#### 分析
$\psi(0)=\sup\{\omega,\omega^\omega,\omega^{\omega^\omega},...\}=\epsilon_0$
$\psi(n)=\epsilon_n$
$\psi(\omega) = \epsilon_\omega$
$\psi(\omega+1)=\epsilon_{\omega+1}$
$\psi(\zeta_0)=\zeta_0$
此时 $\alpha = \psi(\alpha)$
在规则二中，对于所有 $\alpha<\zeta_0$，$\zeta_0\notin C(\alpha)$，这导致我们无法在 $\psi(\zeta_0+1)$ 中构造 $\zeta_0$ 的指数塔
$\psi(\alpha)=\zeta_0$ 对于递归序数 $\alpha\le \zeta_0$

### 含 $\Omega$ 的MOCF
定义含 $\Omega$ 的 $\rm{MOCF} \psi(\alpha)$ 为：
1. $C^0(\alpha) = \{0,1,\omega,\Omega\}$
2. $C^{n+1}(\alpha) = \{\gamma+\delta,\gamma\times\delta,\gamma^\delta,\psi(\eta) | \gamma,\delta,\eta \in C^n(\alpha);\eta<\alpha\}$
3. $C(\alpha) = \bigcup_{n<\omega}C^n(\alpha)$
4. $\psi(\alpha)=\min\{\beta|\beta\notin C(\alpha)\}$

#### 分析
此时我们发现，虽然 $\psi(\Omega)=\zeta_0$，但是 $\Omega \in C^0(\alpha)$，所以我们可以将 $\zeta_0$ 放入 $C(\Omega+1)$ 中
$\psi(\Omega+1) =\epsilon_{\zeta_0+1}$
$\psi(\Omega+n) =\epsilon_{\zeta_0+n}$
$\psi(\Omega+\zeta_1)=\zeta_1$

我们发现如果想要用到 $\zeta_1$，就需要 $\Omega+\zeta_1$ 在 $C$ 内，这有需要 $C$ 内出现一个 $\zeta_1$，所以我们又卡在了 $\zeta_1$ 的位置

直到 $\psi(\Omega2)=\zeta_1$，此时 $\Omega2 \in C$，所以 $\psi(\Omega2+1)=\epsilon_{\zeta_1+1}$

$\psi(\Omega n)=\zeta_n$
$\psi(\Omega^2)=\varphi(3,0)$

#### 归纳
$\psi(\#\sim\Omega) = \psi(\#\sim\psi(\#\sim\psi(\#\sim...)))$，我们称 $\Omega$ 折叠了后者

#### 继续分析
$\psi(\Omega^2+\psi(\Omega^2))=\varphi(1,\varphi(3,0)+1)$
$\psi(\Omega^2+\Omega)=\varphi(2,\varphi(3,0)+1)$
$\psi(\Omega^2+\Omega\psi(\Omega^2))=\varphi(2,\varphi(3,0)2)$
$\psi(\Omega^22)=\varphi(3,1)$
$\psi(\Omega^23)=\varphi(3,2)$
$\psi(\Omega^4)=\varphi(4,2)$
$\psi(\Omega^\Omega)=\varphi(1,0,0)$
$\psi(\Omega^\Omega2)=\varphi(1,0,1)$
$\psi(\Omega^\Omega\times\Omega)=\varphi(1,1,0)$
$\psi(\Omega^{\Omega2})=\varphi(2,0,0)$
$\psi(\Omega^{\Omega^2})=\varphi(1,0,0,0)$
$\psi(\Omega^{\Omega^\omega})=\varphi(1@\omega)=SVO$
$\psi(\Omega^{\Omega^{n}})=\varphi(1@n)$
$\psi(\Omega^{\Omega^\Omega})=\varphi(1@(1,0))=LVO$
$\psi(\Omega^{\Omega^{\Omega+1}})=\varphi(1@(1,1))$
$\psi(\Omega^{\Omega^{\Omega2}})=\varphi(1@(2,0))$
$\psi(\Omega^{\Omega^{\Omega^2}})=\varphi(1@(1,0,0))$
$\psi(\Omega^{\Omega^{\Omega^\omega}})=\varphi(1@(1@\omega))$
$\psi(\Omega^{\Omega^{\Omega^\Omega}})=\varphi(1@(1@(1,0)))$
$\psi(\varepsilon_{\Omega+1})=BHO$
### 含自然数下标的MOCF
$\psi_1(0)=\varepsilon_{\Omega+1}$
$\psi_1(1)=\varepsilon_{\Omega+1}^{\varepsilon_{\Omega+1}^{\varepsilon_{\Omega+1}^{...}}}=\varepsilon_{\Omega+2}$
$\psi_1(\omega)=\varepsilon_{\Omega+\omega}$
$\psi_1(\Omega)=\varepsilon_{\Omega2}$
$\psi_1(\psi_1(0))=\varepsilon_{\varepsilon_{\Omega+1}}$
$\psi_1(\Omega_2)=\zeta_{\Omega+1}$
$BO=\sup\{\psi(\Omega),\psi(\Omega_2),\psi(\Omega_3),...\}$

对于一个MOCF表达式 $\#_0(\psi_m(\# * \Omega_n))$  （$m<n$），其等于 $\#_0(\psi_m(\# * \psi_{n-1}(\# * \psi_{n-1}(\# * ...))))$

Hydra：从末项出发，找到前面的某个东西，然后复制

### 含序数下标的MOCF
$\psi(\Omega_\omega)=BO$
$\psi(\psi_\omega(0))=TFBO$
$\psi(\Omega_\Omega)=BIO$
$\psi(\alpha\mapsto\Omega_\alpha \mathrm{fp.})=EBO$

### BOCF
$\psi(0)=1$
$\psi(\alpha+1)=\psi(\alpha)ω$
其余的和BOCF相同

#### 钝西

$\psi(\Omega)=\varepsilon_0$
$\psi(\Omega+1)=\omega^{\varepsilon_0+1}$
接下来 $\psi_1(0)=\Omega$
$\psi_1(\alpha+1)=\psi_1(\alpha)\omega$
$\psi(\Omega2)=\varepsilon_2$
$\psi(\psi_1(1))=\varepsilon_\omega$
$\psi(\psi_1(\psi(\psi_1(1))))=\varepsilon_{\varepsilon_0}$
$\psi(\psi_1(\psi_1(1)))=\psi(\Omega^2)=\zeta_0$
$\psi(\psi_1(\psi_1(1)2))=\eta_0$
$\psi(\psi_1(\psi_1(\psi_1(0))))=\psi(\Omega^\Omega)=\Gamma_0$

$\psi(\psi_1(\psi_1(\psi_1(1))))=\psi(\Omega^{\Omega^\omega})=SVO$
$\psi(\psi_1(\psi_1(\psi_1(\psi_1(0)))))=\psi(\Omega^{\Omega^\Omega})=LVO$
$\psi(\Omega_2)=\psi(\psi_2(0))=BO$