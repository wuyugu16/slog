---
date: 2026-6-19
category: fun
title: 小烧的电路
tag: 
    - 大饼
---

<canvas width="1100" height="400" style="border:1px black solid;margin:5px;" id="ca"/>
<div style="border:1px black solid;margin:5px;margin-top:10px;width:1100px;height:50px;">
    <p v-html="tip"></p>
</div>
关卡：{{ gdata.title }}
<input type='button' value='跳至关卡'>&ensp;
<input type='number' :bind="__gnumber">&ensp;&ensp;
<input type='button' value='加载关卡'>&ensp;
<input type='text' :bind="__gtext">
项目开发中 / Developing...

<script setup>
import {onMounted,ref} from 'vue';
import * as fabric from 'fabric'
var tip = ref(""), gdata = ref({});
var __gnumber = ref(0), __gtext = ref("");
const gs = [
    {
        title:"引入",
        width:7,
        height:3
    }
]
onMounted(()=>{
    let cvs = new fabric.Canvas('ca');
    cvs.selection = false;
})
</script>