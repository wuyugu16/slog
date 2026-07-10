---
date: 2026-6-19
category: fun
title: 小烧的电路
---

<canvas width="800" height="450" style="border:1px black solid;margin:5px;" id="ca"/>
<p v-html="tip"></p>
项目开发中 / Developing...

<script setup>
import {onMounted,ref} from 'vue';
import * as fabric from 'fabric'
let tip = ref("");
let test = [
    {
    }
]
let usedots = [];
function line(x1,y1,left,top,agl=0){
    return new fabric.Polyline([
        {x:0,y:0},
        {x:x1,y:y1}
    ],{
        stroke:'black',
        left: left,
        top: top,
        angle: agl,
        fill:null
    })
}
console.clear();
onMounted(()=>{
    let cvs = new fabric.Canvas('ca');
    cvs.selection = false;
})
</script>