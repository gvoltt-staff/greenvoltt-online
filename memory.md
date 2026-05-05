# Greenvoltt Online - Session Memory

## Current Session: 2026-05-05

### Project Summary
- **Project:** Greenvoltt Online website migration
- **Goal:** Migrate from https://greenvoltt.com to Next.js/Node.js/TypeScript/Payload CMS/PostgreSQL on Railway + GitHub
- **Current Status:** Initial setup complete, awaiting Railway deployment

### User Profile
- **Name:** (user provided)
- **GitHub:** gvoltt-staff
- **Railway:** Logged in via GitHub
- **Current Site:** https://greenvoltt.com (hosted on LeadConnector)
- **Project Name:** Greenvoltt Online

### Credentials Provided (Do NOT store actual values - reference only)
- Railway Token: provided by user
- GitHub Token: provided by user (user should regenerate)

### What Was Created
1. **GitHub Repository:** https://github.com/gvoltt-staff/greenvoltt-online
2. **Next.js Project** with:
   - TypeScript
   - All pages from greenvoltt.com content
   - CSS styling matching original site
3. **Payload CMS Config** (payload.config.ts) for PostgreSQL with collections:
   - pages
   - media
   - testimonials
   - services
   - users
4. **Railway.json** for deployment configuration

### Content Extracted from Current Site
- Hero section
- About Us section
- Our Mission section
- Services (Compliance, Awareness, Opportunities)
- Battery Types (Automobile, Marine, Cell Site, Computer UPS, Solar)
- Battery Collection Process
- Testimonials (Dennis, Louis, Kristie)
- Environmental Mandate
- Contact Info (Location, Phone, Email, Hours, Social Links)

### Decisions Made
- Use PostgreSQL (not MongoDB) as requested
- Keep existing content statically for now, connect CMS later
- No custom domain yet
- Content extracted from live site (no file export available)

### Outstanding Tasks
1. Deploy to Railway (user action needed)
2. Add PostgreSQL plugin in Railway
3. Connect Payload CMS to database
4. Set up CMS admin access

### Commands Used
- git init, git add, git commit, git push
- GitHub API for repo creation
- curl/webfetch for content extraction

### Notes
- User is new to this process - prefer all config handled automatically
- User can provide API keys when needed
- Content exists on hosted site - need to rebuild with CMS