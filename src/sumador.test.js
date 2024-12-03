import generarFizzBuzzPara from "./sumador.js";

describe("FizzBuzz", () => {
 
  it("deberia devolver fizz buzz porque es 0", () => {
    expect(generarFizzBuzzPara(0)).toEqual("FizzBuzz");
  });
  it("deberia devolver fizz porque es 3", () => {
    expect(generarFizzBuzzPara(3)).toEqual("Fizz");
  });
  it("deberia devolver Buzz porque es 5", () => {
    expect(generarFizzBuzzPara(5)).toEqual("Buzz");
  });
  it("deberia devolver el numero porque es 1 y no es multiplo ni de 3 ni de 5", () => {
    expect(generarFizzBuzzPara(1)).toEqual(1);
  });
  it("deberia devolver el numero 15 porque es FizzBuzz y es multiplo ni de 3 ni de 5", () => {
    expect(generarFizzBuzzPara(15)).toEqual("FizzBuzz");
  });
});


