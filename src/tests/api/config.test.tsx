import { axiosInstance } from "@/api/config";

jest.resetAllMocks();

jest.mock("axios");

describe("axiosInstance", () => {
  it("should have the correct baseURL", () => {
    expect(axiosInstance.defaults.baseURL).toEqual("http://localhost:5173");
  });
});
