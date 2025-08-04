<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<!-- 筛选 -->
			<cl-filter label="状态筛选">
				<!-- 配置prop，选择后会自动过滤列表 -->
				<cl-select :options="dict.get('mall_order_status')" prop="status" :width="120" />
			</cl-filter>
			<cl-flex1 />
			<!-- 条件搜索 -->
			<cl-search ref="Search" />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<cl-row>
			<cl-flex1 />
			<!-- 分页控件 -->
			<cl-pagination />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'mall-order'
});

import { useCrud, useTable, useUpsert, useSearch } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import UserSelect from '/$/user/components/user-select.vue';
import GoodsSelect from '../components/goods-select.vue';
import { useDict } from '/$/dict';

const { service } = useCool();
const { t } = useI18n();
const { dict } = useDict();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('订单编号'),
			prop: 'orderNo',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('订单状态'),
			prop: 'status',
			component: {
				name: 'cl-select',
				props: {
					tree: true,
					checkStrictly: true,
					options: dict.get('mall_order_status')
				}
			},
			span: 12,
			required: true
		},
		// {
		// 	label: t('选择商品'),
		// 	prop: 'goodsId',
		// 	component: { vm: GoodsSelect },
		// 	span: 12,
		// 	required: true
		// },
		{
			label: t('总金额'),
			prop: 'totalAmount',
			hook: 'number',
			component: { name: 'el-input-number', props: { min: 0 } },
			span: 12,
			required: true
		},
		{
			label: t('选择用户'),
			prop: 'userId',
			component: { vm: UserSelect },
			required: true
		},
		{
			label: t('支付方式'),
			prop: 'payType',
			component: { name: 'el-select', options: dict.get('mall_order_payType') },
			span: 12,
			required: true
		},
		{
			label: t('选择收货地址'),
			prop: 'addressId',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12,
			required: true
		},
		{
			label: t('备注'),
			prop: 'remark',
			component: {
				name: 'el-input',
				props: { type: 'textarea', rows: 4 }
			},
			required: true
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{ label: t('订单编号'), prop: 'orderNo', minWidth: 140 },
		{
			label: t('订单状态'),
			prop: 'status',
			minWidth: 120,
			dict: dict.get('mall_order_status')
		},
		{
			label: t('总金额'),
			prop: 'totalAmount',
			minWidth: 140,
			sortable: 'custom'
		},
		{
			label: t('支付方式'),
			prop: 'payType',
			minWidth: 120,
			dict: dict.get('mall_order_payType')
		},
		{ label: t('收货地址ID'), prop: 'addressId', minWidth: 120 },
		{
			label: t('备注'),
			prop: 'remark',
			showOverflowTooltip: true,
			minWidth: 200
		},
		{
			label: t('创建时间'),
			prop: 'createTime',
			minWidth: 170,
			sortable: 'desc',
			component: { name: 'cl-date-text' }
		},
		{
			label: t('更新时间'),
			prop: 'updateTime',
			minWidth: 170,
			sortable: 'custom',
			component: { name: 'cl-date-text' }
		},
		{ type: 'op', buttons: ['edit', 'delete'] }
	]
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.mall.order
	},
	app => {
		app.refresh();
	}
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
