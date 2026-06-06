/**
 * User guide content — edit this file to add or change articles.
 *
 * To add a new page:
 * 1. Add `{ id: 'my-topic', label: 'My topic' }` to `navItems` (order = sidebar order).
 * 2. Add a matching key on `articles` with: title, intro (optional), steps[], note (optional),
 *    footer (optional), relatedLink (optional) { label, href } for your own links later.
 */

export const guideMeta = {
  title: 'Company profile setup',
  productName: 'User Guide',
  tagline: 'Internal documentation',
};

export const navItems = [
  { id: 'overview', label: 'Overview settings' },
  { id: 'address', label: 'Address settings' },
  { id: 'department', label: 'Department settings' },
  { id: 'designation', label: 'Designation settings' },
  { id: 'announcements', label: 'Announcements settings' },
  { id: 'policies', label: 'Policies settings' },
  { id: 'admin', label: 'Admin settings' },
  { id: 'statutory', label: 'Statutory settings' },
  { id: 'reporting-manager', label: 'Change reporting manager' },
];

export const articles = {
  overview: {
    title: 'Build a professional company profile through the overview settings',
    intro:
      'Easily create a professional company profile by customizing the overview settings. Showcase your company’s key details and build a strong first impression.',
    steps: [
      {
        title: 'Step 1 — Overview tab',
        body: 'Open Company Profile, then the profile tab. Under “Overview”, add your company’s required details:',
        bullets: [
          'Company brand name',
          'Company mail ID',
          'Customized domain name (if applicable)',
          'Company website',
          'Industry type',
        ],
      },
      {
        title: 'Step 2 — Social profiles',
        body: 'Link your company’s social media profiles.',
      },
    ],
  },
  address: {
    title: 'Address settings',
    intro:
      'Accurate address settings are essential for a professional company profile. Keep contact information clear and up to date.',
    steps: [
      { title: 'Step 1', body: 'Select address.' },
      { title: 'Step 2', body: 'Use the edit (pencil) option to fill in the required address details.' },
      {
        title: 'Step 3',
        body: 'Add registered office, corporate office, or other address types as your process requires.',
      },
    ],
    note: 'You can import or upload a spreadsheet with address details if your product supports it.',
  },
  department: {
    title: 'Department settings',
    intro:
      'Define departments clearly: names, short descriptions, heads, and reporting structure so people can understand how the organization fits together.',
    steps: [
      {
        title: 'Step 1',
        body: 'Open Company Profile, then the profile tab, and go to “Department”.',
      },
      {
        title: 'Step 2',
        body: 'Assign or select employee counts per department using the directory (or equivalent) if available.',
      },
      { title: 'Step 3', body: 'Add sub-departments using the add control.' },
      { title: 'Step 4', body: 'Add and edit departments as needed.' },
      { title: 'Step 5', body: 'Save your changes.' },
    ],
    footer:
      'After saving, use the preview (if available) to review departments, sub-departments, and headcount.',
  },
  designation: {
    title: 'Designation settings',
    intro:
      'Define job titles and hierarchy so roles, seniority, and reporting lines are clear.',
    steps: [
      {
        title: 'Step 1',
        body: 'Open Company Profile, then the profile tab, and go to “Designation”.',
      },
      { title: 'Step 2', body: 'Select or create a designation.' },
      {
        title: 'Step 3',
        body: 'Enter required information, including title.',
      },
      { title: 'Step 4', body: 'Add and edit designations as needed.' },
      { title: 'Step 5', body: 'Save your changes.' },
      {
        title: 'Grades (optional)',
        body: 'If your organization uses grades, enable them with the toggle, add grade levels, and save.',
      },
    ],
  },
  announcements: {
    title: 'Announcements settings',
    intro:
      'Publish important news and updates. Configure how announcements are shown, who sees them, and any length or scheduling rules your system uses.',
    steps: [
      {
        title: 'Step 1',
        body: 'Open Company Profile, then the profile tab, and go to “Announcements”.',
      },
      { title: 'Step 2', body: 'Choose the option to create or post an announcement.' },
      {
        title: 'Step 3',
        body: 'Compose the announcement for employees. It may appear on the main dashboard and in other employee surfaces (follow your product’s character limits).',
      },
      { title: 'Step 4', body: 'Publish or post the announcement.' },
      {
        title: 'Step 5',
        body: 'From the active list, edit or remove announcements as needed.',
      },
    ],
  },
  policies: {
    title: 'Policies settings',
    intro:
      'Publish organization policies so employees can read them. Typical actions: add, edit, view, download, and archive or delete.',
    steps: [
      {
        title: 'Step 1',
        body: 'Open Company Profile, then the profile tab, and go to “Policies”.',
      },
      {
        title: 'Step 2',
        body: 'Add policies for your organization; manage them from the list.',
      },
      {
        title: 'Step 3',
        body: 'When adding, complete title, description, attach files if needed, then save.',
      },
      { title: 'Step 4', body: 'Use e-sign or acknowledgment flows if your product provides them.' },
      {
        title: 'Step 5',
        body: 'After updates, employees may need to acknowledge policies; track pending acknowledgments in your admin views.',
      },
    ],
  },
  admin: {
    title: 'Admin settings',
    intro: 'Configure executive and HR admin roles for the company profile.',
    steps: [
      {
        title: 'Step 1',
        body: 'Open Company Profile, then the profile tab under the “Admin” section.',
      },
      {
        title: 'Step 2',
        body: 'Set or update the primary executive (e.g. CEO) contact.',
      },
      {
        title: 'Step 3',
        body: 'Add or remove HR administrators.',
      },
    ],
    note: 'You can extend admin access to department managers and revoke it when no longer needed.',
  },
  statutory: {
    title: 'Statutory settings',
    intro:
      'Maintain statutory and registration details. Some fields may be pre-filled from public registers (e.g. tax or company IDs, depending on region).',
    steps: [
      {
        title: 'Step 1',
        body: 'Open Company Profile, go to “Statutory”, and choose edit.',
      },
      {
        title: 'Step 2',
        body: 'Enter or confirm statutory information; review any pre-filled values.',
      },
      { title: 'Step 3', body: 'Attach required documents.' },
      {
        title: 'Step 4',
        body: 'Add directors, auditors, company secretaries, or other roles your compliance process requires.',
      },
    ],
  },
  'reporting-manager': {
    title: 'Change the reporting manager / team manager for an employee',
    intro:
      'To update who an employee reports to, use the directory and bulk or single-edit tools your HR system provides.',
    steps: [
      { title: 'Step 1', body: 'Sign in with an account that can manage org structure.' },
      { title: 'Step 2', body: 'Open Directory (or Employees) from the main menu.' },
      {
        title: 'Step 3',
        body: 'Select the employee or employees whose manager should change.',
      },
      {
        title: 'Step 4',
        body: 'Use bulk edit when updating many people at once.',
      },
      {
        title: 'Step 5',
        body: 'Search and select the new reporting manager.',
      },
      {
        title: 'Step 6',
        body: 'Set the effective date for the new reporting line.',
      },
      { title: 'Step 7', body: 'Save to apply the changes.' },
    ],
    footer: 'Verify the org chart or directory after saving to confirm the new structure.',
  },
};
