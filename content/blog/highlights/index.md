---
title: "Extracting highlights"
date: 2023-08-21T19:41:57+07:00
tags:
  - Python
---
Recently, I've started to read a self-help book. I've highlighted the parts that I know are useful for future references. Then I had a epipheny. If I have everything highlighted in one place that would be cool rather than scrolling through entire pdf. Google books offers the same feature if we buy books from play store. 
## Code
```python

pip install pymupdf

import os
import fitz

def extract_highlights(pdf_path, output_path):
    doc = fitz.open(pdf_path)
    highlights = []

    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        annot = page.first_annot
        while annot:
            if annot.type[0] == 8:  # Highlight
                highlight_text = ""
                quads = annot.vertices
                for i in range(0, len(quads), 4):
                    quad = quads[i:i + 4]
                    rect = fitz.Quad(quad).rect
                    words = page.get_text("words", clip=rect)
                    for word in words:
                        highlight_text += word[4] + " "
                highlights.append((page_num + 1, highlight_text.strip()))
            annot = annot.next
    
    with open(output_path, "w") as f:
        for page_num, text in highlights:
            f.write(f"Page {page_num}:\n{text}\n\n")
    
    print(f"Highlights extracted and saved to {output_path}")

pdf_path ="/Users/venkatasreerampallapothula/Documents/The-Happiness -Equation.pdf" 
output_path = os.path.expanduser("~/highlight.txt")

extract_highlights(pdf_path, output_path)
```
![Highlighted text](hi.png)

Before writing each highlight to the file, the script writes the page number.
After each highlight, a blank line is added to separate highlights for better readability. 

Now, all the highlights are extracted to Highlights extracted and saved to *"/Users/venkatasreerampallapothula/highlight.txt"* file.