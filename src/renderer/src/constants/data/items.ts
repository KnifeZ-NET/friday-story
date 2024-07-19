export const DefaultShopGoods: Array<Dto.ShopGoods> = [
  {
    id: 1,
    name: 'cola',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 5,
    count: 10,
    selectedCount: 0
  },
  {
    id: 2,
    name: 'beer',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 10,
    count: 20,
    selectedCount: 0
  },
  {
    id: 3,
    name: 'coffee',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 20,
    count: 10,
    selectedCount: 0
  },
  {
    id: 4,
    name: 'croissant',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 30,
    count: 10,
    selectedCount: 0
  },
  {
    id: 5,
    name: 'fired_eggs',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 5,
    count: 20,
    selectedCount: 0
  },
  {
    id: 6,
    name: 'fish',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 50,
    count: 40,
    selectedCount: 0
  },
  {
    id: 7,
    name: 'hamburger',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 20,
    count: 80,
    selectedCount: 0
  },
  {
    id: 8,
    name: 'milk',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 10,
    count: 90,
    selectedCount: 0
  },
  {
    id: 9,
    name: 'sandwich',
    title: '',
    desc: '',
    cover: '',
    type: 'food',
    level: 'SR',
    price: 10,
    count: 30,
    selectedCount: 0
  }
]

export function ShopGoods() {
  const goodsList = DefaultShopGoods
  goodsList.forEach((item) => {
    item.desc = 'items.' + item.type + '.' + item.name + '.desc'
    item.title = 'items.' + item.type + '.' + item.name + '.title'
    item.cover = '/static/items/' + item.type + '/' + item.name.replaceAll('.', '/') + '.png'
  })
  return goodsList
}
