<template>
	<section>
		<el-row :gutter="8">
			<el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-top:80px;">
			   <panel-group></panel-group>
			</el-col>
			<el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;" :offset="2">
				<todo-list/>
			</el-col>
      
    </el-row>
	<el-row>
		<line-chart></line-chart>
	</el-row>

		
	</section>
</template>

<script>
import TodoList from '../components/TodoList';
import  PanelGroup from '../components/PanelGroup.vue';
import LineChart from '../components/LineChart.vue';

 
 

	export default {
	 name: 'Main',
	 components: {
		 TodoList,
		 PanelGroup,
		 LineChart
	 
	 }
	}

</script>

<style scoped>

</style>