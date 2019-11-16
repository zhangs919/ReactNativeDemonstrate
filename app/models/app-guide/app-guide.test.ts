import { AppGuideModel, AppGuide } from "./app-guide"

test("can be created", () => {
  const instance: AppGuide = AppGuideModel.create({})

  expect(instance).toBeTruthy()
})