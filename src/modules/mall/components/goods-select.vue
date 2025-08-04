<template>
	<cl-select-table
		v-model="value"
		:title="t('选择商品管理')"
		:service="service.mall.goods"
		:columns="columns"
		:multiple="multiple"
		:dict="{ img: 'pic', text: 'name' }"
		pickerType="default"
	/>
</template>

<script setup lang="ts">
defineOptions({
	name: "mall-goods-select",
});

import { useCool } from "/@/cool";
import { useI18n } from "vue-i18n";
import { CrudProps } from "/#/crud";
import { ref, useModel } from "vue";

const props = defineProps({
	...CrudProps,
	modelValue: null,
	multiple: Boolean,
});

const { service } = useCool();
const { t } = useI18n();

const value = useModel(props, "modelValue");

const columns = ref([
	{
		label: t("图片"),
		prop: "pic",
		minWidth: 100,
		component: { name: "cl-image", props: { size: 60 } },
	},
	{ label: t("名称"), prop: "name", minWidth: 140 },
	{ label: t("价格"), prop: "price", minWidth: 140, sortable: "custom" },
	{ label: t("品牌"), prop: "brand", minWidth: 140 },
	{ label: t("产地"), prop: "origin", minWidth: 140 },
	{ label: t("状态"), prop: "status", minWidth: 120 },
	{
		label: t("详情"),
		prop: "detail",
		minWidth: 120,
		component: { name: "cl-editor-preview", props: { name: "wang" } },
	},
	{ label: t("排序"), prop: "sort", minWidth: 140, sortable: "custom" },
]);
</script>
