import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  saveToStorage,
  getFromStorage,
  removeFromStorage,
} from '../src/utils/storageHelper';

jest.mock('@react-native-async-storage/async-storage');

describe('storageHelper', () => {
  beforeEach(() => {
    AsyncStorage.setItem.mockClear();
    AsyncStorage.getItem.mockClear();
    AsyncStorage.removeItem.mockClear();
    jest.spyOn(console, 'error').mockImplementation(() => {}); // console.error'ı mockluyoruz
  });

  afterEach(() => {
    console.error.mockRestore(); // console.error'ı restore ediyoruz
  });

  describe('saveToStorage', () => {
    it('should save value to storage', async () => {
      const key = 'testKey';
      const value = {foo: 'bar'};

      await saveToStorage(key, value);

      expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        key,
        JSON.stringify(value),
      );
    });

    it('should handle errors', async () => {
      const key = 'testKey';
      const value = {foo: 'bar'};
      const error = new Error('AsyncStorage error');

      AsyncStorage.setItem.mockRejectedValueOnce(error);

      await saveToStorage(key, value);

      expect(console.error).toHaveBeenCalledWith(
        'Error saving to storage:',
        error,
      );
    });
  });

  describe('getFromStorage', () => {
    it('should get value from storage', async () => {
      const key = 'testKey';
      const value = {foo: 'bar'};

      AsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify(value));

      const result = await getFromStorage(key);

      expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
      expect(result).toEqual(value);
    });

    it('should return null if no value found', async () => {
      const key = 'testKey';

      AsyncStorage.getItem.mockResolvedValueOnce(null);

      const result = await getFromStorage(key);

      expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith(key);
      expect(result).toBeNull();
    });

    it('should handle errors', async () => {
      const key = 'testKey';
      const error = new Error('AsyncStorage error');

      AsyncStorage.getItem.mockRejectedValueOnce(error);

      const result = await getFromStorage(key);

      expect(console.error).toHaveBeenCalledWith(
        'Error getting from storage:',
        error,
      );
      expect(result).toBeUndefined();
    });
  });

  describe('removeFromStorage', () => {
    it('should remove value from storage', async () => {
      const key = 'testKey';

      await removeFromStorage(key);

      expect(AsyncStorage.removeItem).toHaveBeenCalledTimes(1);
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith(key);
    });

    it('should handle errors', async () => {
      const key = 'testKey';
      const error = new Error('AsyncStorage error');

      AsyncStorage.removeItem.mockRejectedValueOnce(error);

      await removeFromStorage(key);

      expect(console.error).toHaveBeenCalledWith(
        'Error removing from storage:',
        error,
      );
    });
  });
});
