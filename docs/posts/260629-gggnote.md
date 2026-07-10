---
date: 2026-6-29
category: note
title: Googology笔记
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
现在对于 $\varphi(\#,\alpha+1,O,\beta)$,其等于 $(1+\beta)\rm{th}\gamma\mapsto\varpih(\#,\alpha,\gamma,O)\rm{fp.}$
### 序元Veblen函数
### 扩展序元Veblen函数
### 弱Veblen函数
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

直到 $\psi(\Omega2)=\zeta_1$，此时 $\Omega_2 \in C$，所以 $\psi(\Omega2+1)=\epsilon_{\zeta_1+1}$

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
$\psi(\epsilon_{\Omega+1})=BHO$