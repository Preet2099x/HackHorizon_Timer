import React from 'react';
import Header from '@/components/Header';

const aboutSections = [
  {
    title: "Arka Jain University",
    content:
      "ARKA JAIN University, established in 2017 by the Jharkhand State Legislature, is the first state private university in the Kolhan region—covering East Singhbhum, West Singhbhum, and Seraikela-Kharsawan—and is recognized by the UGC. The university is also the first private institution across Bihar, Jharkhand, and West Bengal to receive an 'A' Grade from NAAC in its first accreditation cycle. AJU operates under the prestigious JAIN Group, Bengaluru, which oversees more than 77 educational institutions and is mentored by JAIN (Deemed-to-be University), a NAAC A++ and NIRF Top-100 ranked higher education institution. With affiliations from various statutory bodies like AICTE, BCI, PCI, OCI, INC, JNRC, AIU, and ASCO, and an ISO certification for educational organization management systems, the university adheres to nationally benchmarked academic and administrative quality. It has been ranked 52nd among India’s Best Private Universities by India Today-MDRA 2024, and 80th among Top Private B-Schools by Outlook iCare 2025. The BBA, B.Com (Hons), and BCA programs have received rankings of 96th, 93rd, and 95th, respectively, confirming AJU’s academic credibility."
  },
  {
    title: "School of Engineering & IT",
    content:
      "The School of Engineering & IT at ARKA JAIN University is a thriving hub for technological innovation and academic excellence. Located in the industrial city of Jamshedpur, it equips students with cutting-edge knowledge in computer science, information technology, electronics, and emerging fields such as artificial intelligence, machine learning, cloud computing, and data science. With a focus on experiential learning, the school emphasizes hands-on lab sessions, collaborative group projects, capstone innovations, and participation in national and international competitions. The curriculum is designed to align with industry demands while also fostering critical thinking, problem-solving, and creativity. Faculty members act not just as teachers, but as mentors who actively engage students in research, community tech events, and interdisciplinary learning. Through technical clubs, coding contests, and project showcases, the School of Engineering & IT nurtures a community of creators, developers, and leaders ready to contribute meaningfully to society and technology."
  },
  {
    title: "GDG On Campus AJU",
    content:
      "GDG On Campus AJU is a dynamic student-led developer community aligned with Google Developer Groups’ mission of spreading technical knowledge and encouraging innovation. It serves as a launchpad for students to explore real-world technologies including Android, Firebase, TensorFlow, Flutter, and more providing them with hands-on learning experiences through workshops, speaker sessions, and collaborative project-building. As part of a broader network that includes NIT Jamshedpur, IIIT Ranchi, and SBU, this community bridges the gap between academic theory and practical industry knowledge. GDG On Campus fosters a growth-oriented environment where members, regardless of experience level, are encouraged to take initiative, share ideas, and collaborate with others. It also serves as a gateway to international opportunities through programs like Google Summer of Code, Solution Challenge, and Google Developer Experts. The chapter empowers students to become not just job-seekers, but innovators, open-source contributors, and future leaders in the tech ecosystem."
  }
];

const AboutSection = ({ title, content, showDivider }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-hackathon-purple">{title}</h2>
    <p className="leading-loose text-gray-100 text-justify w-full">
      {content}
    </p>
    {showDivider && <div className="h-px w-full bg-hackathon-purple/20 mt-6"></div>}
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-hackathon-dark text-white flex flex-col">
      <Header />

      <main className="flex-grow py-10">
        <div className="w-full max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-hackathon-purple to-hackathon-blue bg-clip-text text-transparent">
            About
          </h1>

          <div className="space-y-12">
            {aboutSections.map((section, index) => (
              <AboutSection
                key={index}
                title={section.title}
                content={section.content}
                showDivider={index < aboutSections.length - 1}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm">
        <p>© HackHorizon 2K25 | GDG On Campus Arka Jain University</p>
      </footer>
    </div>
  );
};

export default AboutPage;
