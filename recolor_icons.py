import os

target_dir = r"c:/Users/Uncommon 08/Desktop/2026/january/museum/public/images/Icon"
new_color = "#C5A059"

replacements = [
    ("#1F2A2E", new_color),
    ("#1f2a2e", new_color),
    ("#FFFFFF", new_color),
    ("#ffffff", new_color),
    ("#fff", new_color),
    ("#C1FF72", new_color),
    ("#c1ff72", new_color),
    ('fill="black"', f'fill="{new_color}"'),
    ('stroke="black"', f'stroke="{new_color}"'),
    ('fill="white"', f'fill="{new_color}"'),
    ('stroke="white"', f'stroke="{new_color}"')
]

print(f"Scanning {target_dir}...")

if not os.path.exists(target_dir):
    print("Directory not found!")
    exit(1)

for filename in os.listdir(target_dir):
    if filename.endswith(".svg"):
        filepath = os.path.join(target_dir, filename)
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            original_content = content
            
            # Simple string replacements
            for old, new in replacements:
                content = content.replace(old, new)
            
            if content != original_content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(content)
                print(f"Updated {filename}")
            else:
                print(f"No changes for {filename}")
                
        except Exception as e:
            print(f"Error processing {filename}: {e}")
