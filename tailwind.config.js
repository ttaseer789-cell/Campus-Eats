/** Design tokens come from the Figma "Tokens" variable collection (read with get_variable_defs). */
module.exports = {
  content: ['./index.html', './script.js'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)', // color/primary
        'primary-hover': '#166534', // color/primary-hover
        white: 'var(--color-on-primary)', // color/on-primary
        bg: 'var(--color-bg)', // color/bg
        surface: 'var(--color-surface)', // color/surface
        ink: 'var(--color-ink)', // color/ink
        muted: 'var(--color-muted)', // color/muted
        tint: 'var(--color-tint)', // color/tint
        line: 'var(--color-border)', // color/border
        footer: 'var(--color-footer-text)', // color/footer-text
      },
      spacing: {
        'figma-4': 'var(--space-4)',
        'figma-6': 'var(--space-6)',
        'figma-10': 'var(--space-10)',
        'figma-12': 'var(--space-12)',
        'figma-14': 'var(--space-14)',
        'figma-16': 'var(--space-16)',
        'figma-24': 'var(--space-24)',
        'figma-26': 'var(--space-26)',
        'figma-28': 'var(--space-28)',
        'figma-32': 'var(--space-32)',
        'figma-40': 'var(--space-40)',
        'figma-64': 'var(--space-64)',
        'figma-80': 'var(--space-80)',
        'figma-96': 'var(--space-96)',
      },
      borderRadius: {
        'figma-10': 'var(--radius-10)',
        'figma-md': 'var(--radius-md)',
        'figma-14': 'var(--radius-14)',
        'figma-20': 'var(--radius-20)',
        'figma-28': 'var(--radius-28)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
