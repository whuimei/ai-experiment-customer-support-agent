// Hardcoded credentials for demo
export const HARDCODED_CREDENTIALS = {
  username: 'bob',
  password: 'demo'
};

// Hardcoded user profile
export const DEMO_USER = {
  id: 'user-001',
  name: 'Bob User',
  email: 'bob@demo.com',
  phone: '+1 (555) 123-4567',
  memberSince: 'January 2024',
  address: '123 Main Street, Anytown, CA 90210'
};

// Hardcoded kit requests
export const DEMO_REQUESTS = [
  {
    id: 'KR-2024-001',
    status: 'Pending Approval',
    date: '2024-10-15',
    submittedDate: '2024-10-15T09:30:00Z',
    address: '123 Main Street, Anytown, CA 90210',
    quizResponses: {
      age18OrOlder: true,
      hasHair: true,
      cancerDiagnosis: 'No'
    }
  },
  {
    id: 'KR-2024-002',
    status: 'Kit Shipped',
    date: '2024-10-01',
    submittedDate: '2024-10-01T14:20:00Z',
    shippedDate: '2024-10-08T10:00:00Z',
    trackingNumber: 'USPS9400111899223344556677',
    address: '123 Main Street, Anytown, CA 90210',
    estimatedDelivery: '2024-10-12'
  },
  {
    id: 'KR-2024-003',
    status: 'Sample Received',
    date: '2024-09-20',
    submittedDate: '2024-09-20T11:15:00Z',
    shippedDate: '2024-09-25T09:00:00Z',
    receivedDate: '2024-10-05T13:45:00Z',
    address: '123 Main Street, Anytown, CA 90210'
  }
];

// Status badge colors
export const STATUS_COLORS = {
  'Pending Approval': { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' },
  'Kit Shipped': { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-300' },
  'Sample Received': { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
  'In Processing': { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-300' },
  'Completed': { bg: 'bg-green-200', text: 'text-green-900', border: 'border-green-400' },
  'Rejected': { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' }
};


