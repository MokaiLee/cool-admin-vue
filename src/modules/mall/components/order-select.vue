<template>
	<cl-select-table
		v-model="value"
		:title="t('选择订单管理')"
		:service="service.mall.order"
		:columns="columns"
		:multiple="multiple"
		:dict="{}"
		pickerType="text"
	/>
</template>

<script setup lang="ts">
defineOptions({
	name: "mall-order-select",
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
	{ label: t("订单编号"), prop: "orderNo", minWidth: 140 },
	{ label: t("订单状态"), prop: "status", minWidth: 120 },
	{
		label: t("总金额"),
		prop: "totalAmount",
		minWidth: 140,
		sortable: "custom",
	},
	{ label: t("支付方式"), prop: "payType", minWidth: 120 },
	{ label: t("收货地址ID"), prop: "addressId", minWidth: 120 },
	{
		label: t("备注"),
		prop: "remark",
		showOverflowTooltip: true,
		minWidth: 200,
	},
]);
</script>
