const Employee = require('../models/employeeModel')

exports.createNewEmployee = (req, res) => {
    Employee.create({
        ...req.body
    }, (err, newEmployee) => {
        if (err){
            return res.status(500).json({ message: "err"})
        }else {
            return res.status(200).json({ message: 'New employee record created', newEmployee })
        }
    })
}
exports.getAllEmployees = async(req, res) => {
    const employee = await Employee.find(req.query).sort('name')
    res.send(employee)
}
exports.getSpecificEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    if (!employee) return res.status(404).json({ message: 'Employee record not found'})
    res.send(employee)
}
exports.updateSpecificEmployee = async(req, res) => {
    
    const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        {
            ...req.body       
        },
        {
            new: true,
        }
    );
    if (!employee) return res.status(404).json({ message: "Employee record not found" });

    res.send(employee);
}
exports.deleteSpecificEmployee = async(req, res) => {
    const employee = await Employee.findByIdAndDelete(
        req.params.id
    )
    if (!employee) return res.status(404).json({ message: "Employee record not found" });

    res.send(employee);
}