# REVE CULT --- Corporate Gifting

A professional corporate gifting website for **REVE CULT**, built to
present premium gifting solutions for companies, HR teams, procurement
teams, clients, employees, partners, events, onboarding, festive
occasions, and brand-led corporate gifting.

🌐 **Live Website:** https://reve-cult-gifts.vercel.app/\
📦 **GitHub Repository:**
https://github.com/mitalikhamkar/REVE-CULT-Corporate-Gifting

------------------------------------------------------------------------

## About the Project

The REVE CULT Corporate Gifting website is a standalone React/Vite web
application created specifically for the corporate gifting offering of
REVE CULT.

The website is designed as a lead-generation platform rather than a
conventional retail checkout. Visitors can explore products and gifting
solutions, understand customization options, and submit a corporate
enquiry/request for quotation.

The project was designed and developed independently, with Firebase used
for backend services and Vercel used for deployment.

------------------------------------------------------------------------

## Project Objectives

-   Present REVE CULT's corporate gifting offering professionally.
-   Showcase corporate gifting products and gift hampers.
-   Help businesses discover suitable gifting solutions.
-   Support bulk/corporate enquiries and quotation requests.
-   Present custom branding and packaging options.
-   Provide a responsive experience across desktop, tablet, and mobile.
-   Provide a dedicated admin area for managing enquiries and website
    settings.
-   Maintain a clean, premium REVE CULT visual identity.
-   Provide basic SEO and social sharing metadata.
-   Keep the project easy to maintain through GitHub.

------------------------------------------------------------------------

## Main Website Sections

The website includes the following major sections:

1.  **Home / Hero**
    -   Brand introduction
    -   Corporate gifting positioning
    -   Primary enquiry CTAs
2.  **About REVE CULT**
    -   Brand story and positioning
    -   Introduction to the REVE CULT corporate gifting offering
3.  **Corporate Gifting**
    -   Employee gifting
    -   Client and partner gifting
    -   Onboarding gifts
    -   Festive gifting
    -   Events and appreciation gifting
    -   Corporate use cases
4.  **Occasions**
    -   Corporate occasions and gifting moments
    -   Helps visitors explore gifting requirements by occasion
5.  **Products**
    -   Corporate gifting product catalogue
    -   Product categories
    -   Product imagery
    -   Product descriptions/specifications
    -   Product enquiry actions
6.  **Gift Hampers**
    -   Signature hamper presentation
    -   Hamper inclusions
    -   Customizable hamper/add-on options
    -   Additional hamper variants through the product catalogue
7.  **Custom Branding**
    -   Branding and customization options
    -   Packaging/branding presentation
    -   Corporate customization enquiry CTA
8.  **Why REVE CULT**
    -   Premium quality
    -   Custom branding
    -   Pan-India delivery
    -   Warranty
    -   Support
    -   Team-focused gifting
9.  **FAQ**
    -   Frequently asked questions
    -   Interactive accordion
10. **Corporate Enquiry / Request a Quote**
    -   Name
    -   Company
    -   Work email
    -   Phone
    -   Occasion
    -   Quantity
    -   Gift preference
    -   Additional message/details
11. **Final CTA**
    -   Corporate enquiry CTA
    -   WhatsApp contact CTA
12. **Mobile CTA**
    -   Mobile-focused enquiry/contact actions

------------------------------------------------------------------------

## Technology Stack

### Frontend

-   **React**
-   **Vite**
-   **JavaScript / JSX**
-   **Tailwind CSS**
-   **React Router DOM**
-   **Framer Motion**
-   **Lucide React**
-   **React Hook Form**
-   **React CountUp**
-   **Embla Carousel**
-   **React Helmet Async**

### Backend / Services

-   **Firebase**
    -   Firebase Authentication
    -   Cloud Firestore
    -   Firebase project configuration
    -   Firestore security rules

### Deployment

-   **Vercel**
-   Connected to the GitHub repository for deployment.

### Version Control

-   **GitHub**

------------------------------------------------------------------------

## Project Structure

The project follows a component-based React architecture.

``` text
REVE-CULT-Corporate-Gifting/
│
├── public/
│   └── images/
│       └── ... product, branding and website assets
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── reve/
│   │   └── ui/
│   │
│   ├── context/
│   ├── data/
│   ├── hooks/
│   ├── layout/
│   ├── pages/
│   ├── sections/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── jsconfig.json
├── eslint.config.js
└── vercel.json
```

> The exact folder contents may evolve as the project is maintained.

------------------------------------------------------------------------

## Product Information

Product descriptions, specifications, categories, and gifting
information were prepared using the REVE CULT product-information
material supplied for the project.

The product catalogue is structured so that product cards can display:

-   Product name
-   Category
-   Product image
-   Description
-   Specifications/details
-   Corporate enquiry CTA

Product information should be updated from the approved REVE CULT
product information whenever catalogue details change.

------------------------------------------------------------------------

## Firebase Backend

Firebase is used as the backend for the corporate gifting website.

### Firebase responsibilities

The project uses Firebase for:

-   Admin authentication
-   Corporate enquiry storage
-   Website/theme settings
-   Admin-side data access

### Firestore

Corporate enquiries are stored in the Firestore `inquiries` collection.

An enquiry contains information such as:

``` text
name
company
email
phone
occasion
quantity
giftPreference
message
status
createdAt
```

The enquiry form is intended to allow the public website visitor to
submit an enquiry, while authenticated administrators can view/manage
the submitted enquiries.

### Security

Firestore security rules restrict administrative read/update access to
authorized admin accounts.

**Important:** Firebase credentials, passwords, private keys, and other
secrets must never be committed to this repository.

------------------------------------------------------------------------

## Admin Panel

The website contains a dedicated admin area.

### Admin Login

The admin login route is:

``` text
/admin/login
```

For the deployed website:

``` text
https://reve-cult-gifts.vercel.app/admin/login
```

The admin area is protected by Firebase Authentication and is intended
for authorized REVE CULT administrators.

### Admin capabilities

Depending on the current implementation, the admin area provides access
to:

-   Corporate enquiries
-   Enquiry details
-   Enquiry status/data
-   Website/theme settings

Admin credentials should be shared privately and should never be written
in this README or committed to GitHub.

------------------------------------------------------------------------

## Routing & Vercel

Because this is a React single-page application, client-side routes such
as:

``` text
/admin/login
/admin/inquiries
```

need to resolve correctly when opened directly or refreshed.

The project uses `vercel.json` with a SPA rewrite so that non-file
routes are handled by the React application.

Example:

``` json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Static assets remain served normally while React Router handles
application routes.

------------------------------------------------------------------------

## Environment Variables

Firebase configuration should be supplied through environment variables
rather than hard-coded secrets.

A local `.env` file can be used for development.

Example structure:

``` env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Do **not** copy real credentials into this README.

For Vercel deployment, the same environment variables should be
configured in the Vercel project's Environment Variables settings.

------------------------------------------------------------------------

## Running the Project Locally

### Prerequisites

Install:

-   Node.js
-   npm
-   Git

### Clone the repository

``` bash
git clone https://github.com/mitalikhamkar/REVE-CULT-Corporate-Gifting.git
```

Move into the project:

``` bash
cd REVE-CULT-Corporate-Gifting
```

### Install dependencies

``` bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root and add the required Firebase
environment variables.

### Start development server

``` bash
npm run dev
```

Vite will provide a local development URL, usually:

``` text
http://localhost:5173
```

------------------------------------------------------------------------

## Production Build

To create a production build:

``` bash
npm run build
```

To preview the production build locally:

``` bash
npm run preview
```

------------------------------------------------------------------------

## Deployment

The production website is deployed through **Vercel** and connected to
the GitHub repository.

### Deployment workflow

``` text
Local Development
       ↓
Git
       ↓
GitHub Repository
       ↓
Vercel
       ↓
Production Website
```

When changes are committed and pushed to the configured branch, Vercel
can automatically build and deploy the updated version.

------------------------------------------------------------------------

## Git Workflow

Recommended workflow:

``` bash
git pull origin main
```

Make the required changes.

Then:

``` bash
git add .
git commit -m "Describe the change"
git push origin main
```

Vercel can then deploy the latest GitHub version automatically.

For larger changes, feature branches can be used instead of committing
directly to `main`.

------------------------------------------------------------------------

## SEO

Basic SEO has been implemented at the website level.

This includes:

-   Page title
-   Meta description
-   Relevant page metadata
-   Image `alt` text
-   Social/Open Graph metadata where applicable
-   Corporate gifting-focused page content

The SEO configuration should be kept updated whenever the website
positioning, brand messaging, or target keywords change.

------------------------------------------------------------------------

## Responsive Design

The website is designed for:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

Responsive Tailwind breakpoints are used throughout the interface.

Mobile-specific functionality includes:

-   Responsive navigation
-   Mobile CTA bar
-   Responsive product layouts
-   Mobile-friendly enquiry forms
-   Responsive product modals
-   Mobile-friendly spacing and typography

------------------------------------------------------------------------

## Accessibility & UX

The project includes several UX/accessibility considerations:

-   Descriptive image `alt` text
-   Keyboard-friendly FAQ interaction
-   Responsive navigation
-   Clear CTA hierarchy
-   Readable typography
-   Mobile-friendly controls
-   Form validation and success/error states
-   Clear enquiry flow

------------------------------------------------------------------------

## Key User Flow

A typical corporate visitor journey is:

``` text
Landing Page
     ↓
Explore Corporate Gifting
     ↓
Browse Occasions / Products / Hampers
     ↓
View Product Details
     ↓
Explore Custom Branding
     ↓
Request a Quote
     ↓
Submit Corporate Enquiry
     ↓
Enquiry Stored in Firebase
     ↓
Admin Views Enquiry
```

------------------------------------------------------------------------

## Lead Generation

The website is primarily designed for **corporate lead generation**.

Instead of a conventional consumer checkout flow, the primary conversion
actions are:

-   Enquire Now
-   Request a Quote
-   Discuss Your Requirements
-   WhatsApp / Contact
-   Corporate Enquiry Form

This approach is suitable for bulk gifting requirements where pricing,
quantity, branding, packaging, and delivery requirements may vary from
one organization to another.

------------------------------------------------------------------------

## Important Files

Some important project files/components include:

  -------------------------------------------------------------------------------
  File / Area                                 Purpose
  ------------------------------------------- -----------------------------------
  `src/App.jsx`                               Main application and routing

  `src/components/reve/InquiryForm.jsx`       Corporate enquiry form

  `src/components/reve/ProductCard.jsx`       Product display and product details

  `src/components/reve/CustomBranding.jsx`    Custom branding section

  `src/components/reve/SignatureHamper.jsx`   Signature hamper section

  `src/components/reve/WhyReveCult.jsx`       Why REVE CULT section

  `src/components/reve/AboutReveCult.jsx`     About REVE CULT section

  `src/components/reve/Industries.jsx`        Corporate gifting use cases

  `src/components/reve/FAQAccordion.jsx`      FAQ interaction

  `src/components/reve/FinalCta.jsx`          Final conversion CTA

  `src/components/reve/WhatsAppButton.jsx`    WhatsApp CTA

  `src/components/reve/MobileCtaBar.jsx`      Mobile CTA controls

  `src/data/site.js`                          Site/product/theme data

  `index.html`                                HTML shell and SEO metadata

  `vercel.json`                               Vercel SPA routing

  Firebase configuration                      Authentication and Firestore
                                              integration
  -------------------------------------------------------------------------------

> File names can change as the application evolves; use the repository's
> current structure as the source of truth.

------------------------------------------------------------------------

## Security Notes

Never commit the following to GitHub:

-   Firebase private credentials
-   Admin passwords
-   `.env` files containing sensitive values
-   API secrets
-   Service-account JSON files
-   Private tokens

Firebase client configuration values may be visible in a browser in
normal Firebase web applications, but **Firestore Security Rules and
Authentication configuration are what protect backend data**. Keep
administrative authorization rules restrictive.

------------------------------------------------------------------------

## Maintenance Checklist

When making future updates:

-   [ ] Update product information from the approved product source.
-   [ ] Check all product images and `alt` text.
-   [ ] Test the enquiry form.
-   [ ] Confirm enquiries appear in Firebase.
-   [ ] Confirm enquiries are visible in the Admin Panel.
-   [ ] Test admin login.
-   [ ] Test `/admin/login` directly after deployment.
-   [ ] Test mobile responsiveness.
-   [ ] Test WhatsApp/contact CTAs.
-   [ ] Check SEO metadata after major content changes.
-   [ ] Run `npm run build` before production deployment.
-   [ ] Push the final changes to GitHub.
-   [ ] Confirm the Vercel deployment is successful.

------------------------------------------------------------------------

## Current Production Links

**Website:**\
https://reve-cult-gifts.vercel.app/

**GitHub:**\
https://github.com/mitalikhamkar/REVE-CULT-Corporate-Gifting

**Admin Login:**\
https://reve-cult-gifts.vercel.app/admin/login

------------------------------------------------------------------------

## Project Status

**Status: Production / Live**

The REVE CULT Corporate Gifting website is deployed and available
online.

The project is maintained through GitHub, with Vercel used for
production deployment and Firebase used for backend/authentication and
enquiry data.

------------------------------------------------------------------------

## Credits

**Developed by:** Mitali Khamkar\
**Project:** REVE CULT --- Corporate Gifting\
**Role:** Website Developer

Built with React, Vite, Tailwind CSS, Firebase, and Vercel.

------------------------------------------------------------------------

## License

This project is proprietary to **REVE CULT**.

The source code, design, product content, branding, images, and business
information are intended for REVE CULT's use and should not be
redistributed or reused without authorization.
