# Portfolio v3
---
## Goal
To rewrite my portfolio and give myself the opportunity to use new tools and give it a new look.

[The portfolio in question.](https://zalong.dev)

---
## Abstract

### <u>Backend</u>
The backend of the portfolio should be able to remain relatively unchanged, but ought to be reevaluated to determine if the extent of such measures if any.

### <u>Frontend</u>
The frontend must demonstrate a clean, new design and present more information than just a wall of projects. In addition to a redesign, it should also present an opportunity to use new tools such as Next.js, or Vue.js.

### <u>System Design</u>
I have hosted prior projects in the same way - I set up a linux server with PM2 and host remote. This project presents an opportunity to utilize modern AWS microservice hosting solutions.

---
## The Stack
**Backend:** Node, Next

**Database:** MongoDB

**Frontend:** React (Hooks), Redux, TailwindCSS

**Tools:** Webpack

**Testing:** Jest

## The System
TBD

---
## Layout
Concept 1

> For your portfolio webpage, it’s going to be structured into four major parts. The first section, is going to be an About You section. In 2–3 lines, you should describe yourself, your pursuits, and your endeavours. Following, a section on your Work Experience and Education. Again, a sentence per point. Clear, concise, and to the point. And finally, a tiled layout of your 3–4 projects to show prospective employers. These projects should collectively contain all of the technology spoken to above. Clicking on a project should take you to a blog page that summarises the Github Readme.md file that comprehensively details the inner workings and purpose of said project. It should also include a link to the Github code and a live hosted version of the project. At the bottom of your webpage, a link to your Github and LinkedIn page. Your page must be responsive above all else.[^1]

- About
- Work Experience / Education
- Projects, tiled

Concept 2

#### Any sections that would be good to have and notes:
- About
  - Picture
  - Skills
  - Greeting/Summary
  - Skill sets (eg. "Front End Developer")
- Projects
- Testimonials
- Contact
  - Call to action
- Social media links

##### Examples:
http://findmatthew.com/
https://mattfarley.ca/
https://www.dejan.works/
https://www.driesvanbroeck.be/

---
## Models

### <u>Idea 1</u>
Use a Sage/Section model to CRUD sections of the page and their order, and a Project model for projects. Setup a capped collection Settings model for information like the title or favicon.
- Settings
- Page
- Project

### <u>Idea 2</u>
Hardcode the pages and everything in order, use a Project model to CRUD projects.
- Project

### <u>Idea 3</u>
Something else?


---

[^1]: https://medium.com/@_Smoljames/the-self-taught-webdev-roadmap-d5a18a29967e
