# Melonpeel Website

![App Preview](https://imgix.cosmicjs.com/078637d0-491a-11f1-aa98-23017b7b0cbd-autopilot-photo-1490818387583-1baba5e638af-1778051156894.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern creative portfolio and blog website built with Next.js 16 and Cosmic CMS.

## Features

- 📝 Blog posts with featured images, content, and tags
- 👤 Author profiles with bios and avatars
- 🏷️ Category-based content organization
- 🎨 Modern, responsive design with melon-inspired colors
- ⚡ Server-side rendering with Next.js 16
- 🖼️ Optimized images with imgix
- 📱 Mobile-first responsive layout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69fae81aa963c4f5f0d97df5&clone_repository=69fae8e7a963c4f5f0d97e25)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a blog with posts (including featured images, content, and tags), authors, and categories.
> 
> User instructions: Melonpeel Website"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "Melonpeel Website". The content is managed in Cosmic CMS with the following object types: categories, authors, posts. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
> 
> User instructions: Melonpeel Website

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **React 19** - Latest React features

## Getting Started

### Prerequisites
- Bun installed
- A Cosmic account and bucket

### Installation

1. Clone the repository
2. Install dependencies: `bun install`
3. Add environment variables (`.env.local`):
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```
4. Run the dev server: `bun run dev`

## Cosmic SDK Examples

```typescript
// Fetch all posts
const { objects } = await cosmic.objects
  .find({ type: 'posts' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch single post by slug
const { object } = await cosmic.objects
  .findOne({ type: 'posts', slug })
  .depth(1)
```

## Cosmic CMS Integration

This app uses three Cosmic object types:
- **Posts** - Blog articles with content, featured images, tags, author, and category
- **Authors** - Writer profiles with name, bio, avatar, and email
- **Categories** - Content groupings with name and description

## Deployment Options

Deploy to Vercel or Netlify. Set environment variables in your hosting platform.

<!-- README_END -->