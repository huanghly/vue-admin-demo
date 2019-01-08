<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="输入搜索名字" ref="searchInfo"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="users" highlight-current-row v-loading="loading" v-show="showList">
				<el-table-column type="index" width="60" label="序号">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="age" label="销售数量" width="120" sortable>
				</el-table-column>
				<el-table-column prop="birth" label="日期" width="120" sortable>
				</el-table-column>
				<el-table-column prop="productBar" label="商品型号" min-width="180" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="商品信息" min-width="180" sortable>
				</el-table-column>
			</el-table>
			<el-table :data="productBars" highlight-current-row v-loading="loading" style="width: 100%;" v-show="showByFilter">
				<el-table-column type="index" width="60" label="序号">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="age" label="销售数量" width="120" sortable>
				</el-table-column>
				<el-table-column prop="birth" label="日期" width="120" sortable>
				</el-table-column>
				<el-table-column prop="productBar" label="商品型号" min-width="180" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="信息" min-width="180" sortable>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					productBar: ''
				},
				showList: true,
				showByFilter: false,
				loading: false,
				users: [
				],
				productBars: []
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function () {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				getUserList(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
					//NProgress.done();
				});
			},

		/**	getProductBar: function () {
				let para = {
					productBar: this.filters.productBar
				};
				this.showList = false;
				this.showByFilter = true;
				this.loading = true;
				//NProgress.start();
				getUserList(para).then((res) => {
					this.productBars = res.data.users.filter(item => {
						this.$refs.searchInfo.value === item.productBar;
					});
					this.loading = false;
					console.log(this.productBars);

					//NProgress.done();
				});
			}  */
		},
		mounted() {
			this.getUser();
		}
	};

</script>

<style scoped>

</style>