import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("SaveFileUseCase", () => {
  const customOptions = {
    fileContent: "custom content",
    fileDestination: "custom-outputs/file-destination",
    fileName: "custom-table-name",
  };

  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  beforeEach(() => {
    if (fs.existsSync("outputs")) {
      fs.rmSync("outputs", { recursive: true });
    }
    const directory = customOptions.fileDestination;
    if (fs.existsSync(directory)) {
      fs.rmSync(directory, { recursive: true });
    }
  });

  test("should save file with default options", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "test content",
    };
    const pathFile = "outputs/table.txt";

    const result = saveFile.execute(options);
    const existsFile = fs.existsSync(pathFile);
    const contentFile = fs.readFileSync(pathFile, { encoding: "utf-8" });

    expect(result).toBeTruthy();
    expect(existsFile).toBeTruthy();
    expect(contentFile).toBe(options.fileContent);
  });

  test("should save file with custom values", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(customOptions);
    const existsFile = fs.existsSync(customFilePath);
    const contentFile = fs.readFileSync(customFilePath, {
      encoding: "utf-8",
    });

    expect(result).toBeTruthy();
    expect(existsFile).toBeTruthy();
    expect(contentFile).toBe(customOptions.fileContent);
  });

  test("should return false if directory could not be created", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw new Error("This is a custom error message from testing");
    });
    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });

  test("should return false if file could not be created", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, "writeFileSync").mockImplementation(() => {
      throw new Error("This is a custom error message from testing");
    });
    const result = saveFile.execute(customOptions);

    expect(result).toBe(false);

    mkdirSpy.mockRestore();
  });
});
