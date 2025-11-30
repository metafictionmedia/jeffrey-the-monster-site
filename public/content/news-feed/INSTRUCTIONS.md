# News Feed Instructions

## How to Add News with Media

News items are stored in `/Users/phil/devprojects/GitHub/jeffrey-the-monster-site/lib/data.ts` in the `newsItems` array.

### Available Fields:

- **id**: Unique identifier (required)
- **title**: News headline (required)
- **content**: News description/excerpt (required)
- **date**: Date in YYYY-MM-DD format (required)
- **author**: Optional author name
- **image**: Path to image file (optional)
- **videoUrl**: Direct link to video file (.mp4, .webm) (optional)
- **embedUrl**: Instagram/YouTube/TikTok embed URL (optional)
- **linkUrl**: External link to social media post (optional)

### Examples:

#### 1. Simple Text News:
```typescript
{
  id: "new-comic-release",
  title: "New Comic: Family Dinner",
  content: "Check out our first comic strip featuring Jeffrey and his parents!",
  date: "2025-11-30"
}
```

#### 2. News with Image:
```typescript
{
  id: "character-art-reveal",
  title: "Meet Barry!",
  content: "Check out this awesome new character art of Jeffrey's best friend Barry!",
  date: "2025-11-30",
  image: "/images/news/barry-reveal.jpg"  // Save image to public/images/news/
}
```

#### 3. News with Direct Video:
```typescript
{
  id: "behind-the-scenes-video",
  title: "Behind the Scenes",
  content: "Watch how we create Jeffrey's comic panels!",
  date: "2025-11-30",
  videoUrl: "/videos/behind-scenes.mp4"  // Save video to public/videos/
}
```

#### 4. News with Instagram Embed:
```typescript
{
  id: "instagram-post",
  title: "Jeffrey on Instagram",
  content: "Swipe through our latest Instagram carousel!",
  date: "2025-11-30",
  embedUrl: "https://www.instagram.com/p/YOUR_POST_ID/embed",
  linkUrl: "https://www.instagram.com/p/YOUR_POST_ID/"
}
```

#### 5. Image with Link to Instagram:
```typescript
{
  id: "instagram-preview",
  title: "New Comic Preview",
  content: "Sneak peek at the next comic strip! See the full post on Instagram.",
  date: "2025-11-30",
  image: "/images/news/comic-preview.jpg",
  linkUrl: "https://www.instagram.com/p/YOUR_POST_ID/"
}
```

### How to Get Instagram Embed URL:

1. Go to your Instagram post on desktop
2. Click the three dots (...) in the top right
3. Select "Embed"
4. Copy the URL from the embed code (it will look like: `https://www.instagram.com/p/ABC123/embed`)

### Tips:

- For images: Save them to `public/images/news/` and reference as `/images/news/filename.jpg`
- For videos: Save them to `public/videos/` and reference as `/videos/filename.mp4`
- You can use BOTH an image AND a linkUrl to show a preview that links to Instagram
- Instagram embeds work best for single posts and carousels
- Keep videos under 50MB for best performance
