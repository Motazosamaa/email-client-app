const exampleCompanies = [
  {
    name: "A 1 Fire Equipment Co., Inc.",
    contacts: [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: {
          street: '123 Main St',
          city: 'Cityville',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about John.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
      {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        phone: '987-654-3210',
        address: {
          street: '456 Oak St',
          city: 'Townsville',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Alice.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Accurate, Inc.",
    contacts: [
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '555-555-5555',
        address: {
          street: '789 Pine St',
          city: 'Villagetown',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Jane.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "AAdvantage Laundry Systems",
    contacts: [
      {
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        phone: '777-888-9999',
        address: {
          street: '101 Elm St',
          city: 'Hamletville',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Bob.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
      {
        name: 'Eva Williams',
        email: 'eva.williams@example.com',
        phone: '444-333-2222',
        address: {
          street: '202 Cedar St',
          city: 'Riverside',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Eva.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "ABC Supply Co., Inc.",
    contacts: [
      {
        name: 'Charlie Davis',
        email: 'charlie.davis@example.com',
        phone: '111-222-3333',
        address: {
          street: '303 Maple St',
          city: 'Countryside',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Charlie.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Accurate Elastomer Products",
    contacts: [
      {
        name: 'David Smith',
        email: 'david.smith@example.com',
        phone: '555-123-4567',
        address: {
          street: '789 Oak St',
          city: 'Suburbia',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about David.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Epicor Software",
    contacts: [
      {
        name: 'Emma White',
        email: 'emma.white@example.com',
        phone: '987-654-3210',
        address: {
          street: '101 Pine St',
          city: 'Metropolis',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Emma.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Action Stainless & Alloys, Inc.",
    contacts: [
      {
        name: 'Frank Johnson',
        email: 'frank.johnson@example.com',
        phone: '777-888-9999',
        address: {
          street: '202 Cedar St',
          city: 'Megacity',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Frank.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Air Products & Chemicals, Inc.",
    contacts: [
      {
        name: 'Grace Davis',
        email: 'grace.davis@example.com',
        phone: '111-222-3333',
        address: {
          street: '303 Maple St',
          city: 'Urbanville',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Grace.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Air System Components, Inc.",
    contacts: [
      {
        name: 'Henry Smith',
        email: 'henry.smith@example.com',
        phone: '555-123-4567',
        address: {
          street: '789 Oak St',
          city: 'City Central',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Henry.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Aloe Laboratory, Inc.",
    contacts: [
      {
        name: 'Isabel Brown',
        email: 'isabel.brown@example.com',
        phone: '987-654-3210',
        address: {
          street: '101 Pine St',
          city: 'Downtown',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Isabel.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Trident Metals",
    contacts: [
      {
        name: 'Jack Davis',
        email: 'jack.davis@example.com',
        phone: '777-888-9999',
        address: {
          street: '202 Cedar St',
          city: 'Financial District',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Jack.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Curbell Plastics",
    contacts: [
      {
        name: 'Katherine White',
        email: 'katherine.white@example.com',
        phone: '111-222-3333',
        address: {
          street: '303 Maple St',
          city: 'Tech Park',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Katherine.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "American Sling Co.",
    contacts: [
      {
        name: 'Liam Johnson',
        email: 'liam.johnson@example.com',
        phone: '555-123-4567',
        address: {
          street: '789 Oak St',
          city: 'Science Hub',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Liam.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "East Texas Asphalt Co.",
    contacts: [
      {
        name: 'Mia Davis',
        email: 'mia.davis@example.com',
        phone: '987-654-3210',
        address: {
          street: '101 Pine St',
          city: 'Industrial Area',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Mia.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Libra Industries",
    contacts: [
      {
        name: 'Noah Smith',
        email: 'noah.smith@example.com',
        phone: '777-888-9999',
        address: {
          street: '202 Cedar St',
          city: 'Research Zone',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Noah.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Bandag",
    contacts: [
      {
        name: 'Olivia White',
        email: 'olivia.white@example.com',
        phone: '111-222-3333',
        address: {
          street: '303 Maple St',
          city: 'Business District',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Olivia.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  {
    name: "Bay Area Crane Service, Inc.",
    contacts: [
      {
        name: 'Peter Brown',
        email: 'peter.brown@example.com',
        phone: '555-123-4567',
        address: {
          street: '789 Oak St',
          city: 'Innovation Park',
          state: 'California',
          zip: '90001'
        },
        notes: 'Some notes about Peter.',
        status: Math.random() < 0.5 ? 'Active' : 'Inactive',
        lastView: getRandomDate(),
      },
    ],
  },
  // Add similar entries for other companies
];

export default exampleCompanies;


function getRandomDate() {
  const currentDate = new Date();
  const lastYear = currentDate.getFullYear() - 1;
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 28) + 1; // Assume 28 days in a month for simplicity
  const randomHour = Math.floor(Math.random() * 24);
  const randomMinute = Math.floor(Math.random() * 60);

  return new Date(lastYear, randomMonth, randomDay, randomHour, randomMinute);
}
