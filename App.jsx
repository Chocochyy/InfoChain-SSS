import React, { useState, useEffect, useMemo } from 'react';


const Icon = ({ name, className = "w-5 h-5", strokeWidth = 2 }) => {
  const icons = {
    home: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75l9-7.5 9 7.5V20a1.5 1.5 0 01-1.5 1.5H15a1 1 0 01-1-1v-4a1 1 0 00-1-1h-2a1 1 0 00-1 1v4a1 1 0 01-1 1H4.5A1.5 1.5 0 013 20V9.75z" />
      </svg>
    ),
    search: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    calendar: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
    user: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    bell: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    filter: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
    shieldCheck: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    sparkles: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    chevronRight: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    ),
    clock: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    mapPin: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    academic: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-5.25 6.557c.563-.09 1.127-.17 1.693-.24" />
      </svg>
    ),
    info: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
      </svg>
    ),
    close: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    bookmark: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
      </svg>
    ),
    blocks: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
    copy: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    ),
    arrowRefresh: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    zap: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    wifi: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
    cloudRain: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    server: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.75 5.1a3 3 0 012.4-1.35h7.7a3 3 0 012.4 1.35l2.1 3.45a4.5 4.5 0 01.9 2.7m-16.5 0h16.5" />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth={strokeWidth} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    )
  };
  return icons[name] || icons.info;
};


const MOCK_ANNOUNCEMENTS = [
  {
    id: 'ann-1',
    title: 'Registration Period for Next Semester: SKS Enrollment Portal',
    category: 'Academic',
    priority: 'high',
    isFeatured: true,
    somebody: ['cs_student', 'med_student', 'business_student'],
    somewhere: ['all_campus', 'faculty_cs'],
    rightTime: ['registration', 'midterm_week'],
    summary: 'Priority course selection window opens for 3rd and 4th-year students. Check prerequisites before midnight.',
    fullContent: 'The Central Academic Office has officially opened course packet selection for the upcoming Spring 2027 semester. Students with cumulative GPA >= 3.50 can claim up to 24 SKS credits. Make sure your tuition validation has been approved by your academic advisor (DPA).',
    timestamp: '15 mins ago',
    date: 'Sept 24, 2026',
    deadline: 'Sept 28, 23:59 WIB',
    author: 'Office of Academic Affairs',
    icon: 'academic',
    blockchain: {
      txHash: '0x7e84a293f7710c8bc43d1a89f92147bb064210d1c7689104',
      blockHeight: 19482103,
      smartContract: '0xCampusCoreRegistry.eth',
      verifiedAt: '2026-09-22 07:45:12 UTC',
      validator: 'Node-04 (Academic Gateway)'
    },
    sssExplanation: 'Delivered because you are an Enrolled CS Student, located in Main Campus network, during the Semester Registration cycle.'
  },
  {
    id: 'ann-2',
    title: 'Core Network & SIAS Maintenance Window',
    category: 'Announcements',
    priority: 'high',
    isFeatured: false,
    somebody: ['cs_student', 'lecturer', 'med_student', 'staff'],
    somewhere: ['all_campus', 'faculty_cs', 'central_lib'],
    rightTime: ['maintenance_window', 'midterm_week', 'normal_class'],
    summary: 'Campus cloud servers and library Wi-Fi proxies will restart at 22:00 for security protocol upgrades.',
    fullContent: 'Network Infrastructure Division will execute vital firmware patching on core distribution routers. Online lab submissions, portal logins, and eduroam Wi-Fi will experience intermittent 5-minute outages between 22:00 and 02:00 WIB.',
    timestamp: '42 mins ago',
    date: 'Sept 22, 2026',
    author: 'Campus IT Infrastructure Hub',
    icon: 'server',
    blockchain: {
      txHash: '0x3a92f01cd991823ab4011ef920042bcaa891244300bb6119',
      blockHeight: 19482068,
      smartContract: '0xCampusInfraAlerts.eth',
      verifiedAt: '2026-09-22 07:18:00 UTC',
      validator: 'Node-01 (Root IT)'
    },
    sssExplanation: 'High urgency notification sent to everyone connected to Campus WiFi or active in CS Labs tonight.'
  },
  {
    id: 'ann-3',
    title: 'Industry Collaboration: Google & NVIDIA AI Hackathon 2026',
    category: 'Events',
    priority: 'medium',
    isFeatured: false,
    somebody: ['cs_student', 'lecturer'],
    somewhere: ['faculty_cs', 'student_center', 'all_campus'],
    rightTime: ['normal_class', 'midterm_week', 'registration'],
    summary: 'Registration open for the 48-hour Agentic AI challenge. $10,000 prize pool and direct interview pipelines.',
    fullContent: 'The Faculty of Computer Science in partnership with Google DeepMind and NVIDIA invites all undergraduates to participate in the Smart Campus Hackathon. Free cloud GPU compute vouchers will be distributed to teams of 3-4 members.',
    timestamp: '2 hours ago',
    date: 'Oct 12 - 14, 2026',
    author: 'ACM Student Chapter & Google Dev Club',
    icon: 'zap',
    blockchain: {
      txHash: '0x99241baec999011f074d618400bc194aef91280371a5c678',
      blockHeight: 19481944,
      smartContract: '0xEventsLedger.eth',
      verifiedAt: '2026-09-22 06:00:22 UTC',
      validator: 'Node-07 (Student Org)'
    },
    sssExplanation: 'Matched to your profile interests: CS Major, Artificial Intelligence, and Innovation Hackathons.'
  },
  {
    id: 'ann-4',
    title: 'Weather Warning: Heavy Rain & Flash Flooding Near Gate 3',
    category: 'Announcements',
    priority: 'medium',
    isFeatured: false,
    somebody: ['cs_student', 'lecturer', 'med_student', 'staff', 'visitor'],
    somewhere: ['all_campus', 'student_center'],
    rightTime: ['normal_class', 'midterm_week', 'maintenance_window'],
    summary: 'BMKG alerts flash rainstorm until 16:00. Campus shuttle rerouted via North Perimeter Boulevard.',
    fullContent: 'Due to severe downpours, pedestrian underpass at South Gate 3 is temporarily submerged. Students and faculty are advised to utilize the elevated bridge near the Central Library. Electric shuttle buses are operating on 10-minute intervals.',
    timestamp: '3 hours ago',
    date: 'Sept 22, 2026',
    author: 'Campus Safety & Logistics Office',
    icon: 'cloudRain',
    blockchain: {
      txHash: '0x12c49a03b5528fffa91024bc661904bbba918451167aa321',
      blockHeight: 19481810,
      smartContract: '0xSafetyBeacon.eth',
      verifiedAt: '2026-09-22 04:55:10 UTC',
      validator: 'Node-02 (Campus Security)'
    },
    sssExplanation: 'Location-triggered broadcast for individuals currently detected within Campus South & Plaza zones.'
  },
  {
    id: 'ann-5',
    title: 'Lab 3 GPU Cluster Allocation Renewal for Final Projects',
    category: 'Academic',
    priority: 'high',
    isFeatured: false,
    somebody: ['cs_student', 'lecturer'],
    somewhere: ['faculty_cs'],
    rightTime: ['midterm_week', 'normal_class'],
    summary: 'Submit your research proposal token before Friday to retain 8x RTX 4090 node reservations.',
    fullContent: 'Final year thesis students and Distributed Systems lab assistants must renew their SSH authentication keys on the campus cluster. Please ensure Docker containers have clean log volumes.',
    timestamp: '5 hours ago',
    date: 'Sept 25, 2026',
    author: 'Lab Systems Administrator',
    icon: 'blocks',
    blockchain: {
      txHash: '0x66f10ab7210984ee400281b9941190cfda876123490aa991',
      blockHeight: 19481702,
      smartContract: '0xLabResourceTrust.eth',
      verifiedAt: '2026-09-22 03:12:44 UTC',
      validator: 'Node-04 (Academic Gateway)'
    },
    sssExplanation: 'Direct match for your enrolled Lab Section: CS-401 Machine Learning Laboratory.'
  },
  {
    id: 'ann-6',
    title: 'Dormitory Electricity & Keycard Sync Scheduled',
    category: 'Personal',
    priority: 'normal',
    isFeatured: false,
    somebody: ['cs_student', 'med_student'],
    somewhere: ['student_center', 'all_campus'],
    rightTime: ['normal_class', 'registration'],
    summary: 'RFID dorm locks will sync with student smart cards. Tap your card at the reception kiosk once today.',
    fullContent: 'Housing Management is rolling out cryptographic NFC passes. Residents of Hall Aster and Hall Bougainville are required to re-tap cards to update building access keys.',
    timestamp: '1 day ago',
    date: 'Sept 21, 2026',
    author: 'Student Residential Hall Board',
    icon: 'shieldCheck',
    blockchain: {
      txHash: '0x5501ba90ccfa829104bf7762a1945600ff124b8997a51829',
      blockHeight: 19480119,
      smartContract: '0xAccessPassLedger.eth',
      verifiedAt: '2026-09-21 11:20:00 UTC',
      validator: 'Node-05 (Residential Operations)'
    },
    sssExplanation: 'Delivered to verified campus dormitory residents.'
  }
];


const MOCK_SCHEDULE = [
  {
    id: 'sch-1',
    time: '08:30 - 10:15',
    title: 'CS-302: Distributed Systems',
    room: 'Lab 3 • Faculty of CS',
    type: 'Lecture',
    lecturer: 'Dr. Aris Sudarmono',
    active: true,
    tag: 'Academic'
  },
  {
    id: 'sch-2',
    time: '11:00 - 12:30',
    title: 'Academic Advising Consultation',
    room: 'Staff Room 204 • Building B',
    type: 'Mentorship',
    lecturer: 'Prof. Maya Indah',
    active: false,
    tag: 'Personal'
  },
  {
    id: 'sch-3',
    time: '13:30 - 15:00',
    title: 'Research Group: Blockchain Consensus',
    room: 'Seminar Room 1 • Central Library',
    type: 'Research',
    lecturer: 'ACM Lab Fellows',
    active: false,
    tag: 'Events'
  },
  {
    id: 'sch-4',
    time: '16:00 - 17:30',
    title: 'Open Badminton Tournament Practice',
    room: 'Student Center Gymnasium',
    type: 'Activity',
    lecturer: 'Sports Club',
    active: false,
    tag: 'Events'
  }
];


const PERSONAS = {
  cs_student: {
    name: 'Sheril',
    fullName: 'Sheril Clarissa',
    roleLabel: 'CS Undergrad • 3rd Year',
    roleKey: 'cs_student',
    faculty: 'Faculty of Computer Science',
    location: 'faculty_cs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    studentId: '2024-CS-08492',
    tokenBalance: 420
  },
  lecturer: {
    name: 'Dr. Aris',
    fullName: 'Dr. Ir. Aris Pratama, M.Sc.',
    roleLabel: 'Senior Lecturer & Researcher',
    roleKey: 'lecturer',
    faculty: 'Faculty of Computer Science',
    location: 'faculty_cs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    studentId: 'STAFF-NIP-198502',
    tokenBalance: 1250
  },
  med_student: {
    name: 'Devon',
    fullName: 'Devon Mahendra',
    roleLabel: 'Medical Student • 2nd Year',
    roleKey: 'med_student',
    faculty: 'Faculty of Medicine & Health',
    location: 'central_lib',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    studentId: '2025-MED-03912',
    tokenBalance: 310
  }
};

export default function App() {
  // Navigation: 'home' | 'search' | 'schedule' | 'profile'
  const [activeTab, setActiveTab] = useState('home');
  const [announcements, setAnnouncements] = useState(MOCK_ANNOUNCEMENTS);
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeCategory, setNoticeCategory] = useState('Announcements');
  const [noticeLocation, setNoticeLocation] = useState('Main Road');
  const [noticeTime, setNoticeTime] = useState('Today, 10:00–14:00');
  const [noticeSummary, setNoticeSummary] = useState('');
  
  // Persona
  const [selectedPersonaKey, setSelectedPersonaKey] = useState('cs_student');
  const activePersona = PERSONAS[selectedPersonaKey];

  // SSS Filter Interactive State
  const [sssRole, setSssRole] = useState('cs_student');
  const [sssLocation, setSssLocation] = useState('faculty_cs');
  const [sssContext, setSssContext] = useState('midterm_week');
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [activeModal, setActiveModal] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [savedAnnouncements, setSavedAnnouncements] = useState(['ann-1']);
  const [unreadCount, setUnreadCount] = useState(3);
  const [copiedHash, setCopiedHash] = useState(false);
  const [liveTime, setLiveTime] = useState('09:41');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setLiveTime(`${hours}:${minutes}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  const handlePersonaSwitch = (key) => {
    setSelectedPersonaKey(key);
    setSssRole(key);
    if (key === 'cs_student') setSssLocation('faculty_cs');
    else if (key === 'med_student') setSssLocation('central_lib');
    else setSssLocation('faculty_cs');
  };

  const toggleBookmark = (id, e) => {
    e && e.stopPropagation();
    setSavedAnnouncements(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const openDetail = (item) => {
    setSelectedAnnouncement(item);
    setActiveModal('announcement_detail');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // SSS Dynamic Filtering
  const filteredAnnouncements = useMemo(() => {
    return announcements.filter(item => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchSummary = item.summary.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        if (!matchTitle && !matchSummary && !matchCat) return false;
      }

      if (filterCategory !== 'All' && item.category !== filterCategory) {
        return false;
      }

      const somebodyPass = item.somebody.includes(sssRole) || item.somebody.includes('all');
      const somewherePass = item.somewhere.includes(sssLocation) || item.somewhere.includes('all_campus');
      const timePass = item.rightTime.includes(sssContext) || item.rightTime.includes('normal_class');

      return somebodyPass && (somewherePass || timePass);
    });
  }, [announcements, searchQuery, filterCategory, sssRole, sssLocation, sssContext]);

  const getCategoryCount = (cat) => {
    if (cat === 'All') return announcements.length;
    return announcements.filter(a => a.category === cat).length;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-0 sm:p-4 text-slate-800 font-sans antialiased">
      
      {/* Desktop Controller Header */}
      <header className="w-full max-w-md lg:max-w-4xl flex items-center justify-between px-4 py-2.5 mb-3 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 text-xs text-slate-300 shadow-xl">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-bold text-white tracking-wide">InfoChain Mobile OS</span>
          <span className="hidden sm:inline bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded-full text-[10px] font-mono border border-blue-700/50">SSS Concept Active</span>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-700">
            {Object.keys(PERSONAS).map(key => (
              <button
                key={key}
                onClick={() => handlePersonaSwitch(key)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                  selectedPersonaKey === key ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {PERSONAS[key].name}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setActiveModal('concept_info')}
            className="flex items-center space-x-1 bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold px-3 py-1 rounded-lg transition-all shadow-sm"
          >
            <Icon name="sparkles" className="w-3.5 h-3.5 text-amber-300" />
            <span>SSS Concept</span>
          </button>
        </div>
      </header>

      {/* SMARTPHONE FRAME CONTAINER */}
      <div className="relative w-full max-w-[420px] h-[860px] max-h-[94vh] bg-white rounded-[40px] shadow-2xl border-[8px] border-slate-900 flex flex-col overflow-hidden select-none">
        
        {/* iOS / Android Status Bar & Dynamic Island */}
        <div className="relative w-full bg-gradient-to-b from-slate-900 to-slate-900/95 text-white pt-2.5 pb-2 px-6 flex items-center justify-between z-30 select-none">
          <span className="text-xs font-semibold tracking-tight">{liveTime}</span>
          
          <div 
            onClick={() => setActiveModal('concept_info')}
            className="cursor-pointer flex items-center space-x-1.5 bg-black px-3 py-1 rounded-full border border-slate-800 hover:border-blue-500 transition-all shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] font-medium text-slate-300 hover:text-white transition-colors">SSS Smart Chain</span>
            <span className="text-[9px] bg-blue-950 text-blue-300 px-1 rounded border border-blue-800/40 font-mono">LIVE</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-300">
            <span className="text-[11px] font-semibold">5G</span>
            <Icon name="wifi" className="w-3.5 h-3.5" />
            <div className="w-5 h-2.5 border border-slate-300 rounded-sm p-0.5 flex items-center">
              <div className="w-full h-full bg-emerald-400 rounded-2xs"></div>
            </div>
          </div>
        </div>

        {/* SCROLLABLE VIEWPORT CONTENT */}
        <div className="flex-1 overflow-y-auto bg-slate-50 relative pb-20">
          
          {/* TAB 1: HOME */}
          {activeTab === 'home' && (
            <div className="space-y-4">
              
              {/* Personalized Header Banner */}
              <div className="bg-gradient-to-b from-slate-900 via-blue-900 to-blue-800 text-white p-5 rounded-b-3xl shadow-md relative overflow-hidden">
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div onClick={() => setActiveTab('profile')} className="cursor-pointer relative">
                      <img 
                        src={activePersona.avatar} 
                        alt={activePersona.name} 
                        className="w-12 h-12 rounded-2xl object-cover ring-2 ring-blue-400/80 shadow-md"
                      />
                      <span className="absolute -bottom-1 -right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-slate-900"></span>
                    </div>
                    <div>
                      <h1 className="text-base font-bold text-white tracking-tight">
                        Good morning, {activePersona.name} 👋
                      </h1>
                      <p className="text-xs text-blue-200 font-medium">{activePersona.roleLabel}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setActiveModal('notifications'); setUnreadCount(0); }}
                    className="relative p-2.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all active:scale-95"
                  >
                    <Icon name="bell" className="w-5 h-5" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-slate-900 animate-pulse">
                        {unreadCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* Quick Search Bar */}
                <div className="relative mt-4 z-10">
                  <div className="flex items-center bg-white/95 rounded-2xl shadow-lg px-3.5 py-2.5 text-slate-800 border border-white/30">
                    <Icon name="search" className="w-4 h-4 text-slate-400 mr-2.5 shrink-0" />
                    <input 
                      type="text" 
                      placeholder="Search data, knowledge, or wisdom..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none font-medium"
                    />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600">
                        <Icon name="close" className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Active SSS Status Pill */}
                <div 
                  onClick={() => setActiveModal('concept_info')}
                  className="mt-3 inline-flex items-center space-x-1.5 bg-blue-950/60 border border-blue-400/30 px-3 py-1.5 rounded-xl text-[11px] text-blue-100 cursor-pointer hover:bg-blue-950/90 transition-all"
                >
                  <span className="font-semibold text-amber-300">SSS Active:</span>
                  <span className="truncate max-w-[210px]">{sssRole.replace('_', ' ').toUpperCase()} • {sssLocation.replace('_', ' ').toUpperCase()}</span>
                  <Icon name="chevronRight" className="w-3 h-3 text-blue-300" />
                </div>
              </div>

              <div className="px-4 space-y-4">
                
                {/* Section: Important for You (Personalized Hero Card) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <h2 className="text-sm font-bold text-slate-800 tracking-tight">Important for You</h2>
                    </div>
                    <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                      High Priority
                    </span>
                  </div>

                  <div 
                    onClick={() => openDetail(announcements[0])}
                    className="cursor-pointer bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-3xl p-4 text-white shadow-lg overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between text-xs text-blue-200 mb-2">
                      <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-lg font-medium text-[11px] text-white flex items-center space-x-1">
                        <Icon name="academic" className="w-3.5 h-3.5 text-amber-300" />
                        <span>Academic • Course Packet</span>
                      </span>
                      <span className="flex items-center space-x-1 text-[11px] text-amber-200 font-semibold bg-black/25 px-2 py-0.5 rounded-md">
                        <Icon name="clock" className="w-3 h-3" />
                        <span>Closes in 3 Days</span>
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base leading-snug text-white mb-1.5">
                      Registration Period for Next Semester
                    </h3>

                    <p className="text-xs text-blue-100/80 line-clamp-2 leading-relaxed mb-3">
                      Claim up to 24 SKS credits. Mandatory curriculum validation requires academic advisor approval before Friday.
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/15">
                      <div className="flex items-center space-x-1 text-[11px] text-blue-200 font-mono">
                        <Icon name="shieldCheck" className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Proof #19482103 Verified</span>
                      </div>
                      <span className="bg-white text-blue-900 px-3 py-1 rounded-xl text-xs font-bold shadow-sm flex items-center space-x-1">
                        <span>Action</span>
                        <Icon name="chevronRight" className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Section: SSS Interactive Filter Feature */}
                <div className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center space-x-1.5">
                      <div className="p-1 rounded-lg bg-blue-100 text-blue-700">
                        <Icon name="sparkles" className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">SSS Real-Time Match Engine</span>
                    </div>
                    <button 
                      onClick={() => {
                        setSssRole('cs_student');
                        setSssLocation('faculty_cs');
                        setSssContext('midterm_week');
                        setFilterCategory('All');
                        setSearchQuery('');
                      }}
                      className="text-[10px] text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1"
                    >
                      <Icon name="arrowRefresh" className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 text-slate-700">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 block mb-1">1. Somebody</label>
                      <select 
                        value={sssRole} 
                        onChange={(e) => setSssRole(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 text-[11px] font-medium text-slate-800 truncate"
                      >
                        <option value="cs_student">CS Student</option>
                        <option value="med_student">Med Student</option>
                        <option value="lecturer">Lecturer</option>
                        <option value="staff">Staff</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-500 block mb-1">2. Somewhere</label>
                      <select 
                        value={sssLocation} 
                        onChange={(e) => setSssLocation(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 text-[11px] font-medium text-slate-800 truncate"
                      >
                        <option value="faculty_cs">Faculty CS</option>
                        <option value="central_lib">Library</option>
                        <option value="student_center">Plaza</option>
                        <option value="all_campus">Everywhere</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-slate-500 block mb-1">3. Right Time</label>
                      <select 
                        value={sssContext} 
                        onChange={(e) => setSssContext(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-1.5 text-[11px] font-medium text-slate-800 truncate"
                      >
                        <option value="midterm_week">Midterms</option>
                        <option value="registration">Registration</option>
                        <option value="maintenance_window">Maintenance</option>
                        <option value="normal_class">Regular</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 font-medium">
                      Matched: <strong className="text-blue-700">{filteredAnnouncements.length} Tailored Updates</strong>
                    </span>
                    <button 
                      onClick={() => setActiveModal('concept_info')}
                      className="text-blue-600 font-bold hover:underline flex items-center space-x-0.5 text-[10px]"
                    >
                      <span>How SSS works</span>
                      <Icon name="chevronRight" className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Section: When It's Needed (Category Chips) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm font-bold text-slate-800 tracking-tight">When It's Needed</h2>
                    <span className="text-[11px] text-slate-500 font-medium">Category filter</span>
                  </div>
                  
                  <div className="flex space-x-2 overflow-x-auto pb-1">
                    {['All', 'Academic', 'Events', 'Announcements', 'Personal'].map(cat => {
                      const isSelected = filterCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setFilterCategory(cat)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 shrink-0 ${
                            isSelected
                              ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-700'
                              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <span>{cat}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                            isSelected ? 'bg-blue-800 text-blue-100' : 'bg-slate-100 text-slate-500'
                          }`}>
                            {getCategoryCount(cat)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quick action: create an information report */}
                <button
                  onClick={() => setActiveModal('create_notice')}
                  className="w-full flex items-center justify-between rounded-2xl bg-blue-600 hover:bg-blue-700 text-white p-4 shadow-md transition-all"
                >
                  <div className="text-left">
                    <span className="block text-sm font-bold">+ Add Information</span>
                    <span className="block text-[11px] text-blue-100 mt-0.5">Report a road closure, event, or urgent update</span>
                  </div>
                  <span className="text-xl font-bold">＋</span>
                </button>

                {/* Section: Latest Information Feed */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-bold text-slate-800 tracking-tight">Latest Information</h2>
                    <span className="text-[11px] text-slate-400 font-medium">Demo verification status</span>
                  </div>

                  {filteredAnnouncements.length === 0 ? (
                    <div className="bg-white rounded-2xl p-6 text-center border border-dashed border-slate-300">
                      <Icon name="info" className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                      <p className="text-xs font-bold text-slate-700">No matching updates found</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Try resetting the SSS engine filters.</p>
                      <button 
                        onClick={() => { setFilterCategory('All'); setSssRole('cs_student'); }}
                        className="mt-3 text-xs text-blue-600 font-bold hover:underline"
                      >
                        Reset filters
                      </button>
                    </div>
                  ) : (
                    filteredAnnouncements.map((item) => {
                      const isSaved = savedAnnouncements.includes(item.id);
                      return (
                        <div
                          key={item.id}
                          onClick={() => openDetail(item)}
                          className="cursor-pointer bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden"
                        >
                          <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                            item.category === 'Academic' ? 'bg-blue-600' :
                            item.category === 'Announcements' ? 'bg-amber-500' :
                            item.category === 'Events' ? 'bg-purple-600' : 'bg-emerald-500'
                          }`}></div>

                          <div className="pl-1">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center space-x-1.5">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                  item.category === 'Academic' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                  item.category === 'Announcements' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                                  item.category === 'Events' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                                  'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                }`}>
                                  {item.category}
                                </span>
                                
                                {item.priority === 'high' && (
                                  <span className="text-[9px] font-extrabold bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded">
                                    URGENT
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center space-x-1">
                                <button
                                  onClick={(e) => toggleBookmark(item.id, e)}
                                  className={`p-1 rounded-lg hover:bg-slate-100 transition-colors ${
                                    isSaved ? 'text-blue-600' : 'text-slate-400'
                                  }`}
                                >
                                  <Icon name="bookmark" className="w-3.5 h-3.5" />
                                </button>
                                <span className="text-[10px] text-slate-400 font-medium">
                                  {item.timestamp}
                                </span>
                              </div>
                            </div>

                            <h3 className="font-bold text-xs sm:text-sm text-slate-800 hover:text-blue-700 transition-colors leading-snug mb-1">
                              {item.title}
                            </h3>

                            <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-2.5">
                              {item.summary}
                            </p>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                              <div className="flex items-center space-x-1.5">
                                <Icon name="shieldCheck" className="w-3 h-3 text-emerald-500" />
                                <span className="font-mono text-slate-500">{item.blockchain.txHash.substring(0, 10)}...</span>
                              </div>
                              <span className="text-blue-600 font-medium flex items-center space-x-0.5">
                                <span>Read</span>
                                <Icon name="chevronRight" className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Section: Blockchain Concept (Demo) Banner */}
                <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-4 text-white shadow-xl relative overflow-hidden border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-blue-600/30 rounded-xl border border-blue-400/30">
                        <Icon name="blocks" className="w-4 h-4 text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-white tracking-wide">Blockchain Concept (Demo)</h3>
                        <p className="text-[10px] text-blue-300">Decentralized Campus Ledger</p>
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Sync 100%
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                    In a production version, timestamps and verification could be connected to a ledger. This prototype uses sample data only.
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-center py-2 px-1 bg-white/5 rounded-2xl border border-white/10 mb-3 text-[10px]">
                    <div>
                      <span className="text-blue-400 font-bold block">Real-time</span>
                      <span className="text-slate-400 text-[9px]">Data Flow</span>
                    </div>
                    <div className="border-x border-white/10">
                      <span className="text-emerald-400 font-bold block">Trusted</span>
                      <span className="text-slate-400 text-[9px]">Zero-Noise</span>
                    </div>
                    <div>
                      <span className="text-amber-400 font-bold block">Immutable</span>
                      <span className="text-slate-400 text-[9px]">Tamper Proof</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setActiveModal('blockchain_ledger')}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 rounded-xl transition-all shadow-md flex items-center justify-center space-x-1.5"
                  >
                    <Icon name="shieldCheck" className="w-3.5 h-3.5 text-emerald-200" />
                    <span>View Verification Demo</span>
                  </button>
                </div>

                <div className="h-4"></div>
              </div>
            </div>
          )}

          {/* TAB 2: EXPLORE / SEARCH */}
          {activeTab === 'search' && (
            <div className="p-4 space-y-4">
              <div>
                <h1 className="text-lg font-bold text-slate-900">Explore & Discover</h1>
                <p className="text-xs text-slate-500">Query campus knowledge base via Smart SSS indexing</p>
              </div>

              <div className="flex items-center bg-white rounded-2xl shadow-sm px-3.5 py-3 text-slate-800 border border-slate-200">
                <Icon name="search" className="w-4 h-4 text-blue-600 mr-2.5 shrink-0" />
                <input 
                  type="text" 
                  placeholder="Ask AI: e.g. Lab 3 reservation rules..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 outline-none font-medium"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Trending Campus Topics
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['#SemesterRegistration', '#ExamTimetable', '#LibraryHours', '#ACM_Hackathon', '#WifiOutage', '#TuitionDeadline'].map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag.replace('#', ''))}
                      className="text-[11px] font-medium bg-white text-slate-600 px-2.5 py-1 rounded-xl border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Curated For You ({activePersona.name})
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm cursor-pointer">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                      <Icon name="academic" className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-800">Academic Portal</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">Syllabus, GPA records, SKS</p>
                  </div>

                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm cursor-pointer">
                    <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                      <Icon name="zap" className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-800">Lab Resourcing</h4>
                    <p className="text-[10px] text-slate-400 mt-0.5">GPU slots, Lab 3 keys</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SCHEDULE / EVENTS */}
          {activeTab === 'schedule' && (
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-bold text-slate-900">Campus Agenda</h1>
                  <p className="text-xs text-slate-500">Academic calendar & event sync</p>
                </div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-xl border border-blue-200">
                  Sept 2026
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1 bg-white p-2.5 rounded-2xl border border-slate-200 shadow-sm text-center">
                {[
                  { day: 'Mon', date: 21 },
                  { day: 'Tue', date: 22, active: true },
                  { day: 'Wed', date: 23 },
                  { day: 'Thu', date: 24 },
                  { day: 'Fri', date: 25 },
                  { day: 'Sat', date: 26 },
                  { day: 'Sun', date: 27 },
                ].map(d => (
                  <div 
                    key={d.date}
                    className={`py-2 rounded-xl flex flex-col items-center justify-center transition-all ${
                      d.active ? 'bg-blue-600 text-white font-bold shadow-md' : 'text-slate-600'
                    }`}
                  >
                    <span className="text-[9px] uppercase">{d.day}</span>
                    <span className="text-xs font-bold mt-0.5">{d.date}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Today's Timeline
                </span>

                {MOCK_SCHEDULE.map(sch => (
                  <div 
                    key={sch.id}
                    className={`p-3.5 rounded-2xl border transition-all ${
                      sch.active ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-400' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-blue-700 font-mono">{sch.time}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-100 text-blue-700">
                        {sch.tag}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 mb-1">{sch.title}</h4>
                    
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span className="flex items-center space-x-1">
                        <Icon name="mapPin" className="w-3 h-3 text-slate-400" />
                        <span>{sch.room}</span>
                      </span>
                      <span>{sch.lecturer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PROFILE */}
          {activeTab === 'profile' && (
            <div className="p-4 space-y-4">
              <div className="relative bg-gradient-to-tr from-slate-900 via-blue-900 to-blue-800 rounded-3xl p-5 text-white shadow-xl overflow-hidden border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="blocks" className="w-5 h-5 text-blue-300" />
                    <span className="font-bold text-xs tracking-wider uppercase text-blue-200">InfoChain Smart Pass</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-2 py-0.5 rounded-full">
                    ACTIVE DID
                  </span>
                </div>

                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={activePersona.avatar} 
                    alt={activePersona.fullName} 
                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-blue-400"
                  />
                  <div>
                    <h2 className="text-base font-bold text-white leading-tight">{activePersona.fullName}</h2>
                    <p className="text-xs text-blue-200">{activePersona.roleLabel}</p>
                    <p className="text-[10px] font-mono text-slate-300 mt-0.5">ID: {activePersona.studentId}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px]">
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase block">Campus Token</span>
                    <span className="font-bold text-amber-300">{activePersona.tokenBalance} CCP</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 uppercase block">Affiliation</span>
                    <span className="font-semibold text-slate-200">CS & AI Lab</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 uppercase block">ZK Status</span>
                    <span className="text-emerald-300 font-mono text-[10px]">VERIFIED</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-2.5">
                <h3 className="text-xs font-bold text-slate-900">Switch Persona for Demonstration</h3>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {Object.keys(PERSONAS).map(key => {
                    const p = PERSONAS[key];
                    const isCurrent = selectedPersonaKey === key;
                    return (
                      <button
                        key={key}
                        onClick={() => handlePersonaSwitch(key)}
                        className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center ${
                          isCurrent ? 'border-blue-600 bg-blue-50 text-blue-800 font-bold' : 'border-slate-200 bg-white text-slate-600'
                        }`}
                      >
                        <img src={p.avatar} className="w-8 h-8 rounded-full mb-1 object-cover" />
                        <span className="text-[11px] leading-tight truncate w-full">{p.name}</span>
                        <span className="text-[9px] text-slate-400">{key === 'lecturer' ? 'Faculty' : 'Student'}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => setActiveModal('concept_info')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-2xl text-xs transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Icon name="info" className="w-4 h-4 text-blue-400" />
                <span>View SSS Architecture & Whitepaper</span>
              </button>
            </div>
          )}

        </div>

        {/* BOTTOM NAVIGATION BAR */}
        <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 px-3 py-2 flex items-center justify-around z-30 shadow-lg">
          {[
            { id: 'home', label: 'Home', icon: 'home' },
            { id: 'search', label: 'Explore', icon: 'search' },
            { id: 'schedule', label: 'Schedule', icon: 'calendar', badge: '1' },
            { id: 'profile', label: 'Profile', icon: 'user' },
          ].map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-1 px-3 rounded-2xl transition-all ${
                  isActive ? 'text-blue-700 font-bold scale-105' : 'text-slate-400 hover:text-slate-600 font-medium'
                }`}
              >
                <div className="relative">
                  <Icon name={tab.icon} className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                  {tab.badge && !isActive && (
                    <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                      {tab.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] mt-1 tracking-tight">{tab.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-0.5"></span>}
              </button>
            );
          })}
        </nav>

        {/* MODAL: ANNOUNCEMENT DETAIL */}
        {activeModal === 'announcement_detail' && selectedAnnouncement && (
          <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end">
            <div className="bg-white w-full max-h-[85%] rounded-t-3xl p-5 overflow-y-auto shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-blue-100 text-blue-700">
                  {selectedAnnouncement.category}
                </span>
                <button onClick={() => setActiveModal(null)} className="p-1 rounded-full bg-slate-100 text-slate-600">
                  <Icon name="close" className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h2 className="text-base font-bold text-slate-900 leading-snug">{selectedAnnouncement.title}</h2>
                <p className="text-xs text-slate-500 mt-1">Issued by: <strong>{selectedAnnouncement.author}</strong></p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <p>{selectedAnnouncement.fullContent}</p>
              </div>

              <div className="bg-blue-50 p-3.5 rounded-2xl border border-blue-200">
                <h4 className="text-xs font-bold text-blue-900 mb-1">SSS Algorithmic Delivery Reason</h4>
                <p className="text-[11px] text-blue-800">{selectedAnnouncement.sssExplanation}</p>
              </div>

              <div className="bg-slate-900 text-white p-3.5 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                  <span>Cryptographic Verification</span>
                  <span className="font-mono text-[9px] text-slate-400">Block #{selectedAnnouncement.blockchain.blockHeight}</span>
                </div>
                <div className="flex items-center justify-between bg-black/40 p-2 rounded-xl text-[10px] font-mono">
                  <span className="truncate max-w-[200px] text-slate-400">{selectedAnnouncement.blockchain.txHash}</span>
                  <button onClick={() => copyToClipboard(selectedAnnouncement.blockchain.txHash)} className="text-blue-400 ml-2">
                    {copiedHash ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* MODAL: CREATE INFORMATION */}
        {activeModal === 'create_notice' && (
          <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!noticeTitle.trim() || !noticeSummary.trim()) return;
                const newNotice = {
                  id: `local-${Date.now()}`,
                  title: noticeTitle.trim(),
                  category: noticeCategory,
                  priority: noticeCategory === 'Emergency' ? 'high' : 'medium',
                  isFeatured: false,
                  somebody: ['cs_student', 'med_student', 'lecturer', 'staff', 'visitor'],
                  somewhere: ['all_campus', 'faculty_cs', 'central_lib', 'student_center'],
                  rightTime: ['registration', 'midterm_week', 'maintenance_window', 'normal_class'],
                  summary: noticeSummary.trim(),
                  fullContent: `${noticeSummary.trim()} Location: ${noticeLocation}. Valid time: ${noticeTime}.`,
                  timestamp: 'Just now',
                  date: new Date().toLocaleDateString(),
                  deadline: noticeTime,
                  author: 'Community Report (Demo)',
                  icon: 'info',
                  blockchain: {
                    txHash: 'DEMO-' + Date.now().toString(16).toUpperCase(),
                    blockHeight: 0,
                    smartContract: 'Local Demo Only',
                    verifiedAt: new Date().toLocaleString(),
                    validator: 'Not blockchain verified'
                  },
                  sssExplanation: `Demo match: relevant information for people who need updates around ${noticeLocation} during ${noticeTime}.`
                };
                setAnnouncements(prev => [newNotice, ...prev]);
                setNoticeTitle('');
                setNoticeSummary('');
                setActiveModal(null);
                setActiveTab('home');
                setFilterCategory('All');
                setSearchQuery('');
              }}
              className="bg-white w-full max-h-[90%] rounded-t-3xl p-5 overflow-y-auto shadow-2xl space-y-4 text-slate-800"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Add Information</h2>
                  <p className="text-[11px] text-slate-500">Fill the SSS information fields</p>
                </div>
                <button type="button" onClick={() => setActiveModal(null)} className="p-2 rounded-full bg-slate-100 text-slate-600">✕</button>
              </div>
              <label className="block text-xs font-bold text-slate-700">Information title
                <input required value={noticeTitle} onChange={e => setNoticeTitle(e.target.value)} placeholder="e.g. Road temporarily closed" className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm font-normal outline-none focus:border-blue-500" />
              </label>
              <label className="block text-xs font-bold text-slate-700">Category
                <select value={noticeCategory} onChange={e => setNoticeCategory(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm font-normal">
                  <option>Announcements</option><option>Events</option><option>Academic</option><option>Personal</option><option>Emergency</option>
                </select>
              </label>
              <label className="block text-xs font-bold text-slate-700">Somewhere — location
                <input required value={noticeLocation} onChange={e => setNoticeLocation(e.target.value)} placeholder="Street / area / place" className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm font-normal outline-none focus:border-blue-500" />
              </label>
              <label className="block text-xs font-bold text-slate-700">Right Time — valid time
                <input required value={noticeTime} onChange={e => setNoticeTime(e.target.value)} placeholder="e.g. Today, 10:00–14:00" className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm font-normal outline-none focus:border-blue-500" />
              </label>
              <label className="block text-xs font-bold text-slate-700">Details
                <textarea required value={noticeSummary} onChange={e => setNoticeSummary(e.target.value)} placeholder="Explain what people need to know..." rows={3} className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm font-normal outline-none focus:border-blue-500" />
              </label>
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-[11px] text-amber-800">Demo mode: this report is saved only in the current page session. It is not yet stored in Firebase or verified by a real blockchain.</div>
              <button type="submit" className="w-full py-3 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md">Publish Information</button>
            </form>
          </div>
        )}

        {/* MODAL: NOTIFICATIONS */}
        {activeModal === 'notifications' && (
          <div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex flex-col justify-end">
            <div className="bg-white w-full max-h-[80%] rounded-t-3xl p-5 overflow-y-auto shadow-2xl space-y-3">
              <div className="flex items-center justify-between"><h2 className="text-base font-bold text-slate-900">Notifications</h2><button onClick={() => setActiveModal(null)} className="p-2 rounded-full bg-slate-100">✕</button></div>
              <p className="text-xs text-slate-500">Updates that may matter to you based on Somebody, Somewhere, and Right Time.</p>
              {announcements.slice(0, 4).map(item => <button key={item.id} onClick={() => openDetail(item)} className="w-full text-left p-3 rounded-2xl border border-slate-200 hover:bg-blue-50"><span className="block text-xs font-bold text-slate-800">{item.title}</span><span className="block text-[11px] text-slate-500 mt-1">{item.category} · {item.timestamp}</span></button>)}
              <button onClick={() => setActiveModal(null)} className="w-full py-3 rounded-xl bg-blue-600 text-white text-xs font-bold">Close</button>
            </div>
          </div>
        )}

        {/* MODAL: SSS CONCEPT & WHITE-PAPER */}
        {activeModal === 'concept_info' && (
          <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col justify-end">
            <div className="bg-white w-full max-h-[90%] rounded-t-3xl p-5 overflow-y-auto shadow-2xl space-y-4 text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h2 className="text-sm font-bold text-slate-900">About InfoChain & SSS</h2>
                <button onClick={() => setActiveModal(null)} className="p-1 rounded-full bg-slate-100 text-slate-600">
                  <Icon name="close" className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider block">The Problem</span>
                <div className="bg-rose-50 border border-rose-200 p-3 rounded-2xl text-xs text-rose-800 space-y-1">
                  <p><strong>1. Scattered:</strong> Notices spread across multiple apps and chat channels.</p>
                  <p><strong>2. Not Personalized:</strong> Spam notifications that do not matter to your major.</p>
                  <p><strong>3. Delayed:</strong> Urgent changes arrive after students have already walked across campus.</p>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">The SSS Formula</span>
                <div className="bg-gradient-to-br from-blue-900 to-indigo-950 text-white p-4 rounded-3xl shadow-lg text-center space-y-2">
                  <h3 className="text-xs font-bold">Somebody + Somewhere + Right Time = Knows Something</h3>
                  <p className="text-[11px] text-blue-200">
                    The right information reaches the right person at the right time. Verification is a future integration.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setActiveModal(null)}
                className="w-full py-3 bg-blue-600 text-white text-xs font-bold rounded-xl"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
