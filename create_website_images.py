from PIL import Image, ImageDraw, ImageFilter
import os

output_dir = 'public'

def create_website_image(filename, title, color_hex, accent_hex):
    width, height = 1600, 1200
    img = Image.new('RGB', (width, height), color='#0a0e27')
    draw = ImageDraw.Draw(img)
    
    for y in range(height):
        r_val = int(10 + (y / height) * 25)
        g_val = int(14 + (y / height) * 20)
        b_val = int(39 + (y / height) * 35)
        draw.line([(0, y), (width, y)], fill=(r_val, g_val, b_val))
    
    color_tuple = tuple(int(color_hex[i:i+2], 16) for i in (1, 3, 5))
    accent_tuple = tuple(int(accent_hex[i:i+2], 16) for i in (1, 3, 5))
    
    draw.ellipse([(100, 100), (400, 400)], outline=color_tuple, width=3)
    draw.ellipse([(1200, 800), (1500, 1100)], outline=accent_tuple, width=3)
    draw.rectangle([(0, 0), (width, 120)], fill='#0a0e27', outline=color_tuple, width=2)
    draw.rectangle([(100, 200), (700, 400)], outline=color_tuple, width=2)
    draw.rectangle([(900, 200), (1500, 400)], outline=accent_tuple, width=2)
    draw.rectangle([(100, 500), (1500, 900)], outline=color_tuple, width=2)
    
    img = img.filter(ImageFilter.GaussianBlur(radius=1))
    filepath = os.path.join(output_dir, filename)
    img.save(filepath, 'JPEG', quality=85)
    print(f'✓ {filename}')

create_website_image('website-ecommerce-fashion-dark.jpg', 'Monomode.in', '#ec4899', '#f43f5e')
create_website_image('website-admin-dashboard-dark.jpg', 'Monomode.space', '#f59e0b', '#ea580c')
create_website_image('website-grocery-landing-dark.jpg', 'DailyKart.io', '#10b981', '#14b8a6')
create_website_image('website-admin-grocery-dark.jpg', 'DailyKart.space', '#84cc16', '#22c55e')
create_website_image('website-tedx-event-dark.jpg', 'TEDx GCEM', '#ef4444', '#f43f5e')
create_website_image('website-lms-education-dark.jpg', 'Protrainix', '#818cf8', '#a855f7')
create_website_image('website-sports-academy-dark.jpg', 'HFB Academy', '#06b6d4', '#0891b2')
print('Done!')
