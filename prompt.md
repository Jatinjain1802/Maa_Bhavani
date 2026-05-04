# 🏗️ Maa Bhawani Construction & Contractor — Master Prompt File
> All prompts for website design, image generation, content, and flow in one place.

---

## 📁 TABLE OF CONTENTS

1. [Brand Context (Always Include)](#1-brand-context)
2. [Website Design Prompt](#2-website-design-prompt)
3. [Image Generation Prompts](#3-image-generation-prompts)
4. [Section-by-Section Content Prompts](#4-section-prompts)
5. [AI Chatbot / WhatsApp Bot Prompt](#5-chatbot-prompt)
6. [Social Media Caption Prompts](#6-social-media-prompts)
7. [SEO Meta Prompts](#7-seo-prompts)
8. [Page Flow & UX Prompt](#8-page-flow-prompt)

---

## 1. BRAND CONTEXT
> 📌 **Always paste this at the start of any AI prompt related to this brand.**

```
Brand: Maa Bhawani Construction & Contractor
Location: Ujjain, Madhya Pradesh, India
Proprietor: Chainsingh Surawat | Co-Owner: Kuldeep Singh Surawat
Phone 1: +91 83192 13539 | Phone 2: +91 79997 50019
WhatsApp: wa.me/918319213539
Instagram: @maa_bhawani_contractor
Experience: 10+ Years | Projects: 500+ Completed

Services:
1. House Construction (RCC, brickwork, plastering, full turnkey)
2. Tiles Work (vitrified, ceramic, porcelain, designer)
3. Marble Work (Indian + Italian marble, luxury interiors)
4. Kota Stone (courtyards, commercial floors, durable)
5. Floor Polishing (diamond grinding, crystal polish, mirror finish)
6. Renovation Work (bathroom, kitchen, full interior)

Brand Colors:
- Deep Navy: #0d1b3e (primary background, trust)
- Gold/Amber: #c9a84c (accents, CTAs, premium)
- Soft Gold: #e8c96e (secondary accents)
- Warm Cream: #fdf8f0 (section backgrounds)
- White: #ffffff (text on dark)

Fonts:
- Display/Headings: Playfair Display (serif, premium feel)
- Body: DM Sans (clean, readable)
- Hindi Content: Noto Sans Devanagari

Taglines:
- Primary: "Quality Today, Stronger Tomorrow"
- Emotional: "We Build Your Dreams"
- Footer: "Built on Trust · Quality in Every Detail"
- Floor Polishing: "Perfect Finish, Premium Look"

Brand Personality: Warm, confident, grounded. Like a trusted expert who is also a good family friend.
Language: Hinglish (mix of Hindi + English) — accessible yet professional.
Target Audience: Homeowners aged 28–55 in Ujjain and 30km radius, income ₹3L–₹15L.
```

---

## 2. WEBSITE DESIGN PROMPT

### 2.1 Full Website Rebuild Prompt
```
[PASTE BRAND CONTEXT ABOVE]

Design and build a complete single-page website for Maa Bhawani Construction & Contractor using HTML, CSS, and vanilla JavaScript. No frameworks.

DESIGN SYSTEM:
- Color palette: Navy #0d1b3e, Gold #c9a84c, Soft Gold #e8c96e, Cream #fdf8f0, White #ffffff
- Fonts: Playfair Display (headings), DM Sans (body) — load from Google Fonts
- Style: Premium, luxury construction aesthetic. Navy + Gold like high-end architecture firms.
- Feel: Professional but warm. NOT corporate/cold. Like a trusted local expert.

SECTIONS TO BUILD (in order):
1. Sticky Navigation — Logo + nav links + "📞 Call Now" gold CTA button + hamburger for mobile
2. Hero Section — Full height, navy gradient bg, animated headline, two CTA buttons (Call + WhatsApp), 3 stats (500+ Projects, 10+ Years, 100% Satisfaction)
3. Gold Ticker Strip — Scrolling marquee of services
4. About Section — 2-column: left=company story + checklist, right=owner card (Chainsingh Surawat quote + contact details)
5. Services Section — 6 cards in grid (House Construction, Tiles, Marble, Kota Stone, Floor Polishing, Renovation) with hover animations
6. Project Gallery — Masonry/editorial grid with filter tabs (All, Floor Polishing, Tiles, Marble, Construction)
7. Why Choose Us — 6 icon cards (Expert Team, On-Time, Best Price, Quality Materials, After-Service, Local Expertise)
8. Our Process — 5-step horizontal timeline (Contact → Site Visit → Quote → Work → Delivery)
9. Testimonials — 3 client review cards on dark navy background
10. CTA Band — Gold background, "Apna Dream Home Banao Aaj!" with Call + WhatsApp buttons
11. Footer — Brand info + Services list + Contact details + Instagram link

INTERACTIONS & ANIMATIONS:
- Smooth scroll between sections
- Scroll-triggered fade-up animation on section entry (use IntersectionObserver)
- Nav shadow appears on scroll
- Service cards lift on hover with gold bottom bar animation
- Counter animation on hero stats (0 → 500+ etc.)
- Gallery tab filter with smooth transition
- Hamburger menu toggle for mobile
- Gold scrollbar

CONTENT LANGUAGE: Hinglish (Hindi + English mix). Warm and relatable tone.

RESPONSIVE: Fully mobile-first. Breakpoints at 768px and 480px.

SEO: Proper title tag, meta description, lang="hi", semantic HTML, heading hierarchy.
```

### 2.2 Individual Section Redesign Prompt
```
[PASTE BRAND CONTEXT ABOVE]

Redesign only the [SECTION NAME] section of the Maa Bhawani website.

Current code: [PASTE CURRENT HTML/CSS]

Requirements:
- Keep same Navy + Gold color palette
- Make it more visually impactful and premium
- Add micro-animations or hover effects
- Ensure mobile responsive
- Language: Hinglish

Return only the HTML + CSS for this section.
```

---

## 3. IMAGE GENERATION PROMPTS

### 3.1 Hero Background
```
Photorealistic construction site in India, luxury residential building under construction, golden hour sunlight, warm amber and deep blue tones, marble flooring being installed in foreground, professional workers in background, cinematic depth of field, premium architecture photography style, no text overlay
```

### 3.2 Floor Polishing — Before/After
```
Split image: Left side shows old dull worn marble floor, right side shows same floor after professional diamond polishing — mirror-like reflective shine, showroom finish, luxury interior India, warm golden light, close-up floor texture detail, photorealistic
```

### 3.3 Tiles Work
```
Professional tile installation in a modern Indian home, vitrified large format tiles being laid perfectly, worker using level tool ensuring zero lippage, clean bright interior, natural light, photorealistic, warm tones
```

### 3.4 Marble Work — Luxury Interior
```
Luxury Indian home interior with white Makrana marble flooring, seamless vein-matched joints, grand entrance hall, warm golden light from chandelier, premium residential interior design, photorealistic, no people
```

### 3.5 Kota Stone — Outdoor/Commercial
```
Traditional Kota blue stone flooring in an Indian courtyard, cool stone texture, geometric pattern laying, commercial building exterior, natural daylight, photorealistic, clean and professional
```

### 3.6 House Construction
```
New house construction in India, reinforced concrete structure (RCC), brickwork visible, professional construction team working, blue sky background, Ujjain Madhya Pradesh setting, photorealistic, progress shot
```

### 3.7 Renovation — Kitchen
```
Indian kitchen renovation in progress, new ceramic tiles being installed on wall and floor, modern clean design, bright interior lighting, before and after comparison, photorealistic, warm tones
```

### 3.8 Owner Portrait (Chainsingh Surawat Style)
```
Professional portrait of a confident Indian man in his 40s, construction site owner, wearing a clean collared shirt, warm smile, trustworthy expression, construction site background slightly blurred, natural light, photorealistic, corporate headshot style
```

### 3.9 Logo Refinement Prompt (for AI logo tools)
```
Professional logo for "Maa Bhawani Construction and Contractor", Ujjain India. Central element: Goddess Durga/Bhawani deity silhouette in gold. Supporting elements: building/construction silhouette, subtle crane. Typography: Bold serif "MAA BHAWANI" at top, "CONSTRUCTION AND CONTRACTOR" below. Color scheme: Deep navy blue #0d1b3e background, gold #c9a84c text and icon. Bottom tagline: "Built on Trust · Quality in Every Detail". Clean, professional, premium feel. Vector style.
```

### 3.10 Social Media Post — Service Showcase
```
Premium social media graphic for Indian construction company "Maa Bhawani". Background: deep navy blue gradient. Central visual: [SERVICE IMAGE - e.g., polished marble floor]. Gold accent lines as border/frame. Text overlay: Service name in Playfair Display gold font. Bottom strip: company logo and Instagram handle @maa_bhawani_contractor. Professional, luxury feel. 1080x1080 square format.
```

### 3.11 Before/After — Floor Polishing Reel Thumbnail
```
Dramatic before-after comparison photo for floor polishing service. Left half: dull, scratched, old marble/mosaic floor. Right half: same floor after diamond polishing — mirror shine, reflects ceiling. Diagonal split with gold dividing line. Text: "BEFORE | AFTER" in bold. Deep navy background. Photorealistic, high contrast.
```

---

## 4. SECTION PROMPTS

### 4.1 Hero Section Content
```
Write hero section content for Maa Bhawani Construction website.
- Badge text: Short trust signal (10 words max)
- Headline: 2-line, powerful, mentions craftsmanship/dreams. One phrase in Hindi/Hinglish.
- Subtext: 2-3 lines in Hinglish, mentions services + Ujjain location
- CTA 1: Call to action for phone call
- CTA 2: WhatsApp message
- 3 Stats: Projects done, years experience, satisfaction rate
Tone: Warm, confident, aspirational. NOT corporate.
```

### 4.2 About Section
```
Write the About section content for Maa Bhawani Construction website.
- Section label (3-4 words, uppercase)
- Section title with Hindi word highlighted
- 2 paragraphs in Hinglish about the company (10+ years, 500+ projects, Ujjain roots, family trust)
- 5 bullet points (USPs/advantages)
- Owner quote from Chainsingh Surawat — personal, warm, aspirational (2-3 lines)
Tone: Trustworthy, personal, proud of craft.
```

### 4.3 Services Section
```
Write service card content for all 6 services of Maa Bhawani Construction:
1. House Construction
2. Tiles Work
3. Marble Work
4. Kota Stone
5. Floor Polishing
6. Renovation Work

For each service provide:
- Icon emoji
- Service name
- 2-line description in Hinglish (mention materials/scope/USP)
Tone: Clear, confident, benefit-focused.
```

### 4.4 Testimonials
```
Write 3 realistic customer testimonial reviews for Maa Bhawani Construction & Contractor.
- Customer names: Common Ujjain/MP Hindu names
- Locations: Ujjain neighborhoods (Freeganj, Mahakal Nagar, Dewas Road, Nanakheda, etc.)
- Review text: 2-3 lines in Hinglish, specific to a service (floor polishing, tiles, renovation)
- Rating: 5 stars each
- Tone: Genuine, warm, specific — not generic. Mention owner name sometimes.
```

### 4.5 Why Choose Us
```
Write 6 "Why Choose Us" points for Maa Bhawani Construction.
Each point needs:
- Icon emoji
- Title (2-3 words)
- Description (1-2 lines in Hinglish)

Topics to cover: Expert team, On-time delivery, Best price/transparency, Quality materials, After-service support, Local expertise in Ujjain.
```

### 4.6 FAQ Section (Optional)
```
Write 6 FAQs for Maa Bhawani Construction & Contractor website.
Common questions homeowners in Ujjain would ask about:
- Pricing and quotation process
- Timeline for floor polishing/tiling
- Materials used
- Service area coverage
- Payment terms
- What makes them different from local contractors
Answer in Hinglish. Keep answers concise (2-3 lines max).
```

---

<!-- ## 5. CHATBOT / WHATSAPP BOT PROMPT

### 5.1 WhatsApp Auto-Reply System Prompt
```
You are the customer service assistant for Maa Bhawani Construction & Contractor, Ujjain.

Your name: Maa Bhawani Assistant
Tone: Warm, friendly, professional. Use Hinglish (Hindi + English mix).
Always greet with "Namaste 🙏"

Your job:
1. Collect: Customer name, location in Ujjain, service required, rough area/size
2. Share relevant info about the service
3. Book a free site visit or connect them with owner Chainsingh ji (+91 83192 13539)

Services you know:
- House Construction, Tiles Work, Marble Work, Kota Stone, Floor Polishing, Renovation

Rules:
- Never quote prices — always say "Free site visit ke baad accurate estimate milega"
- Always offer free site visit
- Be warm and helpful — like a family friend
- End every message with a clear next step

Business hours: Mon–Sat, 8am–8pm
Emergency contact: +91 83192 13539
```

### 5.2 Lead Qualification Script
```
Generate a WhatsApp conversation script for Maa Bhawani Construction to qualify a new lead.

Flow:
1. Customer sends first message
2. Bot greets + asks service needed
3. Bot asks location in Ujjain
4. Bot asks rough area/size
5. Bot explains the free site visit offer
6. Bot collects preferred time for site visit
7. Bot confirms booking and shares contact

Write natural Hinglish dialogue. Keep each message short (under 3 lines). Add relevant emojis.
```

--- -->

## 6. SOCIAL MEDIA PROMPTS

### 6.1 Instagram Caption — Floor Polishing
```
Write an Instagram caption in Hinglish for Maa Bhawani Construction showing a before-after floor polishing transformation.
- Hook in first line (curiosity or wow factor)
- 2-3 lines explaining the service
- Call to action (WhatsApp/call)
- 5-7 relevant hashtags in Hindi + English
- Tone: Excited, warm, confident
- Include: @maa_bhawani_contractor
- End with 🙏 or relevant emoji
```

### 6.2 Educational Post — Tiles vs Marble
```
Write a carousel post script in Hinglish: "Tiles vs Marble — Ghar ke liye kya better hai?"

Slides:
1. Hook slide — question/title
2. Tiles — 3 pros, 2 cons (relatable Indian home context)
3. Marble — 3 pros, 2 cons
4. When to choose Tiles (budget, bathrooms, kitchen)
5. When to choose Marble (living room, entrance, premium look)
6. Expert recommendation from Maa Bhawani
7. CTA slide — "Free consultation ke liye WhatsApp karein"

Each slide: 1 headline + 3-4 bullet points max. Hinglish. Simple language.
```

### 6.3 Weekly Content Calendar
```
Create a 1-week Instagram content calendar for Maa Bhawani Construction.

Format for each day:
- Day name
- Content type (Photo/Reel/Carousel/Story)
- Topic/title
- Caption hook (first line only)
- Hashtags (5-7)

Week theme: "Quality Kaam, Real Results"
Mix: Project showcase (35%), Educational (25%), Trust building (20%), Promotions (10%), Local connection (10%)
Language: Hinglish
```

### 6.4 Reel Script — Floor Polishing Time-lapse
```
Write a 30-second Instagram Reel script for Maa Bhawani Construction showing floor polishing process.

Include:
- Opening hook text (on screen, 2 seconds)
- Visual sequence description (what to film)
- Background music suggestion (mood)
- Voice-over lines in Hinglish (if any)
- Text overlays for each clip
- Closing CTA text + contact info
- Caption for the reel post
Tone: Satisfying, wow-factor, professional.
```

---

## 7. SEO PROMPTS

### 7.1 Meta Tags
```
Write SEO-optimized meta tags for Maa Bhawani Construction & Contractor website.

Target keywords:
- Floor polishing Ujjain
- Tiles contractor Ujjain
- Marble work Ujjain
- House construction Ujjain
- Best contractor Ujjain MP

Provide:
- Title tag (max 60 characters)
- Meta description (max 155 characters)
- OG title, OG description (for WhatsApp/Facebook sharing)
- Keywords meta tag
Language: English (for search engines)
```

### 7.2 Google My Business Description
```
Write a Google My Business description for Maa Bhawani Construction & Contractor.

Requirements:
- Max 750 characters
- Include top keywords naturally
- Mention: Ujjain, 10+ years, 500+ projects, services (tiles, marble, floor polishing, construction)
- Include trust signals
- End with call to action
- Language: English
Tone: Professional yet warm.
```

### 7.3 Blog Post Prompt — Local SEO
```
Write a blog post for Maa Bhawani Construction website targeting local SEO.

Topic: "Floor Polishing in Ujjain — Complete Guide (2025)"

Structure:
- SEO-optimized H1 title
- Introduction (why floor polishing matters)
- What is floor polishing? (types: diamond, crystal, acid)
- Benefits of professional floor polishing
- Cost factors in Ujjain market
- How to choose the right contractor in Ujjain
- Why choose Maa Bhawani (soft pitch)
- FAQ section (5 questions)
- Conclusion + CTA

Length: 800-1000 words. Hinglish-friendly but SEO in English. Include keyword "floor polishing Ujjain" 5-7 times naturally.
```

---

## 8. PAGE FLOW & UX PROMPT

### 8.1 Full Page Flow Design
```
Design the complete user journey/page flow for Maa Bhawani Construction website.

User enters website → follows this flow:

SECTION ORDER:
1. NAV (sticky) — Logo | Home | About | Services | Gallery | Contact | [📞 Call Now - gold button]
2. HERO — First impression. Navy bg. Animated headline. Stats. Dual CTA.
   → Goal: Establish trust in 5 seconds
3. TICKER — Gold strip. Scrolling services list. Visual separator.
4. ABOUT — Who we are. Owner face. Personal quote. Trust signals.
   → Goal: Humanize the brand
5. SERVICES — What we offer. 6 cards. Hover effects.
   → Goal: Help user identify their need
6. GALLERY — Proof of work. Real projects. Filter by type.
   → Goal: Show quality visually (before/after)
7. WHY US — Differentiators. 6 icon cards.
   → Goal: Remove objections
8. PROCESS — How it works. 5 steps. Reassure first-timers.
   → Goal: Reduce anxiety about hiring a contractor
9. TESTIMONIALS — Social proof. Real reviews.
   → Goal: Final trust push
10. CTA BAND — Gold bg. Urgency. Both contact options.
    → Goal: Convert to lead
11. FOOTER — All info. Links. Tagline.

MICRO-CONVERSIONS (scattered throughout):
- "📞 Call" button in Nav
- "WhatsApp Karein" button in Hero
- "Quote Maango →" button near Services
- "Free Site Visit" mention in Process
- Both phone + WhatsApp in CTA Band

MOBILE FLOW:
- Hamburger menu with full-screen overlay
- Stacked single column layout
- Thumb-friendly CTA buttons (min 48px height)
- WhatsApp floating button (bottom right, always visible)

CONVERSION GOAL: Visitor → WhatsApp message OR phone call within 60 seconds.
```

### 8.2 Floating WhatsApp Button
```
Add a floating WhatsApp button to the Maa Bhawani website.

Requirements:
- Fixed position: bottom-right corner
- Always visible on all pages/sections
- Green WhatsApp color (#25D366)
- WhatsApp icon (SVG)
- Subtle pulse animation to draw attention
- On hover: expand to show "Chat with us" text
- Click: opens wa.me/918319213539 with pre-filled message "Namaste, mujhe aapki services ke baare mein jaanna hai"
- Mobile: slightly smaller size
- z-index: above all other elements
Write complete HTML + CSS + JS.
```

### 8.3 Scroll Animation System
```
Add scroll-triggered animations to the Maa Bhawani website using vanilla JavaScript IntersectionObserver.

Animations needed:
- All sections: fade-up (opacity 0→1, translateY 30px→0) on entering viewport
- Hero stats: counter animation (count from 0 to final number)
- Service cards: staggered entrance (each card delays 100ms after previous)
- Process steps: left-to-right reveal with connecting line drawing
- Why cards: staggered fade-in

Performance rules:
- Use will-change: transform only on animating elements
- Remove animation classes after animation completes
- Respect prefers-reduced-motion media query

Write complete vanilla JS code (no libraries).
```

---

## 📌 QUICK REFERENCE — CONTACT & LINKS

```
Phone 1    : tel:+918319213539
Phone 2    : tel:+917999750019
WhatsApp   : https://wa.me/918319213539
Instagram  : https://instagram.com/maa_bhawani_contractor
Pre-filled WA (General) : https://wa.me/918319213539?text=Namaste%2C%20mujhe%20aapki%20services%20ke%20baare%20mein%20jaanna%20hai
Pre-filled WA (Quote)   : https://wa.me/918319213539?text=Namaste%2C%20mujhe%20free%20quote%20chahiye
Pre-filled WA (Polish)  : https://wa.me/918319213539?text=Namaste%2C%20floor%20polishing%20ke%20baare%20mein%20jaanna%20hai
```

---

*Document prepared for Maa Bhawani Construction & Contractor | Ujjain*
*By Heerova Solution — Digital Marketing & Business Automation*
*Version 1.0 — May 2025*
