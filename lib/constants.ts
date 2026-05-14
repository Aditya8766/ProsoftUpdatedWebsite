export const COMPANY_INFO = {
  name: 'ProSoft Institute',
  tagline: 'Practical IT Training & Placement Focused Learning',
  description: 'Job-oriented IT training and placement institute for computer application and graduation students. Live training, real projects, internships and placement preparation.',
  location: 'Bibewadi, Pune',
  coordinates: { lat: 18.4802303, lng: 73.8734808 },
  phone: '+91 8766971902', // Update with actual number
  email: 'contact@prosoft.edu',
  whatsapp: 'https://wa.me/918766971902', // Update with actual number
  hours: 'Mon–Sat • 9AM – 8PM',
  website: 'https://prosoft.edu'
};

export const VISUAL_ASSETS = {
  hero: {
    src: 'https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Software trainees collaborating on code with a mentor in a modern computer lab',
    credit: 'Photo by Mikhail Nilov on Pexels',
    source: 'https://www.pexels.com/photo/men-working-on-a-computer-7988742/',
  },
  about: {
    src: 'https://images.pexels.com/photos/12899167/pexels-photo-12899167.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Mentor guiding students during a collaborative software development session',
    credit: 'Photo by Mizuno K on Pexels',
    source: 'https://www.pexels.com/photo/woman-and-man-working-in-open-space-office-12899167/',
  },
  courses: {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=80',
    alt: 'Modern online software learning workspace with code and course materials',
    credit: 'Photo from Unsplash',
    source: 'https://unsplash.com/',
  },
  internship: {
    src: 'https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1500',
    alt: 'Developer team working together on real software projects in a modern office',
    credit: 'Photo by cottonbro studio on Pexels',
    source: 'https://www.pexels.com/photo/men-sitting-at-the-desks-in-an-office-and-using-computers-6804068/',
  },
  placement: {
    src: 'https://images.pexels.com/photos/5439428/pexels-photo-5439428.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Successful job interview handshake representing placement preparation and hiring success',
    credit: 'Photo by Tima Miroshnichenko on Pexels',
    source: 'https://www.pexels.com/photo/men-doing-handshake-5439428/',
  },
  testimonials: {
    src: 'https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Students collaborating in a positive software learning environment',
    credit: 'Photo by cottonbro studio on Pexels',
    source: 'https://www.pexels.com/photo/people-working-together-6804071/',
  },
  cta: {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=80',
    alt: 'Premium modern workspace for focused coding and career planning',
    credit: 'Photo from Unsplash',
    source: 'https://unsplash.com/',
  },
  illustration: {
    src: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg',
    alt: 'Programming concept illustration showing structured software learning',
    credit: 'Illustration by storyset on Freepik',
    source: 'https://www.freepik.com/free-vector/programming-concept-illustration_236235597.htm',
  },
};

export const COURSES = [
  {
    id: 1,
    title: 'Full-Stack Development',
    description: 'Master JavaScript, React, Node.js, and MongoDB with real-world project experience',
    icon: '💻',
    topics: ['JavaScript ES6+', 'React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
    duration: '3-4 months',
    level: 'Beginner to Advanced',
    highlights: ['Live mentor-led sessions', 'Real projects', 'Job placement support']
  },
  {
    id: 2,
    title: 'Python Programming',
    description: 'From fundamentals to advanced Python development with hands-on projects',
    icon: '🐍',
    topics: ['Python Basics', 'Data Structures', 'OOP', 'Web Development', 'Libraries', 'Projects'],
    duration: '2-3 months',
    level: 'Beginner to Intermediate',
    highlights: ['Live coding sessions', 'Industry projects', 'Certification']
  },
  {
    id: 3,
    title: 'Frontend Development',
    description: 'Professional web UI development with HTML, CSS, React, and modern frameworks',
    icon: '🎨',
    topics: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'UI/UX Basics'],
    duration: '2-3 months',
    level: 'Beginner to Intermediate',
    highlights: ['Live projects', 'Portfolio building', 'Interview prep']
  },
  {
    id: 4,
    title: 'C & C++ Programming',
    description: 'Master core programming concepts with C and C++ for competitive coding',
    icon: '⚙️',
    topics: ['C Basics', 'Pointers', 'Data Structures', 'OOP', 'Competitive Coding'],
    duration: '2-3 months',
    level: 'Beginner to Advanced',
    highlights: ['Algorithm training', 'Competitive coding prep', 'Subject coaching']
  },
  {
    id: 5,
    title: 'Internship Programs',
    description: 'Real-world experience with industry mentors and certificate on completion',
    icon: '🏢',
    topics: ['Project Assignment', 'Mentor Guidance', 'Code Review', 'Portfolio Building'],
    duration: '4-8 weeks',
    level: 'All Levels',
    highlights: ['Industry mentor', 'Certificate', 'Portfolio project']
  },
  {
    id: 6,
    title: 'Placement Preparation',
    description: 'Interview prep, DSA, aptitude, and personality development for dream placements',
    icon: '🎯',
    topics: ['DSA', 'Aptitude', 'Interview Q&A', 'Resume Building', 'Mock Interviews'],
    duration: '6-8 weeks',
    level: 'Intermediate to Advanced',
    highlights: ['Mock interviews', 'Resume review', 'Placement assistance']
  }
];

export const FEATURES = [
  {
    title: 'Live Mentor-Led Sessions',
    description: 'Real-time interactive coding sessions with experienced industry mentors',
    icon: '👨‍🏫',
    details: ['1-on-1 doubt clearing', 'Live coding demonstrations', 'Flexible scheduling']
  },
  {
    title: 'Project-Based Training',
    description: 'Learn by building real-world projects that match industry standards',
    icon: '🚀',
    details: ['Real projects', 'Code reviews', 'Portfolio building']
  },
  {
    title: 'Internship Guidance',
    description: 'Complete support from internship search to completion with certificate',
    icon: '📋',
    details: ['Internship placements', 'Certificate programs', 'Mentor support']
  },
  {
    title: 'Placement Preparation',
    description: 'Comprehensive interview and aptitude coaching with 95%+ success rate',
    icon: '💼',
    details: ['Interview preparation', 'DSA training', 'Mock interviews']
  },
  {
    title: 'Beginner to Advanced',
    description: 'Structured learning paths for all skill levels from scratch to expert',
    icon: '📈',
    details: ['Beginner friendly', 'Progressive difficulty', 'Advanced specializations']
  },
  {
    title: 'Computer Subject Coaching',
    description: 'University curriculum support for Computer Science students',
    icon: '🎓',
    details: ['Exam preparation', 'Subject mastery', 'Concept clarity']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Raj Kumar',
    role: 'Software Developer at Tech Corp',
    image: '👨‍💼',
    quote: 'ProSoft\'s training transformed my career. The live sessions and real projects were exactly what I needed to land my dream job.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Frontend Developer at StartupXYZ',
    image: '👩‍💻',
    quote: 'Best training institute I\'ve been to. The mentors are responsive, and the placement support was outstanding.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amitabh Patel',
    role: 'Full Stack Developer at MNC',
    image: '👨‍💻',
    quote: 'From zero to job-ready in 4 months! ProSoft\'s structured approach and hands-on training is unbeatable.',
    rating: 5
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Python Developer at Analytics Firm',
    image: '👩‍🔬',
    quote: 'The project-based learning approach at ProSoft is fantastic. I have real projects in my portfolio now.',
    rating: 5
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Intern turned Employee at Tech Company',
    image: '👨‍🎓',
    quote: 'Internship guidance here is superb. They got me a placement before my internship even ended!',
    rating: 5
  }
];

export const FAQS = [
  {
    id: 1,
    question: 'Who can join ProSoft courses?',
    answer: 'We welcome computer science, BCA, and IT students at all levels - from complete beginners to advanced learners. Professionals looking for career transitions are also welcome.'
  },
  {
    id: 2,
    question: 'What is the duration of courses?',
    answer: 'Course duration varies from 2-4 months depending on the program. Internships are 4-8 weeks and placement prep is 6-8 weeks. All courses are flexible with multiple batch timings.'
  },
  {
    id: 3,
    question: 'Do you provide internship opportunities?',
    answer: 'Yes! We have dedicated internship programs with industry mentors. Students get real project experience, certificate, and direct placement assistance after completion.'
  },
  {
    id: 4,
    question: 'What is the placement success rate?',
    answer: 'We have 95%+ placement success rate with average salary 4-6 LPA for fresh graduates. We provide interview prep, resume building, and direct company connections.'
  },
  {
    id: 5,
    question: 'Are the sessions live or pre-recorded?',
    answer: 'All our sessions are LIVE with mentor interaction. We believe in real-time learning. Recorded sessions are provided for reference only, not as primary learning material.'
  },
  {
    id: 6,
    question: 'What is the cost of courses?',
    answer: 'Course fees vary from Rs. 8,000 to Rs. 25,000 depending on duration and specialization. We offer payment plans and scholarships for deserving students. Contact us for details.'
  },
  {
    id: 7,
    question: 'Do you provide certificates?',
    answer: 'Yes, upon successful completion of course and project submission, you get ProSoft Institute Certificate. Internship participants also get internship completion certificate.'
  },
  {
    id: 8,
    question: 'Is there doubt clearing support?',
    answer: 'Absolutely! We offer 1-on-1 doubt clearing sessions, WhatsApp support group, and scheduled mentor availability for all students throughout and after course.'
  }
];

export const STATS = [
  { label: 'Students Trained', value: '500+' },
  { label: 'Placements', value: '95%' },
  { label: 'Average Package', value: '4-6 LPA' },
  { label: 'Years Experience', value: '5+' }
];

export const CONTACT_OPTIONS = [
  { label: 'Call Us', value: COMPANY_INFO.phone, icon: '📞' },
  { label: 'Email Us', value: COMPANY_INFO.email, icon: '✉️' },
  { label: 'WhatsApp Chat', value: 'Chat with us instantly', icon: '💬' }
];

export const TECHNOLOGIES = [
  'JavaScript', 'React', 'Node.js', 'MongoDB', 'Python', 'C', 'C++', 'HTML', 'CSS', 'Express'
];
