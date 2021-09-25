Vue.createApp({
    data: () => ({
        employees: [],
        result: [],
        searchedResultP: document.createElement("p"),
    }),
    computed: {

    },
    methods: {
        addEmployee() {
            const employee = {
                "id": this.employees.length,
                "name": this.$refs.name.value,
                "job": this.$refs.job.value,
                "passport": this.$refs.passport.value,
                "country": this.$refs.country.value
            };
            console.log(this.$refs.name.value);
            console.log(this.$refs.job.value);
            console.log(this.$refs.passport.value);
            console.log(this.$refs.country.value);

            this.employees.push(employee);
            this.loadEmployees(this.employees);

            this.$refs.name.value = '';
            this.$refs.job.value = '';
            this.$refs.passport.value = '';
            this.$refs.country.value = '';
        },
        searchInput() {
            this.$refs.searchResultDiv.innerHTML = "";

            if (this.$refs.searchInput.value == "") {
                this.$refs.searchResultDiv.innerHTML = "";
                return;
            }


            for (let i = 0; i < this.employees.length; i++) {
                if (this.employees[i].name.toLowerCase().includes(this.$refs.searchInput.value.toLowerCase())) {
                    this.result.push(this.employees[i]);
                }
            }

            if (this.result.length > 0) {
                for (let i = 0; i < result.length; i++) {
                    this.searchedResultP,
                        this.searchedResultP.className = "searched-result-p";
                    this.searchedResultP.innerText = this.result[i].name;

                    this.$refs.searchResultDiv.appendChild(this.searchedResultP);

                    // this.searchedResultP.onclick = function() {
                    //     let editName = document.getElementById('editName');
                    //     let editJob = document.getElementById("editJob");
                    //     let editPassport = document.getElementById("editPassport");
                    //     let editCountry = document.getElementById("editCountry");
                    //     let saveEditedInfoBtn = document.getElementById("saveEditedInfoBtn");

                    //     if (editEmployeeContainer.style.display == "none") {
                    //         editEmployeeContainer.style.display = "block";
                    //     }

                    //     editName.value = result[i].name;
                    //     editJob.value = result[i].job;
                    //     editPassport.value = result[i].passport;
                    //     editCountry.value = result[i].country;

                    //     saveEditedInfoBtn.onclick = function() {
                    //         console.log("Clicked!")
                    //         result[i].name = editName.value;
                    //         result[i].job = editJob.value;
                    //         result[i].passport = editPassport.value;
                    //         result[i].country = editCountry.value

                    //         this.employees.forEach((employee) => {
                    //             if (employee.id == result[i].id) {
                    //                 employee = result[i];
                    //             }
                    //         });

                    //         loadEmployees(this.employees);
                    //         console.log(result);

                    //         editEmployeeContainer.style.display = "none";
                    //     }
                    // }
                }
            }
        },
        searchTimesBtn() {
            searchInput.value = "";
            searchResultDiv.innerHTML = "";
        },
        loadEmployees(employees) {
            employeesUL.innerHTML = "";

            this.employees.forEach(employee => {

                const employeeLI = document.createElement('li');
                employeeLI.className = "employee-li";
                employeeLI.id = employee.id;

                const employeeNameSpan = document.createElement('span');
                employeeNameSpan.innerText = employee.name;

                const deleteEmployeeBtn = document.createElement("button");
                deleteEmployeeBtn.className = 'delete-employee-btn';
                deleteEmployeeBtn.innerText = "X";

                employeeLI.appendChild(employeeNameSpan);
                employeeLI.appendChild(deleteEmployeeBtn);

                deleteEmployeeBtn.addEventListener("click", () => {
                    console.log("Number of employees in company " + employees.length);
                    delete employees[employee.id];

                    employees = employees.filter((employees) => {
                        if (employees !== undefined) {
                            return employees;
                        }
                    });

                    employeeLI.remove();

                    console.log("Number of employees in company " + employees.length);
                });

                const employeeDetails = document.createElement("div");
                employeeDetails.style.display = 'none';

                const employeeJobP = document.createElement("p");
                employeeJobP.innerText = employee.job;
                employeeDetails.appendChild(employeeJobP);

                const employeePassportP = document.createElement("p");
                employeePassportP.innerText = employee.passport;
                employeeDetails.appendChild(employeePassportP);

                const employeeCountryP = document.createElement("p");
                employeeCountryP.innerText = employee.country;
                employeeDetails.appendChild(employeeCountryP);

                employeeLI.appendChild(employeeDetails);

                employeeLI.onclick = function() {
                    if (employeeDetails.style.display == 'block') {
                        employeeDetails.style.display = 'none';

                        employeeLI.style.backgroundColor = 'white';
                        employeeLI.style.color = 'black';

                        deleteEmployeeBtn.style.backgroundColor = 'maroon';
                        deleteEmployeeBtn.style.color = 'white';

                    } else {
                        employeeDetails.style.display = 'block';
                        employeeLI.style.backgroundColor = 'maroon';
                        employeeLI.style.color = 'white';

                        deleteEmployeeBtn.style.backgroundColor = 'white';
                        deleteEmployeeBtn.style.color = 'maroon';
                    }
                }
                employeesUL.appendChild(employeeLI);
            });
        }
    },
}).mount('#app')