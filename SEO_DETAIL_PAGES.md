# SEO Enhancement Script for Detail Pages

This file documents the SEO additions needed for product and project detail pages.

## Pages Requiring SEO

### Product Pages
1. `/products/set-crm` (SetCrm.tsx)
2. `/products/cxb` (Cxb.tsx)

### Project Pages
1. `/projects/fresh-basket` (FreshBasket.tsx)
2. `/projects/applynext-crm` (ApplyNext.tsx)

## Implementation Instructions

For each page, add the following:

### 1. Import SEO Component
```tsx
import { SEO } from "@/components/SEO";
```

### 2. Add SEO Tags

**SetCrm.tsx**:
```tsx
<SEO 
    title="SET CRM - Advanced Customer Relationship Management Platform"
    description="SET CRM by SE TECH: Complete CRM solution with advanced lead scoring, automated workflows, sales pipeline management, and detailed analytics. Transform your customer relationships with powerful automation."
    keywords="SET CRM, CRM software, customer relationship management, lead scoring, sales automation, pipeline management, CRM Pakistan, CRM Dubai, sales CRM, marketing automation"
/>
```

**Cxb.tsx**:
```tsx
<SEO 
    title="CXB Platform - Customer Experience Management Solution"
    description="CXB by SE TECH: Unified customer experience platform with multi-channel communication, journey tracking, feedback management, and seamless integrations. Enhance customer satisfaction at every touchpoint."
    keywords="CXB platform, customer experience, CX management, unified communication, customer journey, feedback management, multi-channel platform, customer engagement, experience platform"
/>
```

**FreshBasket.tsx**:
```tsx
<SEO 
    title="Fresh Basket - E-Commerce Success Story | SE TECH Case Study"
    description="Discover how SE TECH built Fresh Basket, a modern e-commerce platform for fresh produce delivery. Real-time inventory, automated ordering, and seamless payment integration delivering 300% order increase."
    keywords="Fresh Basket case study, e-commerce platform, online grocery delivery, real-time inventory, automated ordering, payment integration, e-commerce success story"
/>
```

**ApplyNext.tsx**:
```tsx
<SEO 
    title="ApplyNext CRM - Education Consultancy Platform | SE TECH Project"
    description="ApplyNext CRM by SE TECH: Comprehensive student management system for education consultancies. Application tracking, document management, communication tools, and visa processing workflow automation."
    keywords="ApplyNext CRM, education CRM, student management system, application tracking, education consultancy software, visa processing, document management, student portal"
/>
```

## Status
- [ ] SetCrm.tsx - Needs SEO implementation
- [ ] Cxb.tsx - Needs SEO implementation  
- [ ] FreshBasket.tsx - Needs SEO implementation
- [ ] ApplyNext.tsx - Needs SEO implementation

## Note
These pages can be enhanced manually or via automated script. Priority: Medium (as they are detail pages with lower traffic than main pages)
