<template>
  <NFlex>
    <NCard :bordered="false" class="w-full v-middle">
      <n-grid x-gap="12" y-gap="24" :cols="4">
        <n-gi></n-gi>
        <n-gi span="2">
          <n-form label-placement="left" label-width="220" label-align="left" size="large">
            <n-form-item :label="$t('page.setting.general.lang')" path="langValue">
              <n-select
                v-model:value="appStore.locale"
                :options="appStore.localeOptions"
                label-field="label"
                value-field="key"
                @update:value="appStore.changeLocale(appStore.locale)" />
            </n-form-item>
            <n-form-item :label="$t('page.setting.general.volume')" path="volumeValue">
              <n-slider v-model:value="appStore.projectSettings.volume" :step="10" />
            </n-form-item>
            <n-form-item :label="$t('page.setting.general.loginBg')" path="loginBg">
              <n-select
                v-model:value="appStore.projectSettings.loginBg"
                :options="[
                  {
                    label: $t('page.setting.general.loginBgOption.car'),
                    value: '/resources/gui/login_bg.mp4'
                  },
                  {
                    label: $t('page.setting.general.loginBgOption.muggleGirl'),
                    value: '/resources/gui/login_bg2.mp4'
                  }
                ]" />
            </n-form-item>
            <n-form-item :label="$t('page.setting.general.fontFamily')" path="fontFamily">
              <n-select
                v-model:value="appStore.projectSettings.fontFamily"
                :options="[
                  {
                    label: $t('page.setting.general.fontFamilyOption.circular'),
                    value: 'font-family-circular'
                  },
                  {
                    label: $t('page.setting.general.fontFamilyOption.cuSong'),
                    value: 'font-family-cu-song'
                  },
                  {
                    label: $t('page.setting.general.fontFamilyOption.harmony'),
                    value: 'font-family-harmony'
                  }
                ]" />
            </n-form-item>
          </n-form>
        </n-gi>
        <n-gi> </n-gi>
      </n-grid>
    </NCard>
  </NFlex>
</template>

<script setup lang="ts">
import { useAppStore } from '@renderer/store/modules/app'
const appStore = useAppStore()
</script>

<style scoped></style>
