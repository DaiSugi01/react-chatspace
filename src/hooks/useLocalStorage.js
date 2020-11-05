import { useEffect, useState } from 'react'

const PREFIX = 'react-chatspace-';

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue !== null) return JSON.parse.jsonValue;
  })
}
