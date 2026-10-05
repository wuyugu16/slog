---
date: 2026-10-5
category: fun
tag:
  - 解密
---

# holes & nest

`My englsh are vEry wrost`

## Part 0 Holes

<Quiz question="input 3.14abc : [3.14abc]" />

`9 = 9`
`A = 10`
`B = 11`
`C = 12`

<Quiz question="Z=[35]" />

`'4' have 1 hole`
`'5' have 0 holes`
`'A' have 1 hole`
`'I' have 0 holes`

<Quiz question="8 have [2] hole(s)" />

`'0' is the 0th that haves 1 hole => 0=10`
`'1' is the 0th that haves 0 holes => 1=00`
`'9' is the 3th that haves 1 hole => 9=13`
`'K' is the 12th(C=12) that haves 0 holes -> K=0C`

<Quiz question="X=[0L]" />

`1=00 9=13 => 1919 = 00130013`
`'B' is the 1st that haves 2 holes`
`'E' is the 6th that haves 0 holes`
`'R' is the 9th that haves 1 hole`

<Quiz question="BER99=[2106191313]" />

`1=00 9=13 H=09`
`1919 = 00130013 = (0101)#(0303)`
`191H = 00130009 = (0100)#(0309)`
`HHH1 = 09090900 = (0000)#(9990)`

<Quiz question="(2011)#(1C00)=[BK00]" />

## Part 1 Nest

`BK00 = (2011)#(1C00)`
`1C00 = (0011)#(0500)`
`=> BK00 = (2011)#((0011)#(0500)) = (2011)(0011)#(0500)`

$$
\text{BK00} = \begin{pmatrix}
 2 &0  & 1 & 1\\
 0 & 0 &1  &1
\end{pmatrix}
\#
\left(0500\right)
$$

<Quiz question="(001010)(102001)#(580111)=[LSQ367]" />

`(α)#((β)#(γ)) = (α)(β)#(γ)`
`(α)#((β)#((γ)#(η))) = (α)(β)(γ)#(η)`
`...`

<Quiz question="(00011)(00210)(10001)(01101)(00101)#(00000)=[MNJR4]" />

`1234 = (0001)#(0121)`
`%(1234) = 0121`
`0121 = (1000)#(0010)`
`%%(1234) = %(0121) = 0010`

`WYYIJ42 = (0000010)(0001200)#(CEE4100)`

<Quiz question="%%(WYYIJ42)=[CEE4100]" />

`%%%(WYYIJ42) = 5661000`
`%%%%(WYYIJ42) = 3220000`
`%%%%%(WYYIJ42) = 2210000`
`%%%%%%(WYYIJ42) = 1100000`
`%%%%%%%(WYYIJ42) = 0000000`
`%%%%%%%%(WYYIJ42) = 0000000`

`0 is like a black hole`

<Quiz question="%%%%%%%%%%%%%%%%%%%%%%%%%%(XXY4360H)=[00000000]" />

`%I = A`
`%%I = 4`
`%%%I = 1`
`%%%%I = 0`
`=> $I = 4 - 1 = 3`

`%S = G`
`%%S = 8`
`%%%8 = 0`
`=> $S = 3 - 1 = 2`

<Quiz question="$W=[6]" />

`$(IS) = 32`

<Quiz question="$(OPQ45)=[33113]" />

## Part 2 Recursion

`we sorted them by the number of holes, and get #`
`now, we sorted them by $x, and get #₂`

`'0' is the 0th that $x = 0 => 0=#₂(0)(0)`
`'1' is the 1st that $x = 0 => 1=#₂(0)(1)`
`'9' is the 1st that $x = 3 => 9=#₂(3)(1)`
`'V' is the 7th that $x = 3 -> K=#₂(3)(7)`

<Quiz question="#₂(0033)(0117)=[019V]" />

未完成

## Part 3 Jumping / Infinity
## Part 4 Separation
## Part 4 Rank

感谢游玩！
