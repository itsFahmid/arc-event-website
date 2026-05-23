Fix mobile responsiveness across the entire ARC 3.0 2025 website. Apply these fixes to all 17 pages. Target breakpoints: Mobile 390px, Tablet 768px, Desktop 1200px+.

━━━━━━━━━━━━━━━━━━━━━━━━━━
GLOBAL RULES (all pages)
━━━━━━━━━━━━━━━━━━━━━━━━━━
- Add to root: box-sizing: border-box on all elements
- No horizontal scroll at any breakpoint — overflow-x: hidden on body
- All section padding: clamp(24px, 5vw, 80px) left and right
- All section vertical padding: clamp(48px, 8vw, 120px) top and bottom
- Font sizes use clamp(): headlines clamp(28px, 5vw, 72px), subheadlines clamp(18px, 3vw, 36px), body stays 16px fixed
- No fixed pixel widths on any container — use max-width with width: 100%
- All images: width: 100%, height: auto, object-fit: cover

━━━━━━━━━━━━━━━━━━━━━━━━━━
NAVBAR — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Hide center nav pill links completely
- Show hamburger menu icon (3 lines) on the right replacing Login + Register buttons
- On hamburger tap: full screen overlay menu slides down from top with all nav links listed vertically, each 56px tall touch target
- Logo stays left, hamburger right
- Theme toggle moves inside the mobile menu overlay at the bottom
- Overlay background: #0A0A0F at 98% opacity
- Close button (X) top right of overlay

━━━━━━━━━━━━━━━━━━━━━━━━━━
HERO SECTION — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Headline font size: clamp(32px, 8vw, 64px)
- Floating constellation nodes: hide on mobile, too cluttered
- Two CTA buttons: stack vertically, full width
- Countdown timer: 2x2 grid instead of single row (Days+Hours top row, Mins+Secs bottom row)
- Each countdown box: flex: 1, min-width: 0

━━━━━━━━━━━━━━━━━━━━━━━━━━
STATS TICKER — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
- Keep marquee scroll but reduce font size to 13px on mobile
- Increase scroll speed slightly on mobile for better feel

━━━━━━━━━━━━━━━━━━━━━━━━━━
SEGMENTS BENTO GRID — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px: 1 column, all cards same width, full width
768px–1199px: 2 columns
1200px+: 3 columns (bento asymmetric layout)

━━━━━━━━━━━━━━━━━━━━━━━━━━
SPLIT SECTIONS (About, Prize, etc.) — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- All 2-column split layouts stack to 1 column
- Image always goes above text when stacked
- Image height fixed at 260px with object-fit: cover on mobile
- Text section: padding 24px 0

━━━━━━━━━━━━━━━━━━━━━━━━━━
PRIZE POOL SECTION — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- 3 tier cards stack vertically: 1st place on top, then 2nd, then 3rd
- Each card full width
- Prize amount font: clamp(24px, 6vw, 48px)

━━━━━━━━━━━━━━━━━━━━━━━━━━
SPONSORS LOGO STRIP — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Logos wrap into 3-column grid instead of single row
- Each logo cell: flex centered, height 60px

━━━━━━━━━━━━━━━━━━━━━━━━━━
PAST HIGHLIGHTS GALLERY — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Switch masonry grid to single column vertical scroll
- Each photo full width, height 220px, object-fit: cover, border-radius 12px

━━━━━━━━━━━━━━━━━━━━━━━━━━
TESTIMONIALS — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Headline stacks above cards (no side by side)
- Cards stack vertically, full width

━━━━━━━━━━━━━━━━━━━━━━━━━━
REGISTRATION FORM — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Card: full width, no horizontal margin, border-radius 16px top only
- Progress steps: show step numbers only (1, 2, 3, 4) not full labels
- All form inputs: width 100%, font-size 16px minimum (prevents iOS zoom on focus)
- Segment selection grid: 1 column on mobile, 2 columns on tablet
- Teammate fields: full width stacked

━━━━━━━━━━━━━━━━━━━━━━━━━━
LOGIN PAGE — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Card: full screen, no border-radius, no card shadow — fills viewport
- All inputs font-size: 16px minimum

━━━━━━━━━━━━━━━━━━━━━━━━━━
DASHBOARD — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Left sidebar: hidden completely
- Replace with bottom tab bar (fixed bottom) with 5 icons: Overview, My Events, Leaderboard, QR Code, Chat
- Tab bar height: 64px, background #0A0A0F, border-top 1px solid rgba(255,255,255,0.07)
- Active tab: icon + label in #588157
- Main content: full width, no left offset, padding-bottom 80px to clear tab bar
- KPI cards: 2x2 grid on mobile
- Upcoming events: vertical stack instead of horizontal scroll

Below 768px sidebar alternative:
- Hamburger icon top left opens a slide-in drawer from left (80% width, full height)
- Drawer contains full sidebar navigation
- Dark overlay behind drawer

━━━━━━━━━━━━━━━━━━━━━━━━━━
ADMIN PANEL — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 1024px:
- Sidebar collapses to icon-only mode (60px wide), labels hidden on hover tooltip
Below 768px:
- Sidebar fully hidden, hamburger top left opens drawer
- Data tables: horizontal scroll wrapper, min-width 600px on table
- KPI cards: 2 column grid

━━━━━━━━━━━━━━━━━━━━━━━━━━
FAQ PAGE — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Category filter pills: horizontal scroll row, no wrap
- Each accordion item: padding 16px, touch target minimum 48px height

━━━━━━━━━━━━━━━━━━━━━━━━━━
CHATBOT PAGE — MOBILE FIX
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below 768px:
- Left chat history panel: hidden by default, accessible via icon button top left
- Chat window: full screen
- Input bar: fixed to bottom of screen, padding-bottom accounting for safe area inset (env(safe-area-inset-bottom))
- Quick reply chips: horizontal scroll, no wrap

━━━━━━━━━━━━━━━━━━━━━━━━━━
TOUCH & INTERACTION FIXES
━━━━━━━━━━━━━━━━━━━━━━━━━━
- All tap targets minimum 44x44px
- Remove hover-only interactions on mobile — use tap equivalents
- Add -webkit-tap-highlight-color: transparent on interactive elements
- Carousel swipe gesture: support touch swipe left/right to change slides on mobile
- All modals/drawers: swipe down to dismiss on mobile

━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY SCALE (mobile)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Page headline: 32px
Section headline: 24px
Card title: 18px
Body text: 15px
Labels/tags: 12px
Buttons: 14px, min-height 44px