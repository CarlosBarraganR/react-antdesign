// @flow

class StorageServiceClass {
  saveItem(key: string, item: Object) {
    return localStorage.setItem(key, item);
  }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  deleteItem(key: string) {
    return localStorage.removeItem(key);
  }
}

const StorageService = new StorageServiceClass();

export default StorageService;
