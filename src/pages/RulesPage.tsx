
import React from 'react';
import Header from '@/components/Header';

const RulesPage = () => {
  const rules = [
    "Each team must create a new GitHub repository at the start of the hackathon. Pre-existing or forked repositories are not allowed.",
    "Only one repository per team is permitted. All code, documentation, and assets must be maintained in that single repository.",
    "The repository must be public for the entire duration of the hackathon to allow tracking and evaluation.",
    "The repository link must be submitted via the official Google Form shared by the organizers. This is mandatory for your project to be considered.",
    "Teams should clearly document their project in the repository, including a README with the project name, description, tech stack, setup instructions, and team member names.",
    "Teams are expected to regularly commit code to their GitHub repository during the event. Repositories with minimal activity or a single final commit may be flagged for review.",
    "All work must be done during the hackathon. Pre-built code or projects are not allowed, using open-source libraries/tools is permitted.",
    "All participants must wear their hackathon ID cards at all times while inside the venue for security and identification.",
    "Participants are not allowed to leave the campus premises during the 24-hour hackathon. Exceptions will be made only in case of emergencies and must be approved by the organizing team.",
    "Any act of indiscipline—including but not limited to abusive language, disrespect towards mentors, judges, volunteers, or fellow participants—will lead to disqualification.",
    "While collaboration is encouraged, maintain a reasonable noise level, especially during night hours, to ensure a productive and comfortable environment for everyone.",
    "There will be two mandatory progress checks during the event, where judges will evaluate each team's progress. Judges may also offer constructive suggestions and feedback to help teams improve and stay on track.",
    "Teams must be present and prepared for both mandatory progress checks. Missing these may negatively impact how your project is evaluated in the final judgment.",
    "The last commit pushed to the main branch before the 24-hour deadline will be treated as the final submission. Any commits made after the deadline will not be considered during judging.",
    "All projects must be submitted before the end of the 24-hour mark. Late submissions will not be accepted under any circumstances.",
    "Meals and refreshments will be provided at designated times. Outside food is allowed but must not cause litter or disturbance in the working areas."
  ];

  return (
    <div className="min-h-screen bg-hackathon-dark text-white">
      <Header />
      
      <main className="py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-hackathon-purple to-hackathon-blue bg-clip-text text-transparent">
            Rules
          </h1>
          
          <div className="space-y-6">
            <ol className="list-decimal pl-5 space-y-6">
              {rules.map((rule, index) => (
                <li key={index} className="text-gray-100 pl-2">
                  <p className="leading-relaxed">{rule}</p>
                  {index < rules.length - 1 && <div className="h-px w-full bg-hackathon-purple/20 mt-6"></div>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      
      <footer className="text-center py-6 text-gray-400 text-sm">
      <p>©  HackHorizon 2K25 | GDG On Campus Arka Jain University</p>      
      </footer>
    </div>
  );
};

export default RulesPage;