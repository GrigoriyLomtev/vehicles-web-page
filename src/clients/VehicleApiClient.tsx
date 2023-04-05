import axios from 'axios';

const baseUrl = 'https://test.tspb.su/test-task/';

export class VehicleApiClient {
  public async getAllVehicles() {
    const response = await axios.get(`${baseUrl}vehicles`);
    return response.data;
  }
}
