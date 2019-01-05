const mockAxios = jest.genMockFromModule('axios');

// https://stackoverflow.com/questions/51393952/mock-inner-axios-create/51414152#51414152
// this is the key to fix the axios.create() undefined error!
mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
