import { readdirSync } from 'fs';
import { join } from 'path';

const SHOWCASE_DIR = join(process.cwd(), 'public', 'images', 'showcase');
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

export function getRandomShowcaseImages(count: number = 8): string[] {
  try {
    // Read all files from the showcase directory
    const files = readdirSync(SHOWCASE_DIR);
    
    // Filter for image files
    const imageFiles = files.filter(file => 
      IMAGE_EXTENSIONS.some(ext => file.toLowerCase().endsWith(ext))
    );
    
    if (imageFiles.length === 0) {
      console.warn('No images found in showcase folder');
      return [];
    }
    
    // If we have fewer images than requested, return all of them
    if (imageFiles.length <= count) {
      return imageFiles.map(file => `/images/showcase/${file}`);
    }
    
    // Shuffle the array and take the first 'count' items
    const shuffled = [...imageFiles].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);
    
    // Return with proper path prefix
    return selected.map(file => `/images/showcase/${file}`);
    
  } catch (error) {
    console.error('Error reading showcase directory:', error);
    // Fallback to empty array if there's an error
    return [];
  }
}

export function getAllShowcaseImages(): string[] {
  try {
    const files = readdirSync(SHOWCASE_DIR);
    const imageFiles = files.filter(file => 
      IMAGE_EXTENSIONS.some(ext => file.toLowerCase().endsWith(ext))
    );
    
    return imageFiles.map(file => `/images/showcase/${file}`);
  } catch (error) {
    console.error('Error reading showcase directory:', error);
    return [];
  }
}