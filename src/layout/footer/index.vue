<!--
 * @Date: 2023-08-02 16:20:10
 * @LastEditors: xiaoreya@163.com
 * @LastEditTime: 2023-08-02 19:53:00
 * @Description: 
-->
<template>
	<div class="layout-footer pb15">
		<div class="layout-footer-warp">
			<div>xiaoreya-admin，Made by lyt with ❤️</div>
			<div class="mt5">不属于任何公司版权所有</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="layoutFooter">
// 此处需有内容（注释也得），否则缓存将失败
</script>

<style scoped lang="scss">
.layout-footer {
	width: 100%;
	display: flex;
	&-warp {
		margin: auto;
		color: var(--el-text-color-secondary);
		text-align: center;
		animation: error-num 0.3s ease;
	}
}
</style>
