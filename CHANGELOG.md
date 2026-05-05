# Greenvoltt Online - Project Changelog

## 2026-05-05 - Initial Setup

### What Was Done:
- Created new Next.js project with TypeScript
- Scraped content from existing site https://greenvoltt.com
- Created front-end pages with all current content:
  - Home page with hero, about, mission sections
  - Services (Compliance, Awareness, Opportunities)
  - Battery Types section (Automobile, Marine, Cell Site, Computer UPS, Solar)
  - Collection Process section
  - Testimonials section
  - Contact section with location/hours/social links
- Set up Payload CMS config for PostgreSQL (collections: pages, media, testimonials, services, users)
- Created GitHub repository: gvoltt-staff/greenvoltt-online
- Added Railway.json for deployment

### Important Notes:
- **Current site is static Next.js** - content is hardcoded from original site
- **Payload CMS not yet connected** - need to deploy PostgreSQL first
- **Images** - currently use external URLs from original site
- **Content migration** - extracted from https://greenvoltt.com and https://greenvoltt.com/home

### API Keys / Credentials:
- **Railway Token:** (stored in session, will be needed for deployment)
- **GitHub Token:** (used for repo creation, user should regenerate)

### User Info:
- GitHub: gvoltt-staff
- Railway: logged in via GitHub
- Current site: https://greenvoltt.com (hosted - can't export)
- Project name: Greenvoltt Online

### Next Steps (Priority Order):
1. Deploy to Railway (user needs to do this manually)
2. Add PostgreSQL plugin in Railway
3. Connect Payload CMS to PostgreSQL
4. Set up custom domain (not yet)
5. Consider adding blog/news section for content updates