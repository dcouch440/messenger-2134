import quickSortById from "./quickSortById";

describe("quickSortById", () => {
  const arrayOfObjects = [
    {
      id: 5,
    },
    {
      id: 2,
    },
    {
      id: 25,
    },
  ];
  it("sorts the given objects by id", () => {
    const sorted = quickSortById(arrayOfObjects);
    const extractedIds = sorted.map((obj) => obj.id);
    expect(extractedIds).toEqual([2, 5, 25]);
  });
});
