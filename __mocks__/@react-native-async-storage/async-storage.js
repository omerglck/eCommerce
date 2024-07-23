const mockAsyncStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
  multiSet: jest.fn(),
  multiRemove: jest.fn(),
};

export default mockAsyncStorage;
