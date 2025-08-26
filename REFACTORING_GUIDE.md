# Codebase Refactoring Guide

## Overview
The codebase has been refactored to improve maintainability, reduce code duplication, and make it easier to add new features. This guide explains the new structure and how to work with it.

## New Directory Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── ModuleCard.jsx     # Standardized module card display
│   │   ├── SectionMedia.jsx   # Video and image layout component
│   │   ├── LearningStyles.jsx # Three learning style sections
│   │   └── ModuleLayout.jsx   # Standard module layout structure
│   ├── ImageModal.jsx         # Image popup modal
│   ├── SplashPage.jsx         # Landing page
│   ├── NetflixStyleHome.jsx   # Main directory page
│   └── [Module Components]    # Individual course modules
├── data/
│   └── modules.js             # Centralized module definitions
├── hooks/
│   ├── useAppState.js         # Main app state management
│   └── useModuleState.js      # Module state management
├── utils/
│   └── constants.js           # Centralized constants and URLs
├── App.jsx                    # Main app component (simplified)
└── [CSS files]
```

## Key Improvements

### 1. Centralized Data Management
- **`src/data/modules.js`**: All module definitions in one place
- **`src/utils/constants.js`**: All URLs, constants, and configuration
- Easy to add new modules or update existing ones

### 2. Reusable Components
- **`ModuleCard`**: Standardized module display across the app
- **`SectionMedia`**: Consistent video/image layout for Booknotic courses
- **`LearningStyles`**: Standardized three-learning-style structure
- **`ModuleLayout`**: Common layout for all modules

### 3. Custom Hooks
- **`useAppState`**: Manages main app navigation and state
- **`useModuleState`**: Handles module-specific state (sections, completion, modals)
- Reduces code duplication across modules

### 4. Simplified App Component
- App.jsx is now much cleaner and focused on routing
- State management moved to custom hooks
- Module data centralized in data files

## How to Add a New Module

### 1. Create the Module Component
```jsx
import React from 'react'
import { useModuleState } from '../hooks/useModuleState'
import ModuleLayout from '../components/ui/ModuleLayout'
import SectionMedia from '../components/ui/SectionMedia'
import LearningStyles from '../components/ui/LearningStyles'
import ImageModal from '../components/ImageModal'
import { VIDEOS, IMAGES } from '../utils/constants'

const NewModule = () => {
  const sections = [
    {
      title: "Section 1",
      duration: "10 minutes",
      content: {
        explainLike5: "Simple explanation...",
        principleFirst: "Core principle...",
        detailedUnderstanding: <div>Detailed content...</div>
      }
    }
    // ... more sections
  ]

  const {
    currentSection,
    setCurrentSection,
    completedSections,
    modalImage,
    isModalOpen,
    markAsComplete,
    nextSection,
    prevSection,
    openImageModal,
    closeImageModal
  } = useModuleState(sections)

  return (
    <ModuleLayout
      title="New Module"
      description="Module description"
      imageSrc={IMAGES.NEW_MODULE}
      sections={sections}
      currentSection={currentSection}
      completedSections={completedSections}
      onSectionChange={setCurrentSection}
      onMarkComplete={markAsComplete}
      onNext={nextSection}
      onPrev={prevSection}
    >
      <SectionMedia
        videoSrc={VIDEOS.BOOKNOTIC_OVERVIEW}
        videoTitle="New Module - Complete Book Overview"
        imageSrc={IMAGES.NEW_MODULE}
        imageAlt="New Module - Complete Book Overview"
        onImageClick={openImageModal}
      />
      
      <LearningStyles 
        content={sections[currentSection].content}
      />
      
      <ImageModal 
        isOpen={isModalOpen}
        imageSrc={modalImage?.src}
        imageAlt={modalImage?.alt}
        onClose={closeImageModal}
      />
    </ModuleLayout>
  )
}

export default NewModule
```

### 2. Add Module to Data
In `src/data/modules.js`:
```jsx
import NewModule from '../components/NewModule'

export const cryptoModules = [
  // ... existing modules
  {
    id: 'new-module',
    name: 'New Module',
    component: NewModule,
    description: 'Description of the new module',
    duration: '45 min',
    difficulty: 'Beginner',
    image: IMAGES.NEW_MODULE,
    category: 'Technical Analysis'
  }
]
```

### 3. Add Constants
In `src/utils/constants.js`:
```jsx
export const IMAGES = {
  // ... existing images
  NEW_MODULE: 'https://example.com/new-module-image.jpg'
}
```

## How to Update Existing Modules

### Adding New Sections
1. Update the `sections` array in the module component
2. Add any new images to `constants.js`
3. Update the module data in `modules.js` if needed

### Updating Content
1. Modify the content directly in the module component
2. Use the `LearningStyles` component for consistent formatting
3. Use `SectionMedia` for video/image layouts

### Updating Images or Videos
1. Update URLs in `src/utils/constants.js`
2. All components will automatically use the new URLs

## Benefits of the New Structure

### 1. Maintainability
- Single source of truth for module data
- Consistent component structure
- Easy to find and update content

### 2. Scalability
- Easy to add new modules
- Reusable components reduce development time
- Consistent user experience

### 3. Code Quality
- Reduced duplication
- Clear separation of concerns
- Better organization

### 4. Developer Experience
- Faster development of new features
- Easier debugging
- Clear patterns to follow

## Migration Notes

### For Existing Modules
- Existing modules continue to work as-is
- Can be gradually migrated to use new components
- No breaking changes to user experience

### For New Development
- Use the new structure for all new modules
- Follow the patterns established in the refactored code
- Leverage reusable components and hooks

## Best Practices

1. **Always use constants** from `utils/constants.js` for URLs and configuration
2. **Use the custom hooks** for state management
3. **Leverage reusable components** instead of duplicating code
4. **Keep module data centralized** in `data/modules.js`
5. **Follow the established patterns** for consistency

This refactoring makes the codebase much more maintainable and easier to extend while preserving all existing functionality.
