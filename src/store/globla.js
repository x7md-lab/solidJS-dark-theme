import { action, atom, computed } from 'nanostores';

export const bearStore = atom({ value: 0 });

export const increase = action(bearStore, 'increase', (store) => {
  store.set({ value: store.get().value + 1 });
});
export const decrease = action(bearStore, 'decrease', (store) => {
  store.set({ value: store.get().value - 1 });
});