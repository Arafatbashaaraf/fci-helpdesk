/** Single source for Employee / Admin help articles (UI + search). */
export const HELP_KB = {
  'Employee Help': {
    Account: [
      {
        title: 'How do I log in to FCI?',
        body: [
          'Logging in to FCI',
          'Step 1: Enter your email address or username.',
          'Step 2: Enter your password (click the eye icon to show or hide it).',
          'Step 3: Click LOG IN (see guide below).',
        ],
        image: '/employee-help-login.png?v=0726',
        imageAlt:
          'FCI Sign in page with email, password, LOG IN button, and numbered guide',
        imageWide: true,
      },
    ],
    Dashboard: [
      {
        title: 'Transaction Dashboard',
        body: [
          { heading: 'What is Transaction Dashboard?' },
          'Transaction Dashboard is your payment overview — see collections, dues, renewals, and other transaction activity in one place instead of opening each payment screen separately.',
          { heading: 'How to open Transaction Dashboard' },
          'Step 1: Open the main menu on the left. Use Search Menu at the top if you need to find a section quickly.',
          'Step 2: Click Dashboard (grid icon, subtitle Dashboard) to expand it — you will see Main Dashboard and Transaction Dashboard.',
          'Step 3: Click Transaction Dashboard to open the page (see the screenshot below).',
        ],
        image: '/employee-help-transaction-dashboard-menu.png',
        imageAlt:
          'Dashboard menu expanded with Transaction Dashboard highlighted in the sidebar',
        imageNarrow: true,
        bodyContinue: [
          { heading: 'Grand Total Summary' },
          'At the top, choose the time period (for example THIS WEEK) to see transactions for that range — totals update when you change the period.',
          'Use Service Type to filter by All or one service. Pick ALL PAYMENTS, NEW, or RENEWAL to focus the view. Click Download to export the report.',
          'The cards show how much was collected by mode — Cash, Card, UPI, Cheque, and Online — each with its count. The TOTAL card is the grand total amount and transaction count for your filters.',
        ],
        image2: '/employee-help-transaction-dashboard-summary.png?v=0736',
        image2Alt:
          'Grand Total Summary with filters, payment buttons, Cash, Card, UPI, Cheque, Online, Total cards, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Detailed Collection Summary' },
          'Below Grand Total Summary, Detailed Collection Summary breaks collections down further — not just single payment modes, but split payments too.',
          'Each card shows the amount collected and how many payments used that mode: Cash only, Card only, UPI only, Cheque, and Online.',
          'Split Pay cards show when a member paid using two modes in one transaction — for example Cash + UPI with the amount split on each side. The TOTAL card is Collection Total with the full amount and payment count for your selected period.',
        ],
        image3: '/employee-help-transaction-dashboard-detailed-collection.png?v=0742',
        image3Alt:
          'Detailed Collection Summary with Cash, Card, UPI, Split Pay, Cheque, Online, Collection Total, and numbered guide',
        image3Wide: true,
        bodyAfterImage3: [
          { heading: 'Discount Summary' },
          'Discount Summary shows how much discount was given in the selected period. Normal Discount is regular discount on payments. Pending Close Discount is discount applied when closing a pending due. Total Discount is the combined discount amount.',
          { heading: 'Due Summary' },
          'Due Summary tracks money still owed. Due Amount is total outstanding as on the date shown. Pending Collection is due amounts collected as part payments. Pending Close Amount is the total cleared when members finish their full pending balance.',
        ],
        image4: '/employee-help-transaction-dashboard-discount-due.png?v=0749',
        image4Alt:
          'Discount Summary and Due Summary with normal discount, pending close, due amount, pending collection, and numbered guide',
        image4Wide: true,
      },
    ],
    Lead: [
      {
        title: 'How do I add a new lead?',
        body: [
          { heading: 'What is a lead?' },
          'A lead is a potential customer who has shown interest in joining your gym but has not yet taken a membership.',
          'Leads can be generated from various sources such as:',
          {
            list: [
              { icon: '🚶', text: 'Walk-in Enquiries – Visitors who come to the gym for information.' },
              { icon: '📞', text: 'Phone Calls – People who contact the gym by phone.' },
              { icon: '📱', text: 'Social Media Marketing – Enquiries received through Facebook, Instagram, WhatsApp, Google Ads, etc.' },
              { icon: '🌐', text: 'Website Enquiries – Visitors who submit enquiry forms online.' },
              { icon: '👥', text: 'Referrals – Prospects referred by existing members.' },
            ],
          },
          'The Lead Management system helps staff record customer details, track follow-ups, monitor enquiry sources, and convert interested leads into gym members. This helps improve membership sales and measure the effectiveness of marketing campaigns.',
          { heading: 'Why Add Leads?' },
          'Recording leads helps your team:',
          {
            plain: true,
            list: [
              'Track all potential members.',
              'Follow up through calls, SMS, or WhatsApp.',
              'Monitor conversion rates.',
              'Measure marketing campaign performance.',
              'Convert leads into members easily.',
            ],
          },
          { heading: 'Information to Capture' },
          'When creating a lead, save:',
          {
            plain: true,
            list: [
              'Full Name',
              'Mobile Number',
              'Gender',
              'Age (Optional)',
              'Interested Package',
              'Lead Source',
              'Follow-up Date',
              'Notes/Remarks',
            ],
          },
          { heading: 'Example' },
          {
            plain: true,
            list: [
              'Lead Name: Priya Sharma',
              'Source: Instagram Advertisement',
              'Interested In: Weight Loss Package',
              'Status: Follow-up Required',
              'Next Follow-up: 25-Jun-2026',
            ],
          },
          'When Priya joins the gym, simply click Convert to Member, and her details will be transferred automatically.',
          { heading: 'How to add a new lead' },
          'Step 1: Open the left menu, expand Members, then click Add Lead (see guide below).',
        ],
        image: '/employee-help-add-lead-members-menu.png?v=0620',
        imageAlt:
          'Members menu expanded with Add Lead highlighted and guide callout',
        imageWide: true,
        bodyContinue: [
          'Step 2: Fill Lead Information — follow the arrows in the guide for Name, Mobile, Date of Birth, Occupation, Address, Email, Walk-in Date, Expected Join Date *, and Personal Training Required (see screenshot below).',
        ],
        image2: '/employee-help-add-lead-information-guide.png?v=0614',
        image2Alt:
          'Add Lead Lead Information form with Name, Mobile, Email, dates, and numbered guide',
        image2Wide: true,
        bodyAfterImage3: [
          { heading: 'Package Information' },
          'Package Information tells you what service and plan the lead wants. Service Type is the gym service they need, Package Interested is the term they prefer, and Fitness Goal is their main training target.',
          'Step 3: Select Service Type, Package Interested, and Fitness Goal from the dropdowns.',
          { heading: 'Additional Information' },
          'Additional Information tracks how the lead found your gym and who is handling them. Referral Source is where they heard about you, Staff Name is who is following the lead, and Customer Service Satisfaction is their experience so far.',
          'Step 4: Select Referral Source, Staff Name, and Customer Service Satisfaction.',
          'When every field is complete, submit the lead so it saves in FCI and your team can follow up.',
          'Step 5: Click SUBMIT LEAD at the bottom (see guide below).',
        ],
        image3: '/employee-help-add-lead-package-additional-guide.png?v=0623',
        image3Alt:
          'Package Information and Additional Information with Service Type, Fitness Goal, Referral, Staff, Satisfaction, SUBMIT LEAD, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Manage Lead',
        body: [
          { heading: 'What is Manage Lead?' },
          'Manage Lead is the list of every lead saved in FCI. Search by name or phone and open a record to view or update details.',
          { heading: 'How to open Manage Lead' },
          'Step 1: Open Members → Add Lead. On the Add Lead page (Home / Add Lead), click MANAGE LEAD at the top right (see guide below).',
        ],
        image: '/employee-help-manage-lead-button.png?v=0621',
        imageAlt: 'Add Lead page with MANAGE LEAD button and guide callout',
        imageWide: true,
        bodyContinue: [
          { heading: 'Manage Page' },
          { heading: 'What is Manage Lead?' },
          'Lead Manage is the page where every lead saved in FCI appears in one list — staff use it to search and filter leads, review contact and visit details, and open ADD LEAD when a new walk-in needs to be registered.',
          'Step 2: After you click MANAGE LEAD, the Lead Manage page opens with your saved lead list (see guide below).',
          'Step 3: Use Service Type to filter leads by category (for example, Gym or Personal Training).',
          'Step 4: Use Search Lead to find a lead by name, mobile number, or other details.',
          'Step 5: Click ADD LEAD at the top right if you need to create a new lead from this page.',
          'Step 6: In the table, check Name, Address, Mobile, Email, Walk-in Date, Date of Birth, and Occupation for each lead.',
        ],
        image2: '/employee-help-manage-lead-page.png?v=0620',
        image2Alt:
          'Lead Manage page with Service Type, Search Lead, ADD LEAD, lead table, and numbered guide',
        image2Wide: true,
      },
    ],
    'Add Members': [
      {
        title: 'Add a New Member',
        body: [
          { heading: 'How to open Add Member' },
          'Add Member is where you register a new person as a gym member in FCI. You enter personal details, health info, lifestyle habits, and body measurements before moving to payment.',
          'Every new member starts here — open Members in the left menu and begin the Member Info form.',
          'Step 1: Expand Members → click Add Member (see screenshot below).',
        ],
        image: '/employee-help-add-member-sidebar.png',
        imageAlt: 'Members menu expanded with Add Member highlighted',
        imageNarrow: true,
        bodyContinue: [
          { heading: 'Member Info page' },
          'After you click Add Member, the Member Info page opens (Home / Member info). This is the main registration form — complete each section below in order before you save.',
          { heading: 'Select Lead' },
          'Select Lead links this member to someone who already came in as a lead. Picking the correct lead can auto-fill name, phone, and other details so you do not re-type everything.',
          'Step 2: Open the Select Lead dropdown and choose the right lead name.',
          { heading: 'Personal Information' },
          'Personal Information holds the member’s core details — ID, name, phone, email, date of birth, blood group, Aadhar, gender, marital status, and address. Keep this accurate for billing, follow-ups, and member records.',
          'Step 3: Fill every Personal Information field — follow each arrow in the guide (see screenshot below).',
        ],
        image2: '/employee-help-add-member-information-guide.png',
        image2Alt:
          'Member Info guide with arrows explaining Select Lead and Personal Information fields',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Referral Source' },
          'Referral Source records how the member heard about your gym — google, walk-in, friend, social media, and so on. This helps you track which marketing brings new members.',
          'Step 4: Open Referral Source and select the option the member tells you.',
          { heading: 'Preferred Slot Timing' },
          'Preferred Slot Timing is when the member plans to visit the gym. Session picks the time band; Start Time and End Time narrow down their preferred hours inside that band.',
          'Step 5: Choose Morning, Day, Evening, or Night — then set Start Time and End Time.',
          { heading: 'Health Information' },
          'Health Information flags medical conditions so trainers can plan safe workouts. Tick every box that applies — diabetes, heart issues, injury, and others.',
          'Step 6: Select all health conditions that apply to the member (see guide below).',
        ],
        image3: '/employee-help-add-member-extra-sections-guide.png',
        image3Alt:
          'Guide for Referral Source, Preferred Slot Timing, and Health Information with numbered arrows',
        image3Wide: true,
        bodyAfterImage3: [
          { heading: 'Life Style Questionnaire' },
          'The Life Style Questionnaire collects habits and fitness preferences — smoking, alcohol, food, daily activity, fitness goals, and workout type. Trainers use this to build a suitable plan for the member.',
          'Step 7: Click ADD DATA and answer each question — follow the arrows in the guide (see screenshot below).',
        ],
        image4: '/employee-help-add-member-lifestyle-guide.png',
        image4Alt:
          'Life Style Questionnaire guide with arrows for smoking, alcohol, food, lifestyle, fitness goals, and workouts',
        image4Wide: true,
        bodyAfterImage4: [
          { heading: 'Measurements in inchs' },
          'Measurements record the member’s body size for tracking progress over time. Most fields use inches; Height uses cm and Weight uses kgs — read each label before you type.',
          'Step 8: Enter Shoulders, Arms, Chest, Abdomen, Thigh, Calf, Waist, Hip, Height, and Weight in the form.',
          'When every section is complete, save the member and continue to payment. SAVE AND PROCEED stores all details and opens the Transaction page for the next step.',
          'Step 9: Click SAVE AND PROCEED at the bottom (see guide below).',
        ],
        image5: '/employee-help-add-member-measurements-guide.png',
        image5Alt:
          'Measurements guide with field labels in inches, Height cm, Weight kgs, and SAVE AND PROCEED button',
        image5Wide: true,
      },
      {
        title: 'How do I manage page?',
        body: [
          'On Member Info (Home / Member info), click MANAGE PAGE at the top right — the members list opens so you can view everyone you added.',
          'Search by name or member ID, then open a member to see their full details.',
        ],
        image: '/employee-help-manage-page-button.png?v=0633',
        imageAlt:
          'Member Info page with MANAGE PAGE button highlighted and numbered guide',
        bodyContinue: [
          'After you add a new member, you can see them in the Member Manage list below — search by name or member ID to find them quickly.',
        ],
        image2: '/employee-help-member-manage-list.png?v=0642',
        image2Alt:
          'Member Manage page with search, member list, Excel download, and numbered guide',
        image2Wide: true,
      },
    ],
    Transaction: [
      {
        title: 'How do I open the Transaction page?',
        body: [
          'Step 1: Open the main menu on the left. Use Search Menu at the top if needed. Click Payments (subtitle Transactions, Due, card icon) to expand it, then click Transaction under Payments. The Transaction page opens where you can view and manage payment records (see the screenshot below).',
        ],
        image: '/employee-help-transaction-payments-menu.png',
        imageAlt: 'Payments menu expanded with Transaction option under it',
        imageNarrow: true,
      },
      {
        title: 'How do I add a New Payment?',
        body: [
          'Open Payments → Transaction to reach Add Payment (Home / Add Payment). After registering a member, SAVE AND PROCEED takes you here automatically.',
          { heading: 'Member Information' },
          'Choose who is paying from the member list. To use loyalty points, type the value and tap APPLY or CLEAR. Set the service (e.g. GYM) and the reason for this payment.',
        ],
        image: '/employee-help-add-payment-member-info.png?v=0841',
        imageAlt:
          'Add Payment Member Information with Select Member, reward points, Service Type, Member Payment For, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Package Information' },
          'Set billing and membership start dates. Pick the package and confirm the price. Add complementary benefits or a discount only when they apply.',
          { heading: 'Mode Of Payment' },
          'Choose how they pay (cash, UPI, card, etc.). Enter the amount received now and any registration fee. If they pay in part payment. Pending amount will calculate automatically. That turn on GST when tax is required, then check the final total.',
        ],
        image2: '/employee-help-add-payment-package-payment.png?v=0848',
        image2Alt:
          'Package Information and Mode Of Payment with bill dates, package, payment fields, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Trainer & Office Use' },
          'Link a trainer, referral, and the staff who collected the payment when your gym tracks these — Trainer Name, Referred By Member, Referred By Trainer, and Collected By.',
          { heading: 'Incentive' },
          'Turn on Incentive Yes only when your gym pays trainer incentive on this payment. Then set Calculation Type, Trainer Percentage, Package Name, and Total Incentive Amount.',
          'When everything looks correct, click SAVE to finish.',
        ],
        image3: '/employee-help-add-payment-trainer-save.png?v=0904',
        image3Alt:
          'Trainer and Office Use with trainer fields, incentive toggle, incentive details, SAVE button, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'How do I view Due Transaction?',
        body: [
          { heading: 'What is Due Transaction?' },
          'Shows every member who still owes money to your gym — the amount not yet paid after a new or renewal payment.',
          'Use it to see who has a pending balance, how much is left, and when it is due — then click PAY NOW to collect a part payment or clear the full due.',
          { heading: 'How to open' },
          'Open the main menu on the left. Click Payments (Transactions, Due) to expand it, then click Due Transaction. After you open it, the Due Payment page loads with all pending amounts (see the menu path in the screenshot below).',
        ],
        image: '/employee-help-due-transaction-menu.png',
        imageAlt: 'Payments menu expanded with Due Transaction option selected',
        imageNarrow: true,
        bodyContinue: [
          'On the Due Payment List, find the member by name or use Search Members. Check the pending amount, then click PAY NOW for that member to clear the due (see the screenshot below).',
        ],
        image2: '/employee-help-due-payment-list.png?v=1039',
        image2Alt:
          'Due Payment List with search, totals, member table, Pay Now button, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          'After you click Pay Now, the Due Payment form opens.',
          { heading: 'Fill the form' },
          'Select the member and set Member Payment For to Pending.',
          'Choose payment mode (e.g. Cash), billing date, and who collected the payment.',
          'Check package name and enter paid amount or discount if needed.',
          'Confirm Total Due Amount, then click SUBMIT to finish.',
        ],
        image3: '/employee-help-due-payment-submit.png?v=1107',
        image3Alt:
          'Due Payment form with member info, payment mode, package details, Submit button, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'How do I do pending closed out?',
        body: [
          { heading: 'What is Pending Close-Out?' },
          'Pending Close-Out clears a member’s full remaining due in one payment and closes that record in FCI.',
          'Use Pending on Due Payment for a part payment — use Pending Close-Out when the full balance must be finished.',
          'It links to Due Transaction and Transaction Dashboard → Pending Close Amount.',
          { heading: 'Steps' },
          'Step 1: Payments → Due Transaction → PAY NOW for the member.',
          'Step 2: Set Member Payment For to Pending Close-Out.',
          'Step 3: Fill payment details → SUBMIT (see screenshot below).',
        ],
        image: '/employee-help-pending-close-out.png?v=1505',
        imageAlt:
          'Due Payment form with Member Payment For set to Pending Close-Out, payment details, Submit button, and numbered guide',
        imageWide: true,
      },
      {
        title: 'How do I renewal payment?',
        body: [
          { heading: 'What is Renewal payment?' },
          'Used when an existing member renews their package — their plan has ended or is about to end and they want to continue at your gym.',
          'Open Add Payment, set Member Payment For to RENEWAL, pick the package, enter payment details, and save — the member’s membership is extended with the new dates.',
          { heading: 'How to open' },
          'Open Payments → Transaction to reach Add Payment (Home / Add Payment).',
          { heading: 'Member Information' },
          'Select the member from the list. In Member Payment For, choose RENEWAL. Apply reward points only if needed. Set Service Type (e.g. GYM).',
        ],
        image: '/employee-help-renewal-payment-member.png?v=1538',
        imageAlt:
          'Add Payment Member Information with RENEWAL selected, reward points, expiry details, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Expiry Details' },
          'Check Expiry Date and Balance Days so you know how much time is left before you renew.',
          { heading: 'Package Information' },
          'Set Bill Date and Start Date. Pick the package — End Date and Package Amount fill based on your choice. Add complementary or discount only if they apply.',
          { heading: 'Mode Of Payment' },
          'Choose how they pay. Enter Paid Amount and any registration fee. Fill pending amount and date only if they pay in parts. Turn on GST if required, then confirm Amount to be paid.',
        ],
        image2: '/employee-help-renewal-package-payment.png?v=1548',
        image2Alt:
          'Package Information and Mode Of Payment with bill dates, package, payment fields, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Trainer & Office Use' },
          'Add trainer, referral, and Collected By if your gym uses them.',
          { heading: 'Incentive' },
          'Turn on Incentive Yes only when your gym pays trainer incentive on this renewal. Fill Calculation Type, Trainer Percentage, Package Name, Total Incentive Amount, and Start Pay Out Month if needed — then click SAVE to finish.',
        ],
        image3: '/employee-help-renewal-payment-trainer-save.png?v=1554',
        image3Alt:
          'Trainer and Office Use with incentive fields, Start Pay Out Month, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'How do I manage payment?',
        body: [
          { heading: 'What is Manage payment?' },
          'Opens the payment history for your gym — every new, renewal, and due payment recorded in FCI in one list.',
          'Use it to search a member’s payments, check bill dates and amounts, and review or update payment records without opening each member profile.',
          { heading: 'How to open' },
          'Open Payments → Transaction to reach Add Payment (Home / Add Payment), then click MANAGE PAYMENT at the top right (see screenshot below).',
        ],
        image: '/employee-help-manage-payment-button.png?v=1559',
        imageAlt:
          'Add Payment page with MANAGE PAYMENT button highlighted and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Transaction History page' },
          'After you click MANAGE PAYMENT, the Transaction History page opens — every payment at your gym in one list.',
          'Search by member name or ID, check package, bill date, discount, and paid amount for each row. Use Export to Excel to download, or Add Payment to record a new one.',
          'Step 1: Search Members to find a payment.',
          'Step 2: Check Member ID, Name, Package, Bill Date, and Paid Amount in the table.',
          'Step 3: Export to Excel or Add Payment as needed (see guide below).',
        ],
        image2: '/employee-help-transaction-history.png?v=1612',
        image2Alt:
          'Transaction History with search, payment list, Add Payment, Export to Excel, and numbered guide',
        image2Wide: true,
      },
    ],
    Configuration: [
      {
        title: 'How do I add packages?',
        body: [
          { heading: 'What is Packages?' },
          'Packages are the membership plans your gym sells in FCI — each plan has a name, duration, price, service type, and what is included (for example GYM for 3 months, Personal Training for 12 sessions).',
          'When a member joins, renews, or pays, staff pick a package on Add Payment or Add Lead — that sets the membership period, amount, and end date for that member.',
          'In short, Packages are the plans you create here under Configurations so your team can assign the right membership to each member.',
          { heading: 'How to open Packages' },
          'Step 1: Open the left menu. Use Search Menu if needed.',
          'Step 2: Click Configurations (subtitle: Packages, Services) to expand it.',
          'Step 3: Click Packages — the packages screen opens where you can add and manage gym packages (see screenshot below).',
        ],
        image: '/employee-help-configuration-packages-menu.png?v=1135',
        imageAlt:
          'Configurations menu expanded with Packages highlighted and numbered guide',
        imageNarrow: true,
        bodyContinue: [
          'On the packages screen, open Add Package (breadcrumb: Home / Add Package).',
          { heading: 'Package Details' },
          'Enter the package name, duration in days, and price. Choose a discount type and value if needed. Describe what is included in Package Features.',
          { heading: 'Package Type & Service' },
          'Select the service type and the number of sessions included in this package.',
          { heading: 'Package Dates' },
          'Set the start and end dates for when this package is active. Check the Package Summary on the right — original price, discount, and total should look correct.',
          'Click SAVE PACKAGE at the bottom when you are done (see guide below).',
        ],
        image2: '/employee-help-add-package.png?v=1055',
        image2Alt:
          'Add Package form with Package Details, Type and Service, Dates, Package Summary, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Manage your packages' },
          'After you save a package, click MANAGE PACKAGE at the top right to view, edit, or manage every plan you have added at your gym.',
          'Step 1: On the Add Package page, click MANAGE PACKAGE (see screenshot below).',
          'Step 2: The Package Manage screen opens with the full list of packages.',
        ],
        image3: '/employee-help-manage-package-button.png?v=1108',
        image3Alt:
          'Add Package page with MANAGE PACKAGE button and guide callout at the top right',
        image3Wide: true,
        bodyAfterImage3: [
          { heading: 'Package Manage page' },
          'After you click MANAGE PACKAGE, the Package Manage page opens — every package with name, duration, service, price, dates, and status in one list.',
          'Step 1: Use Search Packages to find a plan by name or keyword.',
          'Step 2: Check Total Packages and the table — package name, duration, price, discount, and status for each row.',
          'Step 3: Click ADD PACKAGE to create a new plan, or use Edit / Delete on a row to update or remove a package (see guide below).',
        ],
        image4: '/employee-help-package-manage.png?v=1134',
        image4Alt:
          'Package Manage page with search, package list, ADD PACKAGE button, and numbered guide',
        image4Wide: true,
      },
      {
        title: 'How do I add Life Style Configuration?',
        body: [
          'Open Configurations in the left menu (Packages, Services). Click Life Style Config to add or update lifestyle questionnaire options for members.',
        ],
        image: '/employee-help-lifestyle-config-menu.png',
        imageAlt: 'Configurations menu expanded with Life Style Config highlighted',
        bodyContinue: [
          'On Life Style Config, open the question you want to set up (for example Do You Smoke), type the answer label in Description, add Remarks only if needed, then click + ADD.',
          'The option appears in the table below — use Edit to change it or Delete to remove it.',
        ],
        image2: '/employee-help-lifestyle-config-add.png?v=0411',
        image2Alt:
          'Do You Smoke section with Description, Remarks, + ADD, lifestyle options list, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Alcohol Consumption' },
          'Scroll to Alcohol Consumption, type the choice in Description (e.g. Never, Occasional, Regular), add Remarks if needed, then click + ADD — edit or delete from the table the same way as above.',
          { heading: 'Food Preference' },
          'In Food Preference, type the diet option in Description (e.g. Vegetarian, Non Vegetarian, Vegan), add Remarks if needed, then click + ADD — use Edit or Delete in the table to update later (see guide below).',
        ],
        image3: '/employee-help-lifestyle-alcohol-food-config.png?v=0407',
        image3Alt:
          'Alcohol Consumption and Food Preference with Description, Remarks, + ADD, and options lists',
        image3Wide: true,
        bodyAfterImage3: [
          { heading: "What's Your Lifestyle" },
          'In What\'s Your Lifestyle, type the activity level in Description (e.g. Sedentary, Light Active, Active, Very Active, Sport), add Remarks if needed, then click + ADD — edit or delete from the table when required (see guide below).',
        ],
        image5: '/employee-help-lifestyle-activity-level.png?v=0417',
        image5Alt:
          "What's Your Lifestyle with Description, Remarks, + ADD, options list, and numbered guide",
        image5Wide: true,
        bodyAfterImage5: [
          { heading: "What's your Fitness Goal" },
          'In What\'s your Fitness Goal, type the goal name in Description (e.g. Muscle Gain, Fat Loss, Strength Gain), add Remarks if needed, then click + ADD — edit or delete from the table when required (see guide below).',
        ],
        image6: '/employee-help-lifestyle-fitness-goal.png?v=0423',
        image6Alt:
          "What's your Fitness Goal with Description, Remarks, + ADD, options list, and numbered guide",
        image6Wide: true,
        bodyAfterImage6: [
          { heading: "What's your Preferred Workout" },
          'In What\'s your Preferred Workout, type the workout name in Description (e.g. Weight Training, Yoga, Cardio, Zumba), add Remarks if needed, then click + ADD — edit or delete from the table when required (see guide below).',
        ],
        image7: '/employee-help-lifestyle-preferred-workout.png?v=0428',
        image7Alt:
          "What's your Preferred Workout with Description, Remarks, + ADD, options list, and numbered guide",
        image7Wide: true,
      },
      {
        title: 'How do I add Referral source?',
        body: [
          'Open Configurations → Referral source. On this page you add how members heard about your gym — these show on Add Lead and Add Member. Type the name in Refer source (e.g. google, Walk In), add Remarks if needed, click + ADD, then edit or delete from the list below (see guide below).',
        ],
        image: '/employee-help-referral-source.png?v=0436',
        imageAlt:
          'Referral source page with Refer source field, Remarks, + ADD, sources table, and numbered guide',
        imageWide: true,
      },
      {
        title: 'How do I add service category?',
        body: [
          'Open Configurations in the left menu (Packages, Services). Click Service Category — the Add Service page opens where you can add gym services used on leads, members, and payments (see screenshot below).',
        ],
        image: '/employee-help-add-service-category.png?v=0447',
        imageAlt:
          'Add Service page with Service Name, Date, Primary Service, Scheduling Feature, SAVE, and numbered guide',
        imageWide: true,
        bodyContinue: [
          'Type the Service Name (e.g. GYM, Personal Training). Set the Date if needed. Tick Primary Service mandatory or Scheduling Feature only when your gym uses them, then click SAVE (see guide above).',
        ],
        bodyEnd: [
          'At the top right, click MANAGE PAGE to see the list of services you have added (see screenshot below).',
        ],
        image3: '/employee-help-service-category-manage.png?v=0449',
        image3Alt:
          'Service Category Manage page with search, service list, ADD SERVICE CATEGORY, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Export contacts',
        body: [
          { heading: 'What is Export contacts?' },
          'Export contacts is the FCI feature that downloads member contact records from your gym into a file.',
          'It includes each member’s Name, Phone, and Email.',
          'The file can be saved as CSV (for spreadsheets) or VCF (for phone contacts).',
          'In short, Export contacts means taking member contact details out of FCI and saving them on your computer or phone.',
          { heading: 'How to open Export contacts' },
          'Step 1: Open the left menu. Use Search Menu if needed.',
          'Step 2: Click Configurations (Packages, Services) to expand it.',
          'Step 3: Click Export Contacts at the bottom of the list.',
          { heading: 'How to export contacts' },
          'Step 1: On the Export Contacts page, read the note — Export member contacts (Name, Phone, Email) in CSV or VCF format.',
          'Step 2: Click Export Format and open the dropdown. Choose CSV (Comma Separated Values) for spreadsheets or VCF (vCard Format) for phone contacts.',
          'Step 3: Check Export Information below — CSV has Name (MemberID-Name), Phone, and Email; VCF has the same fields as a vCard file.',
          'Step 4: Click the blue EXPORT CONTACTS button at the bottom to download the file (see guide below).',
        ],
        image: '/employee-help-export-contacts-page.png?v=0456',
        imageAlt:
          'Export Contacts menu and page with Export Format, CSV and VCF options, format info, and EXPORT CONTACTS button',
        imageWide: true,
      },
      {
        title: 'Remove bills',
        body: [
          { heading: 'What is Remove bills?' },
          'Remove bills is the FCI feature that deletes a payment or billing record from your gym’s system.',
          'Use it when a bill was saved by mistake, or when an older bill should not stay in FCI — for example, you no longer have that bill or it should not be counted in member history.',
          'It clears the record so payment reports and member details stay correct.',
          'In short, Remove bills means taking a payment entry out of FCI when it should not be there anymore.',
          { heading: 'How to open Remove bills' },
          'Step 1: Open the left menu. Use Search Menu if needed.',
          'Step 2: Click Configurations (Packages, Services) to expand it.',
          'Step 3: Scroll down and click Remove Bills — it is below Export Contacts at the bottom of the list (see screenshot below).',
        ],
        image: '/employee-help-remove-bills-menu.png',
        imageAlt:
          'Configurations menu expanded with Remove Bills highlighted below Export Contacts',
        bodyContinue: [
          { heading: 'How to remove a bill' },
          'Step 1: Set Filter By Date, Service Type, and Member — click Apply Filters.',
          'Step 2: Search in Filter grid, tick the bill row, and check Payment ID, Member, Package, and dates.',
          'Step 3: Click Delete selected (OTP) on the right (see screenshot below).',
        ],
        image2: '/employee-help-remove-bill-page.png?v=0520',
        image2Alt:
          'Remove Bill page with filters, bill table, Delete selected OTP button, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Enter OTP' },
          'The Enter OTP popup shows after you click Delete selected (OTP).',
          'Check your email — the OTP is sent to the address shown on screen (for example gymitalwarthirunagar@gmail.com).',
          'Type the 4-digit code in the boxes and click VERIFY OTP (see screenshot below).',
        ],
        image3: '/employee-help-remove-bill-otp.png?v=0527',
        image3Alt:
          'Enter OTP popup with email, 4-digit code boxes, VERIFY OTP button, and numbered guide',
        image3Wide: true,
        bodyAfterImage3: [
          'After you enter the correct OTP and click VERIFY OTP, the selected bill is deleted from FCI.',
        ],
      },
    ],
    'Member follow up': [
      {
        title: 'Followup reason',
        body: [
          'Follow-up Reason is where you create preset reasons staff pick when they log a follow-up (for example, Call Back Later, Not Interested, or Joined) — so every follow-up is recorded the same way across your gym.',
          'Open Follow-up → Followup Reason, fill in Reason Name, Select Type, Select Process, and the other fields, click SAVE, then open MANAGE PAGE to check your new reason is in the list.',
        ],
        image: '/employee-help-followup-reason.png?v=0552',
        imageAlt:
          'Add Follow-Up Reason page: Follow-up menu with Followup Reason, form fields, SAVE button, and MANAGE PAGE to view saved reasons',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to view the Reason Manage page' },
          'After you click SAVE on the Add Follow-Up Reason page, click MANAGE PAGE at the top right — this opens the Reason Manage page with all saved follow-up reasons.',
          'On Reason Manage, use Filter by Process (for example, Leads) and Search Reason to find your entry. Check Reason, Type, Process, and Status in the table — use EDIT or DELETE in Actions if you need to change or remove a reason (see guide below).',
        ],
        image2: '/employee-help-followup-reason-manage.png?v=0604',
        image2Alt:
          'Reason Manage page with Filter by Process, Search Reason, reason list, Status toggles, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'How do I open Followup Assign?',
        body: [
          { heading: 'What is Followup Assign?' },
          'Followup Assign is where you select leads and save which staff member will follow up with them.',
          'It also saves the Assign Date so the Lead Followup page can open the same set of leads later.',
          { heading: 'How to open Followup Assign' },
          'Step 1: Open the left menu → expand Follow-up → click Followup Assign.',
          { heading: 'How to fetch the lead list' },
          'Step 2: Choose Select Follow-Up Category = Leads, then set Quick Date Range (or Start/End Date).',
          'Step 3: Click FILTER to load the lead list in the table.',
          { heading: 'How to assign leads' },
          'Step 4: Tick the checkbox for the leads you want to assign.',
          'Step 5: Select Staff Incharge and set Assign Date.',
          'Step 6: Click CONFIRM to save the assignment (see guide below).',
        ],
        image: '/employee-help-followup-assign-leads.png?v=0619',
        imageAlt:
          'Follow Up Assignment page with Follow-up menu, filters, lead table, Staff Incharge, Assign Date, CONFIRM, and numbered guide',
        imageWide: true,
      },
      {
        title: 'Lead followup',
        body: [
          { heading: 'What is Lead Follow Up?' },
          'Lead follow up means contacting a person who visited or enquired as a lead — by call, message, or visit — to help them take the next step (trial, membership, or package).',
          'In FCI this happens in two parts. On Followup Assign, leads are picked, a Staff Incharge is chosen, and an Assign Date is set — then CONFIRM saves the assignment.',
          'On Lead Followup, staff open the list for that same Assign Date, contact each lead, and track how many days have passed since the walk-in (see guide below).',
        ],
        image: '/employee-help-lead-followup-intro.png?v=0456',
        imageAlt:
          'Follow Up Assignment page with filters, lead table, Staff Incharge, Assign Date, CONFIRM, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to use Lead Followup' },
          'Step 1: Open Follow-up → Lead Followup.',
          'Step 2: Set Follow Up Date to the same date you used in Followup Assign.',
          'Step 3: Click FETCH to load your assigned lead list.',
          'Step 4: Use Search to find a lead by name, phone, or visit id.',
          'Step 5: In the table, check Visit Id, Walkin Date, Lead Name, Phone, Days Passed, Assign Date, and In Charge — then contact each lead.',
          'Step 6: Click EXPORT CSV to download the list, or ASSIGN FOLLOW UP if more leads still need assigning (see guide below).',
        ],
        image2: '/employee-help-lead-followup.png?v=0510',
        image2Alt:
          'Leads Follow Up page with Follow Up Date, FETCH, Search, lead table, EXPORT CSV, ASSIGN FOLLOW UP, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Continue absent follow up',
        body: [
          { heading: 'What is Continue Absent Follow Up?' },
          'Continue Absent Follow Up is for members who have not visited your gym for several days in a row — staff contact them to check why and encourage them to return.',
          'In FCI this works in two parts. On Followup Assign, pick Continues Absents, set Review Days, filter members, choose Staff Incharge and Assign Date, then CONFIRM saves the assignment. On Continous Absent Follow-Up, staff open the list for that Follow Up Date and contact each member.',
          { heading: 'How to assign continue absent members' },
          'Step 1: Open Follow-up → Continue Absent Followup.',
          'Step 2: Set category to Continues Absents, enter Review Days (e.g. 5), then click FILTER.',
          'Step 3: Choose Staff Incharge, set Range From and To (e.g. 0–10), and pick Assign Date.',
          'Step 4: Tick the members you want and click CONFIRM to save the assignment (see guide below).',
        ],
        image: '/employee-help-continue-absent-followup.png?v=0528',
        imageAlt:
          'Follow Up Assignment with Continues Absents, Review Days, FILTER, member table, Staff Incharge, Assign Date, CONFIRM, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to follow up with continue absent members' },
          'Step 1: Open Follow-up → Continue Absent Followup (Continous Absent Follow-Up page).',
          'Step 2: Set Follow Up Date to the date you want to check, then click FETCH.',
          'Step 3: Use Filter by Pre-Callback Date only if needed, or Search to find a member by name or phone.',
          'Step 4: Check Member Id, Name, Phone, End Date, Assign Date, Days Left, and In Charge — then follow up with each member.',
          'Step 5: Click EXPORT CSV if you need a copy of the list (see guide below).',
        ],
        image2: '/employee-help-continue-absent-followup-list.png?v=0538',
        image2Alt:
          'Continous Absent Follow-Up page with Follow Up Date, FETCH, Search, member table, EXPORT CSV, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'In active follow up',
        body: [
          { heading: 'What is Inactive Follow Up?' },
          'Inactive Follow Up is for members whose package has ended or who are no longer active at your gym — they stopped training but may still renew.',
          'Staff contact these members by call or message to encourage them to rejoin or renew their package.',
          'In FCI this works in two parts. On Followup Assign, you pick inactive members, choose Staff Incharge and Assign Date, then CONFIRM saves the assignment. On Inactive Follow Up, staff open the list for that same Assign Date and contact each member.',
          { heading: 'How to assign inactive members' },
          'Step 1: Open Follow-up → InActive Followup (Follow Up Assignment page).',
          'Step 2: Choose Select Follow-Up Category = In Active, then pick Service (e.g. GYM).',
          'Step 3: Set Quick Date Range or Start/End Date, then click FILTER.',
          'Step 4: Select Staff Incharge, set Assign Date, tick members, then click CONFIRM (see guide below).',
        ],
        image: '/employee-help-inactive-followup-assign.png?v=0550',
        imageAlt:
          'Follow Up Assignment with In Active category, Service, date filters, FILTER, Staff Incharge, Assign Date, CONFIRM, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to follow up with inactive members' },
          'Step 1: Open Follow-up → Inactive Follow Up.',
          'Step 2: Set Follow Up Date to the same date you used in Followup Assign.',
          'Step 3: Pick Service if needed (e.g. GYM), then click FETCH.',
          'Step 4: Use Search to find a member by name or phone.',
          'Step 5: Check Member Id, Name, Phone, Package Name, Service Type, End Date, and Assign Date — then contact each member.',
          'Step 6: Click EXPORT CSV if you need a copy of the list (see guide below).',
        ],
        image2: '/employee-help-inactive-followup-list.png?v=0606',
        image2Alt:
          'Inactive Follow Up page with Follow Up Date, Service, FETCH, Search, member table, EXPORT CSV, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Package follow up',
        body: [
          { heading: 'What is Package Follow Up?' },
          'Package Follow Up is for members whose package is about to expire — staff contact them before the end date to encourage renewal.',
          'In FCI this works in two parts. On Followup Assign, pick Package Expiry, filter members, choose Staff Incharge and Assign Date, then CONFIRM saves the assignment. On Package Expiry Followup, staff open the list for that Follow Up Date and contact each member.',
          { heading: 'How to assign package expiry members' },
          'Step 1: Open Follow-up → Followup Assign.',
          'Step 2: Set category to Package Expiry and Service (e.g. GYM), then set your dates and click FILTER.',
          'Step 3: Tick the members you want, choose Staff Incharge and Assign Date.',
          'Step 4: Click CONFIRM to save the assignment (see guide below).',
        ],
        image: '/employee-help-package-followup-assign.png?v=0615',
        imageAlt:
          'Follow Up Assignment with Package Expiry category, Service, date filters, FILTER, member table, Staff Incharge, CONFIRM, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to follow up with package expiry members' },
          'Step 1: Open Follow-up → Package Expiry Followup.',
          'Step 2: Set Follow Up Date and Service (if needed), then click FETCH.',
          'Step 3: Check Name, Phone, Package Name, Expiry Date, and Assign Date — then contact each member.',
          'Step 4: Click EXPORT CSV if you need a copy of the list (see guide below).',
        ],
        image2: '/employee-help-package-followup-list.png?v=0619',
        image2Alt:
          'Package Expiring Soon Follow-Up page with Follow Up Date, Service, FETCH, Search, member table, EXPORT CSV, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Birthday wishes',
        body: [
          { heading: 'What is Birthday Wishes?' },
          'Birthday Wishes is for members whose birthday falls in the date range you pick — staff contact them to wish them and keep a good relationship with the member.',
          'In FCI this works in two parts. On Followup Assign, pick BirthDay Wishes, filter members by birthday dates, choose Staff Incharge and Assign Date, then CONFIRM saves the assignment. On Birthday Wishes Follow-Up, staff open the list for that Follow Up Date and wish each member.',
          { heading: 'How to assign birthday wishes' },
          'Step 1: Open Follow-up → BirthDay Wishes (Follow Up Assignment page).',
          'Step 2: Choose Select Follow-Up Category = BirthDay Wishes, then set Quick Date Range or pick the date range.',
          'Step 3: Click FILTER to load members with birthdays in that period.',
          'Step 4: Tick the members you want, choose Staff Incharge, pick Assign Date, then click CONFIRM (see guide below).',
        ],
        image: '/employee-help-birthday-wishes-assign.png?v=0655',
        imageAlt:
          'Follow Up Assignment with BirthDay Wishes, date filters, member checkboxes, Staff Incharge, Assign Date, CONFIRM, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to follow up with birthday wishes' },
          'Step 1: Open Follow-up → Birthday Wishes Follow-Up.',
          'Step 2: Set Follow Up Date, then click FETCH.',
          'Step 3: Use Search if needed, or tick Filter by Pre-Callback Date only when your gym uses it.',
          'Step 4: Check Name, Phone, DOB, Assign Date, Status, and In Charge — then wish each member.',
          'Step 5: Click EXPORT CSV to save the list (see guide below).',
        ],
        image2: '/employee-help-birthday-wishes-list.png?v=0708',
        image2Alt:
          'Birthday Wishes Follow-Up page with Follow Up Date, FETCH, member table, DOB, Status, In Charge, EXPORT CSV, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Anniversary follow up',
        body: [
          { heading: 'What is Anniversary Follow Up?' },
          'Staff contact members on or around their membership anniversary — to thank them and help with renewal or upgrade.',
          { heading: 'Assign' },
          'Open Follow-up → Followup Assign → Anniversary.',
          'Set date range, click FILTER, tick members, choose Staff Incharge and Assign Date, then CONFIRM.',
        ],
        image: '/employee-help-anniversary-followup-assign.png?v=0759',
        imageAlt:
          'Follow Up Assignment with Anniversary category, date filters, FILTER, member table with Anniversary column, Staff Incharge, Assign Date, CONFIRM, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Follow up' },
          'After CONFIRM, open Follow-up → Anniversary Wishes. Set Follow Up Date to the same Assign Date from the page above — that loads the members you assigned.',
          'Click FETCH, contact each member, and update Status, Reason, and Remarks. Use Search or EXPORT CSV if needed.',
        ],
        image2: '/employee-help-anniversary-followup-list.png',
        image2Alt:
          'Anniversary Wishes Follow-Up page with Follow Up Date, FETCH, member table, Status, Reason, and Remarks',
      },
      {
        title: 'Client feedback',
        body: [
          { heading: 'What is Client Feedback Follow Up?' },
          'Staff contact members to collect feedback on their gym experience — to check satisfaction and follow up on inactive or unhappy clients.',
          { heading: 'Assign' },
          'Open Follow-up → Followup Assign → Client Feedback.',
          'Set Review Days, Gender, and Client Status, click FILTER, tick members, choose Staff Incharge and Assign Date, then CONFIRM.',
        ],
        image: '/employee-help-client-feedback-assign.png?v=0814',
        imageAlt:
          'Follow Up Assignment with Client Feedback category, Review Days, Gender, Client Status, FILTER, member table, Staff Incharge, Assign Date, CONFIRM, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Follow up' },
          'After CONFIRM, open Follow-up → Follow Client Feedback. Set Follow Up Date to the same Assign Date from the page above — FETCH loads the members you assigned there.',
          'Check Member Id, Name, Phone, Assign Date, Days Left, In Charge, and Reason — contact each member and record their feedback. Use Search or EXPORT CSV if needed.',
        ],
        image2: '/employee-help-client-feedback-list.png?v=0818',
        image2Alt:
          'Client Feed Back page with Follow Up Date, FETCH, member table, Days Left, In Charge, Reason, EXPORT CSV, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Pending payment',
        body: [
          { heading: 'What is Pending Payment Follow Up?' },
          'Staff contact members who still owe money — to remind them and collect the balance.',
          { heading: 'Assign' },
          'Open Follow-up → Followup Assign → Pending Payment.',
          'Set Service and date range, click FILTER, tick members, choose Staff Incharge and Assign Date, then CONFIRM.',
        ],
        image: '/employee-help-pending-payment-assign.png?v=0838',
        imageAlt:
          'Follow Up Assignment with Pending Payment category, Service, date filters, FILTER, member table with pending amounts, Staff Incharge, Assign Date, CONFIRM, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Follow up' },
          'After CONFIRM, open Follow-up → Due Followup. Set Follow Up Date to the same Assign Date from the page above — that loads the members you assigned.',
          'Pick Service, click FETCH, then contact each member. Use Search or EXPORT CSV if needed.',
        ],
        image2: '/employee-help-due-followup.png?v=0847',
        image2Alt:
          'Due Follow Up page with Follow Up Date, Service, FETCH, member table showing pending amount and dates, EXPORT CSV, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Follow up summary report',
        body: [
          { heading: 'What is Summary Report?' },
          'The Follow-up Summary Report shows every follow-up type for one day on a single screen — Leads, DOB, Anniversary, Package Expiry, Continue Absent, Inactive, Due, and Client Feedback.',
          'Each row shows how many were assigned, completed, missed, or still pending — so managers and staff can see what is done and what is left.',
          'Use it at the end of the day to check team progress without opening each follow-up page one by one.',
          { heading: 'Here we can see the summary report' },
          'Open Follow-up → Follow-up Summary Report → pick Select Date → Filter.',
          'Check each row and click a blue number to open that follow-up list.',
        ],
        image: '/employee-help-followup-summary-report.png?v=0854',
        imageAlt:
          'Follow-up Summary Report with Select Date, Filter, follow-up types table with assigned and missed counts, and numbered guide',
        imageWide: true,
      },
    ],
    'Operational tools': [
      {
        title: 'What are operational tools?',
        body: [
          'Operational tools are the day-to-day features staff use to run the gym — outside follow-ups, leads, and payments.',
          'Open the left menu, expand Operational Tools, and pick the tool you need. Guides for each tool will appear here.',
        ],
      },
      {
        title: 'Electricity consumption',
        body: [
          { heading: 'What is Electricity Consumption?' },
          'Electricity Consumption is where staff record how much power the gym uses each day — meter readings for Morning Peak, Daytime, and Evening Peak.',
          'You enter the date, rate per unit, start and end readings, and who is in charge. FCI works out total units and amount so the gym can track power cost and check days with no reading.',
        ],
        image: '/employee-help-electricity-consumption-add.png?v=0430',
        imageAlt:
          'Add Meter Reading page with date, rate per unit, morning/day/evening peak readings, totals, SAVE METER READING, MANAGE PAGE, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to fill and save' },
          'Open Operational Tools → Electricity Consumption.',
          'Pick Select Date, enter Rate per Unit, then fill Start Reading, End Reading, and In-charge for Morning Peak, Daytime, and Evening Peak.',
          'Check Total Units and Total Amount, then click SAVE METER READING.',
          { heading: 'Manage page' },
          'After you save, click MANAGE PAGE at the top right — this opens Meter Reading Manage with every reading you entered.',
          'Here you can see Date, Day, Total Units, Amount, and In-charge for each day. Use Search to find a date, CHECK MISSED DATES to spot days with no reading, and ADD METER READING to enter a new one.',
        ],
        image2: '/employee-help-electricity-consumption-manage.png?v=0437',
        image2Alt:
          'Meter Reading Manage page with search, CHECK MISSED DATES, ADD METER READING, table of daily units, amount, and incharge, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Water consumption',
        body: [
          { heading: 'What is Water Consumption?' },
          'Water Consumption is where staff record how much water the gym uses each day — date, location, who is in charge, and the amount in kiloliters (KL).',
          'You save each entry on Add Water Qty, then open Manage Page to see all records, search by date, check missed days, and add new entries.',
          { heading: 'How to fill and save' },
          'Open Operational Tools → Water Consumption.',
          'Pick Date, choose Unit / In-Charge, enter Description and Location, add Remarks if needed, then enter Amount (KL).',
          'Click SAVE.',
        ],
        image: '/employee-help-water-consumption-add.png?v=0519',
        imageAlt:
          'Add Water Qty page with date, in-charge, description, location, amount, SAVE, MANAGE PAGE, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Manage page' },
          'After you save, click MANAGE PAGE at the top right — this opens Water Manage with every water entry you added.',
          'Here you can see Date, Day, Description, In-Charge, Rate Per can, and No.of can for each day. Use Search to find a date, CHECK MISSED DATES to spot days with no entry, and ADD WATER CAN to add a new one.',
        ],
        image2: '/employee-help-water-consumption-manage.png?v=0507',
        image2Alt:
          'Water Manage page with search, CHECK MISSED DATES, ADD WATER CAN, table of daily water can records, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Reminder',
        body: [
          { heading: 'What is Reminder?' },
          'Reminder is where staff create and manage daily tasks — set reminder points, assign a person in charge, pick a time, and track follow-up result (Completed, In Progress, Pending).',
          'Use it so the team knows what to do and who is responsible.',
          { heading: 'How to open Reminder' },
          'Step 1: Open the left menu and expand Operational Tools (Utilities, Services).',
          'Step 2: Click Reminder — the Add Reminder page opens (see guide below).',
        ],
        image: '/employee-help-reminder-menu.png?v=0540',
        imageAlt:
          'Operational Tools menu with Reminder highlighted and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to fill and save' },
          'On the Add Reminder page, enter each field and click SAVE — or use MANAGE PAGE at the top right to view all reminders later.',
          'Step 1: Enter SL. NO. — a serial number for this reminder.',
          'Step 2: Enter Reminder Points — what needs to be done or followed up.',
          'Step 3: Pick Time and Person In Charge.',
          'Step 4: Choose Follow Up Result — Completed, In Progress, or Pending.',
          'Step 5: Click SAVE (see guide below).',
        ],
        image2: '/employee-help-reminder-add.png?v=0544',
        image2Alt:
          'Add Reminder page with SL NO, Reminder Points, Time, Person In Charge, Follow Up Result, SAVE, MANAGE PAGE, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Manage page' },
          'After you save, click MANAGE PAGE — Reminder Manage opens with every reminder in one list.',
          'Step 1: Use Search to find a reminder by keyword or detail.',
          'Step 2: Check SL NO, Reminder Points, Time, Person In Charge, and Reminder Result (Completed, In Progress, or Pending).',
          'Step 3: Use Status to turn a reminder on or off — or click EDIT / DELETE to update or remove it.',
          'Step 4: Click ADD REMINDER to create a new entry (see guide below).',
        ],
        image3: '/employee-help-reminder-manage.png?v=0553',
        image3Alt:
          'Reminder Manage page with search, ADD REMINDER, table of reminder points, person in charge, result, status, edit, delete, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Watch CCTV',
        body: [
          { heading: 'What is CCTV?' },
          'CCTV is the live camera view of your gym — staff use it to watch the floor, check safety, and monitor activity without leaving the desk.',
          { heading: 'How to open' },
          'Open Operational Tools → Watch CCTV, then on the Live CCTV Feed page click the CCTV link to start watching live.',
        ],
        image: '/employee-help-watch-cctv.png?v=0600',
        imageAlt:
          'Operational Tools menu with Watch CCTV highlighted, live surveillance callout, and numbered guide',
        imageWide: true,
      },
      {
        title: 'Check list',
        body: [
          { heading: 'What is Check List?' },
          'Check List is the daily gym task sheet — tick each job when it is done, like machine cleaning, EB reading, leads, birthday calls, and other opening or closing duties.',
          { heading: 'How to open Check List' },
          'Step 1: Open the left menu and expand Operational Tools (Utilities, Services).',
          'Step 2: Click Check List — the Add Check List page opens (see guide below).',
        ],
        image: '/employee-help-check-list-menu.png?v=0607',
        imageAlt:
          'Operational Tools menu with Check List highlighted, task checklist callout, and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'How to fill and save' },
          'On the Add Check List page, pick the date and tick every task you completed for that day.',
          'Step 1: Pick Date.',
          'Step 2: Tick each checklist item you finished — EB reading, machine cleaning, leads, birthday calls, and other daily duties.',
          'Step 3: Click SAVE (see guide below).',
          'Use MANAGE PAGE, REPORT/CHECKLIST, or ADD CHECK LIST ITEMS at the top right when you need them.',
        ],
        image2: '/employee-help-check-list-add.png?v=0616',
        image2Alt:
          'Add Check List page with date, task checkboxes, SAVE, MANAGE PAGE, REPORT/CHECKLIST, ADD CHECK LIST ITEMS, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Manage check list' },
          'After you save, click MANAGE PAGE — Checklist Manage opens with every checklist you entered.',
          'Step 1: Use Search to find a record by keyword or date.',
          'Step 2: Click CHECK MISSED DATES to see days with no checklist.',
          'Step 3: Check Date, Day, and each task column — green tick means done, red cross means missed.',
          'Step 4: Use Edit or Delete in Actions to change or remove an entry (see guide below).',
        ],
        image3: '/employee-help-check-list-manage.png?v=0621',
        image3Alt:
          'Checklist Manage page with search, CHECK MISSED DATES, task columns, edit and delete actions, and numbered guide',
        image3Wide: true,
        bodyAfterImage3: [
          { heading: 'Add new checklist item' },
          'Click ADD CHECK LIST ITEMS on the Add Check List page — the Add Checklist Item screen opens to create a new daily, weekly, or maintenance task.',
          'Step 1: Enter the task name in Checklist Name (for example a new cleaning or admin job).',
          'Step 2: Click SAVE — the item appears as a new checkbox on the daily checklist (see guide below).',
        ],
        image4: '/employee-help-check-list-add-item-form.png?v=0626',
        image4Alt:
          'Add Checklist Item page with Checklist Name field, SAVE, MANAGE PAGE, and numbered guide',
        image4Wide: true,
        bodyAfterImage4: [
          { heading: 'Manage checklist items' },
          'After you save a new item, click MANAGE PAGE — Checklist Item Manage opens with every checklist name in one list.',
          'Step 1: Use Search to find a checklist item by name.',
          'Step 2: Check Check List Name and Status — toggle on to use the item on the daily checklist, off to hide it.',
          'Step 3: Click EDIT to change the name, or DELETE to remove the item.',
          'Step 4: Click ADD CHECKLIST ITEM at the top right to create another task (see guide below).',
        ],
        image5: '/employee-help-check-list-item-manage.png?v=0629',
        image5Alt:
          'Checklist Item Manage page with search, ADD CHECKLIST ITEM, status toggles, edit and delete actions, and numbered guide',
        image5Wide: true,
      },
    ],
    'Elite Rewards Program': [
      {
        title: 'Reward points',
        body: [
          { heading: 'What is Reward points?' },
          'Reward points is the FCI loyalty feature — members earn points when they pay and can use them on future payments.',
          'On Add Payment, staff tap APPLY to use a member’s points on a bill — Reward points in this menu is where you manage the full program.',
          'Open Elite Rewards Program → Reward points to set up and track points for your gym’s incentive plan.',
          'In short, Reward points links member payments to your gym’s rewards and discounts in one place.',
          { heading: 'How to open Reward points' },
          'Step 1: Open the left menu. Use Search Menu if needed.',
          'Step 2: Click Elite Rewards Program (Incentive) to expand it.',
          'Step 3: Click Reward points — the Reward points page opens (see guide below).',
        ],
        image: '/employee-help-reward-points-menu.png?v=0637',
        imageAlt:
          'Elite Rewards Program menu expanded with Reward points highlighted and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Reward points page' },
          'After you open Reward points, this page shows the rules your gym uses — linked to Add Payment where staff APPLY points on a bill.',
          'Redeem (payment): 1 point = ₹1 off the bill (no conversion).',
          'Referrer earn: when a payment has Referred By Member, that member gets points — floor((package amount ÷ ₹1000) × 10). Example: ₹10,000 package → 100 points.',
          'Set Rupees (basis) and Points for that rupees to control the earn rate — then click SAVE (see guide below).',
        ],
        image2: '/employee-help-reward-points-page.png?v=0634',
        image2Alt:
          'Reward points page with redeem and referrer earn rules, Rupees basis, Points fields, SAVE, and numbered guide',
        image2Wide: true,
      },
      {
        title: 'Reward ledger',
        body: [
          { heading: 'What is Reward ledger?' },
          'Reward ledger is the history of all reward point activity for your gym — points earned, redeemed, and referral rewards for each member.',
          'It works with Reward points settings and Add Payment. Use it to check balances and review every reward-related entry in one place.',
          { heading: 'How to open Reward ledger' },
          'Step 1: Open the left menu. Use Search Menu if needed.',
          'Step 2: Click Elite Rewards Program (Incentive) to expand it.',
          'Step 3: Click Reward ledger — the Reward points report opens (see guide below).',
        ],
        image: '/employee-help-reward-ledger-menu.png?v=0643',
        imageAlt:
          'Elite Rewards Program menu expanded with Reward ledger highlighted and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Reward points report' },
          'On the BY MEMBER tab, see earned points, used points, and current balance for each member.',
          'Step 1: Type Member ID in Filter by member ID, then click APPLY.',
          'Step 2: Check member ID, name, Earned, Used, and Balance in the table.',
          'Step 3: Use Search table to filter loaded rows. Click REFRESH to reload.',
          'Step 4: Click TRANSACTION LEDGER tab for full entry-by-entry details.',
        ],
        image2: '/employee-help-reward-ledger-page.png?v=0648',
        image2Alt:
          'Reward points report BY MEMBER tab with filter, APPLY, Earned, Used, Balance table, and numbered guide',
        image2Wide: true,
        bodyEnd: [
          { heading: 'Transaction ledger tab' },
          'On TRANSACTION LEDGER, see every reward point entry — referral earn and payment redeem rows from member_reward_ledger.',
          'Step 1: Type Member ID in Filter by member ID, then click APPLY.',
          'Step 2: Use Search table to filter loaded rows. Click REFRESH to reload.',
          'Step 3: Check When, Member ID, Referral member, Name, Points earned, Type, and Transaction ID.',
          'Step 4: Read Type — EARN_REFERRAL means points earned, REDEEM_PAYMENT means points used on a bill (see guide below).',
        ],
        image3: '/employee-help-reward-ledger-transaction.png?v=0650',
        image3Alt:
          'TRANSACTION LEDGER tab with filter, APPLY, earn and redeem rows, Type, Points earned, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Incentive approval',
        body: [
          { heading: 'What is Incentive approval?' },
          'Incentive approval is where your gym reviews and approves trainer incentives from member payments.',
          'When staff save a payment with Incentive Yes on Add Payment — trainer, percentage, and incentive amount — those entries come here for approval before payout.',
          'You can check each incentive, approve the correct ones, and keep trainer pay fair and accurate.',
          'In short, Incentive approval is the sign-off step between payment incentives and paying trainers.',
          { heading: 'How to open Incentive approval' },
          'Step 1: Open the left menu. Use Search Menu if needed.',
          'Step 2: Click Elite Rewards Program (Incentive) to expand it.',
          'Step 3: Click Incentive Approval — the approval page opens (see guide below).',
        ],
        image: '/employee-help-incentive-approval-menu.png?v=0653',
        imageAlt:
          'Elite Rewards Program menu expanded with Incentive Approval highlighted and numbered guide',
        imageWide: true,
        bodyContinue: [
          { heading: 'Incentive Approval page' },
          'This page lists payments where incentive was saved on Add Payment with Incentive Yes — review and approve trainer incentives before payout.',
          'Step 1: Pick Select Trainer, Service Type, and Select Month, then click REFRESH.',
          'Step 2: Check Approved Incentive, Rejected Incentive, and Summary — total incentive for that trainer and month.',
          'Step 3: Tick the payment rows in the Payments table — Member Name, Member ID, Package Name, Bill Date, Type, and amounts.',
          'Step 4: Click APPROVE SELECTED, CANCEL SELECTED, or REJECT SELECTED (see guide below).',
        ],
        image2: '/employee-help-incentive-approval-page.png?v=0700',
        image2Alt:
          'Incentive Approval page with trainer filters, summary totals, payments table, approve reject buttons, and numbered guide',
        image2Wide: true,
      },
    ],
    'FeedBack & Reviews': [
      {
        title: 'Feedback',
        body: [
          { heading: 'What is Feedback?' },
          'Feedback is where you collect member comments — ratings, complaints, and suggestions about your gym.',
          'It is under FeedBack & Reviews in FCI — use it to see what members think and follow up when needed.',
          { heading: 'How to open Feedback' },
          'Step 1: Open the left menu.',
          'Step 2: Expand FeedBack & Reviews (FeedBack).',
          'Step 3: Click Feedback (see screenshot below).',
        ],
        image: '/employee-help-feedback-menu.png',
        imageAlt:
          'FeedBack & Reviews menu expanded with Feedback highlighted',
      },
    ],
    Reports: [
      {
        title: 'What are Reports?',
        body: [
          { heading: 'What are Reports?' },
          'Reports is the analytics section in FCI — it brings your gym data into charts and summaries you can read without opening each screen separately.',
          'Inside Reports you get All categories, Charts dashboard, Saved chart views, and Chart builder — use them to track members, payments, follow-ups, and business performance.',
          'It sits in the left menu under Reports (Analytics), below sections like Transactions and CRM — same place staff use for daily and monthly gym numbers.',
          'In short, Reports is your gym’s data and analytics hub inside FCI.',
          { heading: 'How to open Reports' },
          'Step 1: Open the left menu. Use Search Menu if needed.',
          'Step 2: Scroll to Reports (Analytics) — bar chart icon with subtitle Analytics.',
          'Step 3: Click Reports to expand it — then pick All categories, Charts dashboard, or another report (see screenshot below).',
        ],
        image: '/employee-help-reports-menu.png',
        imageAlt:
          'Left menu with Reports Analytics section highlighted to expand report options',
      },
      {
        title: 'All categories',
        articleGroupParent: 'all-categories',
        body: [
          { heading: 'What is All categories?' },
          'All categories is the main entry under Reports — it opens the full list of every report your gym can run in FCI, grouped by category so staff can find the right report without opening Charts dashboard or Chart builder one by one.',
          { heading: 'How to open All categories' },
          'Step 1: Open the left menu → expand Reports (Analytics).',
          'Step 2: Click All categories — the first item in the Reports list.',
          { heading: 'What this image shows' },
          'The guide below highlights All categories in the Reports sidebar — click it to view all report categories in the system, with reports grouped under CRM, Members, Transaction, and other sections for easy access.',
          'Step 3: Pick a report guide below — Service type report, Member info, Leads reports, Active members, Inactive members, Male members, Female members, Transgender members, Age report, New members, Renewal members, Quarterly members report, Half yearly report, Annual members report, Package wise report, EB Summary, Water summary, and more.',
        ],
        image: '/employee-help-reports-all-categories-menu.png?v=0623',
        imageAlt:
          'Reports menu expanded with All categories highlighted, guide callout, and sidebar navigation',
        imageWide: true,
      },
      {
        title: 'Service type report',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Service type report?' },
          'Service type report gives an overview and analytics of the different service types at your gym — such as Gym, Personal Training, or other packages saved in FCI — so you can see how each service type is performing in one place instead of opening separate screens for every category.',
          { heading: 'How to open Service type report' },
          'Step 1: Reports → All categories → Service type report under CRM (first card, before Leads reports — see guide below).',
        ],
        image: '/employee-help-service-type-report.png?v=0622',
        imageAlt:
          'All reports page with Service type report card under CRM highlighted and guide callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Service Type Report page' },
          { heading: 'What this image shows' },
          'The screenshot below is the Service Type Report page — Date Range and Select Service Type filters at the top, Apply Filters and Export to Excel buttons, Total / Active / Inactive counts on the right, and the member table listing Member ID, Gender, Name, Mobile, Service, Service Type, and Package Name.',
          { heading: 'How to navigate this page' },
          'Step 2: Set Date Range and Select Service Type → click Apply Filters.',
          'Step 3: Check Total, Active, and Inactive Count, then review the member table.',
          'Step 4: Click Export to Excel to download the list (see guide below).',
        ],
        image3: '/employee-help-service-type-report-page.png?v=0622c',
        image3Alt:
          'Service Type Report page with Date Range, Service Type filter, Apply Filters, counts, member table, Export to Excel, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Member info',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Member info?' },
          'Member info is a CRM report that shows detailed information for members saved in FCI — personal details, membership status, join date, and other related data — so staff can review a member’s profile without opening each account one by one.',
          { heading: 'How to open Member info' },
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use the CRM category chip or search Filter reports by name.',
          'Step 3: Click Member info under CRM — it is the third report card, after Service type report and Leads reports (see guide below).',
        ],
        image: '/employee-help-member-info-report.png?v=0623',
        imageAlt:
          'All reports page with Member info card under CRM highlighted and guide callout',
        imageWide: true,
      },
      {
        title: 'Leads reports',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Leads reports?' },
          'Shows every lead who visited or enquired at your gym — who joined (Converted) and who is still pending (Non-Converted).',
          'Same data as Members → Add Lead. Use it to track leads, filter by date or source, and export the list.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Leads reports from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (CRM, etc.) or search Filter reports by name.',
          'Step 3: Click Leads reports under CRM — opens the Lead Report page.',
        ],
        image: '/employee-help-reports-all-reports-page.png',
        imageAlt:
          'All reports page with Leads reports card under CRM highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Lead Report page' },
          'After you click Leads reports, the Lead Report opens — every lead with status, mobile, and email.',
          'Filter by visit date, service type, and source. Converted, Non-Converted, and Total Count show at the top.',
          'Step 4: Set Date, Service Type, and How Did You Hear → Apply Filters.',
          'Step 5: Check Converted, Non-Converted, and Total Count.',
          'Step 6: Search by name or email · Excel Download · lead table and pagination (see guide below).',
        ],
        image3: '/employee-help-leads-report-page.png?v=0611hd',
        image3Alt:
          'Lead Report guide with filters, counts, search, lead table, and numbered callouts',
        image3Wide: true,
      },
      {
        title: 'Active members',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Active members?' },
          'Shows every member who currently has a live, running package at your gym — who is actively training right now.',
          'Use it to check member name, package, service, dates, and contact details without opening each profile.',
          { heading: 'How to open' },
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Members, CRM, etc.) or search Filter reports by name.',
          'Step 3: Click Active member under Members — view all currently active members.',
        ],
        image: '/employee-help-active-members-all-reports.png',
        imageAlt:
          'All reports page with Active member card under Members highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Active Member Report page' },
          'After you click Active member, the Active Member Report opens — every member with a live package at your gym.',
          'Filter by date, service, or member. Total Active Count and Female Count show quick totals at the top.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Active Count and Female Count.',
          'Step 6: Use the member table — Package Name, End Date, Bill Date, Left Day · Excel Download (see guide below).',
        ],
        image3: '/employee-help-active-members-report-page.png?v=0611hd',
        image3Alt:
          'Active Member Report with filters, counts, member list, package dates, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Inactive members',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Inactive members?' },
          'Shows the list of members who are inactive based on the selected filters — package ended or no longer training at your gym.',
          'Use it for renewals and follow-up. Check Member Id, Name, Package, End Date, and contact details without opening each profile.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Inactive member from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Members, etc.) or search Filter reports by name.',
          'Step 3: Click Inactive member under Members — view all inactive members (see below).',
        ],
        image: '/employee-help-inactive-members-all-reports.png',
        imageAlt:
          'All reports page with Inactive member card under Members highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Inactive Member Report page' },
          'After you click Inactive member, the Inactive Member Report opens — every member whose package has ended or is no longer active.',
          'Filter by date, service, or member name. Inactive Count, Female Count, and Male Count show at the top.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Inactive Count, Female Count, and Male Count.',
          'Step 6: Use the member table — Package Name, End Date, Bill Date, Left Days, Gender · Reset · Excel Download (see guide below).',
        ],
        image3: '/employee-help-inactive-members-report-page.png?v=0633',
        image3Alt:
          'Inactive Member Report with filters, counts, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Male members',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Male members?' },
          'Shows the list of male members at your gym based on the selected filters — active or inactive.',
          'Use it to view package, status, end date, and contact details for all male members in one report.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Male member from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Members, etc.) or search Filter reports by name.',
          'Step 3: Click Male member under Members — view all male members (see below).',
        ],
        image: '/employee-help-male-members-all-reports.png',
        imageAlt:
          'All reports page with Male member card under Members highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Male Member Report page' },
          'After you click Male member, the Male Member Report opens — every male member at your gym based on the selected filters.',
          'Filter by date, service, or member name. Total Count, Active Count, and Inactive Count show at the top.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Count, Active Count, and Inactive Count.',
          'Step 6: Use the member table — Member ID, Status, Name, Phone, Age · Excel Download (see guide below).',
        ],
        image3: '/employee-help-male-members-report-page.png?v=0645',
        image3Alt:
          'Male Member Report with filters, counts, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Female members',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Female members?' },
          'Shows the list of female members at your gym based on the selected filters — active or inactive.',
          'Use it to view package, status, end date, and contact details for all female members in one report.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Female member from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Members, etc.) or search Filter reports by name.',
          'Step 3: Click Female member under Members — view all female members (see below).',
        ],
        image: '/employee-help-female-members-all-reports.png',
        imageAlt:
          'All reports page with Female member card under Members highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Female Member Report page' },
          'After you click Female member, the Female Member Report opens — every female member at your gym based on the selected filters.',
          'Filter by date, service, or member name. Total Count, Active Count, and Inactive Count show at the top.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Count, Active Count, and Inactive Count.',
          'Step 6: Use the member table — Member ID, Name, Status, Phone, Age · Excel Download · Show Chart (see guide below).',
        ],
        image3: '/employee-help-female-members-report-page.png?v=0719',
        image3Alt:
          'Female Member Report with filters, counts, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Transgender members',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Transgender members?' },
          'Shows the list of transgender members at your gym based on the selected filters — active or inactive.',
          'Same as other member reports in FCI — view package, status, end date, and contact details in one place.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Transgender member from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Members, etc.) or search Filter reports by name.',
          'Step 3: Click Transgender member under Members — view all transgender members (see below).',
        ],
        image: '/employee-help-transgender-members-all-reports.png',
        imageAlt:
          'All reports page with Transgender member card under Members highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Transgender Member Report page' },
          'After you click Transgender member, the Transgender Member Report opens — every transgender member at your gym based on the selected filters.',
          'Filter by date, service, or member name. Total Count, Active Count, and Inactive Count show at the top.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Count, Active Count, and Inactive Count.',
          'Step 6: Use the member table — Member ID, Name, Phone, Email, Age · Excel Download · Show Chart (see guide below).',
        ],
        image3: '/employee-help-transgender-members-report-page.png?v=0357',
        image3Alt:
          'Transgender Member Report with filters, counts, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Age report',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Age report?' },
          'Shows members grouped by age — see how many members fall in each age group at your gym.',
          'Use it to understand your member age mix — helpful for planning packages, classes, and gym programs.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Age report from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Members, etc.) or search Filter reports by name.',
          'Step 3: Click Age report under Members — view members by age groups (see below).',
        ],
        image: '/employee-help-age-report-all-reports.png',
        imageAlt:
          'All reports page with Age report card under Members highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Age Wise Report page' },
          'After you click Age report, the Age Wise Report opens — all members with age and contact details.',
          'The Age Range Meter groups members by age. Click a colored block or move the slider to filter. Total Members shows how many match.',
          'Step 4: Pick an age range on the meter or slider.',
          'Step 5: Check Total Members.',
          'Step 6: Use the member table · Excel Download · Show Chart (see guide below).',
        ],
        image3: '/employee-help-age-report-page.png?v=0425',
        image3Alt:
          'Age Wise Report with age range meter, total count, member table, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'New members',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is New members?' },
          'Shows every member who recently joined your gym — people who signed up as new members in the time period you choose.',
          'Use it to see who joined, when they joined, their package, and contact details in one place — helpful for welcome calls, follow-ups, and tracking new sign-ups.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick New member from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Follow-up, Members, etc.) or search Filter reports by name.',
          'Step 3: Click New member under Follow-up — view newly added members (see below).',
        ],
        image: '/employee-help-new-members-all-reports.png',
        imageAlt:
          'All reports page with New member card under Follow-up highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'New Members Report page' },
          'After you click New member, the New Members Report opens — everyone who joined in the period you pick.',
          'Filter by date, service, or member name. Total Amount and Total Count show payment total and how many new members joined.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Amount and Total Count.',
          'Step 6: Use the member table — Member ID, Name, Phone, Bill Date, Package · Excel Download (see guide below).',
        ],
        image3: '/employee-help-new-members-report-page.png?v=0505',
        image3Alt:
          'New Members Report with filters, totals, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Renewal members',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Renewal members?' },
          'Shows every member who renewed their package — people who came back and paid again in the time period you choose.',
          'Use it to see who renewed, when they renewed, their package, and contact details — helpful for follow-ups and tracking returning members.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Renewal member from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Follow-up, Members, etc.) or search Filter reports by name.',
          'Step 3: Click Renewal member under Follow-up — view members who renewed (see below).',
        ],
        image: '/employee-help-renewal-members-all-reports.png',
        imageAlt:
          'All reports page with Renewal member card under Follow-up highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Renewal Members Report page' },
          'After you click Renewal member, the Renewal Members Report opens — everyone who renewed in the period you pick.',
          'Filter by date, service, or member. Total Amount and Total Count show renewal revenue and how many members renewed.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Amount and Total Count.',
          'Step 6: Member table · Excel Download · sort columns · pagination (see guide below).',
        ],
        image3: '/employee-help-renewal-members-report-page.png?v=0519',
        image3Alt:
          'Renewal Members Report with filters, totals, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Quarterly members report',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Quarterly members report?' },
          'Shows a summary of members who joined or renewed their package in a selected quarter — every three months at your gym.',
          'Use it to track new sign-ups and renewals per quarter — helpful for planning targets and reviewing membership growth.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Quarterly member from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Transaction, Members, etc.) or search Filter reports by name.',
          'Step 3: Click Quarterly member under Transaction — view quarterly member summary (see below).',
        ],
        image: '/employee-help-quarterly-members-all-reports.png',
        imageAlt:
          'All reports page with Quarterly member card under Transaction highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Quarterly Member Report page' },
          'After you click Quarterly member, the Quarterly Member Report opens — members who joined or renewed in the period you pick.',
          'Filter by date, service, or member to find details. Total Amount and Total Count show payment total and member count.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Amount and Total Count.',
          'Step 6: Member table — ID, Name, Service, Bill Date, End Date · Excel Download (see guide below).',
        ],
        image3: '/employee-help-quarterly-members-report-page.png?v=0538',
        image3Alt:
          'Quarterly Member Report with filters, totals, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Half yearly report',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Half yearly report?' },
          'Shows members who joined or renewed their package in a selected half-year period — every six months at your gym.',
          'Use it to see who signed up or came back in the first or second half of the year — helpful for mid-year reviews and membership tracking.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Half year member from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Transaction, Members, etc.) or search Filter reports by name.',
          'Step 3: Click Half year member under Transaction — view half-year member details (see below).',
        ],
        image: '/employee-help-half-yearly-members-all-reports.png',
        imageAlt:
          'All reports page with Half year member card under Transaction highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Half Yearly Member Report page' },
          'After you click Half year member, the Half Yearly Member Report opens — members who joined or renewed in the half-year you pick.',
          'Filter by date range, service, or member. Total Amount and Total Count show fees total and how many members are in the report.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Amount and Total Count.',
          'Step 6: Member table — ID, Name, Service, Bill Date, End Date · Excel Download · pagination (see guide below).',
        ],
        image3: '/employee-help-half-yearly-members-report-page.png?v=0548',
        image3Alt:
          'Half Yearly Member Report with filters, totals, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Annual members report',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Annual members report?' },
          'Shows a summary of members who joined or renewed their package during the selected financial year — the full year at your gym.',
          'Use it to track yearly sign-ups and renewals — helpful for annual reviews, targets, and understanding long-term membership growth.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Annual members from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Transaction, Members, etc.) or search Filter reports by name.',
          'Step 3: Click Annual members under Transaction — view yearly member summary (see below).',
        ],
        image: '/employee-help-annual-members-all-reports.png',
        imageAlt:
          'All reports page with Annual members card under Transaction highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Annual Members Report page' },
          'After you click Annual members, the Annual Members Report opens — everyone who joined or renewed in the financial year you pick.',
          'Filter by date range, service, or member. Total Amount and Total Count show yearly fees total and how many members are in the report.',
          'Step 4: Set Date, Service Type, or Member → Apply Filters.',
          'Step 5: Check Total Amount and Total Count.',
          'Step 6: Member table — ID, Name, Service, Bill Date, End Date · Excel Download · pagination (see guide below).',
        ],
        image3: '/employee-help-annual-members-report-page.png?v=0556',
        image3Alt:
          'Annual Members Report with filters, totals, member list, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Package wise report',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Package wise report?' },
          'Shows a detailed breakdown of members by the packages they are on — member counts, collections, and insights for each plan at your gym.',
          'Use it to see which packages sell most, how much each plan collected, and who is on each package — helpful for pricing and sales planning.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Package wise from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Package, Members, etc.) or search Filter reports by name.',
          'Step 3: Click Package wise under Package — view members by package (see below).',
        ],
        image: '/employee-help-package-wise-all-reports.png',
        imageAlt:
          'All reports page with Package wise card under Package highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Package Wise Report page' },
          'After you click Package wise, the Package Wise Report opens — each package with transactions, member count, and paid amount.',
          'Use Package list (All, Active, or Inactive), Filter By Date, and Filter By Package to narrow results. Summary cards show Packages, Total transactions, and Members.',
          'Step 4: Package list + Date + Package → Apply Filters.',
          'Step 5: Check Packages, Total transactions, and Members.',
          'Step 6: Package table — name, duration, dates, status, members, paid amount · Excel Download (see below).',
        ],
        image3: '/employee-help-package-wise-report-page.png?v=0602',
        image3Alt:
          'Package Wise Report with package list filter, date and package filters, summary cards, and data table',
        image3Wide: true,
        bodyAfterImage3: [
          { heading: 'All packages' },
          'Choose All packages in Package list to see every plan at your gym — active and inactive in one view.',
          'Step 7: Package list → All packages · set Date and Package → Apply Filters.',
          'Step 8: Check Packages, Total transactions, and Members summary cards.',
          'Step 9: Package table — name, duration, dates, status, members, paid amount · Excel Download (see guide below).',
        ],
        image4: '/employee-help-package-wise-all-packages-guide.png?v=0617',
        image4Alt:
          'Package Wise Report with All packages selected, filters, summary cards, and numbered guide',
        image4Wide: true,
      },
      {
        title: 'EB Summary',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is EB Summary?' },
          'Shows your gym’s electricity bill (EB) summary — payments, usage, and totals in one place under Accounts.',
          'Use it to track electricity expenses, review bill details, and fetch records for a selected period — helpful for accounts and cost control.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick EB summary from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Accounts, Staff, etc.) or search Filter reports by name.',
          'Step 3: Click EB summary under Accounts — view electricity bill details (see below).',
        ],
        image: '/employee-help-eb-summary-all-reports.png',
        imageAlt:
          'All reports page with EB summary card under Accounts highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'EB Summary Report page' },
          'After you click EB summary, the EB Summary Report opens — daily electricity readings, units used, and bill amount for the period you pick.',
          'Filter by date, then Apply. Total Count, Total Units, and Total Amount show records, units consumed, and total cost at the top.',
          'Step 4: Set Filter By Date → Apply Filters.',
          'Step 5: Check Total Count, Total Units, and Total Amount.',
          'Step 6: Daily table — readings, peak/day units, amount, peak/evening/morning users · Excel Download (see guide below).',
        ],
        image3: '/employee-help-eb-summary-report-page.png?v=0629',
        image3Alt:
          'EB Summary Report with date filter, totals, daily readings table, and numbered guide',
        image3Wide: true,
      },
      {
        title: 'Water summary',
        articleGroup: 'all-categories',
        body: [
          { heading: 'What is Water consumption?' },
          'Shows your gym’s water consumption summary — daily water can usage, rates, and costs in one place under Accounts.',
          'Use it to track how much water was used, review costs over a period, and open the report to fetch records — helpful for accounts and stock control.',
          { heading: 'How to open' },
          'Open Reports from the left menu, go to All categories, then pick Water consumption from the report list.',
          'Step 1: Reports → All categories.',
          'Step 2: On All reports, use Category chips (Accounts, Staff, etc.) or search Filter reports by name.',
          'Step 3: Click Water consumption under Accounts — view water usage report (see below).',
        ],
        image: '/employee-help-water-consumption-all-reports.png',
        imageAlt:
          'All reports page with Water consumption card under Accounts highlighted and click callout',
        imageWide: true,
        bodyEnd: [
          { heading: 'Water Consumption Report page' },
          'After you click Water consumption, the Water Consumption Report opens — each day’s water can entry with rate, number of cans, and amount for the period you pick.',
          'Filter by date, then Apply. Total Count, Total Cans, and Total Amount show how many records, total cans used, and total cost at the top.',
          'Step 4: Set Filter By Date → Apply Filters.',
          'Step 5: Check Total Count, Total Cans, and Total Amount.',
          'Step 6: Daily table — date, day, description, in-charge, rate per can, no. of cans, amount · Excel Download (see guide below).',
        ],
        image3: '/employee-help-water-consumption-report-page.png?v=0640',
        image3Alt:
          'Water Consumption Report with date filter, totals, table columns, and numbered guide',
        image3Wide: true,
      },
    ],
  },
  'Admin Help': {
    Account: [
      { title: 'How do I log in to FCI?', body: ['Admin login flow: Sign Up/Login, OTP verify, access dashboard.'] },
    ],
  },
};

export function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** Sidebar tree: standalone articles and expandable groups (e.g. All categories). */
export function buildCategoryArticleTree(articles = []) {
  const childrenByGroup = {};
  for (const article of articles) {
    if (article.articleGroup) {
      const groupId = article.articleGroup;
      if (!childrenByGroup[groupId]) childrenByGroup[groupId] = [];
      childrenByGroup[groupId].push(article);
    }
  }

  const tree = [];
  for (const article of articles) {
    if (article.articleGroup) continue;
    if (article.articleGroupParent) {
      tree.push({
        type: 'group',
        article,
        groupId: article.articleGroupParent,
        children: childrenByGroup[article.articleGroupParent] ?? [],
      });
      continue;
    }
    tree.push({ type: 'article', article });
  }
  return tree;
} 
export function flattenHelpBlocks(blocks) {
  if (!blocks?.length) return [];
  return blocks
    .flatMap((b) => {
      if (typeof b === 'string') return [b];
      if (b?.heading) return [b.heading];
      if (Array.isArray(b?.list)) {
        return b.list.map((line) =>
          typeof line === 'object' && line?.text ? line.text : String(line),
        );
      }
      return [];
    })
    .filter(Boolean);
}

export function helpKbSearchEntries() {
  if (helpKbSearchEntries.cache) return helpKbSearchEntries.cache;

  const entries = [];

  for (const [group, categories] of Object.entries(HELP_KB)) {
    const categoryNames = Object.keys(categories);
    const firstCategory = categoryNames[0];
    const firstArticle = categories[firstCategory]?.[0];

    if (firstArticle) {
      entries.push({
        kind: 'group',
        title: group,
        group,
        category: '',
        excerpt: `Browse all sections: ${categoryNames.join(', ')}`,
        to: `/docs/employee-help/${slugify(group)}/${slugify(firstCategory)}/${slugify(firstArticle.title)}`,
      });
    }

    for (const [category, articles] of Object.entries(categories)) {
      if (articles[0]) {
        const articleTitles = articles.map((a) => a.title).slice(0, 4);
        entries.push({
          kind: 'category',
          title: category,
          group,
          category,
          excerpt: `${group} — ${articles.length} guide${articles.length === 1 ? '' : 's'}: ${articleTitles.join(', ')}${articles.length > 4 ? '…' : ''}`,
          to: `/docs/employee-help/${slugify(group)}/${slugify(category)}/${slugify(articles[0].title)}`,
        });
      }

      for (const article of articles) {
        const full = [
          ...flattenHelpBlocks(article.body),
          ...flattenHelpBlocks(article.bodyContinue),
          ...flattenHelpBlocks(article.bodyEnd),
          ...flattenHelpBlocks(article.bodyAfterImage3),
          ...flattenHelpBlocks(article.bodyAfterImage4),
          ...flattenHelpBlocks(article.bodyAfterImage5),
          ...flattenHelpBlocks(article.bodyAfterImage6),
        ].join(' ');
        const excerpt = full.length > 160 ? `${full.slice(0, 160)}…` : full;
        entries.push({
          kind: 'article',
          title: article.title,
          group,
          category,
          excerpt,
          to: `/docs/employee-help/${slugify(group)}/${slugify(category)}/${slugify(article.title)}`,
        });
      }
    }
  }

  helpKbSearchEntries.cache = entries;
  return entries;
}
helpKbSearchEntries.cache = null;
