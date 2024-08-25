import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent {
  employees = [
    {
      name: 'Arpitha A Gaekwad',
      role: 'Senior Frontend Developer',
      rating: 4.5,
      experience: '5.8 years',
      dateOfJoining: '2018',
      currentTeam: 'myISP, Bangalore',
      reportingManager: 'Sona.Job',
      phone: '9448179713',
      email: 'arpithagkwdgmail.com',
      starRatings: [1, 1, 1, 1, 0.5]
    },
    {
      name: 'John Doe',
      role: 'Backend Developer',
      rating: 4.2,
      experience: '4.2 years',
      dateOfJoining: '2019',
      currentTeam: 'TechTeam, New York',
      reportingManager: 'Jane Smith',
      phone: '9876543210',
      email: 'johndoe@example.com',
      starRatings: [1, 1, 1, 0.5, 0]
    },
    {
      name: 'Mary Jane',
      role: 'UI/UX Designer',
      rating: 4.8,
      experience: '6.1 years',
      dateOfJoining: '2016',
      currentTeam: 'DesignHub, London',
      reportingManager: 'Mark Brown',
      phone: '1234567890',
      email: 'maryjane@example.com',
      starRatings: [1, 1, 1, 1, 1]
    },
    {
      name: 'Peter Parker',
      role: 'Full Stack Developer',
      rating: 4.7,
      experience: '5.5 years',
      dateOfJoining: '2017',
      currentTeam: 'WebDev, San Francisco',
      reportingManager: 'Tony Stark',
      phone: '5551234567',
      email: 'peterparker@example.com',
      starRatings: [1, 1, 1, 1, 0.5]
    }
  ];

  newEmployee = {
    name: '',
    role: '',
    rating: 0,
    experience: '',
    dateOfJoining: '',
    currentTeam: '',
    reportingManager: '',
    phone: '',
    email: '',
    starRatings: []
  };

  isEditing = false;
  employeeIndexToEdit: number | null = null;

  onSubmit(form: any) {
    const ratingAsNumber = parseFloat(form.value.rating.toString());
    const updatedEmployee = {
      name: form.value.name,
      role: form.value.role,
      rating: ratingAsNumber,
      experience: form.value.experience,
      dateOfJoining: form.value.dateOfJoining,
      currentTeam: form.value.currentTeam,
      reportingManager: form.value.reportingManager,
      phone: form.value.phone,
      email: form.value.email,
      starRatings: this.convertRatingToStars(ratingAsNumber)
    };

    if (this.isEditing && this.employeeIndexToEdit !== null) {
      // Update existing employee
      this.employees[this.employeeIndexToEdit] = updatedEmployee;
    } else {
      // Add new employee
      this.employees.push(updatedEmployee);
    }

    // Reset form and state
    form.reset();
    this.resetEditingState();
  }

  convertRatingToStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 0.5 : 0;
    const starArray = Array(fullStars).fill(1).concat(halfStar ? [halfStar] : []);
    return starArray;
  }

  deleteEmployee(employeeToDelete: any): void {
    this.employees = this.employees.filter(employee => employee !== employeeToDelete);
  }

  editEmployee(employee: any): void {
    this.newEmployee = { ...employee };
    this.isEditing = true;
    this.employeeIndexToEdit = this.employees.indexOf(employee);
  }

  resetEditingState(): void {
    this.isEditing = false;
    this.employeeIndexToEdit = null;
    this.newEmployee = {
      name: '',
      role: '',
      rating: 0,
      experience: '',
      dateOfJoining: '',
      currentTeam: '',
      reportingManager: '',
      phone: '',
      email: '',
      starRatings: []
    };
  }
}
