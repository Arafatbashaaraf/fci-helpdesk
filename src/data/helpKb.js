/** Single source for Employee / Admin help articles (UI + search). */
export const HELP_KB = {
  'Employee Help': {
    Account: [
      {
        title: 'How do I log in to FCI?',
        body: [
          'Logging in to FCI',
          'Step 1: Enter your email ID or Username.',
          'Step 2: Click Log In Button.',
        ],
        image: '/employee-help-login.png',
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
        bodyContinue: [
          { heading: 'Grand Total Summary' },
          'At the top, choose the time period (for example THIS WEEK) to see transactions for that range — totals update when you change the period.',
          'Use Service Type to filter by All or one service. Pick ALL PAYMENTS, NEW, or RENEWAL to focus the view. Click Download to export the report.',
          'The cards show how much was collected by mode — Cash, Card, UPI, Cheque, and Online — each with its count. The TOTAL card is the grand total amount and transaction count for your filters.',
        ],
        image2: '/employee-help-transaction-dashboard-summary.png',
        image2Alt:
          'Grand Total Summary with time period, service type, payment filters, and Cash, Card, UPI, Cheque, Online, and Total cards',
        bodyEnd: [
          { heading: 'Detailed Collection Summary' },
          'Below Grand Total Summary, Detailed Collection Summary breaks collections down further — not just single payment modes, but split payments too.',
          'Each card shows the amount collected and how many payments used that mode: Cash only, Card only, UPI only, Cheque, and Online.',
          'Split Pay cards show when a member paid using two modes in one transaction — for example Cash + UPI with the amount split on each side. The TOTAL card is Collection Total with the full amount and payment count for your selected period.',
        ],
        image3: '/employee-help-transaction-dashboard-detailed-collection.png',
        image3Alt:
          'Detailed Collection Summary cards for Cash, Card, UPI, Split Pay combinations, Cheque, Online, and Collection Total',
        bodyAfterImage3: [
          { heading: 'Discount Summary' },
          'Discount Summary shows how much discount was given in the selected period. Normal Discount is regular discount on payments. Pending Close Discount is discount applied when closing a pending due. Total Discount is the combined discount amount.',
          { heading: 'Due Summary' },
          'Due Summary tracks money still owed. Due Amount is total outstanding as on the date shown. Pending Collection is due amounts collected as part payments. Pending Close Amount is the total cleared when members finish their full pending balance.',
        ],
        image4: '/employee-help-transaction-dashboard-discount-due.png',
        image4Alt:
          'Discount Summary and Due Summary cards showing normal discount, pending close discount, due amount, pending collection, and pending close amount',
      },
    ],
    Lead: [
      {
        title: 'How do I add a new lead?',
        body: [
          'Step 1: Open Menu. In that you can see the member section in that you can see the option Add lead. Click that.',
        ],
        image: '/employee-help-add-lead-members-menu.png',
        imageAlt: 'Members menu expanded with Add Lead highlighted',
        bodyContinue: [
          'Step 2: After you click Add Lead, the Add Lead page opens (Home / Add Lead) with the Lead Information form. Fill in the Lead Information fields. Left column: Name, Mobile Number, Date of Birth (calendar), Occupation, and Personal Training Required (choose Yes or No from the dropdown). Right column: Address, Email ID, Walk-in Date (calendar), and Expected Join Date (required — marked with *; use the calendar).',
        ],
        image2: '/employee-help-add-lead-form.png',
        image2Alt: 'Add Lead form: Lead Information with Name, Mobile, DOB, Occupation, Address, Email, Walk-in and Expected Join Date',
        bodyAfterImage3: [
          { heading: 'Package Information' },
          'Step 3: Open Service Type and select GYM (pick the service that matches the lead). Open Package Interested and choose the term they want — in the sample this is 1 MONTH. Open Fitness Goal and pick their main goal — in the sample this is Strength Gain.',
        ],
        image3: '/employee-help-add-lead-package-section.png',
        image3Alt: 'Package Information: Service Type GYM, Package Interested 1 MONTH, Fitness Goal Strength Gain',
        bodyEnd: [
          { heading: 'Additional Information' },
          'Step 4: Set Referral Source to where they heard about you — in the sample this is google. Set Customer Service Satisfaction — in the sample this is Very Satisfied. Open Staff Name and assign the staff member handling the lead — in the sample this is DIVAKAR.',
        ],
        image4: '/employee-help-add-lead-additional-info.png',
        image4Alt: 'Additional Information: Referral Source, Customer Service Satisfaction, Staff Name',
        bodyAfterImage4: [
          'Step 5: Click SUBMIT LEAD to save the lead when every required field is complete.',
        ],
        image5: '/employee-help-add-lead-submit.png',
        image5Alt: 'Package and Additional Information with SUBMIT LEAD button',
      },
      {
        title: 'How do I view and manage leads?',
        body: [
          'Step 1: On the dashboard, locate the Lead Members summary card in the top metrics row. It shows how many lead members you have (your screen may show a different number than the example).',
        ],
        bodyContinue: [
          'Step 2: Open Dashboard in the left menu, then Main Dashboard. On the main dashboard, click the Lead Members card to open the leads area (see the screenshot below).',
        ],
        image2: '/employee-help-lead-members-dashboard.png',
        image2Alt: 'Main Dashboard with Lead Members card highlighted',
        bodyEnd: [
          'Step 3: Use the list to review leads and open a record to manage details. To add a new lead, open the main menu, expand Members, then choose Add Lead.',
        ],
      },
    ],
    'Add Members': [
      {
        title: 'Add a New Member',
        body: [
          'Step 1: Open the main menu on the left side of the screen. Expand Members, then click Add Member to start registering a new gym member. Example: tap Members → Add Member (see the screenshot below).',
        ],
        image: '/employee-help-add-member-sidebar.png',
        imageAlt: 'Members menu expanded with Add Member highlighted',
        bodyContinue: [
          'Step 2: After you click Add Member, the Member Info page opens (Home / Member info). This is the main form where you enter all member details before saving. Example: you should see sections like Select Lead and Personal Information.',
          { heading: 'Select Lead' },
          'Step 3: Select Lead links this member to an existing lead record in your system. Open the dropdown and pick the correct lead so their details carry forward. Example: choose the lead name from the list instead of leaving “Select a Lead” empty.',
          { heading: 'Personal Information' },
          'Step 4: Member ID is the unique number your system assigns to each member — enter it if empty or confirm if already filled (Example: MEM1859). Name, Mobile Number, and E-mail are basic contact details: type the full name, a valid mobile number, and an active email (Example: Rajesh, 08925456101, member@gmail.com). pick the birth date from the calendar; Age may fill automatically or you enter it.',
          'Step 5: Blood Group and Aadhar Number are identity and medical reference fields — select blood group and enter Aadhar. Gender and Marital Status: pick one option each. Address: type the full street and area.',
          'Step 6: Review every Personal Information field before moving on. Make sure nothing required is empty.',
        ],
        image2: '/employee-help-add-member-info.png',
        image2Alt: 'Member Info: Select Lead and Personal Information fields',
        bodyEnd: [
          { heading: 'Referral Source' },
          'Step 6: Referral Source tells you how the member found your gym (marketing and tracking). Open the dropdown and select the source they mention. Example: google, Instagram, friend referral, or walk-in.',
          { heading: 'Preferred Slot Timing' },
          'Step 7: Preferred Slot Timing is when the member wants to visit the gym. Under Select Session, choose Morning, Day, Evening, or Night — pick the time band that matches their routine (Example: Morning). Start Time and End Time narrow down their preferred hours inside that session — click each clock icon and set the times they gave you (Example: Start 01:00 PM, End 02:00 AM).',
          { heading: 'Health Information' },
          'Step 8: Health Information flags medical conditions so trainers can plan safe workouts. Check every box that applies to the member; use Others if their condition is not listed. Example: tick Injury if they had a recent leg injury, or Others for a condition not in the list.',
        ],
        image3: '/employee-help-add-member-extra-sections.png',
        image3Alt: 'Referral Source, Preferred Slot Timing, and Health Information sections',
        bodyAfterImage3: [
          { heading: 'Life Style Questionnaire' },
          'Step 9: The Life Style Questionnaire collects habits and fitness preferences for training plans. Scroll down to that section and click ADD DATA if the button appears on your screen. Example: open the questionnaire card below Personal Information.',
        ],
        image4: '/employee-help-add-member-lifestyle.png',
        image4Alt: 'Life Style Questionnaire: smoking, alcohol, food, lifestyle, fitness goals, and preferred workouts',
        bodyAfterImage4: [
          { heading: 'Measurements in inchs' },
          'Step 10: Measurements record body size for tracking and uniform or plan fitting. Most fields use inches; Height uses cm and Weight uses kgs — read each label before you type. Example: match the sample values in the screenshot below.',
        ],
        image5: '/employee-help-add-member-measurements.png',
        image5Alt: 'Measurements in inches with example values for shoulders, chest, waist, height, and weight',
        bodyAfterImage5: [
          'Step 11: When every field is complete, click SAVE AND PROCEED at the bottom of the form. The system saves the member details and opens the Transaction page for the next step. Example: click SAVE AND PROCEED (not PROFILE PIC unless you are uploading a photo).',
        ],
        image6: '/employee-help-add-member-save-proceed.png',
        image6Alt: 'SAVE AND PROCEED button after measurements to continue to Transaction',
      },
      {
        title: 'How do I manage page?',
        body: [
          'On Member Info (Home / Member info), click MANAGE PAGE at the top right — the members list opens so you can view everyone you added.',
          'Search by name or member ID, then open a member to see their full details.',
        ],
        image: '/employee-help-manage-page-button.png',
        imageAlt: 'Member Info page with MANAGE PAGE button to view added members',
        bodyContinue: [
          'After you add a new member, you can see them in the Member Manage list below — search by name or member ID to find them quickly.',
        ],
        image2: '/employee-help-member-manage-list.png',
        image2Alt: 'Member Manage page showing list of added members with ID, name, mobile, and email',
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
      },
      {
        title: 'How do I add a New Payment?',
        body: [
          'Open Payments → Transaction to reach Add Payment (Home / Add Payment). After registering a member, SAVE AND PROCEED takes you here automatically.',
          { heading: 'Member Information' },
          'Choose who is paying from the member list. To use loyalty points, type the value and tap APPLY or CLEAR. Set the service (e.g. GYM) and the reason for this payment.',
        ],
        image: '/employee-help-add-payment-member-info.png',
        imageAlt: 'Member Information: Select Member, reward points, Service Type, and Member Payment For',
        bodyContinue: [
          { heading: 'Package Information' },
          'Set billing and membership start dates. Pick the package and confirm the price. Add complementary benefits or a discount only when they apply.',
          { heading: 'Mode Of Payment' },
          'Choose how they pay (cash, UPI, card, etc.). Enter the amount received now and any registration fee. If they pay in part payment. Pending amount will calculate automatically. That turn on GST when tax is required, then check the final total.',
        ],
        image2: '/employee-help-add-payment-package-payment.png',
        image2Alt: 'Package Information and Mode Of Payment sections on Add Payment form',
        bodyEnd: [
          { heading: 'Trainer & Office Use' },
          'Link a trainer, referral, and the staff who collected the money when your gym tracks these. Use the incentive toggle only if your team uses it — if you click Incentive No, this page will show.',
          'When everything looks correct, click SAVE to finish.',
        ],
        image3: '/employee-help-add-payment-trainer-save.png',
        image3Alt: 'Trainer and Office Use sections with SAVE button on Add Payment form',
        image4: '/employee-help-add-payment-incentive.png',
        image4Alt: 'Office Use with Incentive Yes: Calculation Type, Trainer Percentage, Package Name, and Total Incentive Amount',
      },
      {
        title: 'How do I view Due Transaction?',
        body: [
          'Open the main menu on the left. Click Payments (Transactions, Due) to expand it, then click Due Transaction. After you open it, the Due Transaction page loads with all pending amounts (see the menu path in the screenshot below).',
        ],
        image: '/employee-help-due-transaction-menu.png',
        imageAlt: 'Payments menu expanded with Due Transaction option selected',
        bodyContinue: [
          'On the Due Payment List, find the member by name or use Search Members. Check the pending amount, then click PAY NOW for that member to clear the due (see the screenshot below).',
        ],
        image2: '/employee-help-due-payment-list.png',
        image2Alt: 'Due Payment List with member names, pending amounts, and Pay Now button',
        bodyEnd: [
          'After you click Pay Now, the Due Payment form opens.',
          { heading: 'Fill the form' },
          'Select the member and set Member Payment For to Pending.',
          'Choose payment mode (e.g. Cash), billing date, and who collected the payment.',
          'Check package name and enter paid amount or discount if needed.',
          'Confirm Total Due Amount, then click SUBMIT to finish.',
        ],
        image3: '/employee-help-due-payment-submit.png',
        image3Alt:
          'Due Payment form with member info, payment mode, package details, and Submit button',
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
        image: '/employee-help-pending-close-out.png',
        imageAlt:
          'Due Payment form with Member Payment For set to Pending Close-Out and Submit button',
      },
      {
        title: 'How do I renewal payment?',
        body: [
          'Open Payments → Transaction to reach Add Payment (Home / Add Payment). Use this when a member’s plan has ended or needs to be extended.',
          { heading: 'Member Information' },
          'Select the member from the list. In Member Payment For, choose RENEWAL. Apply reward points only if needed. Set Service Type (e.g. GYM).',
        ],
        image: '/employee-help-renewal-payment-member.png',
        imageAlt: 'Add Payment Member Information with Member Payment For set to RENEWAL',
        bodyContinue: [
          { heading: 'Expiry Details' },
          'Check Expiry Date and Balance Days so you know how much time is left before you renew.',
          { heading: 'Package Information' },
          'Set Bill Date and Start Date. Pick the package — End Date and Package Amount fill based on your choice. Add complementary or discount only if they apply.',
        ],
        image2: '/employee-help-renewal-package-info.png',
        image2Alt: 'Expiry Details and Package Information sections on renewal payment form',
        bodyEnd: [
          { heading: 'Mode Of Payment' },
          'Choose how they pay. Enter Paid Amount and any registration fee. Fill pending amount and date only if they pay in parts. Turn on GST if required, then confirm Amount to be paid.',
        ],
        image3: '/employee-help-renewal-payment-mode.png',
        image3Alt: 'Mode Of Payment Details: payment method, paid amount, pending, GST, and amount to be paid',
        bodyAfterImage3: [
          { heading: 'Trainer & Office Use' },
          'Add trainer, referral, and Collected By if your gym uses them.',
          'Turn off Incentive No if you do not need incentive on this renewal.',
        ],
        image4: '/employee-help-renewal-payment-save.png',
        image4Alt: 'Trainer and Office Use sections with SAVE button on renewal payment form',
        bodyAfterImage4: [
          { heading: 'Incentive option' },
          'In Office Use, turn on Incentive Yes only when your gym pays trainer incentive on this renewal.',
          'Fill Calculation Type, Trainer Percentage, Package Name, and Total Incentive Amount.',
          'Add Start Pay Out Month if your team uses it, then click SAVE to finish.',
        ],
        image5: '/employee-help-renewal-payment-incentive-save.png',
        image5Alt:
          'Office Use with Incentive Yes, incentive fields filled, and SAVE button on renewal payment',
      },
      {
        title: 'How do I manage payment?',
        body: [
          'Open Payments → Transaction to reach Add Payment (Home / Add Payment).',
        ],
        image: '/employee-help-manage-payment-button.png',
        imageAlt: 'Add Payment page with MANAGE PAYMENT button highlighted at the top right',
        bodyContinue: [
          'At the top right, click MANAGE PAYMENT. The manage payment screen opens where you can view, search, and update payment records.',
        ],
        image2: '/employee-help-transaction-history.png',
        image2Alt: 'Transaction History page with payment list, search, and ADD PAYMENT button',
      },
    ],
    Configuration: [
      {
        title: 'How do I add packages?',
        body: [
          'Open Configurations in the left menu (subtitle: Packages, Services). Click Packages — the packages screen opens where you can add and manage gym packages.',
        ],
        image: '/employee-help-configuration-packages-menu.png',
        imageAlt: 'Configurations menu expanded with Packages highlighted',
        bodyContinue: [
          'On the packages screen, open Add Package (breadcrumb: Home / Add Package).',
          { heading: 'Package Details' },
          'Enter the package name, duration in days, and price. Choose a discount type and value if needed. Describe what is included in Package Features.',
          { heading: 'Package Type & Service' },
          'Select the service type and the number of sessions included in this package.',
          { heading: 'Package Dates' },
          'Set the start and end dates for when this package is active. Check the Package Summary on the right — original price, discount, and total should look correct.',
          'Click SAVE PACKAGE at the bottom when you are done.',
        ],
        image2: '/employee-help-add-package.png',
        image2Alt: 'Add Package form with Package Details, Type & Service, Dates, summary, and SAVE PACKAGE',
        bodyEnd: [
          'At the top right, click MANAGE PACKAGE to view all packages you have added.',
        ],
        image3: '/employee-help-manage-package-button.png',
        image3Alt: 'Add Package page with MANAGE PACKAGE button highlighted at the top right',
        bodyAfterImage3: [
          'This screen shows after you click MANAGE PACKAGE.',
        ],
        image4: '/employee-help-package-manage.png',
        image4Alt: 'Package Manage page with package list, search, and ADD PACKAGE button',
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
        image2: '/employee-help-lifestyle-config-add.png',
        image2Alt: 'Life Style Config: fill Description and Remarks, then click + ADD to save the option',
        bodyEnd: [
          { heading: 'Alcohol Consumption' },
          'Scroll to Alcohol Consumption, type the choice in Description (e.g. Never, Occasional, Regular), add Remarks if needed, then click + ADD — edit or delete from the table the same way as above.',
        ],
        image3: '/employee-help-lifestyle-alcohol-config.png',
        image3Alt: 'Alcohol Consumption: Description, Remarks, + ADD button, and options list',
        bodyAfterImage3: [
          { heading: 'Food Preference' },
          'In Food Preference, type the diet option in Description (e.g. Vegetarian, Non Vegetarian, Vegan), add Remarks if needed, then click + ADD — use Edit or Delete in the table to update later.',
        ],
        image4: '/employee-help-lifestyle-food-preference.png',
        image4Alt: 'Food Preference: Description, Remarks, + ADD button, and diet options table',
        bodyAfterImage4: [
          { heading: "What's Your Lifestyle" },
          'In What\'s Your Lifestyle, type the activity level in Description (e.g. Sedentary, Light Active, Active, Very Active, Sport), add Remarks if needed, then click + ADD — edit or delete from the table when required.',
        ],
        image5: '/employee-help-lifestyle-activity-level.png',
        image5Alt: "What's Your Lifestyle: Description, Remarks, + ADD button, and activity options table",
        bodyAfterImage5: [
          { heading: "What's your Fitness Goal" },
          'In What\'s your Fitness Goal, type the goal name in Description (e.g. Muscle Gain, Fat Loss, Strength Gain), add Remarks if needed, then click + ADD — edit or delete from the table when required.',
        ],
        image6: '/employee-help-lifestyle-fitness-goal.png',
        image6Alt: "What's your Fitness Goal: Description, Remarks, + ADD button, and fitness goals table",
        bodyAfterImage6: [
          { heading: "What's your Preferred Workout" },
          'In What\'s your Preferred Workout, type the workout name in Description (e.g. Weight Training, Yoga, Cardio, Zumba), add Remarks if needed, then click + ADD — edit or delete from the table when required.',
        ],
        image7: '/employee-help-lifestyle-preferred-workout.png',
        image7Alt: "What's your Preferred Workout: Description, Remarks, + ADD button, and workout options table",
      },
      {
        title: 'How do I add Referral source?',
        body: [
          'Open Configurations → Referral source. On this page you add how members heard about your gym — these show on Add Lead and Add Member. Type the name in Refer source (e.g. google, Walk In), add Remarks if needed, click + ADD, then edit or delete from the list below.',
        ],
        image: '/employee-help-referral-source.png',
        imageAlt: 'Referral source page: Refer source field, + ADD button, and sources table',
      },
      {
        title: 'How do I add service category?',
        body: [
          'Open Configurations in the left menu (Packages, Services). Click Service Category — the Add Service page opens where you can add gym services used on leads, members, and payments (see the screenshot below).',
        ],
        image: '/employee-help-add-service-category.png',
        imageAlt: 'Configurations menu with Service Category and Add Service form',
        bodyContinue: [
          'Type the Service Name (e.g. GYM, Personal Training). Set the Date if needed. Tick Primary Service mandatory or Scheduling Feature only when your gym uses them, then click SAVE.',
        ],
        bodyEnd: [
          'At the top right, click MANAGE PAGE to see the list of services you have added.',
        ],
        image3: '/employee-help-service-category-manage.png',
        image3Alt: 'Service Category Manage page with service list, search, and Edit or Delete buttons',
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
          'Step 3: Click Export Contacts at the bottom of the list (see screenshot below).',
        ],
        image: '/employee-help-export-contacts-menu.png',
        imageAlt:
          'Configurations menu expanded with Export Contacts highlighted at the bottom of the list',
        bodyContinue: [
          { heading: 'How to export contacts' },
          'Step 1: On the Export Contacts page, read the note — Export member contacts (Name, Phone, Email) in CSV or VCF format.',
          'Step 2: Click Export Format and open the dropdown. Choose CSV (Comma Separated Values) for spreadsheets or VCF (vCard Format) for phone contacts.',
          'Step 3: Check Export Information below — CSV has Name (MemberID-Name), Phone, and Email; VCF has the same fields as a vCard file.',
          'Step 4: Click the blue EXPORT CONTACTS button at the bottom to download the file (see screenshot below).',
        ],
        image2: '/employee-help-export-contacts-page.png',
        image2Alt:
          'Export Contacts page with Export Format dropdown open showing CSV and VCF options, and EXPORT CONTACTS button',
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
        image2: '/employee-help-remove-bill-page.png',
        image2Alt:
          'Remove Bill page with filters, bill table, OTP email, and Delete selected (OTP) button',
        bodyEnd: [
          { heading: 'Enter OTP' },
          'The Enter OTP popup shows after you click Delete selected (OTP).',
          'Check your email — the OTP is sent to the address shown on screen (for example gymitalwarthirunagar@gmail.com).',
          'Type the 4-digit code in the boxes and click VERIFY OTP (see screenshot below).',
        ],
        image3: '/employee-help-remove-bill-otp.png',
        image3Alt:
          'Enter OTP popup with 4-digit code boxes and VERIFY OTP button on Remove Bill page',
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
        image: '/employee-help-followup-reason.png',
        imageAlt:
          'Add Follow-Up Reason page: Follow-up menu with Followup Reason, form fields, SAVE button, and MANAGE PAGE to view saved reasons',
        bodyContinue: [
          { heading: 'How to view the Reason Manage page' },
          'After you click SAVE on the Add Follow-Up Reason page, click MANAGE PAGE at the top right — this opens the Reason Manage page with all saved follow-up reasons.',
          'On Reason Manage, use Filter by Process (for example, Leads) and Search Reason to find your entry. Check Reason, Type, Process, and Status in the table — use EDIT or DELETE in Actions if you need to change or remove a reason.',
        ],
        image2: '/employee-help-followup-reason-manage.png',
        image2Alt:
          'Reason Manage page: follow-up reason list with Filter by Process, Search Reason, Status toggles, and Edit or Delete actions',
      },
      {
        title: 'How do I open Followup Assign?',
        body: [
          'Open the left menu, expand Follow-up, and click Followup Assign to open the Follow Up Assignment page.',
          'In Select Follow-Up Category, choose leads (or the category your gym uses for lead follow-ups).',
          'In Quick Date Range, pick a preset range, or set Start Date and End Date yourself.',
          'Click FILTER to load the lead list in the table.',
          'Tick the checkbox on each lead you want to assign — Selected Count shows how many you picked.',
          'In Staff Incharge, choose who will handle the follow-up.',
          'In Assign Date, pick the date you are assigning for — use this same date later on the Lead Followup page.',
          'Click CONFIRM to save the assignment.',
        ],
        image: '/employee-help-followup-assign-leads.png',
        imageAlt:
          'Follow Up Assignment page: Follow-up menu, filters, lead table with checkboxes, Staff Incharge, Assign Date, and CONFIRM button',
      },
      {
        title: 'Lead followup',
        body: [
          { heading: 'What is Lead Follow Up?' },
          'Lead follow up means contacting a person who visited or enquired as a lead — by call, message, or visit — to help them take the next step (trial, membership, or package).',
          'In FCI this happens in two parts. On Followup Assign, leads are picked, a Staff Incharge is chosen, and an Assign Date is set — then CONFIRM saves the assignment.',
          'On Lead Followup, staff open the list for that same Assign Date, contact each lead, and track how many days have passed since the walk-in.',
          { heading: 'How to use Lead Followup' },
          'Open Follow-up → Lead Followup.',
          'Set Follow Up Date to the same date you used in Followup Assign.',
          'Leave Filter by Pre-Callback Date off unless your gym uses it.',
          'Click FETCH to load your assigned lead list.',
          'Use Search to find a lead by name or phone.',
          'Check Visit Id, Walkin Date, Lead Name, Phone, Days Passed, Assign Date, and In Charge — then contact each lead.',
          'Use EXPORT CSV to download the list, or ASSIGN FOLLOW UP if more leads still need assigning.',
        ],
        image: '/employee-help-lead-followup.png',
        imageAlt:
          'Leads Follow Up page: Lead Followup menu, Follow Up Date, FETCH button, and lead table with Days Passed and In Charge',
      },
      {
        title: 'Continue absent follow up',
        body: [
          'Open Follow-up → Continue Absent Followup.',
          'Set category to Continues Absents, enter Review Days (e.g. 5), then click FILTER.',
          'Choose Staff Incharge, set Range From and To (e.g. 0–10), and pick Assign Date.',
          'Tick the members you want and click ASSIGN to send.',
        ],
        image: '/employee-help-continue-absent-followup.png',
        imageAlt:
          'Follow Up Assignment with Continues Absents, Review Days, FILTER, Staff Incharge, range fields, Assign Date, member table, and ASSIGN button',
        bodyContinue: [
          'On the Continous Absent Follow-Up page, set Follow Up Date to the date you want to check, then click FETCH.',
          'Use Filter by Pre-Callback Date only if needed, or Search to find a member by name or phone.',
          'In the table, check Member Id, Name, Phone, End Date, Assign Date, Days Left, and In Charge — then follow up with each member.',
          'Click EXPORT CSV if you need a copy of the list.',
        ],
        image2: '/employee-help-continue-absent-followup-list.png',
        image2Alt:
          'Continous Absent Follow-Up page with Follow Up Date, FETCH, member table, and In Charge column',
      },
      {
        title: 'In active follow up',
        body: [
          'Open the left menu, expand Follow-up, and click InActive Followup to open the Follow Up Assignment page.',
          'In Select Follow-Up Category, choose In Active, then in Service pick the service you need (for example, GYM).',
          'Set Quick Date Range or enter Start Date and End Date, then click FILTER to load inactive members in the table.',
          'Choose Staff Incharge, pick Assign Date, tick the checkboxes for the members you want, then click CONFIRM to save.',
        ],
        image: '/employee-help-inactive-followup-assign.png',
        imageAlt:
          'Follow Up Assignment with In Active category, Service, date filters, FILTER, Staff Incharge, Assign Date, and member table',
        bodyContinue: [
          'On the Inactive Follow Up page, set Follow Up Date to the day you want to check, then pick Service if you need only one type (for example, FITNESS or GYM).',
          'Click FETCH to load the inactive member list in the table below.',
          'Use Filter by Pre-Callback Date only if your gym uses it, or Search to find a member by name or phone.',
          'In the table, check Member Id, Name, Phone, Package Name, Service Type, End Date, and Assign Date — then contact each member.',
          'Click EXPORT CSV if you need a copy of the list.',
        ],
        image2: '/employee-help-inactive-followup-list.png',
        image2Alt:
          'Inactive Follow Up page with Follow Up Date, Service, FETCH, member table, and pagination',
      },
      {
        title: 'Package follow up',
        body: [
          'Open Follow-up → Followup Assign, set category to Package Expiry and Service (e.g. GYM), then set your dates and click FILTER.',
          'Select the members, choose Staff Incharge and Assign Date, then click CONFIRM to assign.',
          'After that, open Package Expiry Followup in the menu to follow up with those members.',
        ],
        image: '/employee-help-package-followup-assign.png',
        imageAlt:
          'Follow Up Assignment with Package Expiry category, Service, date filters, FILTER, member table, and CONFIRM',
        bodyContinue: [
          'Open Follow-up → Package Expiry Followup to see members whose packages are expiring soon.',
          'Set Follow Up Date and Service (if needed), then click FETCH to load the list.',
          'Check Name, Phone, Package Name, Expiry Date, and Assign Date — then contact each member. Use EXPORT CSV to save the list.',
        ],
        image2: '/employee-help-package-followup-list.png',
        image2Alt:
          'Package Expiring Soon Follow-Up page with Follow Up Date, Service, FETCH, and member expiry table',
      },
      {
        title: 'Birthday wishes',
        body: [
          'Open the left menu, expand Follow-up, and click BirthDay Wishes to open the Follow Up Assignment page.',
          'In Select Follow-Up Category, choose BirthDay Wishes, then set Quick Date Range or pick the date range in Select Date.',
          'Click FILTER to load members with birthdays in that period.',
          'Tick the checkboxes for the members you want — once you select members, the CONFIRM button appears.',
          'Choose Staff Incharge, pick Assign Date, then click CONFIRM to save the assignment.',
        ],
        image: '/employee-help-birthday-wishes-assign.png',
        imageAlt:
          'Follow Up Assignment with BirthDay Wishes, date filters, member checkboxes, Staff Incharge, Assign Date, and CONFIRM button',
        bodyContinue: [
          'On the Birthday Wishes Follow-Up page, set Follow Up Date, then click FETCH.',
          'Use Search if needed, or tick Filter by Pre-Callback Date only when your gym uses it.',
          'Check Name, Phone, DOB, Assign Date, Status, and In Charge — then wish each member.',
          'Click EXPORT CSV to save the list.',
        ],
        image2: '/employee-help-birthday-wishes-list.png',
        image2Alt:
          'Birthday Wishes Follow-Up page with Follow Up Date, FETCH, member table, DOB, Status, and In Charge',
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
        image: '/employee-help-anniversary-followup-assign.png',
        imageAlt:
          'Follow Up Assignment with Anniversary category, date filters, FILTER, member table with Anniversary column, Staff Incharge, Range, Assign Date, and CONFIRM',
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
        image: '/employee-help-client-feedback-assign.png',
        imageAlt:
          'Follow Up Assignment with Client Feedback category, Review Days, Gender, Client Status, FILTER, member table, Staff Incharge, Assign Date, and CONFIRM',
        bodyContinue: [
          { heading: 'Follow up' },
          'After CONFIRM, open Follow-up → Follow Client Feedback. Set Follow Up Date to the same Assign Date from the page above — FETCH loads the members you assigned there.',
          'Check Member Id, Name, Phone, Assign Date, Days Left, In Charge, and Reason — contact each member and record their feedback. Use Search or EXPORT CSV if needed.',
        ],
        image2: '/employee-help-client-feedback-list.png',
        image2Alt:
          'Client Feed Back page with Follow Up Date, FETCH, member table, Days Left, In Charge, and Reason',
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
        image: '/employee-help-pending-payment-assign.png',
        imageAlt:
          'Follow Up Assignment with Pending Payment category, date filters, FILTER, and member table with pending amounts',
        bodyContinue: [
          { heading: 'Follow up' },
          'After CONFIRM, open Follow-up → Due Followup. Set Follow Up Date to the same Assign Date from the page above — that loads the members you assigned.',
          'Pick Service, click FETCH, then contact each member. Use Search or EXPORT CSV if needed.',
        ],
        image2: '/employee-help-due-followup.png',
        image2Alt:
          'Due Follow Up page with Follow Up Date, Service, FETCH, member table showing pending amount and dates',
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
        image: '/employee-help-followup-summary-report.png',
        imageAlt:
          'Follow-up Summary Report with Select Date, Filter, and table showing follow-up types with assigned, missed, and completed counts',
        bodyContinue: [
          { heading: 'What the charts mean' },
          'Below the table, each follow-up type has its own pie chart — Review, DOB, Anniversary, Package Expiry, Continue, Inactive, Due, and Leads.',
          'Assigned Missed (large slice) means members were assigned but follow-up is not done yet — this is the work still pending.',
          'Missed Made means overdue follow-ups that were completed later — staff caught up on old tasks.',
          'Today Assigned shows new follow-ups given for that day. If a chart says No Data Available, nothing was assigned in that category for the date you picked.',
        ],
        image2: '/employee-help-followup-summary-charts.png',
        image2Alt:
          'Follow-up Summary Report pie charts for Review, DOB, Anniversary, Package Expiry, Continue, Inactive, Due, and Leads with Assigned Missed and Missed Made counts',
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
          'This page records daily gym power use — meter readings by time slot, total units, and cost for billing and tracking.',
        ],
        image: '/employee-help-electricity-consumption-add.png',
        imageAlt:
          'Add Meter Reading page: Operational Tools menu, date, rate per unit, morning/day/evening peak readings, in-charge, totals, SAVE METER READING, and MANAGE PAGE',
        bodyContinue: [
          { heading: 'How to fill and save' },
          'Open Operational Tools → Electricity Consumption.',
          'Pick Select Date, enter Rate per Unit, then fill Start Reading, End Reading, and In-charge for Morning Peak, Daytime, and Evening Peak.',
          'Check Total Units and Total Amount, then click SAVE METER READING.',
          { heading: 'Manage page' },
          'After you save, click MANAGE PAGE at the top right — this opens Meter Reading Manage with every reading you entered.',
          'Here you can see Date, Day, Total Units, Amount, and In-charge for each day. Use Search to find a date, CHECK MISSED DATES to spot days with no reading, and ADD METER READING to enter a new one.',
        ],
        image2: '/employee-help-electricity-consumption-manage.png',
        image2Alt:
          'Meter Reading Manage page with search, CHECK MISSED DATES, ADD METER READING, and table of daily units, amount, and incharge',
      },
      {
        title: 'Water consumption',
        body: [
          { heading: 'What is Water Consumption?' },
          'This page records daily water can use at your gym — how many cans were used, the rate per can, and the total cost for stock and billing.',
          { heading: 'How to fill and save' },
          'Open Operational Tools → Water Consumption.',
          'Pick Day, choose Staff InCharge, add Description if needed, then enter No of Cans and Rate Per Can — Amount in Rs. updates automatically.',
          'Click SAVE.',
        ],
        image: '/employee-help-water-consumption-add.png',
        imageAlt:
          'Add Water Qty page: Day, Staff InCharge, Description, No of Cans, Rate Per Can, Amount in Rs., SAVE, and MANAGE PAGE',
        bodyContinue: [
          { heading: 'Manage page' },
          'After you save, click MANAGE PAGE at the top right — this opens Water Manage with every water entry you added.',
          'Here you can see Date, Day, Description, In-Charge, Rate Per can, and No.of can for each day. Use Search to find a date, CHECK MISSED DATES to spot days with no entry, and ADD WATER CAN to add a new one.',
        ],
        image2: '/employee-help-water-consumption-manage.png',
        image2Alt:
          'Water Manage page with search, CHECK MISSED DATES, ADD WATER CAN, and table of daily water can records',
      },
      {
        title: 'Reminder',
        body: [
          { heading: 'What is Reminder?' },
          'Reminder is where staff log daily tasks or work to follow up — so the team knows what to do and who is responsible.',
          { heading: 'How to fill and save' },
          'Open Operational Tools → Reminder.',
          'Enter SL NO and Reminder Points, pick Time, choose Person In Charge, and set Follow Up Result if needed.',
          'Click SAVE.',
        ],
        image: '/employee-help-reminder-add.png',
        imageAlt:
          'Add Reminder page: SL NO, Reminder Points, Time, Person In Charge, Follow Up Result, SAVE, and MANAGE PAGE',
        bodyContinue: [
          { heading: 'Manage page' },
          'After you save, click MANAGE PAGE — here you can see all reminder details in one place.',
          'Check SI No, Reminder Points, Time, Person In Charge, Reminder Result, and Status to see which reminders are pending or in progress. Use Search or ADD REMINDER as needed.',
        ],
        image2: '/employee-help-reminder-manage.png',
        image2Alt:
          'Reminder Manage page with search, ADD REMINDER, and table showing reminder points, person in charge, result, and status',
      },
      {
        title: 'Watch CCTV',
        body: [
          { heading: 'What is CCTV?' },
          'CCTV is the live camera view of your gym — staff use it to watch the floor, check safety, and monitor activity without leaving the desk.',
          { heading: 'How to open' },
          'Open Operational Tools → Watch CCTV, then on the Live CCTV Feed page click the CCTV link to start watching live.',
        ],
        image: '/employee-help-watch-cctv.png',
        imageAlt:
          'Watch CCTV page: Operational Tools menu, Live CCTV Feed heading, and CCTV link to open live stream',
      },
      {
        title: 'Check list',
        body: [
          { heading: 'What is Check List?' },
          'Check List is the daily gym task sheet — tick each job when it is done, like machine cleaning, EB reading, leads, birthday calls, and other opening or closing duties.',
          { heading: 'How to fill and save' },
          'Open Operational Tools → Check List.',
          'Pick the date, tick every task you completed for that day, then click SAVE.',
        ],
        image: '/employee-help-check-list-add.png',
        imageAlt:
          'Add Check List page: date picker, daily task checkboxes, SAVE, MANAGE PAGE, REPORT/CHECKLIST, and ADD CHECK LIST ITEMS',
        bodyContinue: [
          { heading: 'Manage check list' },
          'After you save, click MANAGE PAGE — this opens Checklist Manage with every checklist you entered.',
          'Check Date, Day, and each task column to see what was done or missed. Use Search to find a date, CHECK MISSED DATES for gaps, and Edit or Delete in Actions if you need to change an entry.',
        ],
        image2: '/employee-help-check-list-manage.png',
        image2Alt:
          'Checklist Manage page with search, CHECK MISSED DATES, task columns, and edit or delete actions',
        bodyEnd: [
          { heading: 'Add new list' },
          'Click ADD CHECK LIST ITEMS on the Check List page — the Add CheckList Item screen opens where you type the new task name.',
          'Enter the name in CheckList Name (for example a new cleaning or admin job), then click SAVE — it appears as a new checkbox on the daily checklist.',
        ],
        image3: '/employee-help-check-list-add-item-form.png',
        image3Alt:
          'Add CheckList Item page with CheckList Name field, SAVE button, and MANAGE PAGE',
        bodyAfterImage3: [
          { heading: 'Manage page' },
          'After you save a new item, click MANAGE PAGE at the top right — Checklist Item Manage opens.',
          'Here you can see every checklist name you added, with Status on or off, and EDIT or DELETE to change or remove items.',
        ],
        image4: '/employee-help-check-list-item-manage.png',
        image4Alt:
          'Checklist Item Manage page showing added items, Status toggles, and Edit or Delete actions',
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
          'Step 3: Click Reward points — the Reward points page opens (see menu screenshot below).',
        ],
        image: '/employee-help-reward-points-menu.png',
        imageAlt:
          'Elite Rewards Program menu expanded with Reward points highlighted',
        bodyContinue: [
          { heading: 'Reward points page' },
          'After you open Reward points, this page shows the rules your gym uses — linked to Add Payment where staff APPLY points on a bill.',
          'Redeem (payment): 1 point = ₹1 off the bill (no conversion).',
          'Referrer earn: when a payment has Referred By Member, that member gets points — floor((package amount ÷ ₹1000) × 10). Example: ₹10,000 package → 100 points.',
          'Set Rupees (basis) and Points for that rupees to control the earn rate — then click SAVE (see screenshot below).',
        ],
        image2: '/employee-help-reward-points-page.png',
        image2Alt:
          'Reward points page with redeem and referrer earn rules, Rupees basis, Points fields, and SAVE button',
      },
      {
        title: 'Reward ledger',
        body: [
          { heading: 'What is Reward ledger?' },
          'Reward ledger is the FCI record of all reward point activity for your gym — points earned, used, and given for referrals.',
          'It works with Reward points settings and Add Payment — every earn or redeem on a bill can be checked here.',
          'Use it to see which member got points, when, and how many — for tracking and support.',
          'In short, Reward ledger is the history book of your gym’s reward points program.',
          { heading: 'How to open Reward ledger' },
          'Step 1: Open the left menu.',
          'Step 2: Expand Elite Rewards Program (Incentive).',
          'Step 3: Click Reward ledger (see screenshot below).',
        ],
        image: '/employee-help-reward-ledger-menu.png',
        imageAlt:
          'Elite Rewards Program menu expanded with Reward ledger highlighted below Reward points',
        bodyContinue: [
          { heading: 'Reward points report' },
          'Step 1: On BY MEMBER tab, type Member ID → click APPLY.',
          'Step 2: Check Earned, Used, and Balance in the table.',
          'Step 3: Use Search table to find by name. Click REFRESH to reload.',
          'Step 4: Click TRANSACTION LEDGER tab for full entry details.',
        ],
        image2: '/employee-help-reward-ledger-page.png',
        image2Alt:
          'Reward points report BY MEMBER tab with Filter by member ID, APPLY, table showing Earned, Used, and Balance',
        bodyEnd: [
          { heading: 'Transaction ledger tab' },
          'Click TRANSACTION LEDGER — here you see brief details of every reward point entry.',
          'The note says: earn and redeem rows from member_reward_ledger (referral earn, payment redeem).',
          'Step 1: Type Member ID → click APPLY.',
          'Step 2: In the table, check When, Member ID, Referral member, Name, Points earned, Type, Transaction ID, and REDEEM Value.',
          'Type is EARN_REFERRAL when points are earned, or REDEEM_PAYMENT when used on a payment (see screenshot below).',
        ],
        image3: '/employee-help-reward-ledger-transaction.png',
        image3Alt:
          'TRANSACTION LEDGER tab with earn and redeem rows, Type, Points earned, and REDEEM Value',
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
          'Step 1: Open the left menu.',
          'Step 2: Expand Elite Rewards Program (Incentive).',
          'Step 3: Click Incentive Approval — below Reward ledger (see menu screenshot below).',
        ],
        image: '/employee-help-incentive-approval-menu.png',
        imageAlt:
          'Elite Rewards Program menu expanded with Incentive Approval highlighted below Reward ledger',
        bodyContinue: [
          { heading: 'Incentive Approval page' },
          'After you open Incentive Approval, this page lists payments where incentive was saved on Add Payment with Incentive Yes — same trainer, percentage, and amount from the payment form.',
          'Select Trainer, Service Type, and Select Month, then refresh. The summary shows Approved Incentive (green), Rejected Incentive (red), and Total Incentive for that trainer and month.',
          'The Payments table shows each bill — Member Name, Member ID, Package Name, Bill Date, Type (NEW or RENEWAL), Package Amount, Registration Fee, and Total Amount.',
          'Step 1: Pick trainer, service, and month.',
          'Step 2: Tick the payment rows to review.',
          'Step 3: Click APPROVE SELECTED, CANCEL SELECTED, or REJECT SELECTED (see screenshot below).',
        ],
        image2: '/employee-help-incentive-approval-page.png',
        image2Alt:
          'Incentive Approval page with trainer filters, approved and rejected totals, payments table, and approve or reject buttons',
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
export function flattenHelpBlocks(blocks) {
  if (!blocks?.length) return [];
  return blocks
    .map((b) => (typeof b === 'string' ? b : b?.heading ?? ''))
    .filter(Boolean);
}

export function helpKbSearchEntries() {
  const entries = [];
  for (const [group, categories] of Object.entries(HELP_KB)) {
    for (const [category, articles] of Object.entries(categories)) {
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
          kind: 'help',
          title: article.title,
          excerpt,
          to: `/docs/employee-help/${slugify(group)}/${slugify(category)}/${slugify(article.title)}`,
        });
      }
    }
  }
  return entries;
}
