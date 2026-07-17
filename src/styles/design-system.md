# Retail Pro Design System

This document defines the visual foundation for the customer-facing experience. It is intentionally focused on tokens and reusable UI primitives so that pages can be built consistently later.

## 1. Color palette

The palette is warm, premium, and commercially trustworthy. It is designed to feel polished for categories such as furniture, electronics, fashion, cosmetics, baby products, and small commerce.

### Design decisions

- The base background uses a soft warm off-white to avoid the starkness of pure white and to feel more refined in product-led marketing contexts.
- Primary color is a rich brown tone to signal quality and craftsmanship.
- Accent green is used sparingly for success, trust, or positive actions to keep the interface energetic without feeling overly playful.
- Neutral gray text is used for readability and contrast, while muted surfaces prevent visual noise.

### Token purpose

- Background and surface colors create hierarchy across sections.
- Primary colors drive CTA emphasis and brand recall.
- Accent colors highlight success states or trust signals.
- Danger and warning colors are reserved for meaningful feedback rather than decorative use.

## 2. Typography scale

The typography system uses a clean sans-serif stack with clear hierarchy for marketing and product content.

### Design decisions

- Inter is the default interface font because it is modern, highly readable, and works well for UI and content.
- Manrope is reserved for display headings when a slightly more premium tone is needed without becoming decorative.
- The scale is modular and responsive-friendly, giving enough range for hero messaging, section titles, body copy, and metadata.

### Scale rationale

- Small sizes are used for labels, captions, and supporting text.
- Medium sizes support body copy and form content.
- Large sizes are reserved for hero messages and prominent section headings.

## 3. Spacing system

A 4-point spacing system is used to keep layout rhythm consistent and easy to extend.

### Design decisions

- The spacing scale is simple enough for fast UI decisions but broad enough for full-page layouts.
- Larger spacing values are used for section separation, while smaller values support compact controls and internal padding.
- Consistent spacing helps the interface feel calm and structured rather than crowded.

## 4. Border radius

Rounded corners are present but controlled to avoid a playful or overly soft visual language.

### Design decisions

- Small radius is used for compact controls and inputs.
- Medium and large radius are used for cards and feature containers.
- Full radius is reserved for pill-shaped controls and avatars.

## 5. Shadows

Shadows are subtle and restrained so that the product feels premium rather than heavy or flashy.

### Design decisions

- Soft shadows separate surfaces from the page background without looking dramatic.
- Medium shadows are used for elevated cards and interactive containers.
- Large shadows are reserved for hero elements or floating panels that need emphasis.

## 6. Button variants

Button styling is intentionally simple and functional, focusing on clarity and call-to-action hierarchy.

### Variants

- Primary: used for the main conversion action.
- Secondary: used for supportive actions that should not compete with primary CTAs.
- Ghost: used for low-emphasis actions such as inline links or subtle interactions.

### Design decisions

- Primary buttons use the strongest brand color to drive attention.
- Secondary buttons maintain a clean, neutral appearance for less urgent actions.
- Ghost buttons stay visually light and unobtrusive, preserving emphasis for primary tasks.

## 7. Input styles

Form controls are designed to feel clean, accessible, and easy to scan.

### Design decisions

- Inputs use a light background with a soft border for a polished, minimal feel.
- Focus states use the primary tone to reinforce active interaction.
- Disabled states are visually subdued to communicate inactivity without reducing clarity.
- Error styling is explicit and high contrast so validation feedback is easy to understand.

## Implementation note

These tokens live in the design token stylesheet and are intended to be consumed by future components and Tailwind-based utilities. This keeps the visual system centralized and easy to evolve.
