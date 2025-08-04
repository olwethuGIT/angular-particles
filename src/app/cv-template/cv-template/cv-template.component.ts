import { Component } from '@angular/core';
import { Education } from 'src/app/shared/models/education';
import { SkillsExpertise } from 'src/app/shared/models/skills-expertise';
import { WorkExperience } from 'src/app/shared/models/work-experience';

@Component({
  selector: 'app-cv-template',
  templateUrl: './cv-template.component.html',
  styleUrls: ['./cv-template.component.css'],
})
export class CvTemplateComponent {
  skillsExpertise: SkillsExpertise[] = [
    {
      title: 'Software Development',
      focus: 'Full Stack | Scalable Systems',
      description:
        'Proficient in OOP and functional programming using C#, JavaScript, TypeScript, and Dart.Experienced in designing and developing RESTful APIs and scalable backend systems with .NET, NestJS, and Laravel.',
    },
    {
      title: 'Frontend Development',
      focus: 'Angular, React, Next.js',
      description:
        'Over 5 years of experience building responsive, accessible, and high-performance web interfaces. Passionate about clean UI/UX, reusable components, and state management in modern JS frameworks.',
    },
    {
      title: 'Mobile & Cross-Platform Development',
      focus: 'Flutter, React Native',
      description:
        'Skilled in building cross-platform mobile apps for Android and iOS. Experience in hybrid mobile app development using Flutter and Expo (React Native), delivering consistent UI and performance across devices.',
    },
  ];

  workExperiences: WorkExperience[] = [
    {
      company: 'ABSA Group',
      position: 'Specialist Product Engineer',
      duration: '12/2023 - Present',
      address: 'Randburg, Gauteng',
      skills: [
        'JavaScript',
        'TypeScript',
        'Angular',
        'NestJS',
        'HTML',
        'CSS',
        'Node.js',
        'MongoDB',
      ],
    },
    {
      company: 'Reverside',
      position: 'Specialist Product Engineer - Consultant',
      duration: '06/2023 - 12/2023',
      address: 'Sandton, Gauteng',
      skills: [
        'JavaScript',
        'TypeScript',
        'Angular',
        'NestJS',
        'HTML',
        'CSS',
        'Node.js',
        'MongoDB',
      ],
    },
    {
      company: 'The App Lab',
      position: 'Full Stack Software Developer',
      duration: '10/2021 - 05/2023',
      address: 'Bryanston, Gauteng',
      skills: [
        'JavaScript',
        'TypeScript',
        'Angular',
        'NestJS',
        'Next.js',
        'Flutter',
        'React Native',
        'React',
        'Drupal',
        'Python',
        'Laravel',
        'Docker',
        'HTML',
        'CSS',
      ],
    },
    {
      company: 'S4 Integration',
      position: 'Software Developer',
      duration: '02/2020 - 09/2021',
      address: 'Fairview, Gqeberha',
      skills: [
        'PHP',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Flutter',
        'HTML',
        'CSS',
        'jQuery',
        'Dev Extreme',
      ],
    },
  ];

  educationList: Education[] = [
    {
      duration: '2018 - 2018',
      institution: 'Nelson Mandela University',
      degree: "Bachelor's Degree in Information Technology",
      stream: 'Software Development',
    },
    {
      duration: '2016 - 2017',
      institution: 'Nelson Mandela University',
      degree: 'Diploma in Information Technology',
      stream: 'Software Development',
    },
    {
      duration: '2015 - 2015',
      institution: 'Nelson Mandela University',
      degree: 'Higher Certificate in Information Technology',
      stream: 'Software Development',
    }
  ];
}
