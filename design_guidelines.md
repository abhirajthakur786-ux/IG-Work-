# Design Guidelines: Instagram Services Platform

## Design Approach
**Reference-Based: Modern SaaS + Social Media Aesthetic**
Drawing inspiration from Instagram's visual language combined with Stripe's clean service presentation and modern growth marketing sites. The design should feel vibrant, trustworthy, and conversion-focused while maintaining the energy of social media platforms.

## Typography System
- **Primary Font**: Inter or DM Sans (Google Fonts) - clean, modern sans-serif
- **Accent Font**: Poppins Bold for hero headlines and package numbers
- **Hierarchy**:
  - Hero Headline: text-5xl md:text-7xl font-bold
  - Section Headers: text-3xl md:text-5xl font-bold
  - Package Titles: text-2xl md:text-3xl font-semibold
  - Body Text: text-base md:text-lg
  - Small Print/Disclaimers: text-sm

## Layout & Spacing System
**Spacing Units**: Consistently use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, mt-12, py-20)

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6
- Content sections: py-16 md:py-24
- Tighter sections (like disclaimers): py-12

## Component Library

### Navigation
Fixed header with backdrop blur (backdrop-blur-lg), logo left, nav links center, "Login/Sign Up" buttons right. Mobile: hamburger menu overlay with full-screen navigation.

### Hero Section
Full-viewport hero (min-h-screen) with large background image showing social media engagement/growth imagery. Centered content with:
- Massive headline with gradient text treatment
- Subheadline explaining service value
- Dual CTA buttons (primary: "Get Free Demo", secondary: "View Pricing") with blurred backgrounds
- Trust indicators below (e.g., "10,000+ Happy Customers")

### Service Cards
Grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-4) displaying:
- Icon/illustration at top
- Service name (Followers, Likes, Views, Comments)
- Brief description
- "Learn More" link
Cards with hover lift effect (hover:-translate-y-2 transition)

### Pricing Packages
Three-column pricing grid (grid-cols-1 md:grid-cols-3) with:
- Package tier labels (Starter, Growth, Pro)
- Large quantity numbers (1k, 5k, 10k followers)
- Price prominent with per-unit cost below
- Feature checklist with checkmark icons
- "Order Now" CTA button
Center card should be highlighted/featured with border treatment

### Free Demo Section
Full-width section with two-column layout (image left, form right):
- Headline: "Try Us Free - 100 Followers + 100 Likes"
- Simple form: Name, Instagram handle, WhatsApp number
- Large "Get Free Demo" button
- Trust badge: "No Credit Card Required"

### Testimonials
Horizontal scrolling cards (md:grid-cols-3) with:
- Customer photo placeholder circles
- Quote text
- Customer name and follower count gained
- Star rating

### Contact Section
Two-column (form + contact info):
- Contact form: Name, email, service interest dropdown, message
- Right column: WhatsApp button (prominent), phone number (7024183739), email, operating hours

### Disclaimer Box
Bordered callout section with:
- Warning icon
- Honest disclosure about 70-75% bot followers
- Explanation of service nature
- Builds trust through transparency

### Footer
Multi-column layout:
- Column 1: Logo + tagline
- Column 2: Quick links (Services, Pricing, Demo, Contact)
- Column 3: Legal (Terms, Privacy, Refund Policy)
- Column 4: Social media icons + WhatsApp
- Bottom bar: Copyright + payment methods

## Images

**Hero Background**: Dynamic social media growth visual - collage of Instagram interface elements, rising follower counts, engagement metrics, happy users scrolling. Should convey growth, popularity, and social proof. High-energy, modern feel.

**Free Demo Section**: Side-by-side phone mockup showing before/after follower counts, or celebrating user with growing numbers.

**Testimonial Photos**: Circular headshot placeholders for customer testimonials.

**Service Icons**: Use Heroicons for service type indicators (users icon for followers, heart for likes, eye for views, chat for comments).

## Key Interactions
- Smooth scroll navigation to sections (scroll-behavior: smooth)
- Sticky header that appears on scroll up
- Package cards with subtle hover effects
- Form validation with inline error messages
- Loading states for demo signup
- Success modal after demo form submission

## Accessibility
- Proper heading hierarchy (h1 for hero, h2 for sections)
- Form labels and ARIA attributes
- Keyboard navigation for all interactive elements
- Focus visible states
- Sufficient contrast ratios (especially on gradient backgrounds)