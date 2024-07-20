// export default function useLocalStorage(keyFromHook: string) {
//    const setItem = (value: unknown, key = keyFromHook ) => {
//     try {
//       window.localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getItem = (key = keyFromHook ) => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : undefined;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const removeItem = (key = keyFromHook) => {
//     try {
//       window.localStorage.removeItem(key);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return { setItem, getItem, removeItem };
// }
