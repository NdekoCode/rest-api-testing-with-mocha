import { should } from "chai";
import Student from "../src/Student.js";

should();

describe("Student", () => {
  describe("#Student", () => {
    it("Should allow me to allow me to create a student", () => {
      new Student("Arick", "Bulakali");
    });
  });
});
