import { testData } from '../data/data';
import { VehicleObject } from '../types/types';

const wait = async (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export class VehicleApiClient {
  public async getAllVehicles() {
    await wait(1000);
    return testData;
  }

  public async getVideo(id: number | string) {
    await wait(1000);
    return testData[0];
  }

  public async createVideo(videoData: VehicleObject) {
    await wait(1000);
    return videoData;
  }

  public async updateVideo(videoData: VehicleObject) {
    await wait(1000);
    return videoData;
  }

  public async deleteVideo(id: number | string) {
    await wait(1000);

    // return { error: 'error message from server' };
    return testData[0];
  }
}
