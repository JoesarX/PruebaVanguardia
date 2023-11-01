const Student = require("../Models/StudentSchema")

const newStudent = async (req, res) => {
    const student = new Student(
        {
            id: req.body.id,
            name: req.body.name,
            age: req.body.age,
            course: req.body.course
        }
    );
    try {
        const result = await student.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while saving the student." });
    }
}
module.exports = {
    newStudent,
};