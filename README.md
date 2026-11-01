# ourspace — Premium Flexible Workspaces & Private Executive Suites

A multi-page static web application recreating the executive commercial real estate experience of **The Executive Centre** ([executivecentre.com](https://www.executivecentre.com/)) under the brand identity **ourspace**.

Engineered with React 19, Vite, Tailwind CSS v4, and React Router (`HashRouter`), featuring client-side persistence via `localStorage`, appointment booking, quotation estimation, and an automated GitHub Actions deployment workflow for GitHub Pages.

---

## 1. What the Website Does

`ourspace` provides flexible workspace solutions, turn-key private office suites, executive boardrooms, coworking lounges, and virtual office addresses across Grade-A commercial landmarks in Asia-Pacific, the Middle East, and Europe.

Key functional capabilities include:
- **Global Flagship Centres Directory**: Searchable, filterable directory covering Singapore, Tokyo, Hong Kong, Sydney, Dubai, Seoul, London, and Mumbai.
- **Dynamic Centre Detail Views**: High-resolution building specifications, floor levels, transit links, LEED/WELL environmental certifications, and on-site amenities.
- **Interactive Quotation Estimator**: Dynamic pricing simulator calculating monthly rates, term commitment discounts (5% to 22%), and executive add-on fees in real-time.
- **Appointment Scheduling Engine**: Direct booking system for in-person guided viewings and virtual 3D walkthroughs with the Centre Director.
- **Persistent Client Portal (`/saved`)**: Browser `localStorage`-backed dashboard preserving bookmarked centres, scheduled appointments, and saved quotations across browser sessions.
- **Executive Thought Leadership**: Research briefings and whitepapers on hybrid real estate, ESG standards, and APAC market entry.

---

## 2. Reference Website & Brand Identity

| Element | Reference Website | Recreated Project |
| :--- | :--- | :--- |
| **Brand Name** | The Executive Centre | **ourspace** |
| **Reference URL** | `https://www.executivecentre.com/` | `https://aman22kr.github.io/ourspace/` |
| **Primary Palette** | Deep obsidian, warm amber/bronze, and crisp travertine | Obsidian (`#0a0a0a`), Rich Bronze (`#b45309`), Neutral Slate |
| **Design Language** | Understated executive luxury, Herman Miller furnishings, acoustic privacy | Zero-pill metadata discipline, typographic hierarchy, 60-30-10 color balance |
| **Target Audience** | Fortune 500, private equity, fintech, legal advisory | Global enterprise leaders, regional directors, high-growth startups |

---

## 3. Implemented Pages & Core Features

1. **Homepage (`/`)**:
   - Hero banner with quick destination city finder and building keyword search.
   - Four-pillar trust strip (180+ Centres, 30+ Years Heritage, 99.8% Uptime, 45,000+ Members).
   - Asymmetric Bento showcase of all 5 workspace solutions.
   - Interactive featured centres spotlight with city-segmented filters.
   - Architectural standards breakdown (01. Grade-A Landmarks, 02. STC-48 Acoustics, 03. Dual-Fiber IT, 04. Five-Star Concierge).
   - Blank 16:9 Video Tour Area reproducing video walkthrough dimensions without YouTube embeds.
   - Attributable corporate testimonials with quantitative impact metrics.
   - Compact advertisement placeholder above footer.

2. **Locations Directory (`/locations`)**:
   - Multi-attribute filter bar: City selector, Region filter, Workspace Category filter, and text search.
   - Live result counter with unboxed metadata (`Tokyo · Roppongi Hills · Level 16`).
   - Sort by Featured, Highest Rated, Price Low-to-High, and Price High-to-Low.

3. **Dynamic Location Detail Pages (`/locations/:slug`)**:
   - Slug-based routes (`/locations/one-raffles-quay-singapore`, `/locations/roppongi-hills-tokyo`, etc.).
   - Full floorplan metrics, transit instructions, acoustic ratings, and building certifications.
   - Sticky quotation & booking consultation trigger.
   - One-click bookmark toggle syncing to `localStorage`.

4. **Workspace Solutions Overview (`/solutions`)**:
   - Strategic portfolio breakdown of all 5 offerings with starting rates and target team sizes.
   - Comprehensive side-by-side feature comparison matrix.

5. **Individual Solution Detail Pages (`/solutions/:slug`)**:
   - Dedicated views for `/solutions/private-offices`, `/solutions/coworking`, `/solutions/meeting-rooms`, `/solutions/virtual-offices`, and `/solutions/enterprise`.
   - Technical equipment specifications, acoustic decibel ratings, and real-world client case study scenario.

6. **Interactive Quote Estimator (`/calculator`)**:
   - Headcount slider (1 to 50+ desks) with instant mathematical recalculation.
   - Lease term commitments (1, 6, 12, 24 months) triggering volume discounts.
   - Add-on toggles (Server Rack, Executive Parking, Barista Pass, Secretarial Service).
   - "Save Quote to My Account" button committing full contract figures to `localStorage`.

7. **Tour Booking System (`/book-tour`)**:
   - Step-by-step scheduler for in-person or virtual 3D tours.
   - Calendar date picker and time slot selector.
   - Form validation with generated appointment reference codes (`BK-#####`).

8. **Saved Workspaces & Appointments Portal (`/saved`)**:
   - Client portal reading directly from `localStorage`.
   - Tab 1: Bookmarked Centres (with remove button).
   - Tab 2: Booked Tour Appointments (with status toggle and cancellation).
   - Tab 3: Saved Custom Quotations (with net monthly and total contract value).
   - "Clear Local Storage" utility with confirmation prompt.

9. **About ourspace (`/about`)**:
   - Brand history, 30-year evolution, and ESG environmental standards (LEED Platinum, BCA Green Mark, WELL).

10. **Executive Insights (`/insights` & `/insights/:slug`)**:
    - Thought leadership whitepapers with read times, executive summaries, and key takeaways.

11. **Contact & Headquarters (`/contact`)**:
    - Global contact directory for Singapore, Tokyo, Hong Kong, Sydney, and Dubai.
    - Department-routed inquiry form with local validation.

12. **404 Not Found (`*`)**:
    - Custom not-found screen with quick links back to flagship destinations.

---

## 4. Project Structure

```
ourspace/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions Pages deployment workflow
├── public/                         # Public static assets
├── src/
│   ├── assets/
│   │   └── images/                 # Generated Grade-A architectural photography
│   ├── components/
│   │   ├── AdBanner.tsx            # Compact advertisement placeholder
│   │   ├── CentreCard.tsx          # Reusable centre card with unboxed metadata
│   │   ├── Footer.tsx              # Executive footer with global directory & newsletter
│   │   ├── Navbar.tsx              # Top bar conforming to 3-zone contract
│   │   └── VideoTourPlaceholder.tsx # Blank 16:9 video walkthrough component
│   ├── data/
│   │   ├── articles.ts             # Thought leadership articles
│   │   ├── centres.ts              # Global Flagship Centres data
│   │   ├── solutions.ts            # Workspace Solutions specifications
│   │   └── testimonials.ts         # Quantitative client proof
│   ├── pages/
│   │   ├── AboutPage.tsx           # Heritage and ESG standards
│   │   ├── BookTourPage.tsx        # Interactive tour appointment booking
│   │   ├── ContactPage.tsx         # Department contact and inquiry routing
│   │   ├── HomePage.tsx            # Main executive landing page
│   │   ├── InsightDetailPage.tsx   # Detailed article reader
│   │   ├── InsightsPage.tsx        # Thought leadership directory
│   │   ├── LocationDetailPage.tsx  # Dynamic centre detail view
│   │   ├── LocationsPage.tsx       # Searchable and filterable directory
│   │   ├── NotFoundPage.tsx        # Custom 404 error page
│   │   ├── PricingCalculatorPage.tsx # Live quotation simulator
│   │   ├── SavedWorkspacesPage.tsx # Client dashboard for localStorage
│   │   ├── SolutionDetailPage.tsx  # Dedicated workspace solution deep-dive
│   │   └── SolutionsPage.tsx       # Solutions overview and matrix
│   ├── utils/
│   │   └── storage.ts              # Browser localStorage CRUD persistence
│   ├── App.tsx                     # HashRouter root & route configuration
│   ├── index.css                   # Tailwind CSS v4 styling & typography
│   └── main.tsx                    # Application entry point
├── .gitignore                      # Git ignore patterns
├── index.html                      # HTML entry with SEO metadata
├── metadata.json                   # Applet metadata
├── package.json                    # Project scripts & dependencies
├── package-lock.json               # Committed npm dependency lockfile
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build config with base: './'
└── README.md                       # Comprehensive documentation
```

---

## 5. Prerequisites

- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or newer
- **Git**: Installed and configured with your GitHub credentials

---

## 6. How to Install Dependencies

To ensure deterministic builds matching the committed `package-lock.json`:

```bash
# Clean install matching the committed lockfile
npm ci
```

Alternatively:
```bash
npm install
```

---

## 7. How to Run the Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open your browser at `http://localhost:3000`.

---

## 8. How to Generate and Preview the Production Build

```bash
# 1. Type check
npm run lint

# 2. Build for production into dist/
npm run build

# 3. Preview the production build locally
npm run preview
```

---

## 9. How LocalStorage is Used & Its Limitations

`ourspace` uses client-side `localStorage` to deliver an instant, zero-friction interactive experience without requiring an external database:
- `ourspace_saved_centres_v1`: Shortlisted centres array.
- `ourspace_bookings_v1`: Scheduled viewing appointments (`id`, `date`, `slot`, `format`, `status`).
- `ourspace_quotes_v1`: Configured quotation simulations (`netMonthlyRate`, `totalContractValue`, `addOns`).
- `ourspace_recently_viewed_v1`: Recent centre history.
- `ourspace_contact_inquiries_v1`: Submitted corporate inquiries.

### Limitations
- **Device & Browser Bound**: Data stored in `localStorage` exists solely within the specific browser and machine used. It does not synchronize across devices.
- **Client-Side Simulation**: Scheduled viewings and quotations are saved locally for demonstration and workflow review. No real credit card or server-side lease agreement is executed.
- **Storage Quota**: Subject to standard browser limits (~5MB per origin). Sensitive credentials and financial information are never stored.

---

## 10. Configuring the GitHub Repository & Username

This project is configured for GitHub username **`Aman22kr`**.

1. Create a new public repository on GitHub named `ourspace`:
   ```bash
   https://github.com/Aman22kr/ourspace
   ```
2. Clone or initialize your local repository:
   ```bash
   git init
   git remote add origin https://github.com/Aman22kr/ourspace.git
   ```

---

## 11. Enabling GitHub Pages using GitHub Actions

1. Navigate to your repository on GitHub: `https://github.com/Aman22kr/ourspace`
2. Go to **Settings** &rarr; **Pages** (in the left sidebar).
3. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions** (do NOT select "Deploy from a branch").
4. GitHub will automatically detect `.github/workflows/deploy.yml`.

---

## 12. Pushing Changes & Triggering Automatic Deployment

To push and trigger your deployment:

```bash
# Stage all files including package-lock.json and .github/
git add .

# Commit your changes
git commit -m "Initial commit: ourspace luxury workspace application"

# Ensure your branch is named main
git branch -M main

# Push to GitHub
git push -u origin main
```

Once pushed, GitHub Actions will automatically:
1. Check out the repository.
2. Set up Node.js 22 with npm cache.
3. Execute `npm ci` for lockfile verification.
4. Execute `npm run build` to generate `dist/`.
5. Upload the `dist/` directory as a Pages artifact.
6. Deploy the artifact to:
   ```
   https://aman22kr.github.io/ourspace/
   ```

You can also trigger a manual deployment anytime from the **Actions** tab by selecting **Deploy to GitHub Pages** and clicking **Run workflow**.

---

## 13. Troubleshooting Common Deployment Problems

- **Assets returning 404 on GitHub Pages**:
  Ensure `vite.config.ts` includes `base: './'`. This guarantees asset URLs are relative (`./assets/...`) and resolve correctly regardless of whether the site is served from a user root or repository subpath (`/ourspace/`).
- **Page refreshes returning 404**:
  The application utilizes React Router's `HashRouter` (`#/locations`, `#/calculator`, etc.). Hash routes are evaluated entirely client-side and never cause GitHub Pages web servers to return HTTP 404 on page reload.
- **npm ci failing in GitHub Actions**:
  Verify that `package-lock.json` is committed to git. Ensure `package.json` devDependencies (such as `esbuild: ^0.27.0`) match the lockfile tree without peer dependency conflicts.
- **Workflow Permissions**:
  The workflow file includes explicit permissions (`pages: write`, `id-token: write`, `contents: read`). Ensure GitHub repository settings permit Actions to read and write deployment permissions under **Settings** &rarr; **Actions** &rarr; **General** &rarr; **Workflow permissions**.

---

## 14. How to Change Brand Name, Content & Theme

- **Brand Name**: Update the wordmark in `src/components/Navbar.tsx` and `src/components/Footer.tsx`. Update the title and metadata in `index.html` and `metadata.json`.
- **Centres & Locations**: Modify or append new properties in `src/data/centres.ts`. Every centre automatically populates the directory, detail pages, and quotation calculator dropdown.
- **Workspace Solutions**: Edit descriptions, features, and specs in `src/data/solutions.ts`.
- **Color Theme**: Accent colors use Tailwind's `amber` and `neutral` scales. To alter the primary accent, search for `amber-600` / `amber-700` and substitute your desired palette token (e.g., `emerald-700`, `blue-700`).

---

## 15. Reusing the Project for Another Website

To adapt this architecture for another multi-page client showcase:
1. Update `metadata.json` and `index.html` with your new brand title and description.
2. Replace mock data files in `src/data/` (`centres.ts`, `solutions.ts`, `articles.ts`, `testimonials.ts`) with your target domain's items.
3. Update visual imagery in `src/assets/images/`.
4. Update GitHub Actions repository links to match your new target repository.

---

## 16. Mock Implementations & Remaining Limitations

- **Booking Flow**: Appointment submissions generate a realistic reference ID and calendar payload stored in `localStorage`. In production, this would integrate with an enterprise booking API or CRM (e.g. Salesforce / HubSpot).
- **Video Walkthrough Area**: In accordance with project instructions, video areas feature a pristine blank 16:9 architectural placeholder layout with playback controls and metadata instead of embedding third-party YouTube iframes.
- **Advertising**: The bottom of each page includes a compact, unobtrusive placeholder banner formatted according to standard IAB display dimensions.
- **Payment Gateway**: The quotation calculator computes real-time pricing and commitment discounts; no real payment processing or merchant billing is connected in this static frontend build.
