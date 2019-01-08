<template>
  <div class="components-container">
   
    <div class="editor-container">
      我的消息
      <!-- <dnd-list :list1="list1" :list2="list2" list1-title="List" list2-title="Article pool"/> -->
    </div>
  </div>
</template>

<script>
import DndList from '@/components/DndList'
import { getUserList } from '../../api/api'

export default {
  name: 'DndList',
  components: { DndList },
  data() {
    return {
      list1: [],
      list2: [],
      name: '',
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let para = {
        name: this.name
      }
      this.listLoading = true
        getUserList(para).then(response => {
        this.list1 = response.data.users.splice(0, 5)
        this.list2 = response.data.users
      })
    }
  }
}
</script>

