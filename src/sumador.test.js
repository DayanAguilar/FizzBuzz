import generarFizzBuzzPara from "./sumador.js";

describe("FizzBuzz", () => {
 
  it("deberia devolver fizz buzz porque es 0", () => {
    expect(generarFizzBuzzPara(0)).toEqual("FizzBuzz");
  });
});

