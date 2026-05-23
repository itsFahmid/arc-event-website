Redesign the Prize Pool section of the ARC 3.0 2025 landing page. Replace the current flat layout with a premium, editorial, structured design that feels prestigious and exciting.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION BACKGROUND
━━━━━━━━━━━━━━━━━━━━━━━━━━
Full width section. Background: #0d0d13 (slightly lifted from page bg).
Top and bottom: 1px solid rgba(255,255,255,0.06) dividers separating from adjacent sections.
No glow. No radial blob. Clean dark surface.
Section vertical padding: 100px top and bottom.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION HEADER
━━━━━━━━━━━━━━━━━━━━━━━━━━
Top label (small, centered):
- Text: "/ PRIZE POOL" in uppercase, 11px, letter-spacing 0.15em, color #588157
- Small horizontal line on each side of the label (like — / PRIZE POOL —)

Main headline (centered below label):
- Text: "Compete for Glory." — 52px, Space Grotesk Bold, color #F5F5F0
- Second line: "Win Big." — same size but in #a3b18a (muted sage green)

Subtext (centered, below headline):
- "Total prize money distributed across all segments"
- 15px, color #5A5A52, max-width 480px, centered

━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL PRIZE AMOUNT — HERO NUMBER
━━━━━━━━━━━━━━━━━━━━━━━━━━
Large centered number below subtext. Margin-top 40px.
- Currency symbol ৳ + "1,00,000+" 
- Font size: clamp(64px, 8vw, 96px)
- Font weight: 700
- Use a metallic silver gradient on the text ONLY:
  linear-gradient(180deg, #FFFFFF 0%, #9A9A8E 60%, #5A5A52 100%)
  Apply as background-clip: text, -webkit-text-fill-color: transparent
- Below the number: small pill tag — background rgba(88,129,87,0.12), border 1px solid #3a5a40, text "TOTAL PRIZE MONEY ACROSS ALL SEGMENTS" in #a3b18a, 11px uppercase letter-spacing 0.1em, padding 6px 16px, border-radius 999px

━━━━━━━━━━━━━━━━━━━━━━━━━━
PODIUM LAYOUT — 3 TIER CARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below the total amount. Margin-top 56px.
Layout: 3 cards in a row. The CENTER card (Champion / 1st place) is TALLER than the two side cards — like a podium step effect.

Card heights:
- 2nd place (Runner Up) — left card: 220px tall
- 1st place (Champion) — center card: 280px tall (60px taller, elevated)
- 3rd place (Second Runner Up) — right card: 200px tall

Cards are bottom-aligned so the bases all sit on the same horizontal line — only the tops differ in height, creating a podium silhouette.

━━━━━━━━━━━━━━━━━━━━━━━━━━
CHAMPION CARD (Center, Tallest)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Width: 340px. Height: 280px. Border-radius: 20px.
Background: #111116
Border: 1.5px solid rgba(212,175,55,0.35) — subtle gold border
Top edge accent: 3px solid #D4AF37 only on the top border (border-top: 3px solid #D4AF37, other sides 1px rgba)

Top of card: small crown or trophy icon — 28px, color #D4AF37
Position number: large "1" — 64px, font-weight 700, color rgba(212,175,55,0.15) — watermark style behind content
Rank label: "CHAMPION" — 11px uppercase, letter-spacing 0.15em, color #D4AF37
Prize amount: "৳50,000" — 32px, font-weight 700, color #F5F5F0
Prize label: "First Place Prize" — 13px, color #5A5A52
Divider: 1px solid rgba(255,255,255,0.06), margin 12px 0
Perks list (3 items, small):
  ✦ Gold Trophy + Certificate
  ✦ University Recognition
  ✦ Special Sponsor Gift
Each perk: 12px, color #9A9A8E, icon in #588157

Hover: border color brightens to rgba(212,175,55,0.6), card lifts translateY(-4px), transition 250ms ease. No glow.

━━━━━━━━━━━━━━━━━━━━━━━━━━
RUNNER UP CARD (Left)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Width: 300px. Height: 220px. Border-radius: 20px.
Background: #111116
Border: 1px solid rgba(192,192,192,0.20) — subtle silver border
Top edge accent: 3px solid #A8A8A8 (silver)

Medal icon: 24px, color #A8A8A8
Rank label: "RUNNER UP" — 11px uppercase, letter-spacing 0.15em, color #A8A8A8
Prize amount: "৳30,000" — 26px, font-weight 700, color #F5F5F0
Prize label: "Second Place Prize" — 12px, color #5A5A52
Divider: 1px solid rgba(255,255,255,0.06)
Perks (2 items): Silver medal + Certificate · Recognition award
Each perk: 12px, color #9A9A8E

Hover: border brightens to rgba(192,192,192,0.40), translateY(-4px), 250ms ease.

━━━━━━━━━━━━━━━━━━━━━━━━━━
SECOND RUNNER UP CARD (Right)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Width: 300px. Height: 200px. Border-radius: 20px.
Background: #111116
Border: 1px solid rgba(176,141,87,0.20) — subtle bronze border
Top edge accent: 3px solid #B08D57 (bronze)

Medal icon: 24px, color #B08D57
Rank label: "2ND RUNNER UP" — 11px uppercase, letter-spacing 0.15em, color #B08D57
Prize amount: "৳20,000" — 26px, font-weight 700, color #F5F5F0
Prize label: "Third Place Prize" — 12px, color #5A5A52
Divider: 1px solid rgba(255,255,255,0.06)
Perks (2 items): Bronze medal + Certificate · Recognition award
Each perk: 12px, color #9A9A8E

Hover: border brightens to rgba(176,141,87,0.40), translateY(-4px), 250ms ease.

━━━━━━━━━━━━━━━━━━━━━━━━━━
PARTICIPATION ROW — BELOW CARDS
━━━━━━━━━━━━━━━━━━━━━━━━━━
Below the 3 podium cards. Margin-top: 24px.
Single full-width slim card: height 72px, background rgba(255,255,255,0.02), border 1px solid rgba(255,255,255,0.06), border-radius 14px
Content centered horizontally:
  Left: small participation ribbon icon in #588157
  Middle: "All Participants" label 13px #9A9A8E + "Receive a Digital Certificate of Participation" 14px #F5F5F0
  Right: "Auto-generated · Instant Download" pill tag in #3a5a40 bg, #a3b18a text, 12px

━━━━━━━━━━━━━━━━━━━━━━━━━━
SEGMENT PRIZE BREAKDOWN — BELOW PODIUM
━━━━━━━━━━━━━━━━━━━━━━━━━━
Section sub-headline: "Prize breakdown per segment" — 18px, color #9A9A8E, centered, margin-top 56px

Horizontal scrollable row of mini segment prize cards:
Each card: 160px wide, 100px tall, background #111116, border 1px solid rgba(255,255,255,0.06), border-radius 12px, padding 16px
Content: Segment name 13px #F5F5F0 bold at top · Prize amount 20px #a3b18a bold below · "1st place" 11px #5A5A52 at bottom
Show 6 cards. Horizontal scroll on overflow.
Hover: border color shifts to #3a5a40, transition 200ms.

━━━━━━━━━━━━━━━━━━━━━━━━━━
LIGHT MODE ADJUSTMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━
Section background: #F0EDE6
Cards: #FFFFFF, borders same tint colors but at 0.25 opacity
Total prize number: same metallic gradient but darker stops: #1a1a14 to #5A5A52
All muted text: #4a4a40
Top/bottom dividers: rgba(0,0,0,0.08)

━━━━━━━━━━━━━━━━━━━━━━━━━━
MOBILE (below 768px)
━━━━━━━━━━━━━━━━━━━━━━━━━━
Podium layout: stack vertically in order 1st, 2nd, 3rd
All cards same width (full width), same height (auto)
Champion card gets a top border accent only — no height difference on mobile
Total prize number font: clamp(48px, 12vw, 80px)
Segment prize row: horizontal scroll preserved