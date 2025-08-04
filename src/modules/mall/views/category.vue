<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />
			<!-- 新增按钮 -->
			<cl-add-btn />
			<!-- 删除按钮 -->
			<cl-multi-delete-btn />
			<cl-flex1 />
			<!-- 条件搜索 -->
			<cl-search ref="Search" />
		</cl-row>

		<cl-row>
			<!-- 数据表格 -->
			<cl-table ref="Table" />
		</cl-row>

		<!-- 新增、编辑 -->
		<cl-upsert ref="Upsert" />
	</cl-crud>
</template>

<script lang="ts" setup>
defineOptions({
	name: 'mall-category'
});

import { useCrud, useTable, useUpsert, useSearch } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import { Plugins } from '/#/crud';

const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('图片'),
			prop: 'pic',
			component: { name: 'cl-upload', props: { multiple: true } }
		},
		{
			label: t('分类名称'),
			prop: 'categoryName',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('选择父类'),
			prop: 'parentId',
			component: {
				name: 'cl-select',
				props: {
					tree: true,
					current: true,
					labelKey: 'label',
					valueKey: 'id',
					checkStrictly: true
				}
			},
			span: 12
		},
		{
			label: t('排序'),
			prop: 'sort',
			hook: 'number',
			component: { name: 'el-input-number', props: { min: 0 } },
			span: 12
		}
	]
});

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{
			label: t('图片'),
			prop: 'pic',
			minWidth: 100,
			component: { name: 'cl-image', props: { size: 60 } }
		},
		{ label: t('分类名称'), prop: 'categoryName', minWidth: 140 },
		{ label: t('排序'), prop: 'sort', minWidth: 140, sortable: 'custom' },
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
		{
			type: 'op',
			width: 250,
			buttons: [
				{
					label: t('新增'),
					hidden: !service.mall.category._permission?.add,
					type: 'success',
					onClick: ({ scope }) => {
						Crud.value?.rowAppend({ parentId: scope.row.id });
					}
				},
				'edit',
				'delete'
			]
		}
	],
	plugins: [Plugins.Table.toTree()]
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.mall.category
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
