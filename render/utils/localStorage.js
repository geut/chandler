
const ITEM_KEY = 'persisted';

export const loadState = () => {
  const raw = localStorage.getItem(ITEM_KEY);
  try {
    return raw ? JSON.parse(raw) : undefined;
  } catch (e) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const raw = JSON.stringify(state);
    localStorage.setItem(ITEM_KEY, raw);
  } catch (e) {
    // ignore
  }
}
