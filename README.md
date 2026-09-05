# Engr. Danladi Abdu Portfolio

This repository is a starter Next.js (TypeScript) + Tailwind CSS portfolio site for Engr. Danladi Abdu.

What's included
- Next.js (TypeScript)
- Tailwind CSS
- Pages: Home, Portfolio, Project detail, About, Contact, Admin (Supabase-ready)
- Sample projects in data/projects.json and placeholder images in public/images
- lib/supabaseClient.ts to wire Supabase (requires env vars)

Quick start (local)
1. Clone
   git clone https://github.com/johnsimon8806-max/civil-portfolio.git
   cd civil-portfolio
2. Install
   npm install
3. Run dev
   npm run dev

Supabase (Phase 2)
- Create a Supabase project and add environment variables to Vercel or .env.local:
  NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
  SUPABASE_SERVICE_ROLE_KEY=your_service_role_key (server only)

- SQL to create projects table (run in Supabase SQL editor):

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

create table projects (
  id uuid default gen_random_uuid() primary key,
  title text,
  slug text unique,
  description text,
  images jsonb,
  year int,
  created_by uuid references auth.users,
  created_at timestamptz default now()
);

- Create a storage bucket named `projects` and configure policies for uploads.

Deploy
- Push to GitHub (already pushed). Connect the repo to Vercel and add the env vars above. Vercel will build and deploy.

Next steps
- Replace placeholder images with real photos in public/images or upload to Supabase Storage and update project records.
- Implement Admin upload UI to save to Supabase and upload images.

