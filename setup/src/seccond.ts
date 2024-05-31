interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: string;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: string
  ) {}
}

class Youtube implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: string,
    public short: string
  ) {}

  createdStory() {
    console.log("Story has ben create");
  }
}
