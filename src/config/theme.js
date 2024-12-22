export const themeConfig = {
    // Color schemes
    colors: {
      light: {
        background: 'bg-white',
        text: 'text-gray-800',
        secondaryText: 'text-gray-600',
        border: 'border-gray-200',
        cardBg: 'bg-white',
        hover: 'hover:bg-gray-100',
        skillBadge: 'bg-gray-100',
      },
      dark: {
        background: 'bg-gray-900',
        text: 'text-white',
        secondaryText: 'text-gray-400',
        border: 'border-gray-700',
        cardBg: 'bg-gray-800',
        hover: 'hover:bg-gray-800',
        skillBadge: 'bg-gray-800',
      },
      brand: {
        text: 'text-gray-900 dark:text-gray-100',
        primary: 'from-blue-500 to-purple-500',
        secondary: 'text-gray-600 dark:text-gray-400',
        accent: 'text-blue-600 dark:text-blue-400',
        accentHover: 'hover:text-blue-600',
        button: 'from-blue-500 to-purple-500',
        buttonHover: 'hover:opacity-90',
        tag: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200',
        tagHover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
        border: 'border-gray-200 dark:border-gray-700'
      }
    },
  
    // Typography
    typography: {
      hero: {
        title: 'text-5xl md:text-7xl font-bold',
        subtitle: 'text-xl md:text-2xl',
      },
      section: {
        title: 'text-4xl font-bold mb-12',
        subtitle: 'text-2xl font-semibold',
        text: 'text-lg',
      },
    },
  
    // Animation
    animation: {
      transition: {
        colors: 'transition-colors duration-200',
        transform: 'transition-transform duration-200',
        all: 'transition-all duration-300',
      },
    },
  
    // Layout
    layout: {
      maxWidth: 'max-w-6xl',
      spacing: {
        section: 'py-20',
        element: 'py-8',
      },
      borderRadius: 'rounded-2xl',
    },
  
    // Components
    components: {
      card: {
        base: 'p-8 rounded-2xl border',
        hover: 'hover:border-blue-500 hover:shadow-lg dark:hover:shadow-blue-500/10',
      },
      button: {
        primary: 'px-6 py-2 rounded-full bg-gradient-to-r text-white',
        secondary: 'px-4 py-2 rounded-full border',
      },
      skillBadge: {
        base: 'px-4 py-2 rounded-full text-sm font-medium',
        hover: 'hover:bg-blue-500 hover:text-white',
      },
    },
  };
  
