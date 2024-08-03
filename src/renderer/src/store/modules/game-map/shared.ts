import { DefaultMaps } from '@renderer/constants/data/map'
import { SetupStoreId } from '@renderer/enums'
import { localeText, prefixImage } from '@renderer/utils/common'
import { useAuthStore } from '../auth'

export async function getDefaultMaps(id: number | undefined) {
  const maps = flattenTree(generateIdAndPid(DefaultMaps, 'root'))
  if (id != undefined) {
    const mapStorage = await useAuthStore().findStorageData(SetupStoreId.GameMap + '.allMaps')
    if (mapStorage != null && mapStorage.data != null && typeof mapStorage.data != 'string') {
      const userMaps = JSON.parse(mapStorage.data.value) as Array<Dto.MapItemFull>
      maps.forEach((map) => {
        if (userMaps.filter((x) => x.id == map.id).length == 0) {
          userMaps.push(map)
        }
      })
      return userMaps
    }
  }
  return maps
}

export function generateIdAndPid(tree: any, parentId = 'root') {
  return tree.map((node: any) => {
    const id = node.level + '.' + node.name
    const newNode = {
      ...node,
      id: id,
      pid: parentId
    }
    if (node.children) {
      newNode.children = generateIdAndPid(node.children, id)
    }
    return newNode
  })
}

function flattenTree(tree) {
  const result: Array<Dto.MapItemFull> = []

  function traverse(node) {
    let typeName = node.id
    if (node.level == 'room') {
      typeName = 'building.' + node.name
    }
    const fullMap: Dto.MapItemFull = {
      title: localeText('', typeName, 'map', 'title').toString(),
      text: localeText('', typeName, 'map', 'text').toString(),
      cover: prefixImage('', typeName, 'map', '.jpeg'),
      id: node.id,
      pid: node.pid,
      name: node.name,
      level: node.level,
      options: node.options,
      icon: node.icon,
      isDisabled: node.isDisabled,
      isShow: node.isShow != false,
      order: node.order,
      isLocked: node.isLocked,
      condition: node.condition
    }
    if (node.children != undefined && node.children.length > 0) {
      result.push({
        ...fullMap,
        next: node.children[0].id
      })
    } else {
      result.push({
        ...fullMap,
        next: node.next
      })
    }
    if (node.children) {
      node.children.forEach(traverse)
    }
  }
  tree.forEach(traverse)
  return result
}
