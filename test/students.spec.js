import { expect, should } from "chai";
import Student from "../src/Student.js";

should();

describe("Student", () => {
  describe("#Student initiation", () => {
    it("Should allow me to allow me to create a student", () => {
      const student = new Student("Arick", "Bulakali");
      student.should.not.be.equal(undefined);
    });
    it("Should present student", () => {
      const alxStd = new Student("Alex", "Amani");
      alxStd.presentation().should.be.equal("Alex Amani");
    });
    it("Should gave us the age of student", () => {
      const newStd = new Student("ndekocode", "Bum", 20);
      expect(newStd.getAge()).to.be.equal(20);
    });
  });
});
