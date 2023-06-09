import { useState } from 'react';

export default function useLocalStorage(key){
    const [storage, setStorage] = useState(() => {
        //ver se já tem algo no localStorage
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : {}
        } catch (error){
            console.log(error)
            return {}
        }
    })

    const setValue = (value) => {
        try {
          const store = value instanceof Function ? value(storage) : value;
          setStorage(store);
          window.localStorage.setItem(key, JSON.stringify(store));
        } catch (error) {
          console.log(error);
        }
      };
    
}
