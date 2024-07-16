// Your code here
//function to create an employee record
function createEmployeeRecord(employeeArray){
    return{
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        email: employeeArray[2],
        jobTitle: employeeArray[3],
        salary: parseFloat(employeeArray[4]),
        department: employeeArray[5],
        payPerHour :employeeArray[6],
        timeInEvents: [],
        timeOutEvents: [],
    };
}
let testEmployee = ["Gray", "Green", "Security", 1];
console.log(createEmployeeRecord(testEmployee));

function createEmployeeRecords(employeeArray) {
    return employeeArray.map(createEmployeeRecord);
}

// Create employee records time in
function addTimeInEvent(employeeRecord, dateTime) {
    let [date, hour] = dateTime.split(' ');
    let timeInEvent = {
    type: 'timeIn',
};
return employeeRecord;
}

//create employee record time out
function addTimeOutEvent(employeeRecord, dateTime) {
    const[date, hour] = dateTime.split('-');
    employeeRecord.timeOutEvents.push({
        type: 'timeOut',
    });
    return employee;
    }
    //calculate hours worked on a specific date
    function hoursWorkedOnDate(employee, workDate) {
        const timeIn = employee.timeInEvents.find(event => dateTime.date === workDate).hour;
        const timeOut = employee.timeOutEvents.find(event => dateTime.date === workDate).hour;
      
        return hoursWorked(timeIn.toString(), timeOut.toString());
    }

    //calculate wages worked on a specific date
    function wagesWorkedOnDate(employee, workDate) {
        const hoursWorked = hoursWorkedOnDate(employee, workDate);
        return hoursWorked * parseFloat(employee.payPerHour);
    }

    //calculate total wages for a specific employee
    function totalWagesForEmployee(employee) {
        let totalWages = 0;
        employee.timeInEvents.forEach(event => {
            const workDate = newDate(event.date);
            totalWages += wagesWorkedOnDate(employee, workDate);
        });
        return totalWages;
    }

    //calculate total wages for all employees
    function totalWagesForAllEmployees(employeeRecords) {
        let totalWages = 0;
        employeeRecords.forEach(employee => {
            totalWages += totalWagesForEmployee(employee);
        });
        return totalWages;
    }

    //calculate average wages for all employees
    function wagesEarnedOnDate(employee, workDate) {
      const hoursWorked = hoursWorkedOnDate(employee, workDate);
      const wage = employee.payPerHour;
      
      return hoursWorked * wage;
    }
    
    // Function to calculate total wages earned by an employee
    function allWagesFor(employee) {
      const datesWorked = employee.timeInEvents.map(event => event.date);
      let totalWages = 0;
    
      datesWorked.forEach(date => {
        totalWages += wagesEarnedOnDate(employee, date);
      });
    
      return totalWages;
    }
    
    // Function to calculate total payroll for all employees
    function calculatePayroll(employees) {
      let totalPayroll = 0;
      employees.forEach(employee => {
         totalPayroll += allWagesFor(employee);
      });

      return totalPayroll;
    } 


