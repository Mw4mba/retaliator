# MobileMenu Component

A responsive hamburger menu that transforms into a close button and reveals a slide-out navigation panel.

## Features

✅ **Fixed Position**: Floats in the top-right corner of the page  
✅ **Smooth Animation**: Transforms from hamburger (☰) to close (✕) icon  
✅ **Slide-out Panel**: Reveals navigation menu from the left  
✅ **Page Links**: All main sections of your site  
✅ **Quick Actions**: Action cards matching retaliator.co.za design  
✅ **Contact CTAs**: Phone and email buttons using NavigationButton  
✅ **Accessibility**: Keyboard support (ESC to close), ARIA labels, focus management  
✅ **Responsive**: Full width on mobile, 384px on larger screens  
✅ **Body Scroll Lock**: Prevents background scrolling when menu is open  

## Design

- **Colors**: Black background with gold accents (matches CRS design system)
- **Animation**: 300ms slide transition with ease-in-out
- **Backdrop**: Black overlay with blur effect
- **Typography**: IBM Plex Sans font family
- **Icons**: Lucide React icons

## Usage

The component is already integrated into your homepage. Simply import and add:

```tsx
import { MobileMenu } from '@/components/MobileMenu';

export default function Page() {
  return (
    <div>
      <MobileMenu />
      {/* Rest of your content */}
    </div>
  );
}
```

## Interactions

1. **Click hamburger button**: Opens menu from left
2. **Click X button**: Closes menu
3. **Click overlay**: Closes menu
4. **Press ESC key**: Closes menu
5. **Click any link**: Navigates and closes menu

## Structure

### Page Links
- Home
- Solutions
- Training
- About CRS
- Testimonials
- Partners
- Contact

### Quick Actions
- Security Solutions (with description)
- Team Training (with description)
- Resources (with description)
- Contact Us (with description)

### Contact CTAs
- Call Now (primary button with phone icon)
- Send Email (outline button with mail icon)

## Accessibility

- ✅ **Keyboard Navigation**: Tab through all links and buttons
- ✅ **ESC Key**: Close menu with keyboard
- ✅ **ARIA Labels**: Proper aria-label, aria-expanded, aria-modal
- ✅ **Focus Management**: Prevents body scroll when open
- ✅ **Screen Readers**: All interactive elements properly labeled
- ✅ **Contrast**: 7.0:1+ contrast ratios (WCAG AAA)

## Customization

### Update Links

Edit the `pageLinks` array in the component:

```tsx
const pageLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '#solutions', label: 'Solutions', icon: Shield },
  // Add more...
];
```

### Update Quick Actions

Edit the `quickActions` array:

```tsx
const quickActions = [
  {
    icon: Shield,
    label: 'Security Solutions',
    description: 'Comprehensive cybersecurity services',
    href: '#solutions',
  },
  // Add more...
];
```

### Style Adjustments

The component uses Tailwind CSS with CRS design tokens. Key classes:

- `bg-(--crs-gold)`: Gold background
- `text-(--crs-gold)`: Gold text
- `border-(--crs-gold)`: Gold border
- Hover states change from gold to black

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Mobile Optimization

- Full width on screens < 640px
- 384px width on larger screens
- Touch-friendly targets (48px+ height)
- Smooth scroll prevention when open

---

**Component**: `src/components/MobileMenu.tsx`  
**Integrated in**: `src/app/page.tsx`  
**Version**: 1.0.0
