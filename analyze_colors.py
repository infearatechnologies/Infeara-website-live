from PIL import Image
from collections import Counter

def get_dominant_colors(image_path, num_colors=3):
    try:
        img = Image.open(image_path)
        img = img.convert("RGB")
        img = img.resize((50, 50))  # Resize to speed up processing
        pixels = list(img.getdata())
        
        # Filter out white/near-white and transparent pixels if possible (though we converted to RGB)
        # We'll just filter out very light pixels to find the "brand" colors
        filtered_pixels = [p for p in pixels if sum(p) < 700] # Filter out white-ish
        
        if not filtered_pixels:
            return "No dark colors found"

        counts = Counter(filtered_pixels)
        dominant = counts.most_common(num_colors)
        
        hex_colors = []
        for color, count in dominant:
            hex_colors.append('#{:02x}{:02x}{:02x}'.format(*color))
        
        return hex_colors
    except Exception as e:
        return str(e)

print(get_dominant_colors(r"e:\infeara\website\public\infeara-logo-final.png"))
