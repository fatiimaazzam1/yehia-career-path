# Yehia's Career Path

**Assignment 1-Routing System**

**Student**: Fatima Azzam

## Project Description

Yehia's Career Path is a simple website built with Next.js 16 and TypeScript. It helps a graduate organize his career goals, prepare a job-search plan, explore opportunities, and track applications.

The project focuses on understanding the Next.js App Router, including static routes, dynamic routes, nested layouts, and navigation.

## Technologies Used

- Next.js 16
- React
- TypeScript
- CSS
- Git and GitHub

## How to Run the Project

1. Clone the repository from GitHub.
2. Open the project folder in VS Code.
3. Install the dependencies by running `npm install`.
4. Start the development server using `npm run dev`.
5. Open `http://localhost:3000` in your browser.

## Routes

| Route | Description |
|---|---|
| `/`   | Home page |
| `/plan`| Career plan |
| `/opportunities` | List of job opportunities |
| `/opportunities/[id]` | Dynamic opportunity details |
| `/dashboard` | Career dashboard overview |
| `/dashboard/applications` | List of job applications |

## Technical Explanations

### 1. Why did I use await when reading params?

In Next.js 16, the `params` property is a Promise. I use `await params` to get the resolved route parameters before accessing the ID. The page function is asynchronous because it needs to await that Promise.

### 2. Why is the route ID a string?

The ID comes from the URL, and Next.js provides dynamic path parameters as strings. For example, `/opportunities/2` gives the ID `"2"`. I also store opportunity IDs as strings so I can compare them directly when searching for the matching opportunity.

### 3. What belongs in the Dashboard Layout, and what belongs in each Dashboard page?

The Dashboard Layout contains the common interface shared between dashboard pages, such as the sidebar and navigation links to Overview and Applications. It uses `children` to display the active page.

Each Dashboard page contains its own content. The Overview page displays application statistics and progress information, while the Applications page displays the list of applications and their statuses.

This structure avoids duplicating navigation code and keeps the project organized.