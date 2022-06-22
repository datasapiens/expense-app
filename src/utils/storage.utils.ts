
const storage = localStorage;

export const save = ({ key, value}: {key: string, value: any}): boolean => {
    try{
        storage.setItem(key, JSON.stringify(value));
        return true;
    } catch(error) {
        return false;
    }
}

export const remove = ({ key } : { key: string}): boolean => {
    try{
        storage.removeItem(key);
        return true;
    } catch(error) {
        return false;
    }
}

export const get = ({ key }: { key: string}): any | null => {
    try{
        return JSON.parse(storage.getItem(key) as string);
    } catch(error) {
        return null;
    }
}

export const clear = (): boolean => {
    try{
        storage.clear();
        return true;
    } catch(error) {
        return false;
    }
}