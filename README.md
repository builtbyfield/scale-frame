# Scale Frame

`scale-frame` is a simple React library for scaling elements to fit the size of
their parent elements. This is useful when wanting to render the preview of a
component within a fixed area.

## Background

An early version of this library was developed to help render PDF document
previews without losing the fine details and spacing that are inherit in
typography. Using a scaling technique like `rem` units for a document preview
led to subtle inaccuracies in the layout of a document when scaled up or down
from the reference dimensions.
