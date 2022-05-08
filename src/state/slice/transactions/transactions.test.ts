import { Transactions, State } from "./transactions";

describe("Transactions slice", () => {
  it("should add Transaction", () => {
    const action = Transactions.actions.add({
      amount: -10,
      category: "1",
      date: new Date().toDateString(),
      label: "Mcdonald`s",
    });

    const result: State = Transactions.reducer([], action);

    expect(result).toPartiallyContain(action.payload);
  });
  it.todo("should remove Transaction");
});
