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
	name: 'mall-goods'
});

import { useCrud, useTable, useUpsert, useSearch } from '@cool-vue/crud';
import { useCool } from '/@/cool';
import { useI18n } from 'vue-i18n';
import { useDict } from '/$/dict';

const { service } = useCool();
const { t } = useI18n();
const { dict } = useDict();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{
			label: t('图片'),
			prop: 'pic',
			component: { name: 'cl-upload', props: { multiple: false } }
		},
		{
			label: t('名称'),
			prop: 'name',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('价格'),
			prop: 'price',
			hook: 'number',
			component: { name: 'el-input-number', props: { min: 0 } },
			span: 12
		},
		{
			label: t('选择分类'),
			prop: 'categoryId',
			component: {
				name: 'cl-select',
				props: {
					tree: true,
					labelKey: 'categoryName',
					valueKey: 'id',
					checkStrictly: true,
					api: () => service.mall.category.list()
				}
			},
			span: 12
		},
		{
			label: t('品牌'),
			prop: 'brand',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('产地'),
			prop: 'origin',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('状态'),
			prop: 'status',
			component: { name: 'el-input', props: { clearable: true } },
			span: 12
		},
		{
			label: t('详情'),
			prop: 'detail',
			component: { name: 'cl-editor-wang' }
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

const options = {
	status: [
		{ label: t('上架'), value: 1 },
		{ label: t('下架'), value: 0 }
	]
};

// cl-table
const Table = useTable({
	columns: [
		{ type: 'selection' },
		{
			label: t('图片'),
			prop: 'pic',
			minWidth: 100,
			component: { name: 'cl-image', props: { size: 60, compress: 'oss' } }
		},
		{ label: t('名称'), prop: 'name', minWidth: 140 },
		{ label: t('价格'), prop: 'price', minWidth: 140, sortable: 'custom' },
		{ label: t('品牌'), prop: 'brand', minWidth: 140 },
		{ label: t('产地'), prop: 'origin', minWidth: 140 },
		{
			label: t('状态'),
			prop: 'status',
			minWidth: 120,
			dict: dict.get('mall_goods_status'),
			dictColor: true
		},
		{
			label: t('详情'),
			prop: 'detail',
			minWidth: 120,
			component: { name: 'cl-editor-preview', props: { name: 'wang' } }
		},
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
		{ type: 'op', buttons: ['edit', 'delete'] }
	]
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.mall.goods
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
