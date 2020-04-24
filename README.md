# Backbreeze CSS

A highly configurable utility class library written in Sass.

## Documentation

Full documentation at [backbreezecss.com](https://backbreezecss.com)

## Features

- Written in [Sass](https://sass-lang.com/), configuration in Sass
- Project specific configuration instead of lots of defaults, designed to build project specific style systems
- Can be dropped in to existing Sass projects
- Responsive and mobile first
- Short class names derived from the CSS property they apply to make _guessing_ class names easy

## What are utility classes?

Utility classes are CSS classes that only apply one CSS property and value. The classname reflects what property and value are applied.

```css
.ta-center {
  text-align: center;
}
```

Styling is achieved by combining multiple classes in HTML rather then writing, and possibly repeating, CSS.

```html
<div class="ta-center fs-30 lh-1.2 fw-bold">
  <!--  -->
</div>
```

Backbreeze provides classes for a lot of CSS properties in the spec. So that a lot can be achieved by combining classes. Some benefits of this approach are:

- Fast development
- Small CSS files (when [processed correctly](/using-in-production/#remove-unused-css-with-purgecss))
- No need to worry about naming things
- Flexibility to make exceptions / variations of componets any time

## Why Sass?

[Sass](https://sass-lang.com/) is a widely used industry standard for authoring stylesheets. In contrast to combining different PostCSS plugins it has a [full language spec](https://sass-lang.com/documentation) that provides a solid authoring experience and makes it easy to port code between projects. PostCSS is great to process the generated CSS and its use is encouraged when using [Backbreeze in production](/using-in-production/).

## Inspired by [Tailwind](https://tailwindcss.com/)

Backbreeze is inspired by the [Tailwind CSS](https://tailwindcss.com/) framework. It aims to be an alternative that you can drop into existing projects that use Sass.

## Who is this library for?

- Developers that enjoy working with utility classes and appreciate the approach.
- Developers that like to work with Sass.
- Developers that what to start migrating existing Sass projects to use utility classes.

## Backbreeze in production

- https://www.gbm-telecom.ch/
- https://www.bold.ch/
