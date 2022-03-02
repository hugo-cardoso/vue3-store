import type { Showcase } from "../types"

const MOCK_SHOWCASE: Showcase = {
  name: 'My Showcase',
  items: [
    {
      id: 1,
      name: 'Item 1',
      price: 10
    },
    {
      id: 2,
      name: 'Item 2',
      price: 20
    },
    {
      id: 3,
      name: 'Item 3',
      price: 30
    },
    {
      id: 4,
      name: 'Item 4',
      price: 40
    },
    {
      id: 5,
      name: 'Item 5',
      price: 50
    },
    {
      id: 6,
      name: 'Item 6',
      price: 60
    }
  ],
}

export async function getShowcase(): Promise<Showcase> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_SHOWCASE), 1500)
  })
}