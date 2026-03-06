# AI Resume Builder 

An AI-powered Resume Builder that generates tailored cover letters, optimized resume content, keyword analysis, and ATS score estimation based on a job description.
This project helps job seekers improve their resumes and increase their chances of passing Applicant Tracking Systems (ATS).
## Features 

- Generate personalized cover letters for any company.

- Get optimized resume content based on job descriptions.

- Perform keyword match analysis between resume and job description.

- Estimate ATS score (0–100) with suggestions for improvement.

- Clean and structured AI-generated output sections.

- User-friendly React interface.
## Tech Stack 

- Frontend: React.js

- Styling: Bootstrap / CSS

- AI API: Google Gemini API

- State Management: React Hooks
  
## Installation ⚙️
1️⃣ Clone the repository
```
git clone https://github.com/your-username/ai-resume-builder.git
```

2️⃣ Navigate to project folder
```
cd ai-resume-builder
```
3️⃣ Install dependencies
```
npm install
```
4️⃣ Run the application
```
npm run dev
```

## API Setup 

This project uses the Google Gemini API.

1.Go to Google AI Studio

2.Generate your API Key

3.Replace the API key in your code:

```
X-goog-api-key: "YOUR_API_KEY"
```

⚠️ Important: Do not expose your API key in public repositories.

# How It Works ⚡
## 1.User enters:

  - Company Name

  - Experience Level

  - Job Description

  - Current Resume

  - Preferred Cover Letter Tone

## 2. The application sends the data to the Gemini AI API.

## 3. AI generates structured results including:

  - Tailored Cover Letter

  - Updated Resume Content

  - Keyword Match Analysis

  - ATS Score Estimate

## 4.Results are displayed in structured sections in the UI.

## Future Improvements 🚀

- Resume PDF upload and parsing

- Download resume as PDF

- Real-time ATS scoring model

- Job recommendation system

- User authentication and dashboard
