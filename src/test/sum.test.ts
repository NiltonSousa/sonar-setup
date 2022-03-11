import { sum } from '../services/sum'

it("should sum two values (1+2) and return 3", () => {
    expect(sum(1, 2)).toEqual(3)
})