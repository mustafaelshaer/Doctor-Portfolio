import { Component } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ViewChild } from '@angular/core';
import {inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddEditExperienceComponent } from './add-edit-experience/add-edit-experience.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  displayedColumns: string[] = ['position', 'header', 'description', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // Alerrrttttttttttttttttttt
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(AddEditExperienceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
export interface PeriodicElement {
  position: number;
  header: string;
  description: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, header: 'Experience and Expertise', description: 'Over 10 years of hands-on experience in providing expert care, diagnosing and treating a wide range of medical conditions in various specialties.' },
  { position: 2, header: 'Compassionate Patient Care', description: '8 years of providing empathetic, personalized care to patients, ensuring their physical and emotional needs are met, fostering trust and comfort in the healthcare process.' },
  { position: 3, header: 'Cutting-Edge Treatments', description: '5 years of implementing advanced treatment protocols using the latest medical technology and innovative techniques, providing patients with the most effective care options available.' },
  { position: 4, header: 'Research and Innovation', description: '12 years of contributing to groundbreaking research, developing new therapies, and improving patient outcomes through continuous medical innovation and clinical trials.' },
  { position: 5, header: 'Community Engagement', description: '6 years of active involvement in community health initiatives, providing medical education, and organizing outreach programs to promote public health and wellness.' },
  { position: 6, header: 'Community Engagement', description: '6 years of active involvement in community health initiatives, providing medical education, and organizing outreach programs to promote public health and wellness.' },
  { position: 7, header: 'Community Engagement', description: '6 years of active involvement in community health initiatives, providing medical education, and organizing outreach programs to promote public health and wellness.' },
];
