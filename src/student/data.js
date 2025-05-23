export const myApplicationtabs = [
  {
    tabName: "Shortlisting",
    cardDetails: [
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "University of Glasgow",
        program: "Undergraduate (March 2025)",
        course: "Accountancy & Finance (BAcc)",
      },
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "Harvard University",
        program: "Undergraduate (Sep 2025)",
        course: "Computer Science (BSc)",
      },
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "MIT",
        program: "Undergraduate (Fall 2025)",
        course: "Mechanical Engineering (BEng)",
      },
    ],
  },
  {
    tabName: "Verifying Documents",
    cardDetails: [
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "Harvard University",
        program: "Undergraduate (Sep 2025)",
        course: "Computer Science (BSc)",
      },
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "Harvard University",
        program: "Undergraduate (Sep 2025)",
        course: "Computer Science (BSc)",
      },
    ],
  },
  {
    tabName: "STU",
    cardDetails: [
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "MIT",
        program: "Undergraduate (Fall 2025)",
        course: "Mechanical Engineering (BEng)",
      },
    ],
  },
  {
    tabName: "Awaiting Response",
    cardDetails: [
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "University of Glasgow",
        program: "Undergraduate (March 2025)",
        course: "Accountancy & Finance (BAcc)",
      },
    ],
  },
  {
    tabName: "Rejected",
    cardDetails: [
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "University of Oxford",
        program: "Undergraduate (Jan 2025)",
        course: "Law (LLB)",
      },
    ],
  },
  {
    tabName: "Offer Letter Received",
    cardDetails: [
      {
        imgUrl: "studentColImg",
        frameImgUrl: "studentColFrame",
        university: "Stanford University",
        program: "Undergraduate (Aug 2025)",
        course: "Engineering (BEng)",
      },
    ],
  },
];

export const tabColors = {
  Shortlisting: "bg-[#FECCE1]",
  "Verifying Documents": "bg-[#FFFCC2]",
  STU: "bg-[#BAE6FF]",
  "Awaiting Response": "bg-[#D4D4D8]",
  Rejected: "bg-[#DB4437]",
  "Offer Letter Received": "bg-[#DBFDEC]",
};

export const transactionsDetails = [
  {
    date: "December 20, 2024",
    amount: "$ 2000.50",
    description: "Paid to Harvard University",
    mode: "UPI",
    invoice: false,
  },
  {
    date: "December 20, 2024",
    amount: "$ 2000.50",
    description: "Paid to Harvard University",
    mode: "Cash",
    invoice: true,
  },
  {
    date: "December 20, 2024",
    amount: "$ 2000.50",
    description: "Paid to Harvard University",
    mode: "Net Banking",
    invoice: true,
  },
  {
    date: "December 20, 2024",
    amount: "$ 2000.50",
    description: "Paid to Harvard University",
    mode: "RTGS",
    invoice: true,
  },
];

export const additionalServiceTabColors = {
  "Not Opted Services": "bg-[#E4E4E7]",
  "To Start Services": "bg-[#FECCE1]",
  "In Progress Services": "bg-[#EDBD05]",
  "Completed Services": "bg-[#44E495]",
};

export const additionalServiceDetails = [
  {
    tabName: "Not Opted Services",
    cardDetails: [
      {
        serviceName: "Accommodation",
      },
      {
        serviceName: "Loan Assistance",
      },
      {
        serviceName: "Insurance",
      },
      {
        serviceName: "SIM Card",
      },
      {
        serviceName: "Airport Transfer",
      },
    ],
  },
  {
    tabName: "To Start Services",
    cardDetails: [
      {
        serviceName: "Accommodation",
      },
      {
        serviceName: "Insurance Service",
      },
      {
        serviceName: "Insurance",
      },
    ],
  },
  {
    tabName: "In Progress Services",
    cardDetails: [
      {
        serviceName: "Language Prep",
      },
      {
        serviceName: "Test Prep",
      },
    ],
  },
  {
    tabName: "Completed Services",
    cardDetails: [],
  },
];
