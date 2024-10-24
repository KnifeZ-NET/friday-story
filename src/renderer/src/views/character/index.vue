<template>
  <n-grid :x-gap="12" :y-gap="12" :cols="4" layout-shift-disabled>
    <n-gi :span="1" class="bg-white">
      <n-h2 class="color-primary text-center">半身bust</n-h2>
      <svg
        width="100%"
        height="200"
        viewBox="0 0 1136 1533"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="a-mono/bust" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="body/mono/*" transform="translate(147.000000, 639.000000)">
            <path
              v-for="child in bustSvgElements.body?.children"
              :id="child.id"
              :key="child.id"
              :d="child.getAttribute('d') ?? ''"
              :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
          </g>
          <g id="head/mono/*" transform="translate(372.000000, 180.000000)">
            <path
              v-for="child in bustSvgElements.head?.children"
              :id="child.id"
              :key="child.id"
              :d="child.getAttribute('d') ?? ''"
              :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
          </g>
          <g id="face/*" transform="translate(531.000000, 366.000000)" fill="#000000">
            <path
              v-for="child in bustSvgElements.face?.children"
              :id="child.id"
              :key="child.id"
              :d="child.getAttribute('d') ?? ''"
              :fill="child.fill ?? (child.id == '🖍-Ink' ? '#000000' : '#FFFFFF')"></path>
          </g>
          <g id="facial-hair/*" transform="translate(494.999934, 517.999659)">
            <path
              v-for="child in bustSvgElements.facialHair?.children"
              :id="child.id"
              :key="child.id"
              :d="child.getAttribute('d') ?? ''"
              :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
          </g>
          <g id="accessories/*" transform="translate(419.000000, 421.000000)">
            <path
              v-for="child in bustSvgElements.accessories?.children"
              :id="child.id"
              :key="child.id"
              :d="child.getAttribute('d') ?? ''"
              :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
          </g>
        </g>
      </svg>
      <n-h2 class="color-primary text-center">坐姿sitting</n-h2>
      <svg
        width="165"
        height="250"
        viewBox="0 0 1647 2500"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="a-mono/sitting" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="pose/sitting/*" transform="translate(-81.000000, 637.000000)">
            <path
              v-for="child in sittingSvgElements.pose?.children"
              :id="child.id"
              :key="child.id"
              :d="child.getAttribute('d') ?? ''"
              :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
          </g>
          <g id="Head" transform="translate(345.000000, 180.000000)">
            <g id="head/mono/*">
              <path
                v-for="child in bustSvgElements.head?.children"
                :id="child.id"
                :key="child.id"
                :d="child.getAttribute('d') ?? ''"
                :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
            </g>
            <g id="face/*" transform="translate(159.000000, 186.000000)" fill="#000000">
              <path
                v-for="child in bustSvgElements.face?.children"
                :id="child.id"
                :key="child.id"
                :d="child.getAttribute('d') ?? ''"
                :fill="child.fill ?? (child.id == '🖍-Ink' ? '#000000' : '#FFFFFF')"></path>
            </g>
            <g id="facial-hair/*" transform="translate(123.000000, 338.000000)">
              <path
                v-for="child in bustSvgElements.facialHair?.children"
                :id="child.id"
                :key="child.id"
                :d="child.getAttribute('d') ?? ''"
                :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
            </g>
            <g id="accessories/*" transform="translate(47.000000, 241.000000)">
              <path
                v-for="child in bustSvgElements.accessories?.children"
                :id="child.id"
                :key="child.id"
                :d="child.getAttribute('d') ?? ''"
                :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
            </g>
          </g>
        </g>
      </svg>
    </n-gi>
    <n-gi :span="1" class="bg-white">
      <n-h2 class="color-primary text-center">站姿standing</n-h2>
      <svg
        width="100%"
        height="600"
        viewBox="0 0 1179 3291"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="a-mono/standing" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="pose/standing/crossed_arms-1" transform="translate(-121.000000, 634.000000)">
            <path
              v-for="child in standingSvgElements.pose?.children"
              :id="child.id"
              :key="child.id"
              :d="child.getAttribute('d') ?? ''"
              :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
          </g>
          <g id="Head" transform="translate(404.000000, 180.000000)">
            <g id="head/mono/*">
              <path
                v-for="child in standingSvgElements.head?.children"
                :id="child.id"
                :key="child.id"
                :d="child.getAttribute('d') ?? ''"
                :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
            </g>
            <g id="face/*" transform="translate(159.000000, 186.000000)" fill="#000000">
              <path
                v-for="child in standingSvgElements.face?.children"
                :id="child.id"
                :key="child.id"
                :d="child.getAttribute('d') ?? ''"
                :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
            </g>
            <g id="facial-hair/*" transform="translate(123.000000, 338.000000)">
              <path
                v-for="child in standingSvgElements.facialHair?.children"
                :id="child.id"
                :key="child.id"
                :d="child.getAttribute('d') ?? ''"
                :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
            </g>
            <g id="accessories/*" transform="translate(47.000000, 241.000000)">
              <path
                v-for="child in standingSvgElements.accessories?.children"
                :id="child.id"
                :key="child.id"
                :d="child.getAttribute('d') ?? ''"
                :fill="child.id == '🖍-Ink' ? '#000000' : '#FFFFFF'"></path>
            </g>
          </g>
        </g>
      </svg>
    </n-gi>
    <n-gi :span="2">
      <n-tabs type="segment" animated>
        <n-tab-pane name="head" tab="头部">
          <NFlex>
            <img
              v-for="head in headList"
              :key="head"
              class="w-20 h-20 bg-white"
              :src="
                appStore.projectSettings.localhost +
                '/resources/images/open-peeps/Separate Atoms/head/' +
                head +
                '.svg'
              "
              @click="loadSvg('head', head)" />
          </NFlex>
        </n-tab-pane>
        <n-tab-pane name="body" tab="身体">
          <NFlex>
            <img
              v-for="item in bodyList"
              :key="item"
              class="w-20 h-20 bg-white"
              :src="
                appStore.projectSettings.localhost +
                '/resources/images/open-peeps/Separate Atoms/body/' +
                item +
                '.svg'
              "
              @click="loadSvg('body', item)" />
          </NFlex>
        </n-tab-pane>
        <n-tab-pane name="face" tab="脸型">
          <NFlex>
            <img
              v-for="item in faceList"
              :key="item"
              class="w-20 h-20 bg-white"
              :src="
                appStore.projectSettings.localhost +
                '/resources/images/open-peeps/Separate Atoms/face/' +
                item +
                '.svg'
              "
              @click="loadSvg('face', item)" />
          </NFlex>
        </n-tab-pane>
        <n-tab-pane name="facial-hair" tab="胡子">
          <NFlex>
            <img
              v-for="item in facialHairList"
              :key="item"
              class="w-20 h-20 bg-white"
              :src="
                appStore.projectSettings.localhost +
                '/resources/images/open-peeps/Separate Atoms/facialHair/' +
                item +
                '.svg'
              "
              @click="loadSvg('facialHair', item)" />
          </NFlex>
        </n-tab-pane>
        <n-tab-pane name="accessories" tab="配饰">
          <NFlex>
            <img
              v-for="item in accessoriesList"
              :key="item"
              class="w-20 h-20 bg-white"
              :src="
                appStore.projectSettings.localhost +
                '/resources/images/open-peeps/Separate Atoms/accessories/' +
                item +
                '.svg'
              "
              @click="loadSvg('accessories', item)" />
          </NFlex>
        </n-tab-pane>
        <n-tab-pane name="pose" tab="姿势">
          <NFlex>
            <n-h3 class="color-primary text-center">站姿</n-h3>
            <img
              v-for="item in poseList"
              :key="item"
              class="w-20 h-20 bg-white"
              :src="
                appStore.projectSettings.localhost +
                '/resources/images/open-peeps/Separate Atoms/pose/' +
                item +
                '.svg'
              "
              @click="loadSvg('pose', item)" />
            <n-h3 class="color-primary text-center">坐姿</n-h3>
            <img
              v-for="item in poseSittingList"
              :key="item"
              class="w-20 h-20 bg-white"
              :src="
                appStore.projectSettings.localhost +
                '/resources/images/open-peeps/Separate Atoms/pose/' +
                item +
                '.svg'
              "
              @click="loadSvg('pose', item)" />
          </NFlex>
        </n-tab-pane>
      </n-tabs>
    </n-gi>
    <n-gi :span="4"> </n-gi>
  </n-grid>
</template>
<script setup lang="ts">
import { useAppStore } from '@renderer/store/modules/app'
import { useAuthStore } from '@renderer/store/modules/auth'
import { useGameItemStore } from '@renderer/store/modules/game-item'
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'Character'
})

const shopItems = ref<Array<Dto.GameItemFull>>([])
const appStore = useAppStore()
const { archivedData } = useAuthStore()
const { totalGameItems } = useGameItemStore()
const headList = ref<Array<string>>([
  'Afro',
  'Bangs 2',
  'Bangs',
  'Bantu Knots',
  'Bear',
  'Bun 2',
  'Bun',
  'Buns',
  'Cornrows 2',
  'Cornrows',
  'Flat Top Long',
  'Flat Top',
  'Gray Bun',
  'Gray Medium',
  'Gray Short',
  'hat-beanie',
  'hat-hip',
  'Hijab',
  'Long Afro',
  'Long Bangs',
  'Long Curly',
  'Long',
  'Medium 1',
  'Medium 2',
  'Medium 3',
  'Medium Bangs 2',
  'Medium Bangs 3',
  'Medium Bangs',
  'Medium Straight',
  'Mohawk 2',
  'Mohawk',
  'No Hair 1',
  'No Hair 2',
  'No Hair 3',
  'Pomp',
  'Shaved 1',
  'Shaved 2',
  'Shaved 3',
  'Short 1',
  'Short 2',
  'Short 3',
  'Short 4',
  'Short 5',
  'Turban',
  'Twists 2',
  'Twists'
])
const bodyList = ref<Array<string>>([
  'Blazer Black Tee',
  'Button Shirt 1',
  'Button Shirt 2',
  'Coffee',
  'Device',
  'Dress',
  'Explaining',
  'Fur Jacket',
  'Gaming',
  'Gym Shirt',
  'Hoodie',
  'Killer',
  'Macbook',
  'Paper',
  'Pointing Up',
  'Polka Dot Jacket',
  'Polo and Sweater',
  'Shirt and Coat',
  'Sporty Tee',
  'Striped Pocket Tee',
  'Striped Tee',
  'Sweater Dots',
  'Sweater',
  'Tee 1',
  'Tee 2',
  'Tee Arms Crossed',
  'Tee Selena',
  'Thunder T-Shirt',
  'Turtleneck',
  'Whatever'
])
const faceList = ref<Array<string>>([
  'Angry with Fang',
  'Awe',
  'Blank',
  'Calm',
  'Cheeky',
  'Concerned Fear',
  'Concerned',
  'Contempt',
  'Cute',
  'Cyclops',
  'Driven',
  'Eating Happy',
  'Explaining',
  'Eyes Closed',
  'Fear',
  'Hectic',
  'Loving Grin 1',
  'Loving Grin 2',
  'Monster',
  'Old',
  'Rage',
  'Serious',
  'Smile Big',
  'Smile LOL',
  'Smile Teeth Gap',
  'Smile',
  'Solemn',
  'Suspicious',
  'Tired',
  'Very Angry'
])
const facialHairList = ref<Array<string>>([
  '_ None',
  'Chin',
  'Full 2',
  'Full 3',
  'Full 4',
  'Full',
  'Goatee 1',
  'Goatee 2',
  'Moustache 1',
  'Moustache 2',
  'Moustache 3',
  'Moustache 4',
  'Moustache 5',
  'Moustache 6',
  'Moustache 7',
  'Moustache 8',
  'Moustache 9'
])
const accessoriesList = ref<Array<string>>([
  '_ None',
  'Eyepatch',
  'Glasses 2',
  'Glasses 3',
  'Glasses 4',
  'Glasses 5',
  'Glasses',
  'Sunglasses 2',
  'Sunglasses'
])

const poseList = ref<Array<string>>([
  '/standing/blazer-1',
  '/standing/blazer-2',
  '/standing/blazer-3',
  '/standing/blazer-4',
  '/standing/crossed_arms-1',
  '/standing/crossed_arms-2',
  '/standing/easing-1',
  '/standing/easing-2',
  '/standing/pointing_finger-1',
  '/standing/pointing_finger-2',
  '/standing/polka_dots',
  '/standing/resting-1',
  '/standing/resting-2',
  '/standing/robot_dance-1',
  '/standing/robot_dance-2',
  '/standing/robot_dance-3',
  '/standing/shirt-1',
  '/standing/shirt-2',
  '/standing/shirt-3',
  '/standing/shirt-4',
  '/standing/walking-1',
  '/standing/walking-2',
  '/standing/walking-3'
])
const poseSittingList = ref<Array<string>>([
  '/sitting/bike',
  '/sitting/closed_legs-1',
  '/sitting/closed_legs-2',
  '/sitting/crossed_legs',
  '/sitting/hands_back-1',
  '/sitting/hands_back-2',
  '/sitting/mid-1',
  '/sitting/mid-2',
  '/sitting/one_leg_up-1',
  '/sitting/one_leg_up-2',
  '/sitting/wheelchair'
])

const bustSvgElements = ref<any>({
  body: undefined,
  head: undefined,
  face: undefined,
  facialHair: undefined,
  accessories: undefined
})
const sittingSvgElements = ref<any>({
  body: undefined,
  pose: undefined,
  head: undefined,
  face: undefined,
  facialHair: undefined,
  accessories: undefined
})
const standingSvgElements = ref<any>({
  body: undefined,
  pose: undefined,
  head: undefined,
  face: undefined,
  facialHair: undefined,
  accessories: undefined
})

async function loadSvg(type, svgFile) {
  try {
    const text = await window.api.readFile(
      '/resources/images/open-peeps/Separate Atoms/' + type + '/' + svgFile + '.svg'
    )
    const parser = new DOMParser()
    const doc = parser.parseFromString(text, 'image/svg+xml')
    if (type == 'pose') {
      if (svgFile.startsWith('/standing/')) {
        standingSvgElements.value[type] = doc.querySelector('g') ?? undefined
      } else {
        sittingSvgElements.value[type] = doc.querySelector('g') ?? undefined
      }
    } else if (type == 'body') {
      bustSvgElements.value[type] = doc.querySelector('g') ?? undefined
    } else {
      bustSvgElements.value[type] = doc.querySelector('g') ?? undefined
      standingSvgElements.value[type] = doc.querySelector('g') ?? undefined
      sittingSvgElements.value[type] = doc.querySelector('g') ?? undefined
    }
  } catch (error) {
    console.error('Error loading or parsing SVG:', error)
  }
}

onMounted(() => {
  shopItems.value = []

  totalGameItems
    .filter((x) => archivedData.items.filter((p) => p.name == x.name && p.count > 0).length > 0)
    .forEach((item) => {
      shopItems.value.push({
        ...item,
        count: archivedData.items.filter((x) => x.name == item.name)[0].count
      })
    })
})
</script>

<style scoped></style>
