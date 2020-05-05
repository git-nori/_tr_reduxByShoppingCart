import { createSlice } from '@reduxjs/toolkit'

import Item1 from '../../static/image/item1.jpg'
import Item2 from '../../static/image/item2.jpg'
import Item3 from '../../static/image/item3.jpg'
import Item4 from '../../static/image/item4.jpg'
import Item5 from '../../static/image/item5.jpg'
import Item6 from '../../static/image/item6.jpg'

const initialState = {
  items: [
    { id: 1, title: 'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
    { id: 2, title: 'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
    { id: 3, title: 'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
    { id: 4, title: 'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
    { id: 5, title: 'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
    { id: 6, title: 'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
  ],
  addedItems: [],
  total: 0
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.addedItems = action.payload
    }
  }
})

export const { addItem } = CartSlice.actions

export default CartSlice.reducer