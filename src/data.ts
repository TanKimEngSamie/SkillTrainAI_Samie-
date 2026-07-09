import {
  Testimonial,
  FeatureItem,
  IndustryUseCase,
  FAQItem,
  PricingPlan,
  DocumentSource
} from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: '',
    company: 'Apex Logistics APAC',
    avatarUrl: '',
    quote: 'With SkillTrain AI, onboarding speed has tripled. New hires instantly access complete operational procedures on demand, completely bypassing traditional training bottlenecks.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: '',
    company: 'Velo Digital Agency',
    avatarUrl: '',
    quote: 'SkillTrain AI seamlessly ingests complex project briefs and creative SOPs. Our team gets immediate, accurate answers with exact page references, fully resolving collaboration delays.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Dr. Evelyn Chen',
    role: '',
    company: 'Summit Medical Alliance',
    avatarUrl: '',
    quote: 'Operational compliance is perfectly streamlined. The zero-hallucination citation guarantee ensures our team gets instantly verified, reliable answers from approved health protocols.',
    rating: 5,
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: 'Zero-Hallucination Citations',
    description: 'Every single answer provided is bound to uploaded documents with exact page, paragraph, and line references. No made-up information.',
    iconName: 'ShieldCheck',
    badge: 'Core Guard',
  },
  {
    id: 'f2',
    title: 'Multi-Format Ingestion',
    description: 'Instantly import PDF SOPs, Microsoft Word Handbooks, Excel FAQs, Notion Pages, and raw TXT policies directly into your custom knowledge silo.',
    iconName: 'FileDown',
  },
  {
    id: 'f3',
    title: 'Instant Onboarding Engine',
    description: 'New hires get a personal AI mentor that knows every company policy and internal workflow. Accelerate speed-to-productivity by up to 60%.',
    iconName: 'UserPlus',
    badge: 'Popular',
  },
  {
    id: 'f4',
    title: 'Secure Access & RBAC',
    description: 'Configure Role-Based Access Control so sensitive documents (like payroll guidelines) are only searchable by authorized departments.',
    iconName: 'Lock',
  },
  {
    id: 'f5',
    title: 'Continuous Self-Training',
    description: 'As your guidelines change, simply drag and drop the updated handbook. SkillTrain AI instantly synchronizes and archives older revisions.',
    iconName: 'RefreshCw',
  },
  {
    id: 'f6',
    title: 'No-Code Slack & Teams Link',
    description: 'Deploy the chatbot directly into Slack, Microsoft Teams, or a custom web widget in 3 clicks. Employees query it where they already work.',
    iconName: 'Zap',
  },
];

export const INDUSTRIES: IndustryUseCase[] = [
  {
    id: 'ind-1',
    industry: 'Professional Services & Creative Agencies',
    iconName: 'Briefcase',
    challenge: 'Scattered client project briefs, complex billing guidelines, and ever-changing brand design systems lead to team confusion and inconsistent client delivery.',
    solution: 'SkillTrain AI acts as a central repository for all project handovers, service contracts, template checklists, and tools instructions.',
    impact: 'Saved 6+ hours per employee weekly on file hunting and reduced client-onboarding mistakes by 45%.',
    imageSeed: 'agency',
  },
  {
    id: 'ind-2',
    industry: 'Manufacturing, Supply Chain & Logistics',
    iconName: 'Truck',
    challenge: 'Complex machinery checklists, ISO quality assurance standards, and strict warehouse safety SOPs are buried in heavy printed binders, causing safety risks.',
    solution: 'Deploy SkillTrain QR codes on warehouse floors and assembly lines. Floor staff scan and ask: "What is the pressure release protocol for Valve 4B?"',
    impact: 'Reduced industrial safety accidents by 30% and slashed machine downtime by ensuring instant troubleshooting instructions.',
    imageSeed: 'factory',
  },
  {
    id: 'ind-3',
    industry: 'Retail, Hospitality & F&B Groups',
    iconName: 'ShoppingBag',
    challenge: 'High staff turnover (averaging 70% annually) requires constant training on cash register SOPs, refund policies, and customer complaint resolution.',
    solution: 'A mobile-friendly SkillTrain chatbot accessible by cashiers on shifts to instantly clarify return policies, discount codes, or opening checklists.',
    impact: 'Reduced shift manager escalation calls by 75% and improved frontline customer satisfaction ratings.',
    imageSeed: 'retail',
  },
  {
    id: 'ind-4',
    industry: 'Healthcare, Clinics & Dental Offices',
    iconName: 'Stethoscope',
    challenge: 'Medical front desks are overwhelmed by insurance co-pay guidelines, specialist referral pathways, and strict patient HIPAA privacy laws.',
    solution: 'A highly secure, HIPAA-compliant knowledge engine loaded with operational handbooks and local insurance policy matrices.',
    impact: 'Ensured 100% compliance alignment during patient check-in and cut wait times by 4 minutes per patient.',
    imageSeed: 'healthcare',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Growth Starter',
    price: '$79',
    period: '/mo',
    description: 'Perfect for growing businesses seeking to organize basic department knowledge and streamline onboarding.',
    features: [
      'Up to 15 SOP / Handbook documents',
      'Max 250,000 words in knowledge base',
      '2 Department Knowledge Silos (Public & Operations)',
      'Web widget and Slack integration',
      'Standard citation matching (Page-level)',
      'Next-day email customer support',
    ],
    ctaText: 'Start Free Trial',
  },
  {
    name: 'SME Professional',
    price: '$199',
    period: '/mo',
    description: 'Our most popular plan. Ideal for established SMEs requiring strict role-based access controls and rich integrations.',
    features: [
      'Up to 100 SOP / Handbook documents',
      'Max 2,500,000 words in knowledge base',
      '8 segregated Department Silos with RBAC',
      'Slack, MS Teams, and Discord integrations',
      'Precision citation matching (Line & Paragraph)',
      'Priority 1-hour support SLA',
      'AI-driven gap analysis (identifies missing SOPs)',
    ],
    isPopular: true,
    ctaText: 'Get Started Today',
  },
  {
    name: 'Enterprise Custom',
    price: 'Custom',
    period: '',
    description: 'For companies requiring bank-grade security, custom on-premise AI deployments, and dedicated account management.',
    features: [
      'Unlimited documents and word counts',
      'Unlimited segregated Department Silos',
      'Custom LLM model fine-tuning & local hosting options',
      'Dedicated Customer Success Manager',
      'Custom API/Webhook integrations with internal ERPs',
      'SOC-2 / HIPAA compliance agreement signing',
      'Custom training workshop for all staff',
    ],
    ctaText: 'Book Enterprise Consultation',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does SkillTrain AI ensure it does not hallucinate or make up company rules?',
    answer: 'Unlike public AI chatbots like standard ChatGPT which pull from general internet data, SkillTrain AI uses a strict Retrieval-Augmented Generation (RAG) framework. This restricts the chatbot to only formulate answers using the text found inside your uploaded SOPs. If a query cannot be answered by your documents, the bot clearly states "No relevant company SOP found" rather than guessing.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'Is our sensitive company data safe with Synergy?',
    answer: 'Absolutely. We enforce bank-grade security protocols. All documents are encrypted in transit using TLS 1.3 and at rest using AES-256. Furthermore, your custom knowledge database is segregated in isolated secure containers and is never used to train public models or shared with any third party.',
    category: 'security',
  },
  {
    id: 'faq-3',
    question: 'What file formats can we upload, and is there a file size limit?',
    answer: 'We support PDF, DOCX (Microsoft Word), XLSX (Excel spreadsheets), TXT, Markdown, and direct Notion imports. File sizes can be up to 50MB per document on the SME Professional plan, which comfortably covers a 500-page employee manual or machinery guide.',
    category: 'integration',
  },
  {
    id: 'faq-4',
    question: 'Can we restrict access so general employees cannot see sensitive HR or payroll docs?',
    answer: 'Yes. Our SME Professional and Enterprise plans include Role-Based Access Control (RBAC). You can define user roles (e.g., Guest, Staff, Operations, Management) and map specific folders or document groups only to those designated groups.',
    category: 'security',
  },
  {
    id: 'faq-5',
    question: 'Do we need a developer or technical expert to install this?',
    answer: 'No developer needed! SkillTrain AI was built specifically for non-technical managers. Our step-by-step wizard allows you to upload documents, customize the chatbot name, and generate a Slack app or web-widget link in less than 10 minutes without writing a single line of code.',
    category: 'integration',
  },
  {
    id: 'faq-6',
    question: 'Is there a free trial, and can we cancel anytime?',
    answer: 'Yes! We offer a fully functional 14-day free trial of the Growth Starter and SME Professional plans. No credit card is required to sign up, and you can cancel or change your plan at any time with a single click from your billing settings.',
    category: 'pricing',
  },
];

export const MOCK_SOURCES: DocumentSource[] = [
  {
    id: 'src-1',
    name: 'SOP-Retail-Returns-Refunds.pdf',
    type: 'sop',
    contentCount: '12 Pages (2,450 words)',
    lastUpdated: 'Updated 2 weeks ago',
  },
  {
    id: 'src-2',
    name: 'SME-Employee-Handbook-2026.pdf',
    type: 'handbook',
    contentCount: '84 Pages (18,200 words)',
    lastUpdated: 'Updated Jan 2026',
  },
  {
    id: 'src-3',
    name: 'Policy-RemoteWork-ExpenseGuidelines.docx',
    type: 'policy',
    contentCount: '5 Pages (1,120 words)',
    lastUpdated: 'Updated 3 months ago',
  },
  {
    id: 'src-4',
    name: 'IT-Security-WiFi-Credentials.faq',
    type: 'faq',
    contentCount: '1 Page (450 words)',
    lastUpdated: 'Updated yesterday',
  },
];

export interface QA_Pair {
  triggerKeywords: string[];
  question: string;
  answer: string;
  sources: string[];
  confidence: number;
}

export const MOCK_CHATS_QA: QA_Pair[] = [
  {
    triggerKeywords: ['return', 'refund', 'customer return', 'refund policy', 'defective'],
    question: 'What is our policy for customer returns on opened products?',
    answer: 'According to our "SOP-Retail-Returns-Refunds.pdf" (Section 3.2, Page 4), opened items can be returned within 14 days of purchase subject to the following strict guidelines:\n\n1. **Receipt Verification**: Check if the client has a physical invoice or a loyalty account record.\n2. **Defect Assessment**: If the product is defective, issue a full refund to the original payment method or a 1:1 product swap.\n3. **Non-Defective Opened Goods**: If returned due to change of mind, a **15% restocking fee** is applied. Refund is issued strictly as store credit (Gift Voucher format).\n4. **Exceptions**: Software, ear-pods, and hygiene-sealed items cannot be refunded once opened under any circumstances.',
    sources: ['SOP-Retail-Returns-Refunds.pdf • Page 4, Para 3', 'SOP-Retail-Returns-Refunds.pdf • Section 3.2 (Restocking)'],
    confidence: 98,
  },
  {
    triggerKeywords: ['sick', 'leave', 'leave policy', 'medical certificate', 'illness', 'absent'],
    question: 'How do I submit sick leave, and do I need a medical certificate?',
    answer: 'As detailed in the "SME-Employee-Handbook-2026.pdf" (Chapter 5: Paid Time Off, Page 22):\n\n• **Notification Window**: You must inform your direct line manager via Slack or Email at least **2 hours before your shift start time** (or by 8:00 AM for standard 9:00 AM roles).\n• **Medical Certificate (MC)**: An official MC is mandatory if you are absent for **two (2) or more consecutive days**.\n• **Single-Day Absences**: Single-day sick leaves can be self-certified up to 3 times per calendar year. Beyond that, a doctor\'s note is required to claim paid sick leave.',
    sources: ['SME-Employee-Handbook-2026.pdf • Page 22, Chapter 5', 'SME-Employee-Handbook-2026.pdf • Paid Leave Matrix (Appendix B)'],
    confidence: 96,
  },
  {
    triggerKeywords: ['expense', 'travel', 'reimbursement', 'receipt', 'uber', 'hotel', 'flight'],
    question: 'What is the maximum reimbursement for business trip meals?',
    answer: 'Under "Policy-RemoteWork-ExpenseGuidelines.docx" (Section 4: Travel & Entertainment Reimbursements):\n\n• **Daily Meal Allowance Cap**: Maximum daily reimbursement is **$75.00 USD** total, allocated as follows:\n  - Breakfast: up to $15.00\n  - Lunch: up to $20.00\n  - Dinner: up to $40.00\n• **Requirement**: Itemized physical or digital receipts are strictly required for any individual expense exceeding $10.00. Credit card slips alone are not accepted as proof.\n• **Alcohol Exclusion**: Alcoholic beverages are strictly excluded from meal reimbursements unless authorized in advance by a VP for client entertainment purposes.',
    sources: ['Policy-RemoteWork-ExpenseGuidelines.docx • Page 2, Section 4.1', 'Finance Expense Appendix • Rev 2026'],
    confidence: 95,
  },
  {
    triggerKeywords: ['wifi', 'wi-fi', 'office internet', 'password', 'guest network'],
    question: 'What are the office Wi-Fi credentials for staff and guests?',
    answer: 'Per "IT-Security-WiFi-Credentials.faq" (IT Onboarding, Page 1):\n\n• **Staff Network**: Connect to **"Synergy_Secure_Staff"** using WPA3 security. Use your company email login credentials via Active Directory.\n• **Guest Network**: Connect to **"Synergy_Guest"**. \n• **Current Guest Password**: `SynergyWelcome2026!` (Note: This password rotates on the 1st of every month. For security reasons, do not share this password on public chats).',
    sources: ['IT-Security-WiFi-Credentials.faq • Internal IT Assets Ref', 'Employee Handbook • Appendix F: CyberSecurity'],
    confidence: 99,
  },
];
