import os

images = {
    'assets/images/sowmya/sowmya_intro.svg': ('Sowmya', 'Her Emergence Into My World', '#dfb872', '#161426'),
    'assets/images/sowmya/sowmya_portrait_1.svg': ('Sowmya', 'The Girl Not Looking For Love', '#e5a4a4', '#1d152b'),
    'assets/images/sowmya/sowmya_smile.svg': ("Sowmya's Smile", 'I Started Rasika Her', '#dfb872', '#221922'),
    'assets/images/sowmya/sowmya_present.svg': ('The Woman I Love', 'My Light & My Life', '#f5e1a4', '#261b2c'),
    'assets/images/sowmya/sowmya_radiant.svg': ('Nee Light Ah Vandha', 'The Light In My Dark World', '#dfb872', '#2e2016'),
    'assets/images/goa/goa_story.svg': ('Goa Memories (May)', 'Andha Story Unakkuthaan, Sowmya ❤️', '#f39c12', '#2c1a1d'),
    'assets/images/goa/goa_sunset.svg': ('Goa Golden Sunset', 'Where A Joke Became Real', '#e67e22', '#20162b'),
    'assets/images/childhood/childhood_1.svg': ('Little Sowmya', 'Laughing, Dreaming, Growing', '#d4a574', '#1f1b24'),
    'assets/images/childhood/childhood_2.svg': ('Growing Up', 'The Beautiful Soul You Became', '#e5a4a4', '#221b2d'),
    'assets/images/couple/august9_moment.svg': ('August 9 ❤️', 'The Day We Became Us', '#dfb872', '#26182c'),
    'assets/images/couple/home_moment.svg': ('Bringing You Home', 'Part of My World Forever', '#e69d45', '#241b20'),
    'assets/images/couple/memory_1.svg': ('The Beginning', 'One Random Request', '#88c5ff', '#141c2b'),
    'assets/images/couple/memory_2.svg': ('Pure Joy', 'Every Smile Shared', '#dfb872', '#261b24'),
    'assets/images/couple/memory_3.svg': ('Yellove & CSK', 'Arguments, Laughs & Cricket', '#f8c300', '#1c1b12'),
    'assets/images/couple/memory_4.svg': ('August 9 Commitment', 'The Promise Made Real', '#e04b68', '#251320'),
    'assets/images/couple/memory_5.svg': ('Our Home', 'Welcome To My World', '#dfb872', '#241b18'),
    'assets/images/couple/memory_6.svg': ('Us Being Silly', 'Every Silly Little Version', '#d4a574', '#1b1b28'),
    'assets/images/couple/memory_7.svg': ('Golden Horizons', 'A Lifetime of More', '#f5e1a4', '#2a1a24'),
}

for path, (title, subtitle, accent, bg) in images.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <linearGradient id="grad_{os.path.basename(path).replace('.', '_')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{bg}" />
      <stop offset="100%" stop-color="#08070d" />
    </linearGradient>
    <radialGradient id="glow_{os.path.basename(path).replace('.', '_')}" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="{accent}" stop-opacity="0.35" />
      <stop offset="100%" stop-color="{accent}" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#grad_{os.path.basename(path).replace('.', '_')})" />
  <circle cx="400" cy="270" r="200" fill="url(#glow_{os.path.basename(path).replace('.', '_')})" />
  <rect x="30" y="30" width="740" height="540" rx="20" fill="none" stroke="{accent}" stroke-width="1.5" stroke-opacity="0.4" stroke-dasharray="6 4" />
  
  <!-- Romantic Emblem Motif -->
  <g transform="translate(400, 220) scale(1.6)">
    <path d="M0 -15 C -20 -35, -45 -10, -45 15 C -45 40, 0 65, 0 65 C 0 65, 45 40, 45 15 C 45 -10, 20 -35, 0 -15 Z" fill="none" stroke="{accent}" stroke-width="2" opacity="0.7" />
    <circle cx="0" cy="15" r="5" fill="{accent}" opacity="0.9" />
  </g>
  
  <text x="400" y="380" text-anchor="middle" fill="#ffffff" font-family="'Playfair Display', Georgia, serif" font-size="30" font-weight="bold" letter-spacing="1">{title}</text>
  <text x="400" y="425" text-anchor="middle" fill="{accent}" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" letter-spacing="1.5" opacity="0.9">{subtitle}</text>
  <text x="400" y="510" text-anchor="middle" fill="#888599" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" letter-spacing="1">[ Drop your photo here: {os.path.basename(path)} ]</text>
</svg>'''
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg_content)

print(f"Successfully generated {len(images)} placeholder SVG assets.")
