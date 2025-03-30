
import os

toggle_button = '''
<button id="themeSwitch" style="position: fixed; top: 1rem; left: 1rem; z-index: 10000; background: #222; color: #fff; border: 1px solid #555; border-radius: 4px; padding: 0.25rem 0.75rem; font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; cursor: pointer;">BW Mode</button>
'''

theme_script = '''
<script>
  const themeBtn = document.getElementById('themeSwitch');
  const body = document.body;
  const current = localStorage.getItem('theme') || 'bw';
  body.setAttribute('data-theme', current);
  themeBtn.textContent = current === 'bw' ? 'Dark Mode' : 'BW Mode';
  themeBtn.addEventListener('click', () => {
    const newTheme = body.getAttribute('data-theme') === 'bw' ? 'dark' : 'bw';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeBtn.textContent = newTheme === 'bw' ? 'Dark Mode' : 'BW Mode';
  });
</script>
'''

theme_link = '<link rel="stylesheet" href="css/theme.css">'

for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".html"):
            path = os.path.join(root, file)
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()

            if 'id="themeSwitch"' in content:
                continue

            content = content.replace("</head>", f"{theme_link}\n</head>")
            content = content.replace("<body>", f"<body>\n{toggle_button}")
            content = content.replace("</body>", f"{theme_script}\n</body>")

            with open(path, "w", encoding="utf-8") as f:
                f.write(content)
