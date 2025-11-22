# Course Materials Storage

## Development Setup
Place your PowerPoint (.ppt, .pptx) files in this directory.

## File Naming Convention
- `java-oop-slides.ppt` or `java-oop-slides.pptx`
- `python-oop-slides.ppt` or `python-oop-slides.pptx`
- `php-oop-slides.ppt` or `php-oop-slides.pptx`
- `csharp-oop-slides.ppt` or `csharp-oop-slides.pptx`

## Production Recommendations

### Option 1: Cloud Storage (Recommended for Scaling)
- **AWS S3**: Store files in S3 buckets, serve via CloudFront CDN
- **Google Cloud Storage**: Use with Cloud CDN
- **Azure Blob Storage**: Use with Azure CDN

### Option 2: Convert PPT to PDF
For better web compatibility, consider converting PPT files to PDF:
- Better browser support
- Smaller file sizes
- Easier to embed in web pages

### Option 3: Convert PPT to HTML
- Use tools like `reveal.js` or `impress.js`
- Better for web viewing
- Interactive presentations

## File Size Considerations
- Keep individual files under 50MB for better performance
- Compress images within presentations
- Consider splitting large presentations into chapters

