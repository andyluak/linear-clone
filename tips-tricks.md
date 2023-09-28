# Rebuilding Linear

- Make sure we have the right font to begin with
- Make sure the background is correct to begin with

## Tailwind tricks

```
fontSize: {
  md: "1.6rem",
  lg: ["2.2rem", "1.3"],
  "5xl": ["8rem", "1"],
},
```

You can add an array as the value for a key in the theme object. The first value is the font size, the second value is the line height. You can either set an exact line height or a multiplier.

