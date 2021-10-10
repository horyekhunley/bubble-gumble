const express = require('express')
const router = express.Router()

const { Employee, validator } = require('../models/employeeModel')

const { createNewEmployee, getAllEmployees, getSpecificEmployee, updateSpecificEmployee, deleteSpecificEmployee } = require('../controllers/employeeController')

// @POST create employee 
router.post('/', createNewEmployee)

// @GET get all employees
router.get('/', getAllEmployees)

//@GET get a single employee by id
router.get('/:id', getSpecificEmployee)

// @PUT update employee details
router.put('/:id', updateSpecificEmployee)

// @DELETE delete a single employee
router.delete('/:id', deleteSpecificEmployee)

module.exports = router