<template>
	<cl-crud ref="Crud">
		<cl-row>
			<!-- 刷新按钮 -->
			<cl-refresh-btn />

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
	name: "mall-evaluate",
});

import { useCrud, useTable, useUpsert, useSearch } from "@cool-vue/crud";
import { useCool } from "/@/cool";
import { useI18n } from "vue-i18n";
import UserSelect from "/$/user/components/user-select.vue";
import GoodsSelect from "/$/mall/components/goods-select.vue";

const { service } = useCool();
const { t } = useI18n();

// cl-upsert
const Upsert = useUpsert({
	items: [
		{ label: t("选择用户"), prop: "userId", component: { vm: UserSelect } },
		{
			label: t("内容"),
			prop: "content",
			component: {
				name: "el-input",
				props: { type: "textarea", rows: 4 },
			},
		},
		{
			label: t("评分（1-5）"),
			prop: "score",
			component: { name: "el-rate" },
			span: 12,
		},
		{
			label: t("选择商品"),
			prop: "goodsId",
			component: { vm: GoodsSelect },
			span: 12,
			required: true,
		},
	],
});

// cl-table
const Table = useTable({
	columns: [
		{ type: "selection" },
		{
			label: t("内容"),
			prop: "content",
			showOverflowTooltip: true,
			minWidth: 200,
		},
		{
			label: t("评分（1-5）"),
			prop: "score",
			minWidth: 150,
			component: { name: "el-rate", props: { disabled: true } },
		},
		{
			label: t("创建时间"),
			prop: "createTime",
			minWidth: 170,
			sortable: "desc",
			component: { name: "cl-date-text" },
		},
		{
			label: t("更新时间"),
			prop: "updateTime",
			minWidth: 170,
			sortable: "custom",
			component: { name: "cl-date-text" },
		},
		{ type: "op", buttons: ["delete"] },
	],
});

// cl-search
const Search = useSearch();

// cl-crud
const Crud = useCrud(
	{
		service: service.mall.evaluate,
	},
	(app) => {
		app.refresh();
	},
);

// 刷新
function refresh(params?: any) {
	Crud.value?.refresh(params);
}
</script>
