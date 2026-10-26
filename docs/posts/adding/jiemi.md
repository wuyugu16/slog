---
date: 2026-10-05
category: fun
tag:
  - 解密
---

# holes & nest

<template v-for="i in Array(Math.min(jd+1,arr.length)).fill(0).map((_,i)=>i)">
    <template v-for="j in arr[i].slice(0,arr[i].length-1)">
        <h3 v-if=" j[0]=='P' ">{{j}}</h3>
        <p v-else><code>{{j}}</code></p>
    </template>
    {{ (x=>x.slice(0,x.indexOf('['))) (arr[i][arr[i].length-1]) }}
    <input type="text" @input="()=>{
        if(ipt[i] == (x=>x.slice(x.indexOf('[')+1,x.indexOf(']'))) (arr[i][arr[i].length-1]) )
            jd = i+1;
        else
            jd = i;
    }" v-model="ipt[i]">
    {{ (x=>x.slice(x.indexOf(']')+1,x.length-1)) (arr[i][arr[i].length-1]) }}
    <hr/>
</template>
<p v-if="jd == arr.length">恭喜通关！</p>


<script setup>
import {ref} from 'vue';
var jd = ref(0);
var ipt = ref([]);
var arr = ref([
    [
        'Part 0 Basic',
        `input 3.14abc : [3.14abc]`
    ],
    [
        '1 + 2 = 3',
        `114 + 514 = [628]`
    ],
    [
        `9 = 9`,
        `A = 10`,
        `B = 11`,
        `C = 12`,
        `Z = [35]`
    ],
    [
        '(x↦x+1) 5 = 6',
        `(x↦2x-1) 6 = 11`,
        '(x↦x²+x) 11 = [132]'
    ],
    [
        'fixed point means x=f(x)',
        `(x↦x²)'s fixed points are 0,1`,
        `(x↦x+1) has no fixed point`,
        `(x↦1/x)'s fixed points are -1,0`,
        `(x↦-x)'s fixed point is [0]`
    ],
    [
        '1st (x↦x²) fp. = 0',
        `2nd (x↦x²) fp. = 1`,
        `2nd (x↦2-|x|) fp. = [1]`
    ],
    [
        'Part 1 Holes',
        `'0' has 1 hole`,
        `'A' has 1 hole`,
        `'B' has 2 holes`,
        `'H' has 0 holes`,
        `'O' has [1] hole(s)`
    ],
    [
        `'4' has 1 hole => $4=1`,
        `'K' has 0 holes => $K=0`,
        `$L=[0]`
    ],
    [
        `0 is the 1st that $x=1 => 0 = 1#1`,
        `4 is the 2nd that $x=1 => 4 = 2#1`,
        `T is the 11th(11=B) that $x=0 => T = B#0`,
        'R is the 9th that $x=1 => R = 9#1',
        `G#0 = [S]`
    ]
    /**
     * Part 2 Nests
     * Part 3 Recursion
     * Part 4 Jumping / Infinity
     * Part 5 Separation
     */
])
</script>
