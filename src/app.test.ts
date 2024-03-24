import { ServerApp } from "./presentation/server-app";

describe("test App.ts", () => {
  test("should call server.run with values", async () => {
    const serverMock = jest.fn();
    ServerApp.run = serverMock;
    process.argv = [
      "node",
      "app.ts",
      "-b",
      "10",
      "-l",
      "5",
      "-s",
      "-n",
      "test-file",
      "-d",
      "test-destination",
    ];

    await import("./app");

    expect(serverMock).toHaveBeenCalledWith({
      base: 10,
      limit: 5,
      showTable: true,
      name: "test-file",
      destination: "test-destination",
    });
  });
});
