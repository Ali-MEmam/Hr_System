import { Component, OnInit } from '@angular/core';
import { EducationService } from 'services/candidate/education.service';
import { ExperienceService } from 'services/candidate/experience.service';
import { PortfolioService } from 'services/candidate/portfolio.service';
import { SkillsService } from 'services/candidate/skills.service';

import { FormBuilder, FormGroup, FormControl , Validators, FormArray } from '@angular/forms';


import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.component.html',
  styleUrls: ['./view-resume.component.scss']
})
export class ViewResumeComponent implements OnInit {
  ngOnInit(): void {
  }

}
