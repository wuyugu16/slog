<template>
  <div class="quiz" ref="root" v-show="inputVisible">
    <p>
      <template v-for="(p, i) in parts" :key="i">
        <span v-if="p.type === 'text'">{{ p.value }}</span>
        <input v-else v-model="p.value" :size="p.answer.length" />
      </template>
    </p>
  </div>
</template>

<script>
import { reactive } from 'vue'
// 模块级共享状态：id -> { correct, prevIds }
const store = reactive({})
</script>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  question: { type: String, required: true }
})

// 解析 question，把 [答案] 拆成输入框
const parts = ref([])
{
  const re = /\[([^\]]*)\]/g
  let last = 0, m
  while ((m = re.exec(props.question)) !== null) {
    if (m.index > last)
      parts.value.push({ type: 'text', value: props.question.slice(last, m.index) })
    parts.value.push({ type: 'input', answer: m[1], value: '' })
    last = m.index + m[0].length
  }
  if (last < props.question.length)
    parts.value.push({ type: 'text', value: props.question.slice(last) })
}

const correct = computed(() =>
  parts.value.every(p => p.type === 'text' || p.value.trim() === p.answer)
)

const id = `quiz-${Math.random().toString(36).slice(2)}`
const root = ref(null)
let contentNodes = []

// 链式依赖：前面所有 Quiz 都答对才可见
const allPrevCorrect = computed(() => {
  const entry = store[id]
  if (!entry) return true
  return entry.prevIds.every(pid => store[pid]?.correct ?? true)
})

const inputVisible = allPrevCorrect
const contentVisible = computed(() => allPrevCorrect.value && correct.value)

onMounted(() => {
  root.value.dataset.quizId = id

  // 收集后面的兄弟节点（直到下一个 Quiz）
  let node = root.value.nextElementSibling
  while (node && !node.classList.contains('quiz')) {
    contentNodes.push(node)
    node = node.nextElementSibling
  }

  // 收集前面所有 Quiz 的 id（按文档顺序）
  const prevIds = []
  let prev = root.value.previousElementSibling
  while (prev) {
    if (prev.dataset.quizId) prevIds.unshift(prev.dataset.quizId)
    prev = prev.previousElementSibling
  }

  store[id] = { correct, prevIds }
  apply()
})

onUnmounted(() => {
  delete store[id]
})

watch([allPrevCorrect, correct], apply)

function apply() {
  contentNodes.forEach(n => {
    n.style.display = contentVisible.value ? '' : 'none'
  })
}
</script>