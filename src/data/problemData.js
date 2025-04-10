export const problemData = [
  {
    id: 1,
    category: "AI/ML",
    title: "Smart Plant Identifier & Reforestation Mapper",
    context: "Climate change and biodiversity loss demand scalable tools for identifying and preserving plant species. Current methods are manual and disconnected from reforestation planning.",
    challenge: "Build an AI-powered platform that identifies trees from real-time camera input (plant vs. non-plant, then species), logs species with geolocation to create dynamic biodiversity maps, suggests climate-appropriate trees for reforestation using local environmental data, and optionally supports drone/satellite image input and community-based validation.",
    goal: "Empower citizens and organizations to contribute to ecosystem restoration through intelligent plant classification and data-driven reforestation planning."
  },
  {
    id: 2,
    category: "AI/ML",
    title: "Smart Virtual Tourist Companion with AR & Real-Time Insights",
    context: "Tourists often lack engaging, scalable, and multilingual guidance at destinations. Traditional signage or brochures fail to deliver rich context or real-time information.",
    challenge: "Build a mobile app that uses AR, AI, and geolocation to enhance tourism. Users can scan landmarks for live info, historical context, and timings via AR overlays. Include multilingual text-to-speech, a smart itinerary planner based on preferences, and a virtual guide (chatbot or voice). Let users contribute tips, trivia, and reviews to enrich the experience.",
    goal: "To create an interactive, personalized travel companion that makes exploration smarter, culturally immersive, and community-driven."
  },
  {
    id: 3,
    category: "AI/ML",
    title: "Multi Modal Deepfake Detection Assistant",
    context: "Deepfakes, which are AI-generated videos, images, and text, are increasingly being used to spread misinformation, manipulate public opinion, and harm reputations. As synthetic media becomes more realistic, detecting such content is becoming significantly more difficult and urgent.",
    challenge: "Build a web-based AI tool that can detect deepfakes across multiple formats including video, image, and text. The system should use visual forensics such as facial artifacts and frame inconsistencies, analyze metadata anomalies, and apply natural language processing to flag suspicious language patterns. The interface should allow users to upload content, receive a deepfake confidence score, and view visual or textual explanations for why content was flagged.",
    goal: "Equip individuals, journalists, and digital platforms with an accessible and intelligent solution for verifying the authenticity of media, thereby helping combat misinformation and digital fraud."
  },
  {
    id: 4,
    category: "Web3 and Digital Governance",
    title: "Blockchain-Based Remote Voting with Verification & Auditability",
    context: "Voter apathy, low turnout, and distrust in traditional voting mechanisms threaten democratic participation. Remote voting solutions often trade off between security, transparency, and user trust.",
    challenge: "Design a blockchain-based e-voting system that enables remote, anonymous, and tamper-proof voting. The system should include multi-factor authentication (e.g., biometrics + government ID), support vote encryption and post-vote receipt verification, provide a public, auditable ledger of anonymized votes, and prevent double voting, identity spoofing, and vote tampering. Bonus: Add real-time turnout analytics for officials and mobile-first design for accessibility.",
    goal: "To build a secure, verifiable, and inclusive digital voting platform that increases voter trust and participation, especially for remote and marginalized populations."
  },
  {
    id: 5,
    category: "Web3 and Digital Governance",
    title: "Virtual Police Station for FIR Filing and Case Tracking",
    context: "Filing FIRs in India is often slow and inaccessible, discouraging timely reporting—especially for victims in remote or vulnerable situations.",
    challenge: "Design a secure web platform that enables users to file FIRs online using Aadhaar-based OTP and digital signatures. Key features include anonymous reporting (with optional later identity verification), digital evidence upload with secure metadata handling, FIR preview before submission, case tracking dashboard with real-time updates, integration with CCTNS for SHO routing and approval, and appointment booking for in-person police verification.",
    goal: "To make the FIR process transparent, accessible, and secure—empowering citizens with a digital-first approach to justice."
  },
  {
    id: 6,
    category: "Web3 and Digital Governance",
    title: "Digital Civic Platform for Policy Participation and Public Spending Transparency",
    context: "Large-scale public protests around policies like the Farm Laws, the CAA, and the Forest Conservation Amendments reveal a persistent problem—citizens often remain unheard during the policymaking phase. At the same time, the lack of visibility into how government funds are allocated and spent fuels widespread distrust in public institutions and decision-making processes..",
    challenge: "Build a digital civic platform where citizens can access simplified summaries of proposed laws, give feedback or vote on policies, and track government fund allocation with visual audit trails. Include features like identity-linked participation, reputation scores, and incentives to ensure meaningful and verified engagement..",
    goal: "The objective is to bridge the gap between citizens and the government by empowering people to contribute to the democratic process with clarity, and by making public spending more visible and understandable. This platform would foster a culture of accountability, inclusivity, and trust in digital governance."
  },
  {
    id: 7,
    category: "Cybersecurity and Digital Identity",
    title: "Security Testing Tool for Early-Stage Web Projects",
    context: "Many student developers and small teams deploy websites without assessing security, leaving them vulnerable to threats like XSS, SQL injection, CSRF, and insecure headers. Existing security tools are often too complex or expensive for early-stage projects.",
    challenge: "Build a web platform where users can enter a URL (e.g., a staging site) and automatically run security tests. The system should simulate common attacks (SQL injection, XSS, CSRF), check for insecure headers, SSL misconfigurations, and directory traversal issues. It should generate a clear, color-coded report highlighting risks, vulnerability types, remediation steps, and relevant OWASP Top 10 resources.",
    goal: "Empower early-stage developers with an accessible tool to identify and address web security flaws before going live."
  },
  {
    id: 8,
    category: "Cybersecurity and Digital Identity",
    title: "Unified Digital Identity for Cross-Platform Authentication",
    context: "Users are burdened with managing multiple credentials across different platforms—leading to poor UX, higher chances of breaches, and password fatigue. Centralized identity systems also risk large-scale data leaks.",
    challenge: "Design a secure, decentralized digital identity system that lets users authenticate across government, financial, and educational platforms using a single identity. The system can leverage blockchain or zero-knowledge proofs (ZKPs) to ensure privacy, tamper resistance, and data ownership.",
    goal: "To simplify authentication, reduce identity fraud, and give users control over their personal data through a portable, privacy-preserving digital ID."
  },
  {
    id: 9,
    category: "Cybersecurity and Digital Identity",
    title: "AI-Powered Cyber Defense for Essential Public Systems",
    context: "Essential services like electricity, water supply, healthcare, and communication networks are increasingly targeted by cyberattacks. These services rely on interconnected digital systems that often lack intelligent, real-time defense mechanisms.",
    challenge: "Build a cybersecurity platform that uses AI/ML to analyze real-time traffic, system logs, and user behavior across large-scale networks. The system should detect anomalies, zero-day attacks, and insider threats; automatically trigger tiered responses (e.g., quarantining nodes, alerting admins, initiating backups); continuously learn from new threats to improve detection accuracy; and offer a centralized, intuitive dashboard for live monitoring, risk analysis, and historical trends.",
    goal: "To protect essential public digital systems from disruption by enabling proactive, intelligent, and automated cyber defense."
  },
  {
    id: 10,
    category: "EdTech and Smart Campus",
    title: "Collaborative Skill-Based EdTech Network",
    context: "Students, professionals, and mentors often struggle to find the right collaborators for learning, building, or mentoring. Skills are scattered across platforms, and there's no unified space to form meaningful, goal-oriented teams in the EdTech space.",
    challenge: "Design a platform where users can create skill-based profiles with interests, experiences, and past projects; search and filter other users based on project needs, technologies, or goals; form or join project teams, seek collaborators, or find mentors; enable mentors to browse potential mentees and offer guidance; and optionally integrate features like collaboration boards, feedback systems, and project showcases.",
    goal: "To foster a dynamic community that bridges the gap between learners, builders, and mentors by enabling skill-based discovery, collaboration, and growth in one unified platform."
  },
  {
    id: 11,
    category: "EdTech and Smart Campus",
    title: "Smart Academic ERP for Seamless Campus Management",
    context: "Educational institutions often deal with fragmented systems for attendance, academics, communication, and admin tasks—resulting in inefficiency, fraud, and disengaged students.",
    challenge: "Develop a mobile-first Academic ERP that integrates key campus functions into one smart system. Features should include tamper-proof face recognition–based attendance, grade tracking, assignment submissions & exam registration, real-time alerts for schedules, results, deadlines, and changes, leave requests, fee payments, fine tracking, and library management, and personalized dashboards for students, faculty, and admins.",
    goal: "To streamline academic and administrative processes through automation and real-time updates—enhancing transparency, efficiency, and student engagement across the campus."
  },
  {
    id: 12,
    category: "EdTech and Smart Campus",
    title: "Smart Campus App for Non-Academic Services",
    context: "While academic needs are met through ERP systems, everyday campus services—like food, transport, and maintenance—are often manual, inefficient, or scattered.",
    challenge: "Build a unified Smart Campus App to streamline non-academic services such as canteen pre-ordering with real-time status, issue reporting for cleanliness & maintenance, lost & found system with image/location logs, bus tracking with live location & ETA, parking availability inside campus, event discovery & notifications, and interactive campus map for navigation.",
    goal: "Improve campus life by offering quick access to essential daily services in a single, responsive platform."
  },
  {
    id: 13,
    category: "Public Safety and Welfare",
    title: "Smart & Connected Rural Healthcare Platform",
    context: "A majority of India's rural and semi-urban population lacks access to quality healthcare. Issues like fragmented records, doctor overload, poor follow-up, and limited emergency response persist due to weak digital infrastructure.",
    challenge: "Build a web-based healthcare system that maintains digital health records, supports doctor dashboards and patient consultations (online/offline), handles emergencies and medicine tracking, and includes mental wellness tools and health education in local languages. Bonus: Integrate IoT devices, AI for disease risk, or govt APIs.",
    goal: "To create an inclusive healthcare platform that improves access, continuity, and quality of care for underserved communities."
  },
  {
    id: 14,
    category: "Public Safety and Welfare",
    title: "AI-Powered Emergency Response & Smart Safety Assistant",
    context: "In emergencies like assaults, accidents, or health issues, delays in seeking help can be dangerous. Most people lack discreet, intelligent tools for fast response or safe navigation.",
    challenge: "Build a mobile app with silent SOS triggers (e.g., power button taps, phone shakes) that instantly shares live location, timestamp, and optional media with trusted contacts or authorities. Use AI to assess threat levels using context signals (movement, noise, heart rate, etc.). Include smart navigation for safer routes based on lighting, crowds, traffic, and incident reports. Support offline fallback (e.g., SMS alerts), route deviation warnings, and strong privacy controls.",
    goal: "Deliver a reliable personal safety tool that empowers users with fast alerts, safer routing, and proactive risk detection."
  },
  {
    id: 15,
    category: "Public Safety and Welfare",
    title: "Unified Access to Government Welfare for All",
    context: "Millions of citizens—especially students, low-income families, and marginalized communities—miss out on government welfare benefits such as scholarships, subsidies, and health schemes due to lack of awareness, fragmented information, and complex application processes.",
    challenge: "Build a mobile/web platform that simplifies access to welfare schemes by centralizing information across domains like education, healthcare, housing, and food security. The platform should filter relevant schemes based on user profile (age, income, occupation, location), include an eligibility checker with simple inputs, send smart alerts for deadlines, document requirements, and renewals, offer multilingual support to reach diverse users, provide a secure document vault for reusability and autofill, and feature a chatbot to answer scheme-related questions.",
    goal: "To empower citizens with easy access to the welfare they are entitled to by simplifying discovery, verification, and application—reducing exclusion and maximizing social impact."
  },
  {
    id: 16,
    category: "FinTech and Smart Transactions",
    title: "Cross-Border Microtransaction System",
    context: "Cross-border microtransactions are slowed by regulatory bottlenecks, manual checks, and fragmented currency systems. Integrating crypto and fiat creates new opportunities — but also new compliance challenges.",
    challenge: "Build a real-time cross-border payment platform supporting both fiat and crypto. Integrate an AI engine to automate KYC/AML compliance checks and flag suspicious patterns. Include smart multi-currency conversion and blockchain + banking system integration to ensure speed, transparency, and security.",
    goal: "Enable fast, compliant, and scalable global microtransactions with minimal manual oversight, enhancing financial access and trust."
  },
  {
    id: 17,
    category: "FinTech and Smart Transactions",
    title: "Collaborative Expense Tracker with Smart Financial Insights",
    context: "Managing both personal and group finances can be chaotic, especially for students, young professionals, or families. Existing tools often fall short in handling shared expenses, offering meaningful insights, or adapting to varied user goals and habits.",
    challenge: "Build an intelligent, collaborative expense tracking platform that lets users manage individual and shared budgets with multi-user access and role-based permissions. It should auto-categorize spending, generate dynamic visual insights, and include an AI assistant to answer financial queries, detect anomalies (e.g., sudden spikes), and suggest personalized cost-saving tips. Support recurring payments, group settlements, and integration with payment systems like UPI, cards, or banking APIs. Bonus: Use ML to forecast future expenses and nudge users toward healthier financial habits.",
    goal: "To enable smarter, shared financial planning through collaborative tools, intelligent automation, and proactive insights."
  },
  {
    id: 18,
    category: "FinTech and Smart Transactions",
    title: "Smart Transaction Hub for Small Businesses",
    context: "Local shops and service providers often deal with fragmented payments across UPI, QR codes, wallets, cash, and cards, making it hard to track income and expenses effectively. Manual bookkeeping, app switching, and low financial literacy further contribute to inefficiencies and errors in managing finances.",
    challenge: "Develop a mobile-first transaction management system tailored for small business owners that unifies all types of payments including UPI (via SMS or API), QR, cash, and bank transfers into a single dashboard. The app should support voice-based input in regional languages, manual categorization of transactions, AI-driven financial summaries, low-balance alerts, settle-up reminders, and GST-ready report generation. Optional features can include POS integration, WhatsApp chatbot for summaries, and smart QR codes for customer interactions.",
    goal: "Empower small businesses with a simple yet intelligent platform to track, analyze, and manage their finances. Help them boost clarity, compliance, and control without needing formal accounting expertise."
  }
];

export const categories = [
  "All",
  "AI/ML",
  "Web3 and Digital Governance",
  "Cybersecurity and Digital Identity",
  "EdTech and Smart Campus",
  "Public Safety and Welfare",
  "FinTech and Smart Transactions"
];