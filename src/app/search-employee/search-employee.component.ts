import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent {

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

}
