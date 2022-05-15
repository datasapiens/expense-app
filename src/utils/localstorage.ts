const getStoreFromLocalStorage = () => {
    try {
        const cachedStore = localStorage.getItem('app');
        if (cachedStore) {
            return JSON.parse(cachedStore);
        }
    } catch (error) {
        console.log(error)
    }
};

const addStoreToLocalStorage = (state: any) => {
    try {
        localStorage.setItem('app', JSON.stringify(state))
    } catch (error) {
        console.log(error)
    }

}

export { getStoreFromLocalStorage, addStoreToLocalStorage };