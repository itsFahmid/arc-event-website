# Work Distribution

## Project Goal

Make the backend ready so that admin panel data can be saved in the database and shown in the user/public pages.

Admin panel actions must update the database. Public and user pages must read updated data from the database.

## Team Structure

### Director

- Director: You
- Main responsibility: Final decision, final approval, priority control

### Assistant Directors

- AD 1: Backend architecture, database design, API security
- AD 2: Admin workflow, upload system, final quality check

### Development Teams

There will be 2 main teams.

Because there are 3 DEs, 2 DEs will lead the 2 teams, and 1 DE will work as cross-team technical lead.

## People Allocation

### Team 1: Backend and Database Team

Lead:

- DE 1

Members:

- SSE 1
- SSE 2
- SE 1
- SE 2

AD Support:

- AD 1

Main focus:

- API routes
- Database operations
- Admin-only protection
- Data validation

### Team 2: Admin Panel and Public Pages Team

Lead:

- DE 2

Members:

- SSE 3
- SSE 4
- SE 3

AD Support:

- AD 2

Main focus:

- Admin panel forms
- Public page data loading
- User dashboard data loading
- Upload UI

### Cross-Team Technical Lead

Lead:

- DE 3

Main focus:

- Connect Team 1 and Team 2 work
- Review API contracts
- Fix integration problems
- Keep code style consistent
- Help both teams when blocked

## Work Breakdown

## AD Responsibilities

### AD 1: Backend Architecture and Security

Tasks:

- Finalize API structure
- Decide request and response format
- Review Prisma database usage
- Make sure all admin APIs are protected
- Make sure normal users cannot access admin APIs
- Review validation for create, update, and delete actions
- Review database migration needs

Deliverables:

- API plan
- Security checklist
- Review comments before merge

### AD 2: Upload System and Quality

Tasks:

- Decide upload provider
- Recommended options: Cloudinary or Vercel Blob
- Define image upload flow
- Define allowed file types and file size
- Review admin panel user experience
- Test full admin-to-public flow
- Prepare final QA checklist

Deliverables:

- Upload plan
- QA checklist
- Final test report

## Team 1 Tasks: Backend and Database

### Task 1: Admin API Protection

Owner:

- SSE 1

Support:

- DE 1
- AD 1

Work:

- Create helper to check admin session
- Use this helper in all admin API routes
- Only admin email from env can access admin APIs
- Return proper error if user is not admin

Done when:

- Normal user cannot call admin APIs
- Logged-out user cannot call admin APIs
- Admin user can call admin APIs

### Task 2: Segment APIs

Owner:

- SSE 2

Support:

- SE 1

Work:

- Create API to list segments
- Create API to create segment
- Create API to update segment
- Create API to delete segment
- Save segment data in Prisma database

Done when:

- Admin can add segment
- Admin can edit segment
- Admin can delete segment
- Public segment page can get latest segment data

### Task 3: FAQ APIs

Owner:

- SE 1

Support:

- SSE 2

Work:

- Create API to list FAQs
- Create API to create FAQ
- Create API to update FAQ
- Create API to delete FAQ
- Support display order

Done when:

- Admin can manage FAQs
- Public FAQ page shows latest FAQs

### Task 4: Sponsor APIs

Owner:

- SE 2

Support:

- DE 1

Work:

- Create API to list sponsors
- Create API to create sponsor
- Create API to update sponsor
- Create API to delete sponsor
- Support sponsor tier and display order

Done when:

- Admin can manage sponsors
- Public sponsor page shows latest sponsors

### Task 5: Schedule APIs

Owner:

- SSE 1

Support:

- SE 2

Work:

- Create API to list schedule items
- Create API to create schedule item
- Create API to update schedule item
- Create API to delete schedule item
- Link schedule item with segment when needed

Done when:

- Admin can manage schedule
- Public schedule page shows latest schedule

## Team 2 Tasks: Admin Panel and Public Pages

### Task 1: Admin Segment UI

Owner:

- SSE 3

Support:

- DE 2

Work:

- Replace static segment data with API data
- Add create segment form
- Add edit segment form
- Add delete confirmation
- Show loading and error states

Done when:

- Admin segment page works with real database data

### Task 2: Admin FAQ UI

Owner:

- SE 3

Support:

- SSE 3

Work:

- Replace static FAQ data with API data
- Add create FAQ form
- Add edit FAQ form
- Add delete confirmation
- Show loading and error states

Done when:

- Admin FAQ manager works with real database data

### Task 3: Admin Sponsor UI

Owner:

- SSE 4

Support:

- SE 3

Work:

- Replace static sponsor data with API data
- Add create sponsor form
- Add edit sponsor form
- Add delete confirmation
- Add logo upload field after upload API is ready

Done when:

- Admin sponsor page works with real database data

### Task 4: Admin Schedule UI

Owner:

- SSE 4

Support:

- DE 2

Work:

- Replace static schedule data with API data
- Add create schedule form
- Add edit schedule form
- Add delete confirmation
- Show segment selector

Done when:

- Admin schedule page works with real database data

### Task 5: Public Pages Data Loading

Owner:

- DE 2

Support:

- SE 3

Work:

- Update public segments page to read from database
- Update public FAQ page to read from database
- Update public sponsors page to read from database
- Update public schedule page to read from database

Done when:

- Admin changes are visible on public pages

## Cross-Team Tasks

### DE 3: Integration Lead

Tasks:

- Keep API route names consistent
- Share API examples with both teams
- Make sure frontend request body matches backend validation
- Review pull requests from both teams
- Fix conflicts between backend and frontend
- Help with build errors

Done when:

- Backend and frontend work together without mismatch

## Upload System Work

### Complex Work: Give to AD 2

Owner:

- AD 2

Support:

- DE 3
- SSE 4

Work:

- Choose upload provider
- Add upload API
- Store uploaded file URL in database
- Use uploaded image URL in public pages
- Add file type validation
- Add file size validation

Recommended provider:

- Cloudinary for easy image management
- Vercel Blob if the project should stay inside Vercel

Done when:

- Admin can upload sponsor logo or segment image
- Uploaded image URL is saved in database
- Public page shows uploaded image

## Priority Order

### Phase 1: Foundation

1. Admin API protection
2. API route structure
3. Segment API
4. FAQ API
5. Sponsor API
6. Schedule API

### Phase 2: Admin Panel

1. Connect admin segment page
2. Connect admin FAQ page
3. Connect admin sponsor page
4. Connect admin schedule page

### Phase 3: Public Pages

1. Public segments page reads database
2. Public FAQ page reads database
3. Public sponsors page reads database
4. Public schedule page reads database

### Phase 4: Upload

1. Upload provider setup
2. Upload API
3. Admin upload UI
4. Public image display

### Phase 5: Testing

1. Admin login test
2. Admin create/edit/delete test
3. Public page update test
4. Normal user access test
5. Build test
6. Vercel deployment test

## Rules for Everyone

- Do not hardcode admin email or password in code.
- Use `.env.local` for local secret values.
- Use Vercel Environment Variables for production secret values.
- Do not expose password or secret in frontend code.
- All admin APIs must check admin session.
- Every create and update API must validate input.
- Every delete action must have confirmation in UI.
- Public pages should only read data.
- Admin pages can create, update, and delete data.

## Final Acceptance Checklist

- Admin can log in after email verification.
- Admin can create segment.
- Admin can edit segment.
- Admin can delete segment.
- Admin can create FAQ.
- Admin can edit FAQ.
- Admin can delete FAQ.
- Admin can create sponsor.
- Admin can edit sponsor.
- Admin can delete sponsor.
- Admin can create schedule.
- Admin can edit schedule.
- Admin can delete schedule.
- Admin can upload image.
- Public pages show latest database data.
- Normal users cannot open admin panel.
- Normal users cannot call admin APIs.
- Production build passes.
- Vercel deployment works.

